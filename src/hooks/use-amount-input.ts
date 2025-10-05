import { useState, useMemo } from "react";
import { VALIDATION } from "@/lib/consts";
import { sanitizeAmount } from "@/lib/util";

export function useAmountInput(initialValue = "", maxBalance?: number) {
  const [value, setValue] = useState(initialValue);

  const validation = useMemo(() => {
    if (!value || !VALIDATION.AMOUNT.REGEX.test(value)) {
      return { isValid: false, error: null };
    }

    const num = Number(value);

    if (Number.isNaN(num)) {
      return { isValid: false, error: null };
    }

    if (num < VALIDATION.AMOUNT.MIN || num > VALIDATION.AMOUNT.MAX) {
      return {
        isValid: false,
        error: `Enter ${VALIDATION.AMOUNT.MIN}-${VALIDATION.AMOUNT.MAX} ETH (max ${VALIDATION.AMOUNT.DECIMALS} decimals)`,
      };
    }

    if (maxBalance !== undefined && num > maxBalance) {
      return {
        isValid: false,
        error: `Insufficient balance. Maximum: ${maxBalance.toFixed(5)} ETH`,
      };
    }

    return { isValid: true, error: null };
  }, [value, maxBalance]);

  const onChange = (newValue: string) => {
    setValue(sanitizeAmount(newValue));
  };

  const reset = () => setValue("");

  return {
    value,
    isValid: validation.isValid,
    error: validation.error,
    onChange,
    reset,
  };
}
