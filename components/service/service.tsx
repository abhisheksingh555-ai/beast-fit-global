import { HugeiconsIcon } from "@hugeicons/react";
import {
  Dumbbell01Icon,
  HangerIcon,
  HeartCheckIcon,
  TrophyIcon,
  WellnessIcon,
  WorkoutGymnasticsIcon,
  Yoga01Icon,
} from "@hugeicons/core-free-icons";

const services = [
  { title: "Personal", subtitle: "Training", icon: Dumbbell01Icon },
  { title: "Yoga &", subtitle: "Meditation", icon: Yoga01Icon },
  { title: "Zumba &", subtitle: "Aerobics", icon: WorkoutGymnasticsIcon },
  {
    title: "Diabetes Care",
    subtitle: "& Special Programs",
    icon: HeartCheckIcon,
  },
  { title: "Powerlifting", subtitle: "Coaching", icon: TrophyIcon },
  { title: "Thrift Store", subtitle: "TrenDz", icon: HangerIcon },
  { title: "Holistic", subtitle: "Wellness", icon: WellnessIcon },
];

export default function SevenService() {
  return (
    <section
      aria-label="Fitness and wellness services"
      className="bg-[#F2E3D2] px-3 py-3 sm:px-6 lg:px-10 lg:py-5"
    >
      <div
        role="region"
        aria-label="Scrollable list of services"
        tabIndex={0}
        className="mx-auto max-w-360 overflow-x-auto rounded-2xl border border-[#E4CEB8] bg-[#F8EBDD] shadow-[0_3px_8px_rgba(74,42,23,0.12)] scrollbar-none [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#5B3825] lg:rounded-[20px]"
      >
        <ul
          role="list"
          className="flex min-h-13 items-stretch divide-x divide-[#E4CEB8] py-2 sm:min-h-15 lg:grid lg:min-h-18 lg:grid-cols-7 lg:py-3"
        >
          {services.map(({ icon, title, subtitle }) => (
            <li
              key={title}
              className="flex min-h-9 shrink-0 basis-[40%] items-center justify-center gap-2 px-2 text-[#4A2C1B] sm:basis-[25%] lg:min-h-12 lg:gap-2.5 lg:px-2 xl:px-4"
            >
              <HugeiconsIcon
                icon={icon}
                size={20}
                strokeWidth={1.8}
                className="shrink-0 lg:size-6"
                aria-hidden="true"
              />

              <span className="text-[11px] font-semibold leading-tight lg:text-xs">
                <span className="block">{title}</span>
                <span className="block">{subtitle}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}