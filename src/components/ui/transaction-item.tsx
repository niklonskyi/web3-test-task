import Link from "next/link";
import { cn, styles } from "@/styles/ui";
import type { TxStatus } from "@/store/transactions";

interface TransactionItemProps {
  hash: string;
  to: string;
  amountEth: string;
  status: TxStatus;
  explorerUrl?: string;
}

export function TransactionItem({
  hash,
  to,
  amountEth,
  status,
  explorerUrl = "https://sepolia.etherscan.io/tx",
}: TransactionItemProps) {
  return (
    <li className="text-sm space-y-1">
      <div className="flex items-center justify-between gap-2">
        <Link
          href={`${explorerUrl}/${hash}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {hash.slice(0, 10)}...{hash.slice(-8)}
        </Link>
        <span
          className={cn(
            "capitalize font-medium text-xs",
            styles.status[status]
          )}
        >
          {status}
        </span>
      </div>
      <div className="text-gray-600 dark:text-gray-400 text-xs flex items-center gap-1">
        <span className="text-gray-500 dark:text-gray-500">To:</span>
        <span className="font-mono">
          {to.slice(0, 6)}...{to.slice(-4)}
        </span>
        <span className="text-gray-400 dark:text-gray-600">·</span>
        <span className="font-medium">{amountEth} ETH</span>
      </div>
    </li>
  );
}
