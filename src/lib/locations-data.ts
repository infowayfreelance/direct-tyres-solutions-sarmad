export const locationAreas = [
  { slug: "oldham", label: "Oldham", href: "/mobile-tyre-fitting-oldham", region: "Oldham & Saddleworth" },
  {
    slug: "chadderton",
    label: "Chadderton",
    href: "/mobile-tyre-fitting-chadderton",
    region: "Oldham & Saddleworth",
  },
  { slug: "royton", label: "Royton", href: "/mobile-tyre-fitting-royton", region: "Oldham & Saddleworth" },
  { slug: "shaw", label: "Shaw", href: "/mobile-tyre-fitting-shaw", region: "Oldham & Saddleworth" },
  {
    slug: "failsworth",
    label: "Failsworth",
    href: "/mobile-tyre-fitting-failsworth",
    region: "Oldham & Saddleworth",
  },
  {
    slug: "saddleworth",
    label: "Saddleworth",
    href: "/mobile-tyre-fitting-saddleworth",
    region: "Oldham & Saddleworth",
  },
  {
    slug: "uppermill",
    label: "Uppermill",
    href: "/mobile-tyre-fitting-uppermill",
    region: "Oldham & Saddleworth",
  },
  { slug: "manchester", label: "Manchester", href: "/mobile-tyre-fitting-manchester", region: "Manchester" },
  {
    slug: "manchester-city-centre",
    label: "Manchester City Centre",
    href: "/mobile-tyre-fitting-manchester-city-centre",
    region: "Manchester",
  },
  { slug: "ancoats", label: "Ancoats", href: "/mobile-tyre-fitting-ancoats", region: "Manchester" },
  {
    slug: "cheetham-hill",
    label: "Cheetham Hill",
    href: "/mobile-tyre-fitting-cheetham-hill",
    region: "Manchester",
  },
  { slug: "blackley", label: "Blackley", href: "/mobile-tyre-fitting-blackley", region: "Manchester" },
  { slug: "chorlton", label: "Chorlton", href: "/mobile-tyre-fitting-chorlton", region: "Manchester" },
  {
    slug: "didsbury",
    label: "Didsbury",
    href: "/mobile-tyre-fitting-didsbury",
    region: "Greater Manchester East",
  },
  { slug: "gorton", label: "Gorton", href: "/mobile-tyre-fitting-gorton", region: "Greater Manchester East" },
  {
    slug: "longsight",
    label: "Longsight",
    href: "/mobile-tyre-fitting-longsight",
    region: "Greater Manchester East",
  },
  { slug: "moston", label: "Moston", href: "/mobile-tyre-fitting-moston", region: "Greater Manchester East" },
  {
    slug: "newton-heath",
    label: "Newton Heath",
    href: "/mobile-tyre-fitting-newton-heath",
    region: "Greater Manchester East",
  },
  {
    slug: "rochdale",
    label: "Rochdale",
    href: "/mobile-tyre-fitting-rochdale",
    region: "Greater Manchester East",
  },
] as const;

export const locationAreasByRegion = Array.from(
  locationAreas.reduce((map, area) => {
    const group = map.get(area.region) ?? [];
    group.push(area);
    map.set(area.region, group);
    return map;
  }, new Map<string, (typeof locationAreas)[number][]>()),
  ([region, areas]) => ({ region, areas }),
);
