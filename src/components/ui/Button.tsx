import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "href"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseClassName = cn(
      "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/20 shadow-sm transition-all":
          variant === "primary",
        "bg-secondary text-secondary-foreground hover:bg-secondary/80":
          variant === "secondary",
        "border-2 border-border bg-transparent hover:bg-muted":
          variant === "outline",
        "hover:bg-muted text-foreground":
          variant === "ghost",
        "text-foreground underline-offset-4 hover:underline":
          variant === "link",
        "h-10 px-5 text-sm": size === "sm",
        "h-12 px-8 text-base": size === "md",
        "h-14 px-10 text-lg": size === "lg",
        "h-10 w-10": size === "icon",
      },
      className
    );

    if (href) {
      return (
        <Link
          ref={ref as any}
          href={href}
          className={baseClassName}
          {...(props as any)}
        >
          {children}
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref as any}
        type="button"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={baseClassName}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
