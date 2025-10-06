export const mockDiscover = [
  { id: "m1", url: require("../../assets/placeholder.jpg"), title: "Sunset Muse", user: "@sol" },
  { id: "m2", url: require("../../assets/placeholder.jpg"), title: "Neon Dreams", user: "@lumen" },
  { id: "m3", url: require("../../assets/placeholder.jpg"), title: "Stage Heat", user: "@aria" }
];

export const mockCompetitions = [
  {
    id: "c1",
    title: "Beauty Pageant",
    endsAt: Date.now() + 1000 * 60 * 60 * 24,
    prizeCents: 1000000,
    entryFeeCents: 3000,
    entryFeePIX: 10
  },
  {
    id: "c2",
    title: "Ad Commercial Spot",
    endsAt: Date.now() + 1000 * 60 * 60 * 48,
    prizeCents: 250000,
    entryFeeCents: 1500,
    entryFeePIX: 5
  }
];
