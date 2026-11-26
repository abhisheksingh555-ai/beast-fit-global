"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, navbarActions } from "../../constants/navItems";
import PrimaryBtn from "../common/buttons/PrimaryBtn";
import Topbar from "../topbar/topbar";

function Chevron() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full">
      {/* ───────── Top info bar ───────── */}
      <header className="hidden h-10.5 w-full bg-[#6F3915] text-white lg:block">
        <Topbar />
      </header>

      {/* ───────── Main navbar ───────── */}
      <nav className="w-full border-b border-[#D7C2B1] bg-[linear-gradient(180deg,#FCEBDC_0%,#F8E8D8_100%)]">
        <nav className="relative mx-auto flex h-18.75 max-w-360 items-center justify-between px-5 lg:px-10">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* <Image src="/logo.svg" alt="Fitsonaa" width={64} height={64} /> */}
            <div className="leading-none">
              <p className="font-serif text-[40px] font-bold text-[#2A0D00]">
                Suman
              </p>
              <p className="mt-1 text-[12px] text-[#281809]">
                Move • Heal • Grow
              </p>
            </div>
          </Link>

          {/* Navigation links */}
          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const showDropdown = item.hasDropdown && !!item.children?.length;

              return (
                // No "relative" here, so the panel positions against the <nav>
                <div key={item.href} className="group">
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                      isActive
                        ? "bg-[linear-gradient(180deg,#8C491C_0%,#6D3208_100%)] text-white shadow-md"
                        : "text-[#281809] hover:text-[#82471E]"
                    }`}
                  >
                    {item.label}

                    {showDropdown && (
                      <span className="transition-transform duration-200 group-hover:rotate-180">
                        <Chevron />
                      </span>
                    )}

                    {!isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-[#82471E] transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
                    )}
                  </Link>

                  {/* Dropdown panel */}
                  {showDropdown && (
                    <div className="invisible absolute left-0 right-0 top-full z-50 translate-y-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="mx-5 rounded-2xl border border-[#D7C2B1] bg-[#FCEBDC] p-6 shadow-xl lg:mx-10">
                        <ul className="grid grid-cols-3 gap-x-6 gap-y-1">
                          {item.children!.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={`block rounded-lg px-3 py-2 text-[13px] transition-colors hover:bg-[#F3D9C2] hover:text-[#82471E] ${
                                  pathname === child.href
                                    ? "bg-[#F3D9C2] font-semibold text-[#82471E]"
                                    : "text-[#281809]"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action button */}
          <div className="flex items-center">
            <Link href={navbarActions.explore.href}>
              <PrimaryBtn size="md">{navbarActions.explore.label}</PrimaryBtn>
            </Link>
          </div>
        </nav>
      </nav>
    </header>
  );
}
