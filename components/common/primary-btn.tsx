
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

export default function PrimaryBtn({
  textColor = "#fffaf5",
  icon,
  content,
  bgColor,
  onClick,
  disabled = false,
  type = "button",
}: BtnInformation) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="primary-btn"
      style={{
        color: textColor,
        background: bgColor || 
          "linear-gradient(135deg, #85502e, #60371f)",
      }}
    >
      <span>{content}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
