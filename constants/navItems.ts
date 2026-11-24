
export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },

  {
    label: "About",
    href: "/about",
    hasDropdown: false,
    children: [
      { label: "About Coach Sona", href: "/about/coach-sona" },
      { label: "Our Story", href: "/about/our-story" },
      { label: "Achievements", href: "/about/achievements" },
    ],
  },

  {
    label: "Programs",
    href: "/programs",
    hasDropdown: false,
    children: [
      { label: "Fitness Programs", href: "/programs/fitness" },
      { label: "Yoga Sessions", href: "/programs/yoga" },
      { label: "Zumba Classes", href: "/programs/zumba" },
      { label: "Diet Guidance", href: "/programs/diet" },
    ],
  },

  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    children: [
      { label: "Customized Diet Plan", href: "/services/customized-diet-plan" },
      { label: "Customized Workout Plan", href: "/services/customized-workout-plan" },
      { label: "Weight Loss / Weight Gain", href: "/services/weight-management" },
      { label: "Muscle Building", href: "/services/muscle-building" },
      { label: "Special Population Care", href: "/services/special-population-care" },
      { label: "Fertility & Reproductive Wellness", href: "/services/fertility-wellness" },
      { label: "Prenatal & Postnatal Yoga / Exercise", href: "/services/prenatal-postnatal" },
      { label: "Women's Special Health Support", href: "/services/womens-health" },
      { label: "Menopause & Perimenopause Wellness", href: "/services/menopause-wellness" },
      { label: "Teenage Exercise Support", href: "/services/teenage-exercise" },
      { label: "PCOD / PCOS", href: "/services/pcod-pcos" },
      { label: "Blood Pressure (BP)", href: "/services/bp-management" },
      { label: "Thyroid Management", href: "/services/thyroid-management" },
      { label: "Type I & II Diabetes", href: "/services/diabetes-management" },
      { label: "Obesity Management", href: "/services/obesity-management" },
      { label: "Weekly Diet Plan", href: "/services/weekly-diet-plan" },
      { label: "Daily Live & Recorded Classes", href: "/services/live-recorded-classes" },
      { label: "Flexible Timings", href: "/services/flexible-timings" },
      { label: "One-to-One Sessions", href: "/services/one-to-one-session" },
      { label: "Group Sessions", href: "/services/group-sessions" },
      { label: "24/7 WhatsApp Chat & Call Support", href: "/services/whatsapp-support" },
      { label: "Monthly Progress Report & Certificate", href: "/services/progress-report" },
      { label: "Exercise Activities & Challenges", href: "/services/fitness-challenges" },
      { label: "Weekend Special Programs", href: "/services/weekend-programs" },
      { label: "Overall Fitness & Wellness Support", href: "/services/fitness-wellness" },
    ],
  },

  {
    label: "Wellness",
    href: "/wellness",
    hasDropdown: false,
    children: [
      { label: "Holistic Wellness", href: "/wellness/holistic" },
      { label: "Mindfulness", href: "/wellness/mindfulness" },
    ],
  },

  {
    label: "Shop",
    href: "/shop",
    hasDropdown: false,
    children: [
      { label: "TrenDz Thrift Store", href: "/shop/trendz" },
    ],
  },

  {
    label: "Blog",
    href: "/blog",
    hasDropdown: false,
    children: [
      { label: "Fitness Tips", href: "/blog/fitness" },
      { label: "Diet Plans", href: "/blog/diet" },
      { label: "Motivation", href: "/blog/motivation" },
    ],
  },

  { label: "Contact", href: "/contact" },
];

export const navbarActions = {
  login: {
    label: "Client Login",
    href: "/login",
  },
  explore: {
    label: "Join Our Community",
    href: "/community",
  },
};
