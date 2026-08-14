export type ProjectCategory = "branding" | "social" | "web" | "motion";

export interface Dictionary {
  nav: {
    consulting: string;
    digital: string;
    work: string;
    about: string;
    partners: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: [string, string, string];
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
  };
  consulting: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: {
      title: string;
      description: string;
      items: string[];
    }[];
  };
  digital: {
    eyebrow: string;
    title: string;
    subtitle: string;
    services: {
      title: string;
      description: string;
    }[];
  };
  work: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    viewProject: string;
    filterAll: string;
    backToWork: string;
    challengeLabel: string;
    approachLabel: string;
    resultsLabel: string;
    servicesLabel: string;
    clientLabel: string;
    yearLabel: string;
    nextProjectLabel: string;
    notFoundTitle: string;
    notFoundSubtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
    categories: Record<ProjectCategory, string>;
  };
  about: {
    eyebrow: string;
    title: string;
    name: string;
    paragraphs: string[];
    roles: { role: string; company: string }[];
  };
  partners: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      budget: string;
      budgetOptions: string[];
      details: string;
      detailsPlaceholder: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
    offices: {
      city: string;
      address: string;
      email: string;
      phone: string;
    }[];
  };
  footer: {
    tagline: string;
    rights: string;
    owner: string;
    linksTitle: string;
    socialTitle: string;
  };
  chat: {
    title: string;
    greeting: string;
    placeholder: string;
    error: string;
    rateLimited: string;
    openLabel: string;
    closeLabel: string;
    thinking: string;
  };
}
