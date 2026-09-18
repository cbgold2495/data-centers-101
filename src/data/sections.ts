export interface SectionMeta {
  slug: string;
  number: string;
  navLabel: string;
  title: string;
  dek: string;
}

export const sections: SectionMeta[] = [
  {
    slug: 'structural-stack',
    number: '01',
    navLabel: 'Structural Stack',
    title: 'The structural stack',
    dek: 'Data centers, neoclouds, hyperscalers, and inference clouds — who owns what, and how the layers connect.',
  },
  {
    slug: 'gpu-models',
    number: '02',
    navLabel: 'GPU Models',
    title: 'GPU models',
    dek: 'What GPUs are, why they run AI, and how the NVIDIA lineup, AMD, and custom silicon compare.',
  },
  {
    slug: 'token-economics',
    number: '03',
    navLabel: 'Token Economics',
    title: 'Token economics',
    dek: 'How inference is priced, why prices have collapsed 10x a year, and why that doesn’t always mean cheaper AI.',
  },
  {
    slug: 'power-energy',
    number: '04',
    navLabel: 'Power & Energy',
    title: 'Power & energy',
    dek: 'Why electricity, not chips, is now the binding constraint on AI buildout.',
  },
  {
    slug: 'supply-chain',
    number: '05',
    navLabel: 'Supply Chain',
    title: 'Supply chain',
    dek: 'From chip design to a finished GPU — TSMC, ASML, HBM makers, and why export controls exist.',
  },
  {
    slug: 'financing',
    number: '06',
    navLabel: 'Financing',
    title: 'Financing',
    dek: 'How a multi-trillion-dollar buildout gets paid for, and why circular deals worry some economists.',
  },
];

export const glossary = {
  slug: 'glossary',
  navLabel: 'Glossary',
  title: 'Glossary',
  dek: 'Every term used across the site, defined in one place.',
};

export const companyMap = {
  slug: 'companies',
  navLabel: 'Company Map',
  title: 'Company map',
  dek: 'Every company mentioned on this site, mapped to the layer(s) it operates in.',
};
