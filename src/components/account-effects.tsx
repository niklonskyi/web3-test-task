"use client";

import { useAccountEffect } from "wagmi";
import { useTxStore } from "@/store/transactions";

export function AccountEffects() {
  const { clearAll } = useTxStore();

  useAccountEffect({
    onConnect({ isReconnected }) {
      if (!isReconnected) {
        clearAll();
      }
    },
    onDisconnect() {
      clearAll();
    },
  });

  return null;
}
