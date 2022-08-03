export default class Validate {
  static expiryTimestamp(expiryTimestamp: string | Date | number): boolean {
    const isValid = new Date(expiryTimestamp).getTime() > 0;
    if (!isValid) {
      console.warn(
        "react-timer-hook: { useTimer } Invalid expiryTimestamp settings",
        expiryTimestamp
      ); // eslint-disable-line
    }
    return isValid;
  }

  static onExpire(onExpire: any): boolean {
    const isValid = onExpire && typeof onExpire === "function";
    if (onExpire && !isValid) {
      console.warn(
        "react-timer-hook: { useTimer } Invalid onExpire settings function",
        onExpire
      ); // eslint-disable-line
    }
    return isValid;
  }
}
