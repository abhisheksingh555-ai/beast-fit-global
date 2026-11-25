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
    <section aria-label="Fitness and wellness services" className="bg-[#F2E3D2] px-4 md:px-10">
      <div
        role="group"
        aria-label="Explore all seven services"
        tabIndex={0}
        className="mx-auto max-w-360 overflow-x-auto rounded-2xl border border-[#E4CEB8] bg-[#F8EBDD] shadow-[0_3px_8px_rgba(74,42,23,0.12)] focus-visible:outline-2 focus-visible:outline-[#5B3825]"
      >
        <ul className="flex w-max min-w-full divide-x divide-[#E4CEB8] py-2.5">
          {services.map(({ icon, title, subtitle }) => (
            <li
              key={title}
              className="flex min-h-8 flex-1 items-center justify-center gap-2.5 whitespace-nowrap px-4 text-[#4A2C1B] lg:px-6"
            >
              <HugeiconsIcon
                icon={icon}
                size={23}
                strokeWidth={1.8}
                className="shrink-0"
                aria-hidden="true"
              />
              <span className="text-[11px] font-semibold leading-tight">
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