"use client";

import { useRecentTransactions } from "@/hooks/use-recent-transactions";
import { Card } from "@/components/ui/card";
import { TransactionItem } from "@/components/ui/transaction-item";
import { styles } from "@/styles/ui";

export function RecentTransactions() {
  const { transactions, hasTransactions } = useRecentTransactions();

  if (!hasTransactions) return null;

  return (
    <Card className="space-y-3 w-full max-w-full!">
      <h3 className={styles.text.subheading}>Recent Transactions</h3>
      <ul className="space-y-3">
        {transactions.map((tx) => (
          <TransactionItem
            key={tx.hash}
            hash={tx.hash}
            to={tx.to}
            amountEth={tx.amountEth}
            status={tx.status}
          />
        ))}
      </ul>
    </Card>
  );
}
