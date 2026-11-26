import { HugeiconsIcon } from "@hugeicons/react";
import { topBar } from "@/constants/topbar";
import SocialMediaIcon from "../social-media/social-media";
import Link from 'next/link'

export default function Topbar() {
  return (
    <address className="mx-auto flex min-h-10 max-w-360 flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 text-sm not-italic text-white sm:px-6 lg:px-10">
      <ul
        role="list"
        aria-label="Contact information"
        className="m-0 flex list-none flex-wrap items-center gap-x-4 gap-y-2 p-0"
      >
        {topBar.map((item) => (
          <li key={item.id} className="flex min-w-0 items-center gap-2">
            <HugeiconsIcon
              icon={item.icon}
              aria-hidden="true"
              size={17}
              strokeWidth={1.7}
              className="shrink-0 text-white/80"
            />

            {item.href ? (
              <Link
                href={item.href}
                className="inline-flex min-h-6 items-center rounded-sm break-all underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {item.value}
              </Link>
            ) : (
              <span>{item.value}</span>
            )}
          </li>
        ))}
      </ul>

      <SocialMediaIcon
        size={24}
        gap={4}
        className="text-white"
        iconClassName="hover:text-pink-400"
      />
    </address>
  );
}