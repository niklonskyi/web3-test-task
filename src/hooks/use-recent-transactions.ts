import { useTxStore } from "@/store/transactions";

export function useRecentTransactions() {
  const { transactions } = useTxStore();

  const hasTransactions = transactions.length > 0;

  return {
    transactions,
    hasTransactions,
  };
}
