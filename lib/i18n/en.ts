import type { Dictionary } from "./types";

const en: Dictionary = {
  nav: {
    consulting: "Consulting",
    digital: "Digital",
    work: "Work",
    about: "About",
    partners: "Partners",
    contact: "Contact",
    cta: "Get in Touch",
  },
  hero: {
    eyebrow: "Consulting & Digital, Under One Roof",
    title: ["Make Success", "Simple", "Again"],
    subtitle:
      "We help brands grow with sharp strategy and bold digital execution — from market entry and sales process to branding, social media, and web development.",
    primaryCta: "Start a Project",
    secondaryCta: "Explore Services",
    stat1Value: "12+",
    stat1Label: "Years driving growth",
    stat2Value: "130+",
    stat2Label: "Projects delivered",
    stat3Value: "100%",
    stat3Label: "Positive feedback",
  },
  consulting: {
    eyebrow: "Consulting",
    title: "Strategy that moves the needle",
    subtitle:
      "Practical, hands-on consulting across marketing, sales, and business development — built from experience inside category-leading brands.",
    categories: [
      {
        title: "Marketing Consulting",
        description: "Build a brand people actually remember.",
        items: [
          "Review your current marketing",
          "Define your audience",
          "Build your brand strategy",
          "Plan your market launch",
          "Create content and messaging",
          "Run digital campaigns",
          "Track and improve performance",
        ],
      },
      {
        title: "Sales Consulting",
        description: "Turn your pipeline into predictable revenue.",
        items: [
          "Analyze your current sales setup",
          "Build or improve your sales process",
          "Set up and clean your CRM",
          "Generate quality leads",
          "Create better sales pitches",
          "Train your sales team",
          "Measure results and adjust",
        ],
      },
      {
        title: "Business Development",
        description: "Find and capture your next growth curve.",
        items: [
          "Spot growth opportunities",
          "Plan entry into new markets",
          "Study your competition",
          "Build smart partnerships",
          "Shape your business model",
          "Grow key client accounts",
          "Get ready to scale",
        ],
      },
    ],
  },
  digital: {
    eyebrow: "Digital",
    title: "Business made easy, digitally",
    subtitle:
      "We use modern technologies and approaches to create the boldest, most straightforward digital products and services — done the smart way.",
    services: [
      {
        title: "Branding",
        description:
          "Logo, identity, tone of voice, and a visual system your brand can grow into.",
      },
      {
        title: "Social Media",
        description:
          "Content, campaigns, and community management that actually convert.",
      },
      {
        title: "Web Development",
        description:
          "Fast, modern, conversion-focused websites and web apps.",
      },
      {
        title: "Motion Graphics",
        description: "Video, animation, and motion design that gets noticed.",
      },
    ],
  },
  work: {
    eyebrow: "Selected Work",
    title: "Case studies, not just campaigns",
    subtitle:
      "A look at the branding, social, web, and motion work behind the numbers.",
    viewAll: "View All Projects",
    viewProject: "View Project",
    filterAll: "All",
    backToWork: "Back to Work",
    challengeLabel: "The Challenge",
    approachLabel: "Our Approach",
    resultsLabel: "What We Delivered",
    servicesLabel: "Services",
    clientLabel: "Client",
    yearLabel: "Year",
    nextProjectLabel: "Next Project",
    notFoundTitle: "Project not found",
    notFoundSubtitle: "This project may have been moved or doesn't exist.",
    ctaTitle: "Have a project like this in mind?",
    ctaSubtitle: "Let's talk about what you're building.",
    ctaButton: "Start a Conversation",
    categories: {
      branding: "Branding",
      social: "Social Media",
      web: "Web Development",
      motion: "Motion Graphics",
    },
  },
  about: {
    eyebrow: "Who's Behind It",
    title: "Lead Consultant & Founder",
    name: "Giorgi Nozadze",
    paragraphs: [
      "Our vision is that great strategy and digital execution should be an accessible, affordable tool for every business — regardless of size or budget.",
      "Our philosophy is built on simplicity. Everybody can make things complicated — the real skill is making complex things as simple as possible.",
    ],
    roles: [
      { role: "Market Development Manager", company: "Heineken" },
      { role: "Regional Sales Manager", company: "Henkel" },
      { role: "Brand Manager", company: "Moët Hennessy" },
    ],
  },
  partners: {
    eyebrow: "Trusted By",
    title: "Success is the greatest experience",
    subtitle: "A selection of the brands we've worked with.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's get in touch, we respond fast.",
    subtitle: "Tell us about your project and we'll take it from there.",
    form: {
      name: "Name (required)",
      namePlaceholder: "Your name",
      company: "Company (required)",
      companyPlaceholder: "Your company name",
      email: "Email (required)",
      emailPlaceholder: "Your working email",
      phone: "Phone (optional)",
      phonePlaceholder: "Your actual phone number",
      subject: "Subject (optional)",
      subjectPlaceholder: "Choose a subject",
      budget: "Choose a Budget (USD)",
      budgetOptions: [
        "Less than $5,000",
        "$5,000 – $15,000",
        "$15,000 – $50,000",
        "$50,000+",
      ],
      details: "Project details",
      detailsPlaceholder: "Brief project details",
      send: "Send",
      sending: "Sending...",
      success: "Thanks — your message is on its way. We'll be in touch shortly.",
      error: "Something went wrong sending that. Please try again or email us directly.",
    },
    offices: [
      {
        city: "Tbilisi, Georgia",
        address: "24 University Str., 0186",
        email: "info@martivi.com",
        phone: "+995 577 273 090",
      },
      {
        city: "New York, USA",
        address: "575 5th Ave, NY 10017",
        email: "hello@martivi.com",
        phone: "+1 929 257 8257",
      },
    ],
  },
  footer: {
    tagline: "Make Success Simple Again.",
    rights: "All Rights Reserved.",
    owner: "Owned by Individual Entrepreneur Giorgi Nozadze",
    linksTitle: "Explore",
    socialTitle: "Follow Us",
  },
  chat: {
    title: "Martivi Assistant",
    greeting:
      "Hi! Ask me anything about Martivi's consulting or digital services.",
    placeholder: "Type a message...",
    error: "Something went wrong. Please try again or use the contact form.",
    rateLimited:
      "This model is getting a lot of traffic right now — please try again in a moment.",
    openLabel: "Chat with us",
    closeLabel: "Close chat",
    thinking: "Typing...",
  },
};

export default en;
