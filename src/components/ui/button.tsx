import { ButtonHTMLAttributes } from "react";
import { styles, cn } from "@/styles/ui";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  isLoading,
  disabled,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        variant === "primary" && styles.button.base,
        variant === "primary" && styles.button.primary,
        variant === "primary" && styles.button.disabled,
        variant === "secondary" && styles.button.secondary,
        className
      )}
    >
      {isLoading && <span className="inline-block animate-spin mr-2">⟳</span>}
      {children}
    </button>
  );
}
