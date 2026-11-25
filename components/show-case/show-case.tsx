import Image from "next/image";
const showcases = [
  {
    label: "GET FIT",
    title: "Fitness Programs",
    description: "Strength · Endurance · Performance",
    image: "/images/showcases/fitness.webp",
    href: "/fitness-programs",
  },
  {
    label: "FIND BALANCE",
    title: "Yoga Sessions",
    description: "Peace · Flexibility · Energy",
    image: "/images/showcases/yoga.webp",
    href: "/yoga-sessions",
  },
  {
    label: "HAVE FUN",
    title: "Zumba Classes",
    description: "Dance · Burn · Smile",
    image: "/images/showcases/zumba.webp",
    href: "/zumba-classes",
  },
  {
    label: "EAT HEALTHY",
    title: "Diet Guidance",
    description: "Fuel · Nourish · Thrive",
    image: "/images/showcases/diet.webp",
    href: "/diet-guidance",
  },
  {
    label: "SHOP SMART",
    title: "TrenDz Store",
    description: "Wear · Reuse · Save",
    image: "/images/showcases/store.webp",
    href: "/store",
  },
];

export default function ShowCases() {
  return (
    <section
      aria-label="Explore programs, shopping, and community"
      className="mx-auto w-full max-w-360 bg-[#FAEDDF] px-3 py-2"
    >
      <div className="grid grid-flow-col auto-cols-[minmax(148px,42%)] snap-x snap-mandatory gap-2 overflow-x-auto p-1 md:auto-cols-fr">
        {showcases.map(({ label, title, description, image, href }) => (
          <a
            key={title}
            href={href}
            className="group relative isolate block h-28 snap-start overflow-hidden rounded-lg bg-[#4A2D1E] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A2D1E] lg:h-[clamp(112px,13vw,185px)]"
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 1440px) 235px, (min-width: 768px) 17vw, (min-width: 380px) 42vw, 148px"
              className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"
            />

            <span className="absolute right-1.5 top-1.5 rounded bg-[#FAEDDF]/90 px-1 py-0.5 text-[8px] font-semibold tracking-wide text-[#2C1D13]">
              {label}
            </span>

            <div className="absolute inset-x-0 bottom-0 px-1.5 pb-1.5 text-center">
              <h3 className="text-[11px] font-semibold leading-tight lg:text-base">
                {title} <span aria-hidden="true">→</span>
              </h3>
              <p className="mt-0.5 text-[8px] leading-tight text-white/90 lg:text-xs">
                {description}
              </p>
            </div>
          </a>
        ))}

        <div className="relative isolate flex h-28 snap-start flex-col items-center justify-center overflow-hidden rounded-lg bg-[#673B23] px-2 text-center text-[#FFF7EA] lg:h-[clamp(112px,13vw,185px)]">
          <Image
            src="/images/showcases/connect.webp"
            alt=""
            fill
            sizes="(min-width: 1440px) 235px, (min-width: 768px) 17vw, (min-width: 380px) 42vw, 148px"
            className="-z-20 object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[#321B10]/55"
          />

          <h3 className="font-serif text-lg font-semibold italic leading-none lg:text-3xl">
            Let’s Connect
          </h3>
          <p className="mt-1 text-[9px] leading-tight lg:text-xs">
            Join our global fitness
            <br />
            and wellness family!
          </p>
          <a
            href="/contact"
            className="mt-1.5 rounded-full bg-[#FAEDDF] px-3 py-1 text-[9px] font-semibold text-[#2C1D13] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:mt-3 lg:text-xs"
          >
            Follow Me <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
