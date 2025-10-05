import { useQuery } from "@tanstack/react-query";

export function useEthPrice() {
  const { data: usdPrice, isLoading } = useQuery({
    queryKey: ["coingecko-eth-usd"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      );
      const json = (await res.json()) as { ethereum?: { usd?: number } };
      return json.ethereum?.usd ?? null;
    },
    refetchInterval: 60_000,
    staleTime: 30_000,
  });

  return {
    usdPrice,
    isLoading,
  };
}
