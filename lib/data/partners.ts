export interface TechPartner {
  name: string;
  href: string;
  logo: string;
}

export interface BrandPartner {
  name: string;
  href?: string;
}

export const techPartners: TechPartner[] = [
  { name: "Cisco", href: "https://www.cisco.com", logo: "/logos/cisco.svg" },
  { name: "Dell Technologies", href: "https://www.dell.com", logo: "/logos/dell.svg" },
  { name: "VMware", href: "https://www.vmware.com", logo: "/logos/vmware.svg" },
  { name: "Autodesk", href: "https://www.autodesk.com", logo: "/logos/autodesk.svg" },
];

export const brandPartnersRowOne: BrandPartner[] = [
  { name: "Heineken", href: "https://www.heineken.com" },
  { name: "Henkel", href: "https://www.henkel.com" },
  { name: "Moët Hennessy", href: "https://www.moethennessy.com" },
  { name: "Microsoft", href: "https://www.microsoft.com" },
  { name: "ESET", href: "https://www.eset.com" },
  { name: "Oreo", href: "https://www.oreo.com" },
  { name: "Milka", href: "https://www.milka.com" },
  { name: "Alpen Gold" },
  { name: "Dirol" },
  { name: "Hewlett Packard Enterprise", href: "https://www.hpe.com" },
];

export const brandPartnersRowTwo: BrandPartner[] = [
  { name: "Dom Pérignon", href: "https://www.domperignon.com" },
  { name: "Veuve Clicquot", href: "https://www.veuveclicquot.com" },
  { name: "Whisky House" },
  { name: "Jägermeister", href: "https://www.jagermeister.com" },
  { name: "Jack Daniel's", href: "https://www.jackdaniels.com" },
  { name: "Baileys", href: "https://www.baileys.com" },
  { name: "Glenfiddich", href: "https://www.glenfiddich.com" },
  { name: "Martini", href: "https://www.martini.com" },
  { name: "Patrón", href: "https://www.patrontequila.com" },
  { name: "Finlandia", href: "https://www.finlandiavodka.com" },
  { name: "Softline Georgia", href: "http://www.softline.com.ge" },
  { name: "TrueData" },
  { name: "Sun Motors Georgia" },
  { name: "Alcorium" },
];
