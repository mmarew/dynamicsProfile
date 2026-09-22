import type { CorridorData } from "@/components/corridors/corridor-page"

const standardVehicles = [
  {
    name: "Light Truck (up to 35 q)",
    capacity: "35 quintals",
    bestFor: "Small and light bulk cargo, urban transfer",
    icon: "LT",
  },
  {
    name: "Medium Truck (up to 100 q)",
    capacity: "100 quintals",
    bestFor: "Bulk cargo including grains, cement, and general freight",
    icon: "M100",
  },
  {
    name: "Heavy Truck (125–175 q)",
    capacity: "175 quintals",
    bestFor: "Heavy bulk cargo or a 20ft container",
    icon: "HT",
  },
  {
    name: "2×20ft / 40ft Container (351–400 q)",
    capacity: "400 quintals",
    bestFor: "2×20ft or 1×40ft ISO containers",
    icon: "40FT",
  },
]

const defaultHowItWorks = [
  {
    title: "Post a Load",
    description: "Enter pickup, destination, cargo weight in quintals, and preferred vehicle from the app or website.",
  },
  {
    title: "Get Matched",
    description: "Verified drivers bid on your load. Compare price, rating, and vehicle and pick the best offer.",
  },
  {
    title: "Track in Real Time",
    description: "Follow your truck on GPS from loading to delivery. Know exactly where your cargo is.",
  },
  {
    title: "Deliver",
    description: "Confirm arrival and delivery. Sign off, rate the driver, and pay directly upon delivery.",
  },
  {
    title: "Pay Directly",
    description: "Pay the driver in cash, by bank transfer (CBE, Dashen), or via Telebirr. No hidden platform fees.",
  },
]

const coreFaqs = [
  {
    question: "What documentation do I need to ship cargo?",
    answer:
      "For domestic transport inside Ethiopia you generally need a waybill for the cargo and the vehicle's registration and insurance. For cross-border routes to Djibouti, customs documentation (transit declaration, invoice, and packing list) is handled with a clearing agent.",
  },
  {
    question: "Is my cargo insured during transport?",
    answer:
      "Insurance is the shipper's responsibility unless arranged separately. We recommend cargo insurance for high-value goods. Drivers are verified with valid registration and insurance status, and you can add your own cargo insurance before dispatch.",
  },
  {
    question: "How do I pay the driver?",
    answer:
      "You pay the driver directly once the load is delivered — in cash, by bank transfer (CBE, Dashen), or via Telebirr mobile money. The platform is free during launch and never takes a cut of what you pay the driver.",
  },
  {
    question: "How is the price determined?",
    answer:
      "Through competitive bidding. When you post a load, verified drivers submit their proposed prices and you choose the best offer based on price, ratings, and vehicle. There is no fixed price — you stay in control.",
  },
]

export const corridors: CorridorData[] = [
  {
    slug: "/addis-to-djibouti",
    title: "Addis Ababa to Djibouti Freight | Container Truck Hire | DTC",
    metaTitle: "Addis Ababa to Djibouti Freight | Container Truck Hire | DTC",
    metaDescription:
      "Book container trucks from Addis Ababa to Djibouti Port. Real-time tracking, verified drivers, Telebirr payment. Post your load today.",
    h1: "Addis Ababa to Djibouti Freight Transport",
    intro:
      "Move containers and bulk cargo from Addis Ababa to Djibouti Port on the corridor that carries over 90% of Ethiopia's trade. Post a load and verified drivers bid on it — you pick the best offer.",
    distance: "~870 km by road",
    transitTime: "2–3 days",
    corridorName: "Addis Ababa – Djibouti",
    endpoints: { from: "Addis Ababa", to: "Djibouti Port" },
    vehicles: [
      {
        name: "Heavy Truck (125–175 q)",
        capacity: "175 quintals",
        bestFor: "Bulk cargo or one 20ft container",
        icon: "HT",
      },
      {
        name: "Extra Heavy Truck (176–250 q)",
        capacity: "250 quintals",
        bestFor: "Heavy bulk cargo or ISO containers",
        icon: "EHT",
      },
      {
        name: "20ft Container Truck (251–300 q)",
        capacity: "300 quintals",
        bestFor: "20ft container (cassoni) or bulk",
        icon: "20FT",
      },
      {
        name: "2×20ft / 40ft Container (351–400 q)",
        capacity: "400 quintals",
        bestFor: "2×20ft or 1×40ft ISO containers",
        icon: "40FT",
      },
    ],
    priceNote:
      "Rates vary by cargo weight, container size, and season. These are typical ranges to guide your budgeting — post a load to receive exact bids.",
    priceRows: [
      { route: "Addis Ababa → Djibouti City", typical: "contact for quote" },
      { route: "Djibouti Port → Addis Ababa", typical: "contact for quote" },
      { route: "40ft container (single trip)", typical: "contact for quote" },
      { route: "Bulk cargo per quintal", typical: "contact for quote" },
    ],
    howItWorks: defaultHowItWorks,
    faqs: [
      {
        question: "How long does Addis–Djibouti freight take?",
        answer:
          "By road, the ~870 km trip takes about 2–3 days for a truck, depending on customs clearance at the border and congestion. The railway is faster for containers, but road freight gives flexible door-to-door pickup and delivery.",
      },
      {
        question: "What customs clearance is needed at Djibouti?",
        answer:
          "Export and import cargo through Djibouti Port is cleared by licensed clearing agents against the invoice and packing list, plus the transit declaration where applicable. DTC matches you with drivers; customs brokerage is handled by your clearing agent.",
      },
      ...coreFaqs.slice(1),
    ],
    internalLinks: [
      { label: "For Shippers", href: "/for-shippers" },
      { label: "Container Transport", href: "/container-transport" },
      { label: "Addis to Adama", href: "/addis-to-adama" },
      { label: "Addis to Hawassa", href: "/addis-to-hawassa" },
    ],
  },
  {
    slug: "/addis-to-adama",
    title: "Addis Ababa to Adama Freight | Truck Hire | DTC",
    metaTitle: "Addis Ababa to Adama Freight | Truck Hire | DTC",
    metaDescription:
      "Book freight trucks from Addis Ababa to Adama. Verified drivers, real-time GPS tracking, and competitive bidding. Post your load and receive quotes today.",
    h1: "Addis Ababa to Adama Freight Transport",
    intro:
      "Move cargo along the busy Addis–Adama corridor in under two hours. Light, medium, and heavy trucks available with competitive bidding and GPS tracking on every load.",
    distance: "~100 km by road",
    transitTime: "2–3 hours",
    corridorName: "Addis Ababa – Adama",
    endpoints: { from: "Addis Ababa", to: "Adama (Nazret)" },
    vehicles: [
      {
        name: "Light Truck (up to 35 q)",
        capacity: "35 quintals",
        bestFor: "Small business consignments",
        icon: "LT",
      },
      {
        name: "Medium Truck (up to 50 q)",
        capacity: "50 quintals",
        bestFor: "Regional cargo",
        icon: "MT",
      },
      {
        name: "Medium Truck (up to 100 q)",
        capacity: "100 quintals",
        bestFor: "Warehouse transfers and bulk",
        icon: "M100",
      },
      {
        name: "Heavy Truck (125–175 q)",
        capacity: "175 quintals",
        bestFor: "Heavy bulk or 20ft container",
        icon: "HT",
      },
    ],
    priceNote:
      "Short-corridor rates are typically very competitive. Post a load to receive exact bids from drivers on this route.",
    priceRows: [
      { route: "Addis Ababa → Adama", typical: "contact for quote" },
      { route: "Adama → Addis Ababa", typical: "contact for quote" },
      { route: "Light truck, full load", typical: "contact for quote" },
      { route: "Bulk cargo per quintal", typical: "contact for quote" },
    ],
    howItWorks: defaultHowItWorks,
    faqs: coreFaqs,
    internalLinks: [
      { label: "For Shippers", href: "/for-shippers" },
      { label: "Addis to Djibouti", href: "/addis-to-djibouti" },
      { label: "Modjo Dry Port", href: "/modjo-dry-port" },
      { label: "Kality Warehouse", href: "/kality-warehouse" },
    ],
  },
  {
    slug: "/dire-dawa-to-djibouti",
    title: "Dire Dawa to Djibouti Freight | Truck Hire | DTC",
    metaTitle: "Dire Dawa to Djibouti Freight | Truck Hire | DTC",
    metaDescription:
      "Move cargo from Dire Dawa to Djibouti Port with verified drivers. Competitive bidding, GPS tracking, Telebirr payment. Post your load now.",
    h1: "Dire Dawa to Djibouti Freight Transport",
    intro:
      "Ship containers and bulk cargo from the eastern trade hub of Dire Dawa to Djibouti Port. A major route for imports and exports with verified truck drivers on call.",
    distance: "~310 km by road",
    transitTime: "1–2 days",
    corridorName: "Dire Dawa – Djibouti",
    endpoints: { from: "Dire Dawa", to: "Djibouti Port" },
    vehicles: [
      {
        name: "Heavy Truck (125–175 q)",
        capacity: "175 quintals",
        bestFor: "Bulk cargo or one 20ft container",
        icon: "HT",
      },
      {
        name: "20ft Container Truck (251–300 q)",
        capacity: "300 quintals",
        bestFor: "20ft container (cassoni)",
        icon: "20FT",
      },
      {
        name: "2×20ft / 40ft Container (351–400 q)",
        capacity: "400 quintals",
        bestFor: "2×20ft or 1×40ft ISO containers",
        icon: "40FT",
      },
      {
        name: "Medium Truck (up to 100 q)",
        capacity: "100 quintals",
        bestFor: "Bulk regional cargo",
        icon: "M100",
      },
    ],
    priceNote:
      "Cross-border rates vary with container size and season. Post a load to receive exact bids from drivers on this route.",
    priceRows: [
      { route: "Dire Dawa → Djibouti City", typical: "contact for quote" },
      { route: "Djibouti Port → Dire Dawa", typical: "contact for quote" },
      { route: "40ft container (single trip)", typical: "contact for quote" },
      { route: "Bulk cargo per quintal", typical: "contact for quote" },
    ],
    howItWorks: defaultHowItWorks,
    faqs: [
      {
        question: "How long does Dire Dawa–Djibouti freight take?",
        answer:
          "The roughly 310 km trip normally takes 1–2 days including border formalities. Direct truck cover from pickup in Dire Dawa to delivery at Djibouti Port.",
      },
      ...coreFaqs.slice(1),
    ],
    internalLinks: [
      { label: "For Shippers", href: "/for-shippers" },
      { label: "Container Transport", href: "/container-transport" },
      { label: "Addis to Djibouti", href: "/addis-to-djibouti" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    slug: "/modjo-dry-port",
    title: "Modjo Dry Port Freight | Truck Hire | DTC",
    metaTitle: "Modjo Dry Port Freight | Truck Hire | DTC",
    metaDescription:
      "Book trucks to and from Modjo Dry Port — Ethiopia's inland container terminal. Container trucks, GPS tracking, verified drivers. Post your load today.",
    h1: "Modjo Dry Port Freight Transport",
    intro:
      "Connect your cargo to Modjo Dry Port, Ethiopia's largest inland container terminal. DTC matches you with verified container and flatbed trucks for pickup and delivery around the terminal.",
    distance: "~73 km from Addis Ababa",
    transitTime: "1–2 hours from Addis",
    corridorName: "Modjo Dry Port",
    endpoints: { from: "Addis Ababa / Nationwide", to: "Modjo Dry Port" },
    vehicles: [
      {
        name: "20ft Container Truck (251–300 q)",
        capacity: "300 quintals",
        bestFor: "20ft container (cassoni)",
        icon: "20FT",
      },
      {
        name: "2×20ft / 40ft Container (351–400 q)",
        capacity: "400 quintals",
        bestFor: "2×20ft or 1×40ft ISO containers",
        icon: "40FT",
      },
      {
        name: "Heavy Truck (125–175 q)",
        capacity: "175 quintals",
        bestFor: "Bulk cargo between warehouses",
        icon: "HT",
      },
      {
        name: "Medium Truck (up to 100 q)",
        capacity: "100 quintals",
        bestFor: "Bulk cargo to and from the terminal",
        icon: "M100",
      },
    ],
    priceNote:
      "Haulage to and from Modjo Dry Port is quoted per leg. Post a load to receive exact bids from container truck drivers.",
    priceRows: [
      { route: "Modjo Dry Port → Addis Ababa", typical: "contact for quote" },
      { route: "Addis Ababa → Modjo Dry Port", typical: "contact for quote" },
      { route: "20ft container haulage", typical: "contact for quote" },
      { route: "40ft container haulage", typical: "contact for quote" },
    ],
    howItWorks: defaultHowItWorks,
    faqs: coreFaqs,
    internalLinks: [
      { label: "For Shippers", href: "/for-shippers" },
      { label: "Container Transport", href: "/container-transport" },
      { label: "Addis to Djibouti", href: "/addis-to-djibouti" },
      { label: "Kality Warehouse", href: "/kality-warehouse" },
    ],
  },
  {
    slug: "/kality-warehouse",
    title: "Kality Warehouse Freight | Addis Truck Hire | DTC",
    metaTitle: "Kality Warehouse Freight | Addis Truck Hire | DTC",
    metaDescription:
      "Book trucks to and from Kality warehouse and industrial area in Addis Ababa. Verified drivers, GPS tracking, competitive bidding. Post your load now.",
    h1: "Kality Warehouse Freight Transport",
    intro:
      "Move cargo to and from Kality, Addis Ababa's key industrial and warehousing district. Quick urban and short-haul trucking with verified drivers at competitive prices.",
    distance: "Within Addis Ababa metro",
    transitTime: "1–2 hours typical",
    corridorName: "Kality, Addis Ababa",
    endpoints: { from: "Kality, Addis Ababa", to: "Anywhere in / around Addis" },
    vehicles: standardVehicles,
    priceNote:
      "Urban and suburban rates are posted per load. Post a load to receive exact bids from nearby verified drivers.",
    priceRows: [
      { route: "Kality → Addis city center", typical: "contact for quote" },
      { route: "Kality → Bole / Kaliti axis", typical: "contact for quote" },
      { route: "Kality → Modjo / Adama", typical: "contact for quote" },
      { route: "Warehouse-to-warehouse transfer", typical: "contact for quote" },
    ],
    howItWorks: defaultHowItWorks,
    faqs: coreFaqs,
    internalLinks: [
      { label: "For Shippers", href: "/for-shippers" },
      { label: "Modjo Dry Port", href: "/modjo-dry-port" },
      { label: "Addis to Adama", href: "/addis-to-adama" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    slug: "/addis-to-hawassa",
    title: "Addis Ababa to Hawassa Freight | Truck Hire | DTC",
    metaTitle: "Addis Ababa to Hawassa Freight | Truck Hire | DTC",
    metaDescription:
      "Book freight trucks from Addis Ababa to Hawassa. Verified drivers, competitive bidding, real-time GPS tracking, Telebirr payment. Post your load today.",
    h1: "Addis Ababa to Hawassa Freight Transport",
    intro:
      "Ship cargo to Hawassa, the industrial hub of the Sidama region, on the expressway from Addis Ababa. Move goods fast with verified drivers and live tracking.",
    distance: "~220 km by road",
    transitTime: "4–5 hours",
    corridorName: "Addis Ababa – Hawassa",
    endpoints: { from: "Addis Ababa", to: "Hawassa" },
    vehicles: standardVehicles,
    priceNote:
      "Rates depend on weight and vehicle type. Post a load to receive exact bids from drivers on this route.",
    priceRows: [
      { route: "Addis Ababa → Hawassa", typical: "contact for quote" },
      { route: "Hawassa → Addis Ababa", typical: "contact for quote" },
      { route: "Full truck load", typical: "contact for quote" },
      { route: "Bulk cargo per quintal", typical: "contact for quote" },
    ],
    howItWorks: defaultHowItWorks,
    faqs: coreFaqs,
    internalLinks: [
      { label: "For Shippers", href: "/for-shippers" },
      { label: "Addis to Adama", href: "/addis-to-adama" },
      { label: "Addis to Djibouti", href: "/addis-to-djibouti" },
      { label: "Services", href: "/services" },
    ],
  },
]

export const containerTransportData: {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
} = {
  slug: "/container-transport",
  title: "Container Transport Ethiopia | 20ft & 40ft Trucks | DTC",
  metaTitle: "Container Transport Ethiopia | 20ft & 40ft Truck Hire | DTC",
  metaDescription:
    "Book 20ft, 2×20ft and 40ft container trucks in Ethiopia and to Djibouti Port. Verified drivers, GPS tracking, and competitive bids. Post your container load now.",
  h1: "Container Transport in Ethiopia",
  intro:
    "Move ISO containers with purpose-built container trucks — 20ft, 2×20ft, and 40ft capabilities — from dry ports and depots to your warehouse or to Djibouti Port.",
}