import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ChampionIcon,
  Globe02Icon,
  Mail01Icon,
  Medal01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

const stats = [
  {
    icon: Medal01Icon,
    value: "1",
    label: "Gold Medalist",
    detail: "(Federation Cup)",
  },
  { icon: ChampionIcon, value: "National", label: "Powerlifter" },
  { icon: UserGroupIcon, value: "536+", label: "Happy Members" },
  { icon: Globe02Icon, value: "Global", label: "Community" },
];

const buttonClassName =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#753B18] bg-[linear-gradient(#4A200B80,#4A200B80),url('/footer.png')] bg-center bg-cover px-4 text-xs font-semibold text-white hover:bg-[#5E2D12] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#753B18]";

export default function CoachSection() {
  return (
    <section
      aria-labelledby="coach-heading"
      className="bg-[#FAEDDF] px-4 py-5 text-[#2C1D13] sm:px-6 sm:py-7 lg:px-8 lg:py-10 xl:px-10"
    >
      <div className="mx-auto grid max-w-360 items-center gap-6 lg:min-h-55 lg:grid-cols-[1.1fr_1.25fr_1fr] lg:gap-5 xl:gap-8">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 sm:gap-4">
          <div className="relative size-[clamp(4.25rem,25vw,6rem)] overflow-hidden rounded-full border-[3px] border-[#FFF8EF] bg-[#E8D0B8] shadow-[0_2px_5px_#4A2A2330] lg:size-24 xl:size-32">
            <Image
              src="/coach-img.png"
              alt="Coach Sona"
              fill
              sizes="(min-width: 1280px) 128px, (min-width: 384px) 96px, (min-width: 272px) 25vw, 68px"
              className="object-cover object-top"
            />
          </div>

          <div>
            <h2
              id="coach-heading"
              className="font-['Caveat','Segoe_Print',cursive] text-[clamp(1.5rem,7.2vw,2.125rem)] font-bold leading-none lg:text-3xl xl:text-4xl"
            >
              About Coach Sona
            </h2>

            <p className="mt-1.5 text-[10px] font-semibold leading-snug sm:text-xs">
              National Powerlifter · Fitness Coach · Life Coach
            </p>

            <p className="mt-1 text-xs leading-snug lg:leading-relaxed">
              Helping you get stronger physically, mentally, and emotionally.
            </p>

            <Link href="/about" className={`${buttonClassName} mt-2`}>
              Know More
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={15}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="lg:border-l lg:border-[#E4CEB9] lg:pl-5 xl:pl-8">
          <ul
            aria-label="Coach Sona’s achievements"
            role="list"
            className="grid grid-cols-2 gap-y-4 text-center lg:grid-cols-4 lg:divide-x lg:divide-[#E4CEB9]"
          >
            {stats.map(({ icon, value, label, detail }) => (
              <li
                key={label}
                className="px-2 py-1 max-lg:even:border-l max-lg:even:border-[#E4CEB9] lg:px-1"
              >
                <HugeiconsIcon
                  icon={icon}
                  size={23}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="mx-auto mb-1.5 text-[#623817] xl:size-7"
                />

                <p className="text-base font-bold leading-tight xl:text-lg">
                  {value}
                </p>
                <p className="mt-0.5 text-xs font-semibold leading-tight">
                  {label}
                </p>

                {detail && (
                  <p className="mt-0.5 text-[10px] leading-tight">{detail}</p>
                )}
              </li>
            ))}
          </ul>

          <figure className="mt-4 flex items-center gap-2 text-center font-serif italic before:h-px before:flex-1 before:bg-[#E4CEB9] after:h-px after:flex-1 after:bg-[#E4CEB9] lg:mt-5">
            <div className="max-w-[28ch]">
              <blockquote className="text-sm leading-snug">
                <p>“Health is Wealth. Let’s build it together.”</p>
              </blockquote>
              <figcaption className="mt-0.5 text-xs">
                — Coach Sona <span aria-hidden="true">♡</span>
              </figcaption>
            </div>
          </figure>
        </div>

        <aside
          aria-labelledby="wellness-subscribe-heading"
          className="rounded-2xl border border-[#E4CEB9] bg-[#F8EBDD] p-4 shadow-[0_2px_5px_#4A2A2326] lg:p-5"
        >
          <h3 id="wellness-subscribe-heading" className="text-base font-bold">
            Subscribe for Wellness Tips
          </h3>

          <p className="mt-1 text-xs leading-relaxed lg:text-sm">
            Get expert fitness tips, diet plans, and motivational content
            directly in your inbox.
          </p>

          <form action="/api/newsletter" method="post" className="mt-3 grid gap-2">
            <label className="flex min-h-11 min-w-0 items-center gap-2 rounded-full border border-[#E4CEB9] bg-[#FFF6EB] px-3 shadow-sm focus-within:ring-2 focus-within:ring-[#753B18]">
              <HugeiconsIcon
                icon={Mail01Icon}
                size={16}
                aria-hidden="true"
                className="shrink-0 text-[#753B18]"
              />

              <span className="sr-only">Your email address</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Your Email Address"
                required
                className="min-h-11 w-full min-w-0 bg-transparent text-base outline-none placeholder:text-[#735E4D] lg:text-sm"
              />
            </label>

            <button type="submit" className={`${buttonClassName} w-full`}>
              Subscribe
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={15}
                strokeWidth={2}
                aria-hidden="true"
              />
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
}