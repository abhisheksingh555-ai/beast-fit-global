import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook01Icon,
  InstagramIcon,
  Linkedin01Icon,
  PinterestIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";

const footerGroups = [
  {
    title: "Quick links",
    links: [
      ["Home", "/"],
      ["About", "/about"],
      ["Services", "/services"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Personal Training", "/services#personal-training"],
      ["Yoga & Meditation", "/services#yoga-meditation"],
      ["Zumba & Aerobics", "/services#zumba-aerobics"],
      ["Diabetes Care & Special Programs", "/services#diabetes-care"],
      ["Powerlifting Coaching", "/services#powerlifting-coaching"],
      ["Thrift Store TrenDz", "/store"],
      ["Holistic Wellness", "/services#holistic-wellness"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/privacy-policy"],
      ["Terms & Conditions", "/terms-and-conditions"],
    ],
  },
];

const socialPlatforms = [
  { key: "youtube", label: "YouTube", icon: YoutubeIcon },
  { key: "instagram", label: "Instagram", icon: InstagramIcon },
  { key: "facebook", label: "Facebook", icon: Facebook01Icon },
  { key: "pinterest", label: "Pinterest", icon: PinterestIcon },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin01Icon },
] as const;

type SocialPlatform = (typeof socialPlatforms)[number]["key"];

type FooterProps = {
  socialLinks?: Partial<Record<SocialPlatform, string>>;
};

export default function Footer({ socialLinks = {} }: FooterProps) {
  return (
    <footer className="relative isolate overflow-hidden bg-[#71390F] text-[#FFF6EA]">
      <Image
        src="/images/footer-wood.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#321607]/35"
      />

      <div className="mx-auto max-w-360 px-5 py-6 sm:px-8 lg:px-11 lg:py-7">
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-[1.2fr_1fr_1fr_.65fr]">
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block font-serif text-3xl font-bold tracking-tight"
            >
              Fitsonaa
            </Link>

            <p className="mt-1 text-xs font-semibold">Move • Heal • Grow</p>
            <p className="mt-2 max-w-52 text-xs leading-relaxed text-[#F9E6D2]">
              Empowering you to live your healthiest life.
            </p>

            <div className="mt-2 flex gap-1">
              {socialPlatforms.map(({ key, label, icon }) => {
                const href = socialLinks[key];

                if (!href) return null;

                return (
                  <a
                    key={key}
                    href={href}
                    aria-label={`Fitsonaa on ${label}`}
                    className="inline-flex size-7 items-center justify-center rounded hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFF6EA]"
                  >
                    <HugeiconsIcon icon={icon} size={14} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerGroups.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="mb-2 text-sm font-semibold text-[#FFDEA8]">
                {title}
              </h2>

              <ul className="space-y-1.5">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="inline-block text-xs leading-relaxed text-[#FFF0DE] hover:text-white hover:underline focus-visible:underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-6 border-t border-[#FCE3C2]/35 pt-4 text-[11px] text-[#F9E6D2]">
          © 2026 Fitsonaa. All rights reserved. Designed with ♡.
        </div>
      </div>
    </footer>
  );
}
