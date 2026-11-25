import Image from "next/image"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowRight01Icon,
  ChampionIcon,
  Globe02Icon,
  Mail01Icon,
  Medal01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons"

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
]

export default function CoachSection() {
  return (
    <section
      aria-labelledby="coach-heading"
      className="mx-auto w-full max-w-360 bg-[#FAEDDF] px-5 py-4 text-[#2C1D13] lg:px-10"
    >
      <div className="grid items-center gap-5 lg:grid-cols-[1.1fr_1.25fr_1fr] lg:gap-4">
        <div className="flex items-center gap-4">
          <div className="relative size-24 shrink-0 overflow-hidden rounded-full border-4 border-[#FFF8EF] bg-[#E8D0B8] shadow-sm xl:size-32">
            <Image
              src="/images/coach-sona.webp"
              alt="Coach Sona"
              fill
              sizes="(min-width: 1280px) 128px, 96px"
              className="object-cover object-top"
            />
          </div>

          <div>
            <h2 id="coach-heading" className="font-serif text-2xl font-bold italic">
              About Coach Sona
            </h2>
            <p className="mt-1 text-xs font-semibold">
              National Powerlifter | Fitness Coach | Life Coach
            </p>
            <p className="mt-1 text-xs leading-relaxed">
              Helping you get stronger physically, mentally, and emotionally.
            </p>
            <Link
              href="/about"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#753B18] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#5E2D12]"
            >
              Know More
              <HugeiconsIcon icon={ArrowRight01Icon} size={13} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="border-t border-[#E4CEB9] pt-4 lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
          <ul className="grid grid-cols-4 divide-x divide-[#E4CEB9] text-center">
            {stats.map(({ icon, value, label, detail }) => (
              <li key={label} className="px-1">
                <HugeiconsIcon
                  icon={icon}
                  size={20}
                  aria-hidden="true"
                  className="mx-auto mb-1 text-[#623817]"
                />
                <p className="text-sm font-bold">{value}</p>
                <p className="text-[10px] font-semibold leading-tight">{label}</p>
                {detail && (
                  <p className="text-[10px] leading-tight">{detail}</p>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-3 flex items-center justify-center gap-2 text-center font-serif text-xs italic before:h-px before:flex-1 before:bg-[#E4CEB9] after:h-px after:flex-1 after:bg-[#E4CEB9]">
            <span>“Health is Wealth. Let’s build it together.” · Coach Sona ♡</span>
          </p>
        </div>

        <div className="rounded-2xl border border-[#E4CEB9] bg-[#F8EBDD] px-4 py-3 shadow-sm">
          <h3 className="text-sm font-bold">Subscribe for Wellness Tips</h3>
          <p className="mt-1 text-xs leading-relaxed">
            Get expert fitness tips, diet plans, and motivational content directly in your inbox.
          </p>

          <form
            action="/api/newsletter"
            method="post"
            className="mt-2 flex flex-wrap gap-1.5"
          >
            <label className="flex min-w-32 flex-1 items-center gap-2 rounded-full border border-[#E4CEB9] bg-[#FFF6EB] px-3 focus-within:ring-2 focus-within:ring-[#753B18]">
              <HugeiconsIcon
                icon={Mail01Icon}
                size={13}
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
                className="w-full min-w-0 bg-transparent py-2 text-xs outline-none placeholder:text-[#735E4D]"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#753B18] px-3 py-2 text-xs font-semibold text-white hover:bg-[#5E2D12]"
            >
              Subscribe
              <HugeiconsIcon icon={ArrowRight01Icon} size={13} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}