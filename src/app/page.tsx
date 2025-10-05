"use client";

import { useAccount } from "wagmi";
import { BalanceCard } from "@/components/balance-card";
import { SendTransactionForm } from "@/components/send-transaction-form";
import { RecentTransactions } from "@/components/recent-transactions";
import { WalletConnect } from "@/components/wallet-connect";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-6 gap-6">
      <header className="w-full max-w-3xl flex items-center justify-between">
        <h1 className="text-xl font-semibold">Niklolnskyi dApp</h1>
        <WalletConnect />
      </header>
      <main className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {isConnected ? (
          <>
            <BalanceCard />
            <SendTransactionForm />
            <div className="md:col-span-2">
              <RecentTransactions />
            </div>
          </>
        ) : (
          <div className="md:col-span-2 w-full max-w-3xl rounded-xl border border-dashed border-gray-300 dark:border-gray-700 p-8 text-center text-gray-700 dark:text-gray-300">
            Connect your wallet to continue
          </div>
        )}
      </main>
    </div>
  );
}
