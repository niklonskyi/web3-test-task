import { HTMLAttributes } from "react";
import { styles, cn } from "@/styles/ui";

interface CardProps extends HTMLAttributes<HTMLElement> {
  title?: string;
}

export function Card({ title, children, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        styles.card.base,
        styles.card.background,
        styles.card.padding,
        className
      )}
    >
      {title && <h3 className={styles.text.heading}>{title}</h3>}
      {children}
    </div>
  );
}
