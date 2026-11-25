import { HugeiconsIcon } from "@hugeicons/react";
import { socialLinks } from "@/constants/social-media";

interface SocialMediaIconProps {
  socials?: string[];
  size?: number;
  className?: string;
  iconClassName?: string;
  gap?: number;
}

export default function SocialMediaIcon({
  socials = ["instagram", "facebook", "whatsapp"],
  size = 20,
  className = "",
  iconClassName = "",
  gap = 5,
}: SocialMediaIconProps) {
  const filteredSocials = socialLinks.filter((social) =>
    socials.includes(social.id)
  );

  return (
    <div className={`flex items-center ${className}`} style={{ gap: `${gap * 4}px` }}>
      {filteredSocials.map((social) => (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          title={social.name}
          className={`transition-colors duration-300 hover:text-white/60 ${iconClassName}`}
        >
          <HugeiconsIcon
            icon={social.icon}
            size={size}
            strokeWidth={1.7}
          />
        </a>
      ))}
    </div>
  );
}