export type ExperienceItem = {
  title: string;
  organization: string;
  period: string;
  /** Path to logo image under /images/logos/. */
  logo?: string;
  /** Omit or leave empty when the role title and organization are self-explanatory. */
  description?: string;
  /** Optional button (e.g. certificate PDF), shown below the description. */
  certificateLink?: { href: string; label: string };
};

export const education: ExperienceItem[] = [
  {
    title: "PhD in Statistics",
    organization: "Harvard University",
    period: "Sep 2021 – Present",
    logo: "/images/logos/harvard-shield.svg",
    description:
      "PhD research with Prof. Lucas Janson on model-free high-dimensional inference, with broader interests in statistics, machine learning, and related areas."
  },
  {
    title: "Master of Statistics",
    organization: "Indian Statistical Institute, Kolkata",
    period: "Sep 2019 – May 2021",
    logo: "/images/logos/isi.png",
    description: "Completed the M.Stat degree in statistics."
  },
  {
    title: "Bachelor of Statistics",
    organization: "Indian Statistical Institute, Kolkata",
    period: "Sep 2016 – May 2019",
    logo: "/images/logos/isi.png",
    description: "Completed the B.Stat degree in statistics."
  }
];

export const industryExperience: ExperienceItem[] = [
  {
    title: "Quantitative Research Intern",
    organization: "Cubist Systematic Strategies",
    period: "Summer 2025",
    logo: "/images/logos/cubist-icon.png"
  },
  {
    title: "Quantitative Research Intern",
    organization: "Valkyrie Trading",
    period: "Summer 2024",
    logo: "/images/logos/valkyrie-icon.png"
  }
];

export const researchExperience: ExperienceItem[] = [
  {
    title: "Summer Internship (2021)",
    organization: "University of Michigan, Biostatistics Department",
    period: "May 2021 – Jul 2021",
    logo: "/images/logos/umich-m.svg",
    description:
      "Part 2 of a research internship focused on developing Bayesian epidemiological models and estimating unobserved quantities such as underreporting factors and infection fatality rates."
  },
  {
    title: "Summer Internship (2020)",
    organization: "University of Michigan, Biostatistics Department",
    period: "May 2020 – Jul 2020",
    logo: "/images/logos/umich-m.svg",
    description:
      "Part 1 of a research internship focused on epidemiological models for COVID-19, with special attention to misclassification and selection bias in testing."
  },
  {
    title: "Summer Internship",
    organization: "TU Darmstadt",
    period: "May 2019 – Jul 2019",
    logo: "/images/logos/tu-darmstadt-icon.svg",
    description:
      "Conducted research at the Bioinspired Communications Lab in the ECE department and developed theorems governing the time evolution of Continuous Time Markov Networks."
  }
];

export const teachingExperience: ExperienceItem[] = [
  {
    title: "Teaching Fellow, Stat 213 – Statistical Inference 2",
    organization: "Harvard University",
    period: "Jan 2023 – May 2023",
    logo: "/images/logos/harvard-shield.svg",
    description: "Teaching Fellow for graduate-level Statistical Inference 2."
  },
  {
    title: "Teaching Fellow, Stat 211 – Statistical Inference 1",
    organization: "Harvard University",
    period: "Sep 2022 – Dec 2022",
    logo: "/images/logos/harvard-shield.svg",
    description:
      "Teaching Fellow for Statistical Inference 1. Received the Harvard University teaching award for contributions in this role.",
    certificateLink: {
      href: "/files/stat-211-certificate.pdf",
      label: "Harvard teaching award certificate (PDF)"
    }
  }
];
