import { useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { useCallback } from "react";

export function useWalletConnection() {
  const { address, isConnected, chain } = useAccount();
  const { connect, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();

  const handleConnect = useCallback(() => {
    connect({ connector: injected() });
  }, [connect]);

  const handleDisconnect = useCallback(() => {
    disconnect();
  }, [disconnect]);

  return {
    address,
    isConnected,
    chain,
    isConnecting,
    connect: handleConnect,
    disconnect: handleDisconnect,
  };
}
