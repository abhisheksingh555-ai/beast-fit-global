import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="grid w-full bg-[#FAEDDF] text-[#2C1D13] lg:min-h-125 lg:grid-cols-[10%_32%_58%] lg:bg-[#F2E3D2]"
    >
      <div className="relative hidden lg:block" aria-hidden="true">
        <Image
          src="/hero-section-01.png"
          alt=""
          fill
          sizes="10vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center px-[4.6%] pb-6 pt-8 text-center sm:pt-10 lg:px-4 lg:py-10">
        <p className="font-['Caveat','Segoe_Print',cursive] text-[clamp(1.65rem,7vw,2.35rem)] font-bold leading-none lg:text-[clamp(1.5rem,2.2vw,2.125rem)]">
          Welcome to{" "}
          <span className="relative inline-block whitespace-nowrap">
            Beast Fit Global
            <svg
              aria-hidden="true"
              viewBox="0 0 120 12"
              preserveAspectRatio="none"
              className="pointer-events-none absolute -bottom-2 left-0 h-2 w-full"
            >
              <path
                d="M2 9 Q61 0 118 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          <span aria-hidden="true">♡</span>
        </p>

        <h1
          id="hero-title"
          className="mt-6 font-serif text-[clamp(2rem,10.4vw,3.5rem)] font-bold leading-[1.02] tracking-tight lg:text-[clamp(2rem,3.8vw,3.75rem)]"
        >
          <span className="block">Stronger Body</span>
          <span className="block">
            Happier You <span aria-hidden="true">♡</span>
          </span>
        </h1>

        <p className="mt-3 text-[clamp(0.6875rem,2.8vw,0.875rem)] font-semibold leading-relaxed">
          Fitness · Yoga · Zumba · Wellness · Mindfulness
        </p>

        <p className="mt-3 max-w-[46ch] text-[clamp(0.875rem,3.5vw,1.125rem)] font-medium leading-snug lg:max-w-[32ch] lg:text-base">
          Train smart, live healthy, and discover your best version with Coach
          Sona.
        </p>

        <Link
          href="/contact"
          className="mt-4 inline-flex min-h-13 w-[78%] max-w-80 items-center justify-center gap-2.5 rounded-full bg-[#743D1D] bg-linear-to-b from-[#9C582C] via-[#743D1D] to-[#8D4B27] px-3 py-2.5 text-[clamp(1rem,4.4vw,1.375rem)] font-semibold text-white shadow-[0_3px_8px_#5C2E1533] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C2E15] sm:min-h-16 lg:min-h-12 lg:w-auto lg:px-5 lg:text-base"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            className="size-5 shrink-0"
          >
            <path d="M2 10v4m4-8v12m12-12v12m4-8v4M6 12h12" />
          </svg>
          Start Your Journey
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <figure className="relative mx-auto mb-1.5 aspect-452/263 w-[90.8%] overflow-hidden rounded-[clamp(1rem,4vw,1.25rem)] lg:m-0 lg:aspect-auto lg:w-full lg:rounded-none">
        <Image
          src="/hero-section-02.png"
          alt="Coach Sona with her arms outstretched in the studio"
          fill
          sizes="(min-width: 1024px) 58vw, 91vw"
          className="object-cover object-center lg:object-[center_35%]"
        />
      </figure>
    </section>
  );
}