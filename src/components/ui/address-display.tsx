import { styles, cn } from "@/styles/ui";

interface AddressDisplayProps {
  address: string;
  chainName?: string;
}

export function AddressDisplay({ address, chainName }: AddressDisplayProps) {
  return (
    <div className={cn(styles.text.body, styles.text.mono)}>
      {chainName && <span className="font-normal">{chainName} · </span>}
      {address.slice(0, 6)}...{address.slice(-4)}
    </div>
  );
}
