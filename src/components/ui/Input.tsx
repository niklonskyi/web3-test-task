import { InputHTMLAttributes } from "react";
import { styles, cn } from "@/styles/ui";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  isValid?: boolean;
}

export function Input({
  label,
  error,
  isValid,
  className = "",
  ...props
}: InputProps) {
  const hasError = error && !isValid;

  return (
    <div className="space-y-1.5">
      <label className={styles.label}>{label}</label>
      <input
        {...props}
        className={cn(
          styles.input.base,
          hasError ? styles.input.error : styles.input.valid,
          className
        )}
      />
      {hasError && (
        <p className={styles.errorText}>
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}
