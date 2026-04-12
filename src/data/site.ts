export type NavItem = {
  label: string;
  href: string;
  /** Open in a new tab (e.g. CV page). */
  openInNewTab?: boolean;
};

export const site = {
  name: "Ritwik Bhaduri",
  title: "Ritwik Bhaduri",
  role: "PhD Candidate in Statistics at Harvard University",
  description:
    "PhD candidate in statistics at Harvard University working on model-free high-dimensional inference, with broader interests in statistics, machine learning, artificial intelligence, and quantitative finance.",
  nav: [
    { label: "Home", href: "/" },
    { label: "Publications", href: "/publications" },
    { label: "Experience", href: "/experience" },
    { label: "Photography", href: "/photography" },
    {
      label: "CV",
      href: "/cv",
      openInNewTab: true
    },
    { label: "Contact", href: "/contact" }
  ] satisfies NavItem[]
};