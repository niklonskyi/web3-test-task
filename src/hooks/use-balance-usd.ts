import { useMemo } from "react";
import { useBalance } from "./use-balance";
import { useEthPrice } from "./use-eth-price";

export function useBalanceUsd() {
  const balance = useBalance();
  const { usdPrice } = useEthPrice();

  const usdValue = useMemo(() => {
    if (!balance.raw || usdPrice == null) return null;
    const num = Number(balance.raw.value) / 10 ** balance.raw.decimals;
    return num * usdPrice;
  }, [balance.raw, usdPrice]);

  return {
    ...balance,
    usdValue,
    usdFormatted: usdValue != null ? `$${usdValue.toFixed(2)} USD` : null,
  };
}


