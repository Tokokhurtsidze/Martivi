export interface ProjectPalette {
  bg: string;
  fg: string;
  accent: string;
}

export const palettes = {
  ink: { bg: "#0e0c08", fg: "#f3ecdd", accent: "#eab84e" },
  teal: { bg: "#0b3d39", fg: "#eafffb", accent: "#35e6cf" },
  amber: { bg: "#a15a1c", fg: "#fff3e2", accent: "#201404" },
  crimson: { bg: "#7a1620", fg: "#fbe9ea", accent: "#eab84e" },
  umber: { bg: "#4a2e1d", fg: "#f3e6d8", accent: "#e8b64a" },
  slate: { bg: "#2a2f36", fg: "#eef1f3", accent: "#6fe0d0" },
  plum: { bg: "#3a1f3d", fg: "#f3e6f5", accent: "#e8b64a" },
} satisfies Record<string, ProjectPalette>;

export interface ProjectMeta {
  palette: ProjectPalette;
  coverKind: 0 | 1 | 2 | 3;
}

export const projectsMeta: Record<string, ProjectMeta> = {
  "sun-motors-social-media": { palette: palettes.amber, coverKind: 0 },
  "sun-motors-branding": { palette: palettes.ink, coverKind: 1 },
  "alcorium-social-ads": { palette: palettes.crimson, coverKind: 2 },
  "alcorium-posters": { palette: palettes.slate, coverKind: 3 },
  "erty-branding": { palette: palettes.umber, coverKind: 0 },
  "martivi-digital-website": { palette: palettes.ink, coverKind: 1 },
  "georgia-is-europe": { palette: palettes.teal, coverKind: 2 },
  "whisky-house-of-the-month": { palette: palettes.plum, coverKind: 3 },
  "autodesk-reseller-social": { palette: palettes.slate, coverKind: 0 },
};
