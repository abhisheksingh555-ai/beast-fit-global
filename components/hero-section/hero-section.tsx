import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mx-auto grid h-120.5 w-full max-w-90 grid-rows-[auto_1fr] overflow-hidden bg-[#F2E3D2] text-[#2C1D13] md:h-auto md:min-h-105 md:max-w-none md:grid-cols-[10%_32%_58%] md:grid-rows-1 "
    >
      <div className="relative hidden md:block" aria-hidden="true">
        <Image
          src="/hero-section-01.png"
          alt=""
          fill
          sizes="(min-width: 768px) 10vw, 0px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center px-4 py-5 text-center">
        <p className="pb-2 text-[25px] font-bold leading-none text-[#2C1D13] font-['Caveat','Segoe_Print',cursive] md:text-[30px]">
          Welcome to{" "}
          <span className="relative inline-block">
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
          <span aria-hidden="true" className="align-top text-[0.75em]">
            ♡
          </span>
        </p>

        <h1
          id="hero-title"
          className="mt-2 font-serif text-[36px] font-bold leading-[0.95] tracking-tight md:text-[clamp(1.875rem,3.8vw,3.75rem)]"
        >
          <span className="block">Stronger Body</span>
          <span className="block">
            Happier You <span aria-hidden="true">♡</span>
          </span>
        </h1>

        <p className="mt-2 text-[11px] font-semibold">
          Fitness · Yoga · Zumba · Wellness · Mindfulness
        </p>

        <p className="mt-2 max-w-[28ch] text-xs leading-snug md:text-sm">
          Train smart, live healthy, and discover your best version with Coach
          Sona.
        </p>

        <a
          href="/contact"
          className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-linear-to-b from-[#995D36] to-[#5C2E15] px-6 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5C2E15]"
        >
          Start Your Journey <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="relative min-h-0 md:min-h-70">
        <Image
          src="/hero-section-02.png"
          alt="Coach Sona with her arms outstretched in the studio"
          fill
          sizes="(min-width: 768px) 58vw, (min-width: 360px) 360px, 100vw"
          className="object-cover object-[center_35%]"
        />
      </div>
    </section>
  );
}
