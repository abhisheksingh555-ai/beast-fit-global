import {
  InstagramIcon,
  Facebook01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";

export interface SocialLink {
  id: string;
  name: string;
  icon: typeof InstagramIcon;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook01Icon,
    href: "https://www.facebook.com/",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: WhatsappIcon,
    href: "https://wa.me/",
  },
];