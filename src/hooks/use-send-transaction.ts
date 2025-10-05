import { useCallback, useEffect, useRef } from "react";
import {
  useSendTransaction as useWagmiSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import { useTxStore } from "@/store/transactions";

export function useSendTransaction() {
  const { addOrUpdate, setStatus } = useTxStore();

  const {
    data: hash,
    isPending,
    error,
    sendTransaction,
    reset: resetTx,
  } = useWagmiSendTransaction({
    mutation: {
      onSuccess: (txHash: `0x${string}`, variables) => {
        addOrUpdate({
          hash: txHash,
          to: variables.to as `0x${string}`,
          amountEth: "",
          status: "pending",
        });
      },
    },
  });

  const confirmedRef = useRef<Set<string>>(new Set());
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
    query: { refetchInterval: 1_000 },
  });

  useEffect(() => {
    if (hash && isSuccess && !confirmedRef.current.has(hash)) {
      setStatus(hash, "success");
      confirmedRef.current.add(hash);
    }
  }, [hash, isSuccess, setStatus]);

  const send = useCallback(
    (to: string, amountEth: string, onSuccess?: () => void) => {
      sendTransaction(
        {
          to: to as `0x${string}`,
          value: parseEther(amountEth),
        },
        {
          onSuccess: (txHash) => {
            addOrUpdate({
              hash: txHash,
              to: to as `0x${string}`,
              amountEth,
              status: "pending",
            });
            onSuccess?.();
          },
        }
      );
    },
    [sendTransaction, addOrUpdate]
  );

  const clearError = useCallback(() => {
    if (error) resetTx();
  }, [error, resetTx]);

  return {
    send,
    hash,
    isPending,
    isConfirming,
    isSuccess,
    isLoading: isPending || isConfirming,
    error,
    reset: resetTx,
    clearError,
  };
}
