import { useAccount, useBalance as useWagmiBalance } from "wagmi";
import { useMemo } from "react";

export function useBalance() {
  const { address, isConnected } = useAccount();
  const { data, isLoading } = useWagmiBalance({
    address,
    query: { refetchInterval: 5_000, enabled: !!address },
  });

  const formatted = useMemo(() => {
    if (!data) return { value: "0", symbol: "ETH" };
    return {
      value: data.formatted,
      symbol: data.symbol,
    };
  }, [data]);

  return {
    isConnected,
    balance: formatted,
    isLoading,
    raw: data,
  };
}


