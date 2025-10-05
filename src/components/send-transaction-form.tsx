"use client";

import { useAccount } from "wagmi";
import { useAddressInput } from "@/hooks/use-address-input";
import { useAmountInput } from "@/hooks/use-amount-input";
import { useSendTransaction } from "@/hooks/use-send-transaction";
import { useBalanceUsd } from "@/hooks/use-balance-usd";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/card";
import { styles } from "@/styles/ui";
import { Button } from "@/components/ui/button";

export function SendTransactionForm() {
  const { isConnected } = useAccount();
  const { raw } = useBalanceUsd();

  const maxBalance = raw ? Number(raw.formatted) : undefined;

  const address = useAddressInput();
  const amount = useAmountInput("", maxBalance);
  const tx = useSendTransaction();

  const canSubmit = isConnected && address.isValid && amount.isValid;

  const onSubmit = () => {
    if (!canSubmit) return;
    tx.send(address.value, amount.value, () => {
      address.reset();
      amount.reset();
    });
  };

  if (!isConnected) return null;

  return (
    <Card title="Send Transaction" className="space-y-4">
      <Input
        label="Recipient Address"
        value={address.value}
        onChange={(e) => {
          address.onChange(e.target.value);
          tx.clearError();
        }}
        placeholder="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
        error="Invalid Ethereum address"
        isValid={address.isValid || !address.value}
        disabled={tx.isLoading}
      />

      <Input
        label="Amount (ETH)"
        value={amount.value}
        onChange={(e) => {
          amount.onChange(e.target.value);
          tx.clearError();
        }}
        placeholder="0.01"
        inputMode="decimal"
        error={amount.error}
        isValid={amount.isValid || !amount.value}
        disabled={tx.isLoading}
      />

      <Button
        onClick={onSubmit}
        disabled={!canSubmit}
        isLoading={tx.isLoading}
        className="mt-2"
      >
        {tx.isPending
          ? "Sending..."
          : tx.isConfirming
          ? "Confirming..."
          : "Send"}
      </Button>

      {tx.error && (
        <div className={styles.alert.error}>
          <p className={styles.alert.errorText}>
            {(tx.error as Error)?.message ?? "Transaction failed"}
          </p>
        </div>
      )}
    </Card>
  );
}
