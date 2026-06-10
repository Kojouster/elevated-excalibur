// Translations for the new homepage / corporate sections.
// Kept in one file so EN and SK structures stay perfectly aligned.

export type HomeLocale = {
  hero: {
    eyebrow: string;
    title1: string;
    titleAccent: string;
    title2: string;
    description: string;
    ctaInquiry: string;
    ctaCapabilities: string;
    badges: string[];
    scroll: string;
  };
  company: {
    eyebrow: string;
    title1: string;
    titleAccent: string;
    description: string;
    pillars: { title: string; text: string }[];
  };
  capabilities: {
    eyebrow: string;
    title1: string;
    titleAccent: string;
    description: string;
    tabs: {
      id: string;
      label: string;
      title: string;
      body: string;
      bullets: string[];
    }[];
  };
  compliance: {
    eyebrow: string;
    title1: string;
    titleAccent: string;
    intro1: string;
    intro2: string;
    items: { title: string; body: string }[];
    license: {
      eyebrow: string;
      holder: string;
      permitTitle: string;
      issuingAuthority: string;
      issuingAuthorityValue: string;
      permitNumber: string;
      holderLabel: string;
      companyDetails: string;
      companyId: string;
      taxId: string;
      registeredAddress: string;
      registeredAddressValue: string;
      scope: string;
      scopeItems: string[];
      notes: string;
      notesBody: string;
    };
  };
  trust: {
    eyebrow: string;
    title1: string;
    titleAccent: string;
    stats: { value: number | string; suffix: string; label: string; raw?: boolean }[];
    milestones: { year: string; text: string }[];
  };
  faq: {
    eyebrow: string;
    title1: string;
    titleAccent: string;
    description: string;
    items: { q: string; a: string }[];
  };
  navbar: {
    capabilitiesAria: string;
  };
  footer: {
    capabilities: string;
    militarySales: string;
    exportOps: string;
    importOps: string;
    compliance: string;
  };
};
    capabilities: string;
    militarySales: string;
    exportOps: string;
    importOps: string;
    compliance: string;
  };
};

export const homeEN: HomeLocale = {
  hero: {
    eyebrow: "Established 2000 · Slovak Republic",
    title1: "27+ Years in ",
    titleAccent: "Military Sales",
    title2: "and International Trade",
    description:
      "PALVAN delivers decades of experience in military sales, export, and import activities, supported by the necessary documentation, permits, and licenses required for regulated international operations.",
    ctaInquiry: "Make an Inquiry",
    ctaCapabilities: "Our Capabilities",
    badges: ["27+ Years Experience", "Export & Import", "Licensed & Documented"],
    scroll: "Scroll",
  },
  company: {
    eyebrow: "Company",
    title1: "Trusted Experience in ",
    titleAccent: "Military Export and Import",
    description:
      "PALVAN is a Slovakia-based company operating in the defence sector since 2000. Over more than two decades, we have built a reputation as a reliable, discreet, and professional partner for institutional clients engaged in regulated international trade.",
    pillars: [
      {
        title: "Established 2000",
        text: "A Slovak Republic–based company operating continuously in the defence sector for more than two decades.",
      },
      {
        title: "International Reach",
        text: "Cross-border experience covering both export and import operations for institutional clients.",
      },
      {
        title: "Trusted Partner",
        text: "Long-standing relationships built on discretion, reliability, and professional handling of every engagement.",
      },
      {
        title: "Regulated Operations",
        text: "All activities conducted in accordance with applicable national and international regulations.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Capabilities",
    title1: "Military Sales, ",
    titleAccent: "Export & Import",
    description:
      "A focused service offering built around the realities of regulated international defence trade. Each capability is delivered with the documentation, oversight, and professionalism the sector requires.",
    tabs: [
      {
        id: "sales",
        label: "Military Sales",
        title: "Professional Military Sales",
        body: "We support institutional clients through every stage of a regulated sale — from initial requirement and sourcing to contract execution and handover. Each engagement is handled with discretion, full documentation, and adherence to applicable end-use requirements.",
        bullets: [
          "Requirement analysis and sourcing",
          "Contract structuring and negotiation",
          "End-user verification and documentation",
          "Discreet handling of sensitive engagements",
        ],
      },
      {
        id: "export",
        label: "Export Operations",
        title: "Cross-Border Export",
        body: "PALVAN manages export operations in line with applicable Slovak, EU, and international rules. We coordinate licensing, logistics, and compliance documentation so that cross-border movement is conducted lawfully and on schedule.",
        bullets: [
          "Export license preparation and filing",
          "Customs and freight coordination",
          "Compliance documentation and traceability",
          "Coordination with national authorities",
        ],
      },
      {
        id: "import",
        label: "Import Operations",
        title: "Regulated Import",
        body: "Our import workflow combines technical understanding with regulatory expertise. We handle the full lifecycle of an import operation, including documentation, customs interaction, and delivery to authorized recipients.",
        bullets: [
          "Import authorization and clearance",
          "Technical and regulatory pre-checks",
          "Authorized recipient verification",
          "Secure logistics planning",
        ],
      },
      {
        id: "advisory",
        label: "Advisory",
        title: "Sector Advisory",
        body: "Drawing on more than 27 years in the field, we advise clients on feasibility, regulatory exposure, and the practical realities of operating in a regulated international market.",
        bullets: [
          "Feasibility and market assessment",
          "Regulatory exposure analysis",
          "Counterparty due diligence",
          "Strategic transaction planning",
        ],
      },
    ],
  },
  compliance: {
    eyebrow: "Compliance",
    title1: "Professional, Licensed, and ",
    titleAccent: "Documented",
    intro1:
      "PALVAN has more than 27 years of experience in military sales, including export and import operations, and operates with all necessary documentation, permits, and licenses required by applicable regulations.",
    intro2: "Compliance is not an add-on — it is the foundation on which every engagement is structured.",
    items: [
      {
        title: "Permits, Licenses & Documentation",
        body: "PALVAN operates with the necessary documentation, permits, and licenses required for activities in the defence and regulated-trade sector. All operations are conducted in line with applicable Slovak, EU, and international rules.",
      },
      {
        title: "End-User Verification",
        body: "Every engagement includes appropriate end-user verification and documentation. We work only with authorized counterparties and decline activity that does not meet our compliance standards.",
      },
      {
        title: "Confidentiality & Discretion",
        body: "Information shared with PALVAN is treated with strict confidentiality. Internal handling, communications, and record-keeping are aligned with the sensitivity of the sector we operate in.",
      },
      {
        title: "Responsible Operations",
        body: "We take a long-term view of our role in the market. Decisions are made on the basis of legality, reliability, and professional responsibility — not short-term opportunity.",
      },
    ],
    license: {
      eyebrow: "License Record",
      holder: "Pal.Van., s.r.o.",
      permitTitle: "Permit for Trading in Defence Industry Products",
      issuingAuthority: "Issuing Authority",
      issuingAuthorityValue: "Ministry of Economy of the Slovak Republic",
      permitNumber: "Permit Number",
      holderLabel: "Holder",
      companyDetails: "Company Details",
      companyId: "Company ID",
      taxId: "Tax ID",
      registeredAddress: "Registered Address",
      registeredAddressValue: "Južná trieda 82B, 040 17 Košice – Juh, Slovakia",
      scope: "Scope of Authorization",
      scopeItems: [
        "Domestic trade in defence industry products",
        "Foreign trade activity",
        "Transfer of defence industry products",
        "Brokerage activity",
      ],
      notes: "Compliance Notes",
      notesBody:
        "All activities under this permit are conducted in accordance with Slovak Act No. 392/2011 Coll. on trading in defence industry products and the related reporting obligations toward the competent authorities of the Slovak Republic.",
    },
  },
  trust: {
    eyebrow: "Track Record",
    title1: "A Long-Standing Presence in a ",
    titleAccent: "Serious Industry",
    stats: [
      { value: 27, suffix: "+", label: "Years of Experience" },
      { value: 2000, suffix: "", label: "Established Since", raw: true },
      { value: 100, suffix: "%", label: "Documented Operations" },
    ],
    milestones: [
      { year: "2000", text: "PALVAN founded in the Slovak Republic." },
      { year: "2005", text: "Expansion into international military trade operations." },
      { year: "2015", text: "Established long-term cross-border export and import workflows." },
      { year: "Today", text: "27+ years of continuous activity in the regulated defence sector." },
    ],
  },
  navbar: { capabilitiesAria: "Capabilities" },
  footer: {
    capabilities: "Capabilities",
    militarySales: "Military Sales",
    exportOps: "Export Operations",
    importOps: "Import Operations",
    compliance: "Compliance",
  },
};

export const homeSK: HomeLocale = {
  hero: {
    eyebrow: "Založené v roku 2000 · Slovenská republika",
    title1: "27+ rokov v ",
    titleAccent: "predaji vojenskej techniky",
    title2: "a medzinárodnom obchode",
    description:
      "PALVAN prináša desaťročia skúseností v predaji, vývoze a dovoze vojenskej techniky, podporené potrebnou dokumentáciou, povoleniami a licenciami požadovanými pre regulované medzinárodné operácie.",
    ctaInquiry: "Poslať dopyt",
    ctaCapabilities: "Naše schopnosti",
    badges: ["27+ rokov skúseností", "Vývoz a dovoz", "Licencované a zdokumentované"],
    scroll: "Posunúť",
  },
  company: {
    eyebrow: "Spoločnosť",
    title1: "Overené skúsenosti vo ",
    titleAccent: "vývoze a dovoze vojenskej techniky",
    description:
      "PALVAN je spoločnosť so sídlom na Slovensku, ktorá pôsobí v obrannom sektore od roku 2000. Za viac ako dve desaťročia sme si vybudovali povesť spoľahlivého, diskrétneho a profesionálneho partnera pre inštitucionálnych klientov v regulovanom medzinárodnom obchode.",
    pillars: [
      {
        title: "Založené v roku 2000",
        text: "Spoločnosť so sídlom v Slovenskej republike nepretržite pôsobiaca v obrannom sektore viac ako dve desaťročia.",
      },
      {
        title: "Medzinárodný dosah",
        text: "Cezhraničné skúsenosti pokrývajúce vývozné aj dovozné operácie pre inštitucionálnych klientov.",
      },
      {
        title: "Dôveryhodný partner",
        text: "Dlhoročné vzťahy postavené na diskrétnosti, spoľahlivosti a profesionálnom prístupe ku každému prípadu.",
      },
      {
        title: "Regulovaná činnosť",
        text: "Všetky aktivity prebiehajú v súlade s platnými národnými a medzinárodnými predpismi.",
      },
    ],
  },
  capabilities: {
    eyebrow: "Schopnosti",
    title1: "Predaj vojenskej techniky, ",
    titleAccent: "vývoz a dovoz",
    description:
      "Cielená ponuka služieb postavená na realitách regulovaného medzinárodného obranného obchodu. Každá schopnosť je poskytovaná s dokumentáciou, dohľadom a profesionalitou, aké sektor vyžaduje.",
    tabs: [
      {
        id: "sales",
        label: "Predaj vojenskej techniky",
        title: "Profesionálny predaj vojenskej techniky",
        body: "Podporujeme inštitucionálnych klientov vo všetkých fázach regulovaného predaja — od úvodnej požiadavky a vyhľadávania až po realizáciu zmluvy a odovzdanie. Každý prípad je riešený s diskrétnosťou, kompletnou dokumentáciou a dodržaním požiadaviek na koncové použitie.",
        bullets: [
          "Analýza požiadaviek a vyhľadanie dodávateľa",
          "Štruktúrovanie a vyjednávanie zmlúv",
          "Overenie koncového používateľa a dokumentácia",
          "Diskrétne riešenie citlivých prípadov",
        ],
      },
      {
        id: "export",
        label: "Vývozné operácie",
        title: "Cezhraničný vývoz",
        body: "PALVAN riadi vývozné operácie v súlade s platnými slovenskými, európskymi a medzinárodnými pravidlami. Koordinujeme licencovanie, logistiku a dokumentáciu k súladu tak, aby cezhraničný pohyb prebehol legálne a načas.",
        bullets: [
          "Príprava a podanie vývoznej licencie",
          "Colná a prepravná koordinácia",
          "Dokumentácia súladu a sledovateľnosť",
          "Súčinnosť s národnými orgánmi",
        ],
      },
      {
        id: "import",
        label: "Dovozné operácie",
        title: "Regulovaný dovoz",
        body: "Náš dovozný proces spája technické porozumenie s regulačnou odbornosťou. Pokrývame celý životný cyklus dovoznej operácie vrátane dokumentácie, komunikácie s colnými orgánmi a doručenia autorizovaným príjemcom.",
        bullets: [
          "Dovozné povolenie a colné odbavenie",
          "Technické a regulačné preverenie",
          "Overenie autorizovaného príjemcu",
          "Plánovanie bezpečnej logistiky",
        ],
      },
      {
        id: "advisory",
        label: "Poradenstvo",
        title: "Odborné poradenstvo",
        body: "Vďaka viac ako 27 rokom v odvetví radíme klientom v otázkach realizovateľnosti, regulačného rizika a praktických aspektov fungovania na regulovanom medzinárodnom trhu.",
        bullets: [
          "Posúdenie realizovateľnosti a trhu",
          "Analýza regulačného rizika",
          "Previerka protistrán",
          "Strategické plánovanie transakcií",
        ],
      },
    ],
  },
  compliance: {
    eyebrow: "Súlad",
    title1: "Profesionálne, licencované a ",
    titleAccent: "zdokumentované",
    intro1:
      "PALVAN má viac ako 27 rokov skúseností v predaji vojenskej techniky vrátane vývozných a dovozných operácií a disponuje všetkou potrebnou dokumentáciou, povoleniami a licenciami požadovanými platnými predpismi.",
    intro2: "Súlad nie je doplnok — je to základ, na ktorom je postavený každý prípad.",
    items: [
      {
        title: "Povolenia, licencie a dokumentácia",
        body: "PALVAN disponuje potrebnou dokumentáciou, povoleniami a licenciami pre činnosti v obrannom a regulovanom sektore. Všetky operácie prebiehajú v súlade s platnými slovenskými, európskymi a medzinárodnými pravidlami.",
      },
      {
        title: "Overenie koncového používateľa",
        body: "Súčasťou každého prípadu je primerané overenie koncového používateľa a dokumentácia. Spolupracujeme výhradne s autorizovanými protistranami a odmietame činnosti, ktoré nespĺňajú naše štandardy súladu.",
      },
      {
        title: "Dôvernosť a diskrétnosť",
        body: "Informácie zdieľané so spoločnosťou PALVAN sú spracovávané s prísnou dôvernosťou. Interné spracovanie, komunikácia a evidencia sú prispôsobené citlivosti sektora, v ktorom pôsobíme.",
      },
      {
        title: "Zodpovedná činnosť",
        body: "Na svoju úlohu na trhu sa pozeráme z dlhodobého hľadiska. Rozhodnutia robíme na základe zákonnosti, spoľahlivosti a profesionálnej zodpovednosti — nie krátkodobej príležitosti.",
      },
    ],
    license: {
      eyebrow: "Licenčný záznam",
      holder: "Pal.Van., s.r.o.",
      permitTitle: "Povolenie na obchodovanie s výrobkami obranného priemyslu",
      issuingAuthority: "Vydávajúci orgán",
      issuingAuthorityValue: "Ministerstvo hospodárstva Slovenskej republiky",
      permitNumber: "Číslo povolenia",
      holderLabel: "Držiteľ",
      companyDetails: "Firemné údaje",
      companyId: "IČO",
      taxId: "IČ DPH",
      registeredAddress: "Sídlo",
      registeredAddressValue: "Južná trieda 82B, 040 17 Košice – Juh, Slovensko",
      scope: "Rozsah oprávnenia",
      scopeItems: [
        "Domáci obchod s výrobkami obranného priemyslu",
        "Zahraničnoobchodná činnosť",
        "Transfer výrobkov obranného priemyslu",
        "Sprostredkovateľská činnosť",
      ],
      notes: "Poznámky k súladu",
      notesBody:
        "Všetky činnosti v rámci tohto povolenia sú vykonávané v súlade so slovenským zákonom č. 392/2011 Z. z. o obchodovaní s výrobkami obranného priemyslu a so súvisiacimi oznamovacími povinnosťami voči príslušným orgánom Slovenskej republiky.",
    },
  },
  trust: {
    eyebrow: "Naša história",
    title1: "Dlhodobá prítomnosť vo ",
    titleAccent: "vážnom odvetví",
    stats: [
      { value: 27, suffix: "+", label: "Rokov skúseností" },
      { value: 2000, suffix: "", label: "Pôsobíme od roku", raw: true },
      { value: 100, suffix: "%", label: "Zdokumentovaných operácií" },
    ],
    milestones: [
      { year: "2000", text: "Založenie spoločnosti PALVAN v Slovenskej republike." },
      { year: "2005", text: "Expanzia do medzinárodných operácií v oblasti vojenského obchodu." },
      { year: "2015", text: "Vybudovanie dlhodobých cezhraničných vývozných a dovozných procesov." },
      { year: "Dnes", text: "27+ rokov nepretržitej činnosti v regulovanom obrannom sektore." },
    ],
  },
  navbar: { capabilitiesAria: "Schopnosti" },
  footer: {
    capabilities: "Schopnosti",
    militarySales: "Predaj vojenskej techniky",
    exportOps: "Vývozné operácie",
    importOps: "Dovozné operácie",
    compliance: "Súlad",
  },
};

export const homeContent: Record<"en" | "sk", HomeLocale> = {
  en: homeEN,
  sk: homeSK,
};
