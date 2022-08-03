import { useState } from "react";
import Time from "src/lib/timer";
import Validate from "src/lib/validate";
import useInterval from "./useInterval";
interface Args {
  expiryTimestamp: number;
  onExpire: () => void;
  autoStart?: boolean;
}
type ExpiryTimestamp = string | number | Date;

const DEFAULT_DELAY = 1000;
function getDelayFromExpiryTimestamp(
  expiryTimestamp: ExpiryTimestamp
): null | number {
  if (!Validate.expiryTimestamp(expiryTimestamp)) {
    return null;
  }

  const seconds = Time.getSecondsFromExpiry(Number(expiryTimestamp));
  const extraMilliSeconds = Math.floor((seconds - Math.floor(seconds)) * 1000);
  return extraMilliSeconds > 0 ? extraMilliSeconds : DEFAULT_DELAY;
}

export default function useTimer(args: Args) {
  const { expiryTimestamp: expiry, onExpire, autoStart = true } = args;
  const [expiryTimestamp, setExpiryTimestamp] = useState(expiry);
  const [seconds, setSeconds] = useState(
    Time.getSecondsFromExpiry(expiryTimestamp)
  );
  const [isRunning, setIsRunning] = useState(autoStart);
  const [didStart, setDidStart] = useState(autoStart);
  const [delay, setDelay] = useState(
    getDelayFromExpiryTimestamp(expiryTimestamp)
  );

  function handleExpire() {
    Validate.onExpire(onExpire) && onExpire();
    setIsRunning(false);
    setDelay(null);
  }

  function pause() {
    setIsRunning(false);
  }

  function restart(newExpiryTimestamp: ExpiryTimestamp, newAutoStart = true) {
    setDelay(getDelayFromExpiryTimestamp(newExpiryTimestamp));
    setDidStart(newAutoStart);
    setIsRunning(newAutoStart);
    setExpiryTimestamp(Number(newExpiryTimestamp));
    setSeconds(Time.getSecondsFromExpiry(Number(newExpiryTimestamp)));
  }

  function resume() {
    const time = new Date();
    time.setMilliseconds(time.getMilliseconds() + seconds * 1000);
    restart(time);
  }

  function start() {
    if (didStart) {
      setSeconds(Time.getSecondsFromExpiry(expiryTimestamp));
      setIsRunning(true);
    } else {
      resume();
    }
  }

  useInterval(
    () => {
      if (delay !== DEFAULT_DELAY) {
        setDelay(DEFAULT_DELAY);
      }
      const secondsValue = Time.getSecondsFromExpiry(expiryTimestamp);
      setSeconds(secondsValue);
      if (secondsValue <= 0) {
        handleExpire();
      }
    },
    isRunning ? delay : null
  );

  return {
    ...Time.getTimeFromSeconds(seconds),
    start,
    pause,
    resume,
    restart,
    isRunning,
  };
}
