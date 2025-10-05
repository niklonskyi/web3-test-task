"use client";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { wagmiConfig } from "@/lib/wagmi";
import { AccountEffects } from "@/components/account-effects";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AccountEffects />
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
