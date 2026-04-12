import { contact } from "./contact";

export type HomeProfileIcon =
  | "scholar"
  | "github"
  | "linkedin"
  | "email"
  | "download"
  | "contact";

export type HomeProfileLink = {
  label: string;
  /** Accessible name when `label` is shortened (e.g. "Scholar"). */
  ariaLabel?: string;
  href: string;
  icon: HomeProfileIcon;
  external?: boolean;
};

/** Homepage quick links (mirrors old site: sections + profiles). */
export const homeProfileLinks: HomeProfileLink[] = [
  {
    label: "CV",
    ariaLabel: "Open curriculum vitae",
    href: "/cv",
    icon: "download",
    external: true
  },
  { label: "Scholar", ariaLabel: "Google Scholar", href: contact.scholar, icon: "scholar", external: true },
  { label: "GitHub", href: contact.github, icon: "github", external: true },
  { label: "LinkedIn", href: contact.linkedin, icon: "linkedin", external: true },
  { label: "Email", href: `mailto:${contact.email}`, icon: "email" }
];
