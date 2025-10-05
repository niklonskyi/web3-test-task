"use client";

import { useBalanceUsd } from "@/hooks/use-balance-usd";
import { Card } from "@/components/ui/card";
import { styles } from "@/styles/ui";

export function BalanceCard() {
  const { isConnected, balance, isLoading, usdFormatted } = useBalanceUsd();

  if (!isConnected) return null;

  return (
    <Card className="space-y-2">
      <div className={styles.text.body}>Balance</div>
      <div className={styles.text.heading}>
        {isLoading ? "..." : `${balance.value} ${balance.symbol}`}
      </div>
      {usdFormatted && (
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {usdFormatted}
        </div>
      )}
    </Card>
  );
}
