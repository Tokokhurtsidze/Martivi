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
    projects: [
      {
        slug: "sun-motors-social-media",
        categories: ["social"],
        title: "Sun Motors Georgia — Social Media",
        client: "Sun Motors Georgia",
        year: "2023",
        tagline: "Keeping a battery and auto-parts retailer visible, every week.",
        summary:
          "An always-on social content system for Georgia's leading car battery and parts retailer — offers, promos, and product education on a weekly cadence.",
        challenge:
          "Sun Motors needed a steady stream of promotional content that could keep pace with rotating stock offers, without losing brand consistency across dozens of posts a month.",
        approach: [
          "Built a modular template system so new offers could go live within hours",
          "Established a consistent price-tag and badge system across every promo",
          "Planned a monthly content calendar balancing offers, tips, and brand moments",
        ],
        results: [
          "A full year of consistent weekly publishing",
          "A reusable template library the client's team can run independently",
          "A cleaner, more recognizable feed across every campaign",
        ],
        services: ["Social Media", "Graphic Design"],
      },
      {
        slug: "sun-motors-branding",
        categories: ["branding"],
        title: "Sun Motors Georgia — Branding",
        client: "Sun Motors Georgia",
        year: "2023",
        tagline: "A sharper identity for a growing retail network.",
        summary:
          "A refreshed visual identity — logo refinement, color system, and brand guidelines — built to scale across stores, vehicles, and digital channels.",
        challenge:
          "The existing identity had grown inconsistent across locations and materials, diluting brand recognition as the network expanded.",
        approach: [
          "Refined the logo mark for clarity at small sizes and on vehicle livery",
          "Defined a strict color and typography system",
          "Documented usage rules in a lightweight brand guide",
        ],
        results: [
          "One consistent identity applied across every location",
          "A brand guide the team still references today",
          "A visual foundation the social media system was later built on",
        ],
        services: ["Branding", "Graphic Design"],
      },
      {
        slug: "alcorium-social-ads",
        categories: ["social"],
        title: "Alcorium — Social Media & Ads",
        client: "Alcorium",
        year: "2023",
        tagline: "Seasonal spirits campaigns that actually move product.",
        summary:
          "Ongoing paid and organic social creative for a leading wine & spirits retailer, built around seasonal promotions and new arrivals.",
        challenge:
          "Spirits promotions are highly seasonal and price-sensitive — creative needed to turn around fast while still feeling premium.",
        approach: [
          "Built a fast production pipeline for weekly promo creative",
          "Layered seasonal art direction onto a consistent grid",
          "Ran paid social alongside organic to extend reach during key periods",
        ],
        results: [
          "Weekly promotional creative shipped without missing a cycle",
          "A recognizable seasonal visual language across the year",
          "Paid and organic content sharing one production system",
        ],
        services: ["Social Media", "Paid Media"],
      },
      {
        slug: "alcorium-posters",
        categories: ["branding"],
        title: "Alcorium — In-Store Posters",
        client: "Alcorium",
        year: "2024",
        tagline: "Taking the digital campaign system into physical stores.",
        summary:
          "Print-ready poster series extending Alcorium's seasonal campaigns from social feeds into storefronts and shelf displays.",
        challenge:
          "The brand's digital campaigns needed a print-ready counterpart that held up at poster size without a separate design process.",
        approach: [
          "Adapted the existing social art direction for large-format print",
          "Built templates for quick swaps between seasonal campaigns",
          "Prepared print-ready files across store formats",
        ],
        results: [
          "A unified look between in-store and social campaigns",
          "Faster turnaround for new seasonal print runs",
          "Reusable poster templates for future campaigns",
        ],
        services: ["Graphic Design", "Branding"],
      },
      {
        slug: "erty-branding",
        categories: ["branding"],
        title: "Erty — Brand Identity",
        client: "Erty",
        year: "2023",
        tagline: "Finding your one, told through a single confident mark.",
        summary:
          "A full brand identity — logotype, mark, and packaging direction — for a lifestyle brand built around individuality.",
        challenge:
          "The brand needed an identity flexible enough to work across packaging, posters, and digital, while staying instantly recognizable.",
        approach: [
          "Designed a bold logotype built around the brand's core message",
          "Extended the mark onto physical packaging and material textures",
          "Built a poster system for campaign rollouts",
        ],
        results: [
          "A single identity system spanning packaging to social",
          "A distinct visual voice in a crowded category",
          "A flexible poster system reused across later campaigns",
        ],
        services: ["Branding", "Graphic Design"],
      },
      {
        slug: "martivi-digital-website",
        categories: ["web"],
        title: "Martivi Digital — Website",
        client: "Martivi Digital",
        year: "2024",
        tagline: "Our own front door, rebuilt to match the work.",
        summary:
          "The agency's own website — portfolio, services, and brand story — designed and built in-house to reflect the studio's own standards.",
        challenge:
          "An agency's own site is the hardest client brief there is: no external deadline, and every visitor is judging the craft directly.",
        approach: [
          "Designed a bold, high-contrast identity system",
          "Built a filterable portfolio to showcase work across every service",
          "Shipped a fast, modern site with smooth in-page motion",
        ],
        results: [
          "A live portfolio the studio could point new clients to directly",
          "A reusable design system for future case studies",
          "A faster, lighter site than the previous version",
        ],
        services: ["Web Development", "Branding"],
      },
      {
        slug: "georgia-is-europe",
        categories: ["motion", "social"],
        title: "Georgia is Europe — Campaign",
        client: "Civic Campaign",
        year: "2023",
        tagline: "A civic message, made shareable.",
        summary:
          "Motion graphics and social content for a civic awareness campaign built around Georgia's European identity.",
        challenge:
          "Civic messaging needs to travel fast on social feeds without feeling like a lecture — it has to earn attention on its own merits.",
        approach: [
          "Designed a simple, flag-inspired visual motif that read instantly",
          "Produced short motion loops sized for every major platform",
          "Kept messaging short enough to work with sound off",
        ],
        results: [
          "A visual motif that stayed consistent across every post",
          "Motion content built for silent, scroll-first viewing",
          "A campaign look distinct from typical civic messaging",
        ],
        services: ["Motion Graphics", "Social Media"],
      },
      {
        slug: "whisky-house-of-the-month",
        categories: ["social"],
        title: "Whisky House — Whisky of the Month",
        client: "Whisky House",
        year: "2024",
        tagline: "A monthly ritual, told one bottle at a time.",
        summary:
          "A recurring monthly content series spotlighting a featured bottle, built to give a specialty retailer a reason to post every month.",
        challenge:
          "Specialty retail needs recurring content that feels editorial, not just promotional, to keep a niche audience engaged month over month.",
        approach: [
          "Designed a consistent monthly feature format and template",
          "Paired product photography direction with tasting-note style copy",
          "Built the series to be run independently after handoff",
        ],
        results: [
          "A recurring monthly series still running today",
          "A more editorial, less purely promotional feed",
          "A repeatable format the client's team maintains in-house",
        ],
        services: ["Social Media", "Graphic Design"],
      },
      {
        slug: "autodesk-reseller-social",
        categories: ["social"],
        title: "Autodesk — Reseller Social Media",
        client: "Autodesk (Regional Reseller)",
        year: "2024",
        tagline: "Enterprise software, made approachable on social.",
        summary:
          "Localized social content for an authorized regional reseller, translating enterprise software messaging into approachable, local-market content.",
        challenge:
          "Enterprise software marketing rarely translates well to social — the message needed to stay credible while becoming genuinely scroll-stopping.",
        approach: [
          "Localized global campaign messaging for the regional audience",
          "Simplified product messaging into social-first formats",
          "Kept visual language consistent with Autodesk's own brand system",
        ],
        results: [
          "A locally relevant feed aligned with global brand standards",
          "Clearer product messaging for a non-technical audience",
          "A consistent publishing cadence through the partnership",
        ],
        services: ["Social Media", "Graphic Design"],
      },
    ],
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
