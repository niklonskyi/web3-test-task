import { create } from "zustand";

export type TxStatus = "pending" | "success" | "fail";

export interface RecentTxItem {
  hash: string;
  to: string;
  amountEth: string;
  status: TxStatus;
}

interface TxState {
  transactions: RecentTxItem[];
  addOrUpdate: (tx: RecentTxItem) => void;
  setStatus: (hash: string, status: TxStatus) => void;
  clearAll: () => void;
}

export const useTxStore = create<TxState>((set) => ({
  transactions: [],
  addOrUpdate: (tx) =>
    set((state) => {
      const idx = state.transactions.findIndex((t) => t.hash === tx.hash);
      if (idx >= 0) {
        const next = [...state.transactions];
        next[idx] = { ...next[idx], ...tx };
        return { transactions: next };
      }
      return { transactions: [tx, ...state.transactions].slice(0, 20) };
    }),
  setStatus: (hash, status) =>
    set((state) => ({
      transactions: state.transactions.map((t) =>
        t.hash === hash ? { ...t, status } : t
      ),
    })),
  clearAll: () => set({ transactions: [] }),
}));
