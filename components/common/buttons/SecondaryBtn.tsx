
import React from "react";
import type { ButtonProps } from "./button.types";

export default function SecondaryBtn({
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
        border border-[#4A2E1B]
        bg-[#FFF7EB] text-[#4A2E1B]
        font-semibold font-sans
        transition-all duration-300
        hover:bg-[#F2E3D2]
        hover:shadow-md
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

          {rightIcon && (
            <span className="shrink-0">{rightIcon}</span>
          )}
        </>
      )}
    </button>
  );
}
