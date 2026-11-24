
import React from "react";

interface BtnInformation {
  textColor?: string;
  icon?: React.ReactNode;
  content: string;
  bgColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function SecondaryBtn({
  textColor = "#744326",
  icon,
  content,
  bgColor = "transparent",
  onClick,
  disabled = false,
  type = "button",
}: BtnInformation) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="secondary-btn"
      style={{
        color: textColor,
        background: bgColor,
        borderColor: textColor,
      }}
    >
      <span>{content}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
