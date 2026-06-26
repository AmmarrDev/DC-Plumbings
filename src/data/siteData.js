// Central place for all business info & copy.
// Update phone/email/address here and it reflects across the whole site.

export const business = {
  name: "DC Plumbing Solutions",
  owner: "Atnan \u201cDino\u201d Canaku",
  ownerTitle: "Owner & Licensed Plumber",
  phone: "(650) 706-8407",
  phoneHref: "tel:+16507068407",
  email: "dcplumbingsolutionsllc@gmail.com",
  license: "CL #1148346",
  tagline: "Trusted expertise. Dependable service.",
  serviceAreaShort: "San Francisco to San Jose",
  hours: [
    { label: "Mon \u2013 Sat", value: "7:00 AM \u2013 7:00 PM" },
    { label: "Sunday", value: "7:00 AM \u2013 6:00 PM" },
    {label: "After Hours", value:"Emergency calls only"}
  ],
  badges: ["Licensed & Insured", "Emergency Service", "Free Estimates"],
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

// Core service lines, matching the company's printed service card.
export const services = [
  {
    id: "water-heating",
    title: "Water Heating",
    specialty: true,
    summary:
      "Tankless, electric, storage-tank and gas water heater installation, replacement, and repair our most-requested specialty.",
    detail:
      "From compact tankless units in a hallway closet to multi-unit commercial banks feeding an entire building, we size, install, and service water heating systems that keep hot water reliable year-round. We work with leading brands and handle gas line, venting, and condensate requirements to code.",
    bullets: [
      "Tankless (on-demand) gas and electric water heater installation",
      "Heat pump conversions",
      "Storage tank water heater replacement",
      "Commercial multi-unit water heating systems",
      "Annual flush, descaling & maintenance",
    ],
    category: "water-heating",
  },
  {
    id: "boiler",
    title: "Boiler Service & Maintenance",
    summary:
      "Installation, tune-ups, and repair for residential and commercial boiler systems.",
    detail:
      "Boilers are unforgiving when neglected. We install new systems and keep existing ones running efficiently with seasonal maintenance, leak and pressure diagnostics, and prompt repair when something goes wrong.",
    bullets: [
      "New boiler installation",
      "Seasonal service & safety inspection",
      "Pressure, leak & circulation repair",
      "Commercial boiler room maintenance",
    ],
    category: "boiler",
  },
  {
    id: "air-handler",
    title: "Air Handler Service & Maintenance",
    summary:
      "Rooftop and in-unit air handler service that keeps building mechanical systems running.",
    detail:
      "We service the air handling equipment that pairs with your building's plumbing and heating systems \u2014 from rooftop units to in-unit handlers \u2014 with the same attention to code and reliability as our plumbing work.",
    bullets: [
      "Rooftop air handler inspection & service",
      "Preventive maintenance plans",
      "Coordination with building mechanical systems",
    ],
    category: "hvac",
  },
  {
    id: "commercial",
    title: "Commercial Plumbing",
    summary:
      "Full-scale plumbing for multi-unit residential buildings, offices, and commercial properties.",
    detail:
      "We've run copper distribution lines through hundreds of feet of commercial corridor, fitted out mechanical rooms, and built multi-unit manifold systems from rough-in to final connection. We work cleanly on occupied properties and on schedule against construction deadlines.",
    bullets: [
      "Multi-unit & corridor pipe distribution",
      "Mechanical room build-outs",
      "New construction rough-in & finish",
      "Property management service accounts",
    ],
    category: "commercial",
  },
  {
    id: "residential",
    title: "Residential Plumbing",
    summary:
      "Everyday repairs and installs of sinks, disposals, fixtures, supply lines, hose bibs and more.",
    detail:
      "The plumbing that keeps a household running: kitchen and bath fixtures, garbage disposals, supply valves, drain repair, exterior hose bibs, and much more. We show up on time, explain the work plainly, and leave the space clean.",
    bullets: [
      "Sink, faucet & disposal installation",
      "Supply line & shut-off valve repair",
      "Drain & fixture troubleshooting",
      "Exterior hose bibs, and much more",
    ],
    category: "residential",
  },
  {
    id: "installation-repiping",
    title: "Installation & Repiping",
    summary:
      "Whole-property repiping and new installation, including trenched underground lines.",
    detail:
      "When old galvanized or failing pipe needs to come out, we repipe in copper (unless application requires alternative material) \u2014 including trenched underground runs \u2014 and handle new installation for additions and remodels from the ground up.",
    bullets: [
      "Whole-house & whole-building repiping",
      "Trenched underground copper lines",
      "Sump & ejector pit installation",
      "New construction plumbing installation",
    ],
    category: "repiping",
  },
];

export const serviceCategoryMeta = {
  "water-heating": { label: "Water Heating" },
  boiler: { label: "Boiler Service" },
  hvac: { label: "Air Handler / HVAC" },
  commercial: { label: "Commercial Plumbing" },
  residential: { label: "Residential Plumbing" },
  repiping: { label: "Installation & Repiping" },
};

// Waypoints for the signature pipe-route service area map.
// Coordinates are plain x/y on a 0-1000 x 0-1200 schematic canvas (not geographic).
export const serviceAreaRoute = [
  { id: "sf", name: "San Francisco", note: "Headquarters area", x: 150, y: 80 },
  { id: "ssf", name: "South San Francisco", x: 230, y: 220 },
  { id: "sanmateo", name: "San Mateo", x: 300, y: 360 },
  { id: "redwoodcity", name: "Redwood City", x: 360, y: 480 },
  { id: "paloalto", name: "Palo Alto", x: 420, y: 600 },
  { id: "mountainview", name: "Mountain View", x: 470, y: 700 },
  { id: "sunnyvale", name: "Sunnyvale", x: 510, y: 800 },
  { id: "santaclara", name: "Santa Clara", x: 540, y: 900 },
  { id: "sanjose", name: "San Jose", x: 590, y: 1020 },
];

export const stats = [
  { value: "10+", label: "Years combined trade experience" },
  { value: "CL #1148346", label: "California licensed & insured" },
  { value: "SF \u2192 SJ", label: "Bay Area service corridor" },
  { value: "24/7", label: "Emergency call response" },
];
