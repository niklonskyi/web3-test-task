"use client";

import { useWalletConnection } from "@/hooks/use-wallet-connection";
import { AddressDisplay } from "@/components/ui/address-display";
import { Button } from "@/components/ui/button";

export function WalletConnect() {
  const wallet = useWalletConnection();

  return (
    <div className="flex items-center gap-3">
      {wallet.isConnected ? (
        <>
          <AddressDisplay
            address={wallet.address!}
            chainName={wallet.chain?.name}
          />
          <Button variant="secondary" onClick={wallet.disconnect}>
            Disconnect
          </Button>
        </>
      ) : (
        <Button
          onClick={wallet.connect}
          isLoading={wallet.isConnecting}
          variant="secondary"
        >
          {wallet.isConnecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      )}
    </div>
  );
}


