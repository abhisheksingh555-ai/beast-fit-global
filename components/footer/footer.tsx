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
  const activeSocials = socialPlatforms.flatMap(({ key, label, icon }) => {
    const href = socialLinks[key];
    return href ? [{ key, label, icon, href }] : [];
  });

  return (
    <footer className="relative isolate overflow-hidden bg-[#48230E] text-[#FFF6EA]">
      <Image
        src="/footer.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#241005]/75"
      />

      <div className="mx-auto max-w-360 px-4 py-8 sm:px-8 lg:px-11 lg:py-11">
        <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-x-4 gap-y-6 sm:gap-x-8 lg:grid-cols-[1.15fr_0.8fr_1.3fr_0.85fr]">
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <Link
              href="/"
              className="inline-block rounded-sm font-serif text-3xl font-bold leading-tight tracking-tight text-white! focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Fitsonaa
            </Link>

            <p className="mt-1 text-sm font-semibold text-[#FFE1B5]!">
              Move • Heal • Grow
            </p>
            <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-[#FFF0DE]!">
              Empowering you to live your healthiest life.
            </p>

            {activeSocials.length > 0 && (
              <ul
                role="list"
                aria-label="Social media"
                className="mt-3 flex flex-wrap gap-2"
              >
                {activeSocials.map(({ key, label, icon, href }) => (
                  <li key={key}>
                    <a
                      href={href}
                      aria-label={`Fitsonaa on ${label}`}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 text-white! hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      <HugeiconsIcon
                        icon={icon}
                        size={17}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {footerGroups.map(({ title, links }) => {
            const isLegal = title === "Legal";

            return (
              <nav
                key={title}
                aria-label={title}
                className={isLegal ? "col-span-2 min-w-0 lg:col-span-1" : "min-w-0"}
              >
                <h2 className="mb-2 text-base font-bold leading-snug text-white!">
                  {title}
                </h2>

                <ul
                  role="list"
                  className={
                    isLegal
                      ? "flex flex-wrap gap-x-5 lg:flex-col"
                      : "grid"
                  }
                >
                  {links.map(([label, href]) => (
                    <li key={href} className="min-w-0">
                      <Link
                        href={href}
                        className="inline-flex min-h-8 max-w-full items-center rounded-sm py-1.5 text-sm leading-snug wrap-break-word text-[#FFF0DE]! underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>

        <p className="mt-6 border-t border-white/30 pt-4 text-center text-xs leading-relaxed text-[#FFF0DE]! lg:mt-8 lg:text-left">
          © 2026 Fitsonaa. All rights reserved. Designed with{" "}
          <span aria-label="love">♡</span>.
        </p>
      </div>
    </footer>
  );
}
