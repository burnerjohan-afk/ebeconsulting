export type ClientLogo = {
  name: string;
  logo: string;
  /** Affiché uniquement dans « Expériences et collaborations » */
  trustOnly?: boolean;
};

export const clientLogos: ClientLogo[] = [
  { name: "Neodisplay", logo: "/image/neodisplay.jpg" },
  { name: "SELECT Service", logo: "/image/select logo.png" },
  { name: "FlowLab", logo: "/image/flowlab.png" },
  { name: "Evolya", logo: "/image/evolya.png" },
  { name: "Semas", logo: "/image/semas.png" },
  { name: "Securidom", logo: "/image/securidom.png", trustOnly: true },
  { name: "APS", logo: "/image/aps.png", trustOnly: true },
];

export const trustSectionLogos = clientLogos;

export const testimonialLogos = Object.fromEntries(
  clientLogos
    .filter((client) => !client.trustOnly)
    .map((client) => [client.name, client.logo])
);
