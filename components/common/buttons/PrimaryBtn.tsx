
import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import type { ButtonProps } from "./button.types";

export default function PrimaryBtn({
  children,
  leftIcon,
  rightIcon,
  isLoading = false,
  fullWidth = false,
  size = "md",
  className = "",
  disabled,
  type = "button",
  ...props
}: ButtonProps) {

  const sizes = {
    sm: "h-10 px-5 text-xs",
    md: "h-14 px-6 text-[13px]",
    lg: "h-16 px-8 text-sm",
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`
        inline-flex items-center justify-center gap-2.5
        rounded-full
        bg-[#4A2E1B] text-[#FFF7EB]
        font-semibold font-sans
        border border-transparent
        transition-all duration-300
        hover:bg-[#2C1D13]
        hover:shadow-lg
        active:scale-[0.97]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#E6A145]
        focus-visible:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}

          <span>{children}</span>

          {rightIcon ?? (
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={17}
              strokeWidth={2}
            />
          )}
        </>
      )}
    </button>
  );
}
