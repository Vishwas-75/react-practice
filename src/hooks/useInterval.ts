import { useEffect, useRef } from "react";
type callback = () => void;

export default function useInterval(callback: callback, delay: number | null) {
  const callbacRef = useRef<() => void>();

  // update callback function with current render callback that has access to latest props and state
  useEffect(() => {
    callbacRef.current = callback;
  });

  useEffect(() => {
    if (!delay) {
      return () => {};
    }

    const interval = setInterval(() => {
      callbacRef.current && callbacRef.current();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
}
