import { useState } from "react";
import { isAddress } from "viem";

export function useAddressInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const isValid = value ? isAddress(value as `0x${string}`) : false;

  const onChange = (newValue: string) => {
    setValue(newValue.trim());
  };

  const reset = () => setValue("");

  return { value, isValid, onChange, reset };
}
