import { VALIDATION } from "./consts";

export const sanitizeAmount = (value: string): string => {
  let clean = value.replace(/[^\d.]/g, "");
  const dotIndex = clean.indexOf(".");
  if (dotIndex !== -1) {
    clean =
      clean.slice(0, dotIndex + 1) +
      clean.slice(dotIndex + 1).replace(/\./g, "");
    const [integer, decimal] = clean.split(".");
    clean = decimal
      ? `${integer}.${decimal.slice(0, VALIDATION.AMOUNT.DECIMALS)}`
      : clean;
  }
  return clean.startsWith(".") ? `0${clean}` : clean;
};
