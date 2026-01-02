import React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CustomButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quinary"
  | "dark"
  | "neutral"
  | "danger"

interface CustomButtonProps {
  children: React.ReactNode
  icon?: React.ReactNode
  variant?: CustomButtonVariant
  fullWidth?: boolean
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  className?: string
}

const variantClasses: Record<CustomButtonVariant, string> = {
  primary:
    "bg-[var(--ds-primary-3)] hover:bg-[var(--ds-primary-2)] text-neutral-100",
  secondary:
    "bg-[var(--ds-secondary-2)] hover:bg-[var(--ds-secondary-1)] text-neutral-100",
  tertiary:
    "bg-[var(--ds-tertiary-2)]/85 hover:bg-[var(--ds-tertiary-2)] text-neutral-100 border border-transparent",
  quaternary:
    "bg-[var(--ds-quaternary-pure)] hover:bg-[var(--ds-quaternary-1)] text-neutral-900 border border-transparent",
  quinary:
    "bg-[var(--ds-quinary-pure)] hover:bg-[var(--ds-quinary-1)] text-neutral-100 border border-transparent",
  dark:
    "bg-[var(--ds-neutral-5)] hover:bg-[var(--ds-neutral-4)] text-neutral-100 border border-[var(--ds-neutral-4)]",
  neutral:
    "bg-[var(--ds-neutral-1)] border border-[var(--ds-neutral-2)] text-[var(--ds-neutral-4)] hover:bg-[var(--ds-neutral-2)]",
  danger: "bg-red-500 hover:bg-red-600 text-white",
}

export function CustomButton({
  children,
  icon,
  variant = "primary",
  fullWidth,
  onClick,
  type = "button",
  disabled = false,
  className,
}: CustomButtonProps) {
  return (
    <Button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        "relative py-5 px-8 text-[14px] font-semibold rounded-2xl shadow-md transition-all text-center",
        variantClasses[variant],
        fullWidth && "w-full",
        "font-sans",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        className
      )}
    >
      {icon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg leading-none">
          {icon}
        </span>
      )}
      <span className={cn(icon && "pl-6")}>{children}</span>
    </Button>
  );
}
