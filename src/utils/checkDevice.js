import { get } from "lodash";
export const checkDevice = () => {
  const navigator = get(window, ["navigator", "userAgent"], [])
    .split("(")[1]
    .split(")")[0];

  const isIOS = navigator.includes("iPhone") || navigator.includes("iPad");
  const isAndroid = navigator.includes("Android");
  if (isIOS) {
    return "ios";
  } else if (isAndroid) {
    return "android";
  } else {
    return "desktop";
  }
};
