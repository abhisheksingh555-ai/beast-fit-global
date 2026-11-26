import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

const showcases = [
  {
    label: "GET FIT",
    title: "Fitness Programs",
    description: "Strength · Endurance · Performance",
    image: "/show_case_01.png",
    href: "/fitness-programs",
  },
  {
    label: "FIND BALANCE",
    title: "Yoga Sessions",
    description: "Peace · Flexibility · Energy",
    image: "/show_case_02.png",
    href: "/yoga-sessions",
  },
  {
    label: "HAVE FUN",
    title: "Zumba Classes",
    description: "Dance · Burn · Smile",
    image: "/show_case_03.png",
    href: "/zumba-classes",
  },
  {
    label: "EAT HEALTHY",
    title: "Diet Guidance",
    description: "Fuel · Nourish · Thrive",
    image: "/show_case_04.png",
    href: "/diet-guidance",
  },
];

const totalCards = showcases.length + 1;
const desktopColumns = Math.min(totalCards, 6);
const tabletColumns = Math.min(totalCards, 3);
const connectIsFullWidthOnMobile = totalCards % 2 === 1;

const cardClassName =
  "relative isolate min-w-0 overflow-hidden rounded-xl shadow-[0_2px_5px_#4A2D1E26]";

const desktopCardSize = Math.ceil(1488 / desktopColumns);
const desktopCardWidth = Math.ceil(100 / desktopColumns);
const tabletCardWidth = Math.ceil(100 / tabletColumns);

const responsiveImageSizes = [
  `(min-width: 1536px) ${desktopCardSize}px`,
  `(min-width: 1024px) ${desktopCardWidth}vw`,
  `(min-width: 640px) ${tabletCardWidth}vw`,
].join(", ");

export default function ShowCases() {
  return (
    <section
      aria-label="Fitness programs, shopping, and community"
      className="bg-[#FAEDDF] px-3 py-6 sm:px-5 sm:py-8 lg:px-6 lg:py-10"
    >
      <ul
        role="list"
        style={
          {
            "--showcase-tablet-columns": tabletColumns,
            "--showcase-desktop-columns": desktopColumns,
          } as React.CSSProperties
        }
        className="mx-auto grid max-w-384 grid-cols-2 auto-rows-[clamp(10.5rem,45vw,13rem)] gap-3 sm:grid-cols-[repeat(var(--showcase-tablet-columns),minmax(0,1fr))] sm:auto-rows-[clamp(12rem,24vw,14rem)] lg:grid-cols-[repeat(var(--showcase-desktop-columns),minmax(0,1fr))] lg:auto-rows-[clamp(13.75rem,18vw,16.25rem)] lg:gap-4"
      >
        {showcases.map(({ label, title, description, image, href }) => (
          <li key={href} className={`${cardClassName} bg-[#4A2D1E]`}>
            <Link
              href={href}
              className="group relative isolate flex h-full flex-col justify-end text-center focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes={`${responsiveImageSizes}, 50vw`}
                className="-z-20 object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
              />

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-black/95 via-black/30 to-transparent"
              />

              <span className="absolute left-2 top-2 rounded bg-[#FAEDDF]/95 px-1.5 py-1 text-[9px] font-bold leading-none tracking-wide text-[#2C1D13] lg:left-3 lg:top-3">
                {label}
              </span>

              <span className="block px-2 pb-3 lg:px-3 lg:pb-4">
                <span className="inline-flex items-center justify-center gap-1 text-sm font-semibold leading-tight text-white lg:text-base xl:text-lg">
                  {title}
                  <HugeiconsIcon
                    icon={ArrowRight01Icon}
                    size={16}
                    strokeWidth={2}
                    className="shrink-0"
                    aria-hidden="true"
                  />
                </span>

                <span className="mt-1 block text-[10px] leading-snug text-white lg:text-xs">
                  {description}
                </span>
              </span>
            </Link>
          </li>
        ))}

        <li
          className={`${cardClassName} flex flex-col items-center justify-center gap-2 bg-[#673B23] px-3 py-4 text-center last:odd:col-span-2 sm:last:odd:col-span-1 lg:gap-3 lg:px-4`}
        >
          <Image
            src="/footer.png"
            alt=""
            fill
            sizes={`${responsiveImageSizes}, ${
              connectIsFullWidthOnMobile ? "100vw" : "50vw"
            }`}
            className="-z-20 object-cover"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[#25130B]/65"
          />

          <h2 className="font-['Caveat','Segoe_Print',cursive] text-[clamp(1.375rem,6vw,1.875rem)] font-bold leading-none text-white! lg:text-3xl xl:text-4xl">
            Let’s Connect
          </h2>

          <p className="max-w-[22ch] text-pretty text-xs font-medium leading-snug text-white! lg:text-sm">
            Join our global fitness and wellness family!
          </p>

          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-[#FAEDDF] px-3 text-xs font-semibold text-[#2C1D13] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:px-4"
          >
            Follow Me
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={16}
              strokeWidth={2}
              className="shrink-0"
              aria-hidden="true"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}