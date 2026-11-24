import {
  Location01Icon,
  Mail01Icon,
  Globe02Icon,
} from "@hugeicons/core-free-icons";


export interface TopBarItem {
  id: string;
  value: string;
  icon: typeof Location01Icon;
  href?: string;
}

export const topBar: TopBarItem[] = [
  {
    id: "location",
    value: "Muzaffarpur, Bihar",
    icon: Location01Icon,
  },
  {
    id: "email",
    value: "hello@fitsonaa.com",
    icon: Mail01Icon,
    href: "mailto:hello@fitsonaa.com",
  },
  {
    id: "coverage",
    value: "Global Coverage | Pan India & Abroad",
    icon: Globe02Icon,
  },
];
