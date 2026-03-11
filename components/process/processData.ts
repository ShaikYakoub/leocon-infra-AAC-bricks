export const steps = [
  {
    n: "1",
    title: "Coal Fly Ash Processing",
    desc: "Coal fly ash - the primary raw material (70% of AAC composition) - is transported to the slurry preparing pond. Water is added to achieve required concentration before batching.",
    equipment:
      "Wheel loader, slurry pond, industrial pumps, slurry storage tanks",
    output: "520 kg fly ash per m3 of AAC blocks",
  },
  {
    n: "2",
    title: "Lime Processing",
    desc: "Powdered lime is lifted into dedicated silos and fed to production in precise quantities as required by the batch recipe.",
    equipment: "Bucket elevator, lime powder silo, screw conveyor",
    output: "20 kg lime per m3 of AAC blocks",
  },
  {
    n: "3",
    title: "Gypsum Processing",
    desc: "Gypsum is added during slurry preparation to support long-term strength gain after autoclaving.",
    equipment: "Storage shed, manual handling",
    output: "Gypsum proportion as per batch requirement",
  },
  {
    n: "4",
    title: "Cement Processing",
    desc: "Cement is transferred to silos in a moisture-controlled process and metered into batching.",
    equipment: "Cement silo, pneumatic transport system",
    output: "100 kg cement per m3 of AAC blocks",
  },
  {
    n: "5",
    title: "Aluminium Powder Processing",
    desc: "Aluminium paste is mixed into suspending liquid and added precisely. Its reaction forms micro-bubbles for AAC's lightweight structure.",
    equipment: "Aluminium storehouse, lifting equipment, aluminium mixer",
    output: "0.45 kg aluminium per m3 of AAC blocks",
  },
  {
    n: "6",
    title: "Waste & Scrape Slurry Management",
    desc: "A closed-loop recycling system captures and mills waste slurry, then returns it to production.",
    equipment: "Ball mill, waste slurry tank, industrial pumps",
    output: "Recycled slurry reused in batching",
  },
  {
    n: "7",
    title: "Batching, Mixing & Casting",
    desc: "Raw inputs are electronically weighed, mixed at controlled temperature, and poured into greased steel molds.",
    equipment:
      "Electronic weighing scales, conveyors, casting mixer, steel molds, ferry car",
    output: "Freshly cast green-cake AAC ready for pre-curing",
  },
  {
    n: "8",
    title: "Pre-Curing & Expansion",
    desc: "During pre-curing, chemical reaction expands the mix and forms AAC pore structure.",
    equipment: "Controlled curing area",
    output: "Green-cake AAC with sufficient handling strength",
  },
  {
    n: "9",
    title: "Precision Wire-Cutting",
    desc: "Green-cake is wire-cut to exact dimensions with consistent factory tolerances.",
    equipment: "Overhead crane, automated wire-cutting machine",
    output: "AAC blocks in 4-inch, 6-inch, or 9-inch sizes",
  },
  {
    n: "10",
    title: "Grouping for Autoclaving",
    desc: "Cut blocks are grouped on curing trolleys and staged for autoclave loading.",
    equipment: "Curing trolleys, bottom plates, crane",
    output: "Grouped green blocks on trolleys",
  },
  {
    n: "11",
    title: "Autoclaving - The Critical Step",
    desc: "Blocks undergo approximately 12 hours of high-pressure steam curing to develop final strength and stability.",
    equipment: "Industrial autoclaves, windlass, steam generation system",
    output: "Fully cured, hardened AAC blocks",
  },
  {
    n: "12",
    title: "De-molding & Storage",
    desc: "Cured blocks are unloaded, palletized, wrapped, and moved to covered storage for dispatch.",
    equipment: "Windlass, forklifts, storage yard",
    output: "Finished AAC blocks ready for sale",
  },
  {
    n: "13",
    title: "Mold Returning & Oiling",
    desc: "Molds and plates are cleaned, oiled, and returned to production for the next cycle.",
    equipment: "Mold returning rail, cleaning system, oiling machine",
    output: "Clean, oiled molds ready for reuse",
  },
];

export const rawMaterials = [
  { name: "Fly Ash", qty: "520 kg", pct: "70%", color: "bg-stone-400" },
  { name: "Cement", qty: "100 kg", pct: "13.5%", color: "bg-orange-400" },
  { name: "Lime", qty: "20 kg", pct: "2.7%", color: "bg-amber-300" },
  { name: "Aluminium", qty: "0.45 kg", pct: "0.06%", color: "bg-zinc-300" },
  {
    name: "Water & Others",
    qty: "~100 kg",
    pct: "13.7%",
    color: "bg-blue-300",
  },
];
