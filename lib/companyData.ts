import { Industry, IndustryId, AlloyGrade, ProductItem, ApplicationCategory, FAQItem } from './types';

export const COMPANY_INFO = {
  name: 'WEARGUARD™',
  tagline: 'OUTLAST THE GRIND',
  subTagline: 'THE ENDURANCE STANDARD',
  catalogYear: '2026',
  companyType: 'Heavy Industrial Wear & Precision Castings',
  website: 'wearguard.engineering',
  phone: '+61 437 433 890',
  phoneFormatted: '+61 (0) 437 433 890',
  email: 'engineering@wearguard.engineering',
  address: 'Global Engineering & Distribution Network (Australia • Asia-Pacific • International)',
  stats: [
    { label: 'Wear Resistance Boost', value: '20-60%', subtitle: 'Over standard OEM parts' },
    { label: 'Small-Batch Minimum', value: '1 Unit', subtitle: 'No massive upfront commitments' },
    { label: 'Rapid Turnaround', value: '6-8 Wks', subtitle: 'From 3D scan / spec to site delivery' },
    { label: 'OEM Compatibility', value: '100%', subtitle: 'Any brand. Any era. No excuses.' },
  ],
  pillars: [
    {
      title: 'Built For Extreme Wear Conditions',
      description: 'Advanced materials engineered and heat-treated to perform in the harshest crushing, mixing, and thermal applications.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Longer Service Life',
      description: 'Maximize plant uptime and continuous production tonnage with tailored metallurgy that outlasts standard steel by 2-4x.',
      icon: 'Clock',
    },
    {
      title: 'Lower Maintenance & Downtime',
      description: 'Extend change-out intervals, safeguard core structures, and simplify scheduled overhauls with modular sacrificial inserts.',
      icon: 'Wrench',
    },
    {
      title: 'Lower Total Cost of Ownership',
      description: 'Direct custom engineering cuts out OEM monopoly markups, reducing annual spare parts budget by up to 35%.',
      icon: 'TrendingUp',
    },
  ]
};

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'asphalt',
    name: 'Asphalt & Bitumen Plants',
    tagline: 'Continuous Heat, Severe Thermal Shock & Sticky Aggregates',
    badge: 'Flagship Domain',
    image: '/images/asphalt-plant-hero.png',
    description: 'From rapid thermal cycling in rotary drying drums to high-velocity aggregate scouring in pugmills, WearGuard provides end-to-end component reinforcement across all batch and continuous asphalt mixing plants.',
    challenges: [
      'Continuous thermal cycling up to 380°C degrading conventional steels',
      'Severe aggregate impact on drum internals and flights',
      'Heavy bitumen adhesion combined with high-abrasion pugmill mixing',
      'Costly unplanned shutdowns during peak paving seasons'
    ],
    wearguardAdvantage: [
      'CFD-engineered drum flighting increasing thermal efficiency by 15-22%',
      'High-Chrome (27% Cr) and Ni-Hard 4 mixer arm shields and paddles',
      'Reinforced drag slat conveyors and heat-resistant bucket elevator links',
      'Guaranteed fitment for Ammann, Astec, Benninghoven, Marini, Barber-Greene, Sim Ammann'
    ],
    keyComponents: [
      'Drum Internals & Lifters',
      'Mixer Arms & Paddle Tips',
      'Slat Conveyor Chains & Floors',
      'Filter Bags (Nomex/Meta-Aramid)',
      'Trunnion Wheels & Girth Gears'
    ],
    metrics: [
      { label: 'Uptime Improvement', value: '+38%' },
      { label: 'Fuel & Heat Savings', value: '-14%' },
      { label: 'Liner Wear Life', value: '2.4x Standard' }
    ]
  },
  {
    id: 'concrete',
    name: 'Concrete & Ready-Mix Production',
    tagline: 'High-Impact Aggregates, Fine Silica Abrasion & Wet Slurry',
    badge: 'Heavy Impact',
    image: '/images/mixer-omponents.webp',
    description: 'Concrete mixing generates intense shearing stresses and aggressive wet abrasion. WearGuard delivers custom cast mixer liners, high-hardness paddle tips, and chute protection that prevent blow-throughs and uneven batching.',
    challenges: [
      'Grit gouging and abrasive slurry eating through mild steel walls',
      'High impact from coarse crushed rock in pan and twin-shaft mixers',
      'Severe wear at discharge gates and transfer chutes',
      'Premature shaft gouging requiring expensive complete gearbox teardowns'
    ],
    wearguardAdvantage: [
      'EnduraCast Z-Core 60-65 HRC interlocking tile liner systems',
      'Fully shielded cast arm jackets preventing shaft body erosion',
      'Abrasion-resistant hopper throat and rock-box wear blocks',
      'Engineered for BHS Sonthofen, Liebherr, Simem, Sicoma, MEKA mixers'
    ],
    keyComponents: [
      'Twin-Shaft Mixer Liners',
      'Pan Mixer Scrapers & Arms',
      'Discharge Chute Impact Plates',
      'Aggregate Weigh Hopper Liners'
    ],
    metrics: [
      { label: 'Mixer Floor Life', value: '450k+ m³' },
      { label: 'Maintenance Interval', value: '2x Extension' },
      { label: 'Wear Part Replacement Cost', value: '-30%' }
    ]
  },
  {
    id: 'mining',
    name: 'Mining & Quarry Aggregates',
    tagline: 'Extreme Rock Impact, Crushing Gouging & Heavy Bulk Handling',
    badge: 'Severe Duty',
    image: '/images/earth-moving-bucket-tips-1.webp',
    description: 'In extraction and primary crushing, equipment faces the most punishing mechanical forces on earth. WearGuard supplies heavy-duty bucket tips, chromium-carbide overlay plates, and chute liners engineered to outlast the grind.',
    challenges: [
      'Massive impact shocks from boulder drop heights',
      'Severe gouging abrasion from granite, basalt, and iron ore',
      'Unscheduled excavator tooth loss causing crusher jams',
      'Rapid conveyor floor wear in high-tonnage transfer stations'
    ],
    wearguardAdvantage: [
      'Wearcast Max 1100 alloy castings with integrated carbide inserts',
      'Penetration-profiled excavator bucket teeth with reinforced adapters',
      'Bi-metallic composite wear buttons, chocky bars, and rock boxes',
      'Engineered to withstand 10,000+ tons/day continuous duty'
    ],
    keyComponents: [
      'Earthmoving Bucket Tips & Adapters',
      'Chute & Grizzly Impact Liners',
      'Crusher Feed Transfer Plates',
      'Drag Chain & Sprocket Assemblies'
    ],
    metrics: [
      { label: 'Tip Life In Granite', value: '+45%' },
      { label: 'Chute Replacement Cycle', value: '3x Longer' },
      { label: 'Unplanned Down-time', value: '-65%' }
    ]
  },
  {
    id: 'process',
    name: 'Process & Bulk Material Industries',
    tagline: 'Cement, Recycling, Steel Mills, Chemical & Power Plants',
    badge: 'Continuous Flow',
    image: '/images/filter-combo.webp',
    description: 'Custom wear solutions for high-temperature kilns, cyclone separators, clinker elevators, and pneumatic transport lines where downtime costs thousands of dollars per hour.',
    challenges: [
      'Combined corrosive chemical gases and fine abrasive particulates',
      'High continuous operating temperatures up to 600°C',
      'Turbulent wear at duct elbows, cyclone inlets, and draft fan impellers',
      'Frequent dust collector bag burnouts and cage corrosion'
    ],
    wearguardAdvantage: [
      'Ceramic-rubber vulcanized composite plates for fine slurry/dry powder',
      'High-temp stainless steel filter cages with corrosion-resistant coatings',
      'Custom fabricated fan housings and dynamic impellers',
      'WearGuard P500 custom-profile laser cut wear segments'
    ],
    keyComponents: [
      'Filter Baghouses & Nomex Media',
      'Exhaust Fan Housings & Impellers',
      'Cyclone & Duct Wear Tiles',
      'Bucket Elevator Chains & Buckets'
    ],
    metrics: [
      { label: 'Fan Impeller Service Life', value: '3.2x Standard' },
      { label: 'Filter Bag Temp Threshold', value: 'Up to 240°C' },
      { label: 'Dust Emission Compliance', value: '100% Guaranteed' }
    ]
  }
];

export const ALLOY_GRADES_DATA: AlloyGrade[] = [
  {
    id: 'wearguard-p400',
    name: 'WearGuard P400',
    series: 'WearGuard Cut-to-Shape',
    hardness: '400 BHN (Brinell)',
    impactResistance: 'Severe Impact',
    abrasionResistance: 'Very High',
    maxTemp: '300°C',
    recommendedUse: 'Recommended for normal to high wear applications in asphalt, cement, mining and steel industries. Ideal for liners, chutes, buckets and structural components.',
    applications: ['Chute Liners', 'Elevator Buckets', 'Conveyor Skirts', 'Hopper Sides', 'Screen Plates'],
    chemicalHighlights: 'Optimized Low-Alloy Martensitic Steel (C: 0.18%, Cr: 1.2%, Mo: 0.3%, B: 0.003%)',
    thicknessAvailability: '3 mm to 60 mm'
  },
  {
    id: 'wearguard-p450',
    name: 'WearGuard P450',
    series: 'WearGuard Cut-to-Shape',
    hardness: '450 BHN (Brinell)',
    impactResistance: 'High',
    abrasionResistance: 'Extreme',
    maxTemp: '350°C',
    recommendedUse: 'For high wear applications in asphalt, mining and steel industries. Excellent balance of workability, high toughness, and superior wear life.',
    applications: ['Heavy-Duty Mixer Liners', 'Excavator Cutting Edges', 'Recycling Chutes', 'Feeder Decks'],
    chemicalHighlights: 'Quenched & Tempered Micro-Alloyed Plate (C: 0.22%, Cr: 1.5%, Ni: 0.8%, Mo: 0.4%)',
    thicknessAvailability: '4 mm to 80 mm'
  },
  {
    id: 'wearguard-p500',
    name: 'WearGuard P500',
    series: 'WearGuard Cut-to-Shape',
    hardness: '500 BHN (Brinell)',
    impactResistance: 'Moderate',
    abrasionResistance: 'Ultra Severe',
    maxTemp: '400°C',
    recommendedUse: 'For superior high-wear applications in asphalt, cement, mining and steel industries. Ideal for mixer tips, scraper blades, and high-velocity abrasive sliding edges.',
    applications: ['Mixer Tips & Scrapers', 'Dryer Drum Inlets', 'Pugmill Wear Edges', 'Grizzly Bars'],
    chemicalHighlights: 'Ultra-Fine Grain High Carbon-Boron Steel with deep core through-hardening',
    thicknessAvailability: '6 mm to 50 mm'
  },
  {
    id: 'enduracast-zcore',
    name: 'EnduraCast Z-Core Liners',
    series: 'EnduraCast Z-Core',
    hardness: '58–62 HRC (Rockwell C)',
    impactResistance: 'High',
    abrasionResistance: 'Extreme',
    maxTemp: '450°C',
    recommendedUse: 'Tough, specially abrasion-resistant lined parts. For extreme abrasive and erosive wear applications in asphalt, cement, mining and steel industries.',
    applications: ['Asphalt Drum Lifters', 'Twin-Shaft Pugmill Liners', 'Transfer Chutes', 'Discharge Gates'],
    chemicalHighlights: 'High-Chrome White Iron with Molybdenum & Vanadium Carbide Matrix (20-27% Cr)',
    thicknessAvailability: '6 mm to 24 mm tinsel / tile formats'
  },
  {
    id: 'enduracast-ultra',
    name: 'EnduraCast Ultra Liners',
    series: 'EnduraCast Z-Core',
    hardness: '60–65 HRC',
    impactResistance: 'High',
    abrasionResistance: 'Ultra Severe',
    maxTemp: '500°C',
    recommendedUse: 'Best for recycling needs (RAP & crushed concrete). Engineered for extreme abrasive and high erosive wear in asphalt, cement, and mining plants.',
    applications: ['RAP Inlets & Recycled Asphalt Drums', 'Clinker Chutes', 'Slag Processors', 'Secondary Crushers'],
    chemicalHighlights: 'Complex Multi-Carbide Eutectic Cast Alloy with refined grain nucleators',
    thicknessAvailability: 'Available 100% custom from 8 mm to 25 mm'
  },
  {
    id: 'enduracast-zcore-max',
    name: 'EnduraCast Z-Core Max Liners',
    series: 'EnduraCast Z-Core',
    hardness: '62–66 HRC',
    impactResistance: 'Severe Impact',
    abrasionResistance: 'Maximum Diamond-Grade',
    maxTemp: '600°C',
    recommendedUse: 'Best for high-temperature recycling and extreme impact zones. Maximum resistance against thermal breakdown and severe gouging.',
    applications: ['Thermal Desorption Drums', 'Hot RAP Collar Collars', 'Blast Furnace Hoppers', 'Sinter Plants'],
    chemicalHighlights: 'Premium Nickel-Chromium-Cobalt stabilized carbide formulation',
    thicknessAvailability: 'Available in 10 mm to 30 mm'
  },
  {
    id: 'wearcast-600',
    name: 'Wearcast 600',
    series: 'WearCast High-Chrome',
    hardness: '600 HBW (~58 HRC)',
    impactResistance: 'High',
    abrasionResistance: 'Very High',
    maxTemp: '400°C',
    recommendedUse: 'Standard casting grade for abrasive and erosive wear applications in asphalt, cement, mining and process industries.',
    applications: ['Paddle Arms', 'Trunnion Ring Inserts', 'Conveyor Flight Shoes', 'Pump Impellers'],
    chemicalHighlights: 'Hypo-eutectic High Chrome Cast Iron (ASTM A532 Class II Type B)',
    thicknessAvailability: 'Custom Cast Geometry'
  },
  {
    id: 'wearcast-ultra-800',
    name: 'Wearcast Ultra 800',
    series: 'WearCast High-Chrome',
    hardness: '62–64 HRC',
    impactResistance: 'Severe Impact',
    abrasionResistance: 'Ultra Severe',
    maxTemp: '500°C',
    recommendedUse: 'For extreme abrasive and high erosive wear applications in asphalt, cement, mining and steel industries.',
    applications: ['Mixer Paddle Arms & Tips', 'Heavy Slat Sprockets', 'Impact Wear Blocks', 'Bucket Lips'],
    chemicalHighlights: 'Hyper-eutectic 28% Chrome with Niobium carbide hardening additions',
    thicknessAvailability: 'Custom Cast Geometry'
  },
  {
    id: 'wearcast-max-1100',
    name: 'Wearcast Max 1100',
    series: 'WearCast High-Chrome',
    hardness: '65–68 HRC (Carbides > 1100 HV)',
    impactResistance: 'Extreme Shock',
    abrasionResistance: 'Maximum Diamond-Grade',
    maxTemp: '650°C',
    recommendedUse: 'Flagship grade with integrated tungsten/titanium carbide lining for maximum performance in severe rock, asphalt RAP, and steel manufacturing.',
    applications: ['Severe Rock Excavator Tips', 'Pugmill Bottom Liners', 'High-Stress Drag Chain Teeth', 'Ore Chute Plates'],
    chemicalHighlights: 'Solid Tungsten-Titanium Carbide Inserts fused within High-Chrome Matrix',
    thicknessAvailability: 'Custom Cast & Clad'
  },
  {
    id: 'hardfaced-plates',
    name: 'Chromium Carbide Overlay Plates',
    series: 'Advanced Composites',
    hardness: '58–64 HRC (Overlay)',
    impactResistance: 'High',
    abrasionResistance: 'Ultra Severe',
    maxTemp: '550°C',
    recommendedUse: 'Fusion-bonded chromium carbide weld overlay on structural mild steel base. Excellent for formable wear liners subjected to continuous sliding friction.',
    applications: ['Screen Chutes', 'Fan Blades & Housings', 'Hopper Cones', 'Cyclones', 'Discharge Launders'],
    chemicalHighlights: 'Cr7C3 primary carbides in austenitic matrix (Cr: 28-35%)',
    thicknessAvailability: '3 on 3 mm up to 12 on 12 mm'
  },
  {
    id: 'ceramic-rubber-composites',
    name: 'Ceramic & Rubber Composite Liners',
    series: 'Advanced Composites',
    hardness: '92% Alumina Al2O3 (>85 HRA)',
    impactResistance: 'Extreme Shock',
    abrasionResistance: 'Maximum Diamond-Grade',
    maxTemp: '120°C',
    recommendedUse: 'High-density 92-95% Alumina ceramic tiles vulcanized into energy-absorbing natural rubber with steel backing plate for bolt-in installation.',
    applications: ['Fine Slurry Launders', 'Vibrating Feeder Chutes', 'Belt Transfer Points', 'Cyclone Separators'],
    chemicalHighlights: 'Hexagonal Al2O3 Ceramic Tiles bonded in 60 Durometer high-rebound natural rubber',
    thicknessAvailability: '25 mm, 38 mm, 50 mm, 75 mm modules'
  }
];

export const PRODUCTS_CATALOG: ProductItem[] = [
  // 1. Dryer Components
  {
    id: 'dryer-drum-sprockets-trunnions',
    name: 'Dryer Drum Sprockets & Trunnion Assemblies',
    category: 'dryer-components',
    categoryName: 'Dryer Components',
    subtitle: 'Any Brand. Any Era. No Excuses.',
    tagline: 'Heavy-Duty Forged & Machined Drive Components for Rotary Drums',
    description: 'WearGuard manufactures heavy-duty trunnion wheels, rollers, dryer tire rings, girth gears, and machined drive sprockets heat-treated to meet the most demanding thermal and rotational loads. Built with precision alloy steel forgings and hardened contact surfaces to prevent pitting, galling, and premature bearing failure.',
    features: [
      'Forged 42CrMo4 / 4340 alloy steel trunnion rollers induction-hardened to 50-55 HRC',
      'Segmented or full girth gears with precision tooth profile for vibration-free operation',
      'Heavy-duty spherical roller bearing housings with labyrinth dust-proof seals',
      'Custom tire rings engineered to withstand cyclic thermal expansion without cracking',
      'Direct replacement compatibility with Astec, Ammann, Benninghoven, Marini, Barber-Greene, Almix, and Ciber drums'
    ],
    specifications: {
      'Material': 'Forged Alloy Steel 42CrMo / Cast 34CrNiMo6',
      'Hardness': 'Surface Hardened to 50–56 HRC (Core 280–320 BHN)',
      'Diameter Range': '300 mm to 3,500 mm custom forged',
      'Bearing Type': 'SKF / Timken Spherical Roller Bearings',
      'Heat Treatment': 'Full Quench & Temper + Flame/Induction Hardened Tracks'
    },
    recommendedAlloys: ['WearGuard P450', 'Wearcast 600', 'Forged 42CrMo4'],
    compatibleBrands: ['Ammann', 'Astec', 'Benninghoven', 'Marini', 'Barber-Greene', 'Lintec', 'Almix', 'Parker Plant'],
    image: '/images/dryer-sprockets.webp',
    badge: 'Brochure Page 5',
    typicalWearLifeMultiplier: '2.5x Standard Life',
    targetIndustries: ['asphalt', 'mining', 'process']
  },
  {
    id: 'drum-internals-discharge-flights',
    name: 'Drum Internals & Discharge Flights',
    category: 'dryer-components',
    categoryName: 'Dryer Components',
    subtitle: 'CFD-Analyzed Veil Design for Maximum Thermal Efficiency',
    tagline: 'All types of internal flights, dam plates, exit chutes, discharge flights, RAP inlets & covers',
    description: 'We do not just rebuild or supply dryer drums; we engineer better drying performance. WearGuard retrofits combine CFD-analyzed flighting patterns, optimized material curtains, and wear-reducing alloy steels. Improves heat transfer, moisture removal, retention time, and mixing while significantly lowering burner fuel consumption and aggregate degradation.',
    features: [
      'Optimized curtain flight geometry creates a dense, uniform veil of falling aggregate',
      'WearGuard P450 / P500 and EnduraCast Z-Core alloy steels prevent premature burn-through',
      'Custom RAP (Recycled Asphalt Pavement) collar flights with anti-sticking non-clog designs',
      'Discharge flights with adjustable angle segments for fine-tuning material discharge velocity',
      'Reduces burner fuel consumption by 10-18% through improved convective heat transfer'
    ],
    specifications: {
      'Steel Grades': 'WearGuard P450, P500 & Stainless 304/316 for corrosive zones',
      'Plate Thickness': '6 mm, 8 mm, 10 mm, 12 mm & custom laminated',
      'Mounting': 'Bolt-in slotted bases or heavy-duty weld brackets for rapid change-out',
      'CFD Modeling': 'Custom flight density matched to aggregate moisture & burner capacity'
    },
    recommendedAlloys: ['WearGuard P450', 'WearGuard P500', 'EnduraCast Ultra'],
    compatibleBrands: ['Astec', 'Ammann', 'Benninghoven', 'Marini', 'CMI', 'Stansteel', 'Gencor'],
    image: '/images/drum-internal-discharge-flights.webp',
    badge: 'Brochure Page 5 & 6',
    typicalWearLifeMultiplier: '3.0x Standard Life',
    targetIndustries: ['asphalt', 'process']
  },
  {
    id: 'thrust-trunnion-wheels',
    name: 'Thrust & Trunnion Wheels Assembly',
    category: 'dryer-components',
    categoryName: 'Dryer Components',
    subtitle: 'Precision Machined & Cast Assemblies with Bearings',
    tagline: 'Available in machined and cast options, complete with bearings & assemblies for quick change-out',
    description: 'WearGuard thrust rollers and trunnion wheel units are supplied fully assembled with high-load double spherical roller bearings, precision ground shafts, heavy mounting bases, and high-temp grease ports. Engineered to maintain precise axial alignment of the drying drum under heavy continuous material loads.',
    features: [
      'Turnkey plug-and-play assembly saves hours of maintenance downtime during emergency replacements',
      'Dual heavy-duty SKF / NSK bearing arrangement with precision ground shafts',
      'Flanged or flat face profiles engineered to resist lateral thrust forces without edge chipping',
      'High-grade alloy cast iron and forged steel options'
    ],
    specifications: {
      'Wheel Hardness': '320–360 HBW or 52 HRC induction hardened',
      'Shaft Material': 'EN24 / 4340 High Tensile Chrome-Moly Forging',
      'Lubrication': 'Automated single-point grease feed ready with high-temp seals'
    },
    recommendedAlloys: ['Wearcast 600', 'Forged 42CrMo4'],
    compatibleBrands: ['Ammann', 'Astec', 'Benninghoven', 'Marini', 'Parker', 'Lintec'],
    image: '/images/trunnion-wheels.webp',
    badge: 'Brochure Page 5',
    typicalWearLifeMultiplier: '2.2x Standard Life',
    targetIndustries: ['asphalt', 'mining', 'process']
  },
  {
    id: 'complete-dryer-drum-structures',
    name: 'Complete Dryer Drum Shells & Retrofit Structures',
    category: 'dryer-components',
    categoryName: 'Dryer Components',
    subtitle: 'Upgrade to Maximum Efficiency & Fuel Savings',
    tagline: 'We tune the drying process for better control, higher uptime & consistent output',
    description: 'Complete replacement dryer drums engineered with heavier plate gauges, stress-relieved weldments, pre-installed flighting arrays, tire rings, and girth drives. Designed to solve filter clogs, unstable discharge temperatures, and low production throughput across batch and continuous asphalt plants.',
    features: [
      'Heavy-wall structural shells rolled with precision tolerances (runout < 1.5 mm)',
      'Submerged arc longitudinal and circumferential welds 100% UT tested',
      'Integrated insulation jacket mounting studs for energy conservation',
      'Full turnkey engineering support with on-site alignment measurement'
    ],
    specifications: {
      'Shell Thickness': '12 mm to 25 mm high-temperature pressure vessel steel',
      'Diameter Range': '1.5 m to 3.6 m',
      'Length Range': '6.0 m to 18.0 m',
      'Warranty': 'Industry-leading 3-Year Structural Warranty'
    },
    recommendedAlloys: ['Pressure Vessel Boiler Plate', 'WearGuard P400', 'P450 Internals'],
    compatibleBrands: ['Any Brand. Any Era. No Excuses.'],
    image: '/images/dryer-combo.webp',
    badge: 'Brochure Page 6',
    typicalWearLifeMultiplier: '10+ Years Operational Life',
    targetIndustries: ['asphalt', 'process']
  },

  // 2. Filter Components
  {
    id: 'premium-filter-bags-nomex',
    name: 'Premium Nomex® & Meta-Aramid Filter Bags',
    category: 'filter-components',
    categoryName: 'Filter Components',
    subtitle: 'Engineered Airflow & Dependable Industrial Filtration',
    tagline: '400–650 gsm Nomex®, Meta-Aramid, PTFE, and high-temp treated felt filter media',
    description: 'We don’t just supply filter bags and cages; we engineer cleaner airflow and dependable filtration. WearGuard offers premium Nomex® and meta-aramid needlefelts in 400–650 gsm with specialized water-repellent, oil-repellent, and PTFE membrane finishes. Engineered to withstand continuous acid gases, moisture condensation, and temperatures up to 240°C.',
    features: [
      'Premium DuPont Nomex® fibers with PTFE membrane for ultra-low emissions (< 5 mg/Nm³)',
      'Stainless steel double-beaded snap rings for airtight seal in tube sheets',
      'Triple-stitched PTFE thread construction preventing seam splits during pulse-jet cleaning',
      'High air-to-cloth ratio optimization reduces exhaust fan electrical load'
    ],
    specifications: {
      'Weight Range': '400, 450, 500, 550, 650 gsm needlefelt',
      'Operating Temp': 'Continuous 200°C / Peaks up to 240°C',
      'Finishes': 'Heat-set, singed, PTFE membrane, acid-resistant dip',
      'Fitment': 'Top & bottom snap band, raw edge, flange collar'
    },
    recommendedAlloys: ['DuPont Nomex® Meta-Aramid', 'PTFE Membrane', '316L Stainless Snap Ring'],
    compatibleBrands: ['Ammann', 'Astec', 'Benninghoven', 'Marini', 'MikroPul', 'Donaldson', 'WAM'],
    image: '/images/filter-bags.webp',
    badge: 'Brochure Page 7',
    typicalWearLifeMultiplier: '2.0x Standard Filter Life',
    targetIndustries: ['asphalt', 'concrete', 'process']
  },
  {
    id: 'filter-cages-stainless-protection',
    name: 'High-Temperature Filter Cages & Stainless Plenum Protection',
    category: 'filter-components',
    categoryName: 'Filter Components',
    subtitle: 'Precision Cages with High-Temp Resistant Treatments',
    tagline: 'Stainless steel housings, impellers, cages & plenum plates for hot, humid, corrosive gases',
    description: 'WearGuard precision filter cages maintain bag shape during intense pulse-jet cycles, preventing bag friction wear and collapse. Available in 10, 12, 16, and 20 wire configurations in galvanized, epoxy, and 304/316 stainless steel. We also supply custom stainless steel plenum plates, blowpipes, and baghouse hopper covers.',
    features: [
      'CNC automated spot-welding ensures zero internal burrs to protect delicate needlefelt',
      'High-temp electro-galvanized or silicone-aluminum anti-corrosion coating',
      'Two-piece twist-lock cage options for plants with low ceiling clearances',
      'Custom stainless steel plenum covers and tube sheets resist acid condensation'
    ],
    specifications: {
      'Wire Count': '10, 12, 16, 20 vertical wires with 100 mm ring pitch',
      'Materials': 'High-Tensile Carbon Steel, 304 Stainless, 316L Marine Grade',
      'Venturi': 'Integrated spun aluminum or cast stainless steel venturi tubes'
    },
    recommendedAlloys: ['304/316L Stainless Steel', 'Silicone-Alloy Coated Steel'],
    compatibleBrands: ['Any Brand. Any Era. No Excuses.'],
    image: '/images/filter-cages.webp',
    badge: 'Brochure Page 7',
    typicalWearLifeMultiplier: '3.0x Extended Life',
    targetIndustries: ['asphalt', 'concrete', 'process']
  },

  // 3. Mixer Components
  {
    id: 'mixer-paddle-arms-protection',
    name: 'Mixer Paddle Arms & Smart Arm Protection Covers',
    category: 'mixer-components',
    categoryName: 'Mixer Components',
    subtitle: 'Engineered to Outlast the Mix — Asphalt, Concrete & Process',
    tagline: 'Fully covered shaft design with High-chrome castings built for extreme abrasion & impact',
    description: 'WearGuard supplies premium mixer components engineered for maximum wear life and dependable performance. Choose from top-grade Ni-Hard 4 castings or High-Chrome (27% Cr) premium alloys. Our smart arm-protection covers shield the softer cast mixer arms and central drive shafts from direct aggregate scouring, extending main component life by up to 300%.',
    features: [
      'High-Chrome (27% Cr, 60-65 HRC) and Ni-Hard 4 precision castings',
      'Smart wrap-around protective arm shields prevent arm necking and catastrophic breakage',
      'Hex-pattern recessed impact pockets trap aggregate to create an autogenous rock-on-rock wear cushion',
      'Precision CNC-bored clamp hubs ensure zero slip on hexagonal or round mixer shafts',
      'Proven in high-RAP asphalt, abrasive silica concrete, and refractory batching'
    ],
    specifications: {
      'Cast Hardness': '58–64 HRC (Wearcast Ultra 800 / Ni-Hard IV)',
      'Shaft Compatibility': 'Hexagonal 100–220 mm, Round 90–250 mm with keyway',
      'Impact Strength': 'Charpy V-Notch > 14 Joules with refined austenite matrix',
      'Mounting Hardware': 'Grade 10.9 / 12.9 high-tensile countersunk fasteners with locking nuts'
    },
    recommendedAlloys: ['Wearcast Ultra 800', 'Wearcast Max 1100', 'Ni-Hard IV'],
    compatibleBrands: ['Ammann', 'Benninghoven', 'BHS Sonthofen', 'Liebherr', 'Sicoma', 'Marini', 'Simem', 'MEKA'],
    image: '/images/mixer-paddle-arms.webp',
    badge: 'Brochure Page 8 & 9',
    typicalWearLifeMultiplier: '3.5x Life Extension',
    targetIndustries: ['asphalt', 'concrete', 'process']
  },
  {
    id: 'mixer-tips-paddles-shanks',
    name: 'Mixer Tips, Paddles & Reversible Blades',
    category: 'mixer-components',
    categoryName: 'Mixer Components',
    subtitle: 'Engineered for Maximum Impact Resistance and Wear Protection',
    tagline: 'Reversible dual-wear-edge design cuts replacement costs in half',
    description: 'WearGuard mixer tips are engineered with reinforced leading edges, optimized rake angles, and recessed bolt pockets to maintain high mixing efficiency throughout their entire service life. Available in standard, heavy-duty, and tungsten-carbide embedded editions for continuous high-production pugmills.',
    features: [
      'Reversible symmetrical geometry doubles usable operational lifespan',
      'Hardened tungsten-carbide insert options on leading outer tip radius',
      'Recessed countersunk bolt pockets eliminate bolt head shear failures',
      'Consistent grain boundary structure prevents brittle edge chipping under large aggregate impact'
    ],
    specifications: {
      'Hardness': '62–65 HRC (Through-Hardened)',
      'Carbide Insert Option': 'Wearcast Max 1100 (> 1100 HV microhardness)',
      'Balance': 'Weight-matched sets (within 25 grams) to prevent mixer drive shaft imbalance'
    },
    recommendedAlloys: ['Wearcast Ultra 800', 'Wearcast Max 1100', 'EnduraCast Z-Core'],
    compatibleBrands: ['Ammann', 'Astec', 'Benninghoven', 'BHS', 'Liebherr', 'Sicoma', 'Marini'],
    image: '/images/mixer-tips.webp',
    badge: 'Brochure Page 9',
    typicalWearLifeMultiplier: '2.8x Standard Life',
    targetIndustries: ['asphalt', 'concrete']
  },

  // 4. Liners & Transfer Zone
  {
    id: 'mixer-hopper-bin-liners',
    name: 'Mixer Liners, Hopper & Transfer Chute Liners',
    category: 'liners-transfer',
    categoryName: 'Liners & Transfer Zones',
    subtitle: 'Control the Flow. Outlast the Impact.',
    tagline: 'Mixer Liners | Hopper Liners | Bin Liners | Skirt Liners | Impact Plates | Rock-Box Components',
    description: 'WearGuard protects high-impact zones where bulk materials change direction, accelerate, and strike equipment surfaces. Our engineered chute, hopper, and transfer-point solutions include interlocking segmental liners, skirt systems, impact plates, rock-box components, and bolt-in wear assemblies. Each system is tailored to material velocity, drop height, moisture, and abrasion severity.',
    features: [
      'Interlocking segmental geometry prevents sub-frame abrasion and aggregate fines migration',
      'Bolt-in counterbored design allows single-worker segment replacement in minutes',
      'Custom pre-curved mixer trough tiles match plant radius within ±0.5 mm',
      'Rock-box dead-bed inserts use the material to protect the material, reducing metal wear to near zero',
      'Reduces structural shell damage and costly emergency plant shutdowns'
    ],
    specifications: {
      'Alloy Options': 'EnduraCast Z-Core (58–62 HRC), WearGuard P450/P500, Ceramic-Rubber',
      'Thicknesses': '10 mm, 15 mm, 20 mm, 25 mm, 30 mm custom cast & cut',
      'Fastening': 'Rear welded studs, countersunk plow bolts, or oval track bolt slots',
      'Dimensional Tolerance': '±0.5 mm on CNC laser / waterjet cut profiles'
    },
    recommendedAlloys: ['EnduraCast Z-Core', 'EnduraCast Ultra', 'WearGuard P500', 'Ceramic Composites'],
    compatibleBrands: ['Any Brand. Any Era. No Excuses.'],
    image: '/images/liner-control-the-low.webp',
    badge: 'Brochure Page 11 & 12',
    typicalWearLifeMultiplier: '3.0x - 4.0x Life Extension',
    targetIndustries: ['asphalt', 'concrete', 'mining', 'process']
  },
  {
    id: 'impact-plates-rock-box-blocks',
    name: 'Impact Plates, Wear Blocks & Sacrificial Inserts',
    category: 'liners-transfer',
    categoryName: 'Liners & Transfer Zones',
    subtitle: 'Right Material for the Right Wear Zone',
    tagline: 'Replaceable sacrificial strips, chocky bars & wear blocks protect expensive structures',
    description: 'High-abrasion zones exposed to continuous sliding, scraping, and boulder impact benefit from WearGuard modular wear buttons, skid bars, and hardfaced composite inserts. Designed to be welded or bolted directly onto high-stress failure zones before parent metal is compromised.',
    features: [
      'Bi-metallic 700 BHN white iron brazed to weldable mild steel backing plate',
      'Notched chocky bars can be bent to conform around curved hopper chutes and bucket lips',
      'Sacrificial inserts simplify routine weekly inspections and drop maintenance hours by 70%',
      'Eliminates the need for complete hopper rebuilds'
    ],
    specifications: {
      'Hardness': '700 BHN / 63 HRC White Iron Layer',
      'Backing': 'ASTM A36 weldable mild steel plate',
      'Shapes': 'Chocky bars, wear buttons, donut rings, Grizzly bars, and waffle tiles'
    },
    recommendedAlloys: ['Hardfaced Plate', 'Wearcast Ultra 800', 'WearGuard P500'],
    compatibleBrands: ['All Bulk Handling Equipment'],
    image: '/images/hardfaced-plate.webp',
    badge: 'Brochure Page 12',
    typicalWearLifeMultiplier: '4.5x Protection Factor',
    targetIndustries: ['mining', 'concrete', 'asphalt']
  },

  // 5. Bucket Elevators
  {
    id: 'bucket-elevators-chain-sprockets',
    name: 'Bucket Elevators, Chains & Hardened Sprockets',
    category: 'bucket-elevators',
    categoryName: 'Bucket Elevators',
    subtitle: 'Engineered for Vertical Bulk Transport & High Temperatures',
    tagline: 'Deep-case hardened round link & bushing chains, reinforced buckets, segmental sprockets',
    description: 'WearGuard delivers engineered vertical transport protection for hot mix asphalt elevators, clinker elevators, and raw aggregate vertical shafts. Our range includes seamless pressed steel and ductile cast iron elevator buckets with reinforced digging lips, induction-hardened alloy chains, and segmented sprockets for fast tooth change-out without shaft removal.',
    features: [
      'Seamless pressed steel & ductile iron buckets with reinforced sacrificial digging lips',
      'Heavy-duty alloy round link and bushing chains induction-hardened for maximum pin-to-bushing fatigue strength',
      'Segmental bolt-on drive sprocket rims allow tooth replacement in minutes',
      'Engineered for continuous vertical operation in temperatures up to 300°C'
    ],
    specifications: {
      'Chain Tensile Strength': 'Breaking loads from 180 kN to 950 kN',
      'Sprocket Hardness': 'Flame/Induction Hardened tooth profiles (54–58 HRC)',
      'Bucket Capacities': '2.0 Liters to 85 Liters per bucket with custom venting holes',
      'Operating Temp': 'Continuous up to 300°C for Hot Mix Asphalt elevator service'
    },
    recommendedAlloys: ['WearGuard P450', 'WearGuard P500', 'Alloy Forged 20MnCr5 Chain'],
    compatibleBrands: ['Ammann', 'Astec', 'Benninghoven', 'Marini', 'Rexnord', 'Webster', 'Renold'],
    image: '/images/elevator-combo.webp',
    badge: 'Brochure Page 10',
    typicalWearLifeMultiplier: '2.5x Chain & Sprocket Life',
    targetIndustries: ['asphalt', 'concrete', 'mining', 'process']
  },

  // 6. Drag Conveyors
  {
    id: 'drag-slat-conveyors-floors',
    name: 'Drag Slat Conveyors, Forged Chains & Wear Floors',
    category: 'drag-conveyors',
    categoryName: 'Drag Conveyors',
    subtitle: 'High-Temperature Slat Conveyor Solutions for Hot Mix Asphalt & Bulk Aggregates',
    tagline: 'WearGuard P500 floor liners, drop-forged chain links, reversible slat flights',
    description: 'Engineered specifically for hot mix asphalt transfer and abrasive mineral conveying. WearGuard supplies drop-forged case-hardened conveyor chains, reversible high-chrome slat flights, and WearGuard P500 through-hardened bottom floor wear strips designed to resist extreme sliding gouging.',
    features: [
      'Drop-forged alloy steel chain links with deep case-hardened pins (58-62 HRC)',
      'WearGuard P500 bottom floor plates resist continuous aggregate slide abrasion',
      'Reversible cast high-chrome slat flights double operational service life',
      'Machined split sprockets for fast changeouts during scheduled maintenance windows'
    ],
    specifications: {
      'Floor Plate Grade': 'WearGuard P500 (500 BHN Martensitic Steel)',
      'Chain Pitch': '100 mm to 250 mm drop forged alloy steel',
      'Flight Profiles': 'Full box, angled scraper, and reinforced high-chrome shoes',
      'Tensile Capacity': 'Up to 600 kN proof load'
    },
    recommendedAlloys: ['WearGuard P500', 'EnduraCast Ultra', 'Wearcast 600'],
    compatibleBrands: ['Astec', 'Ammann', 'Benninghoven', 'CMI', 'Gencor', 'Stansteel'],
    image: '/images/drive-sprockets.webp',
    badge: 'Brochure Page 10',
    typicalWearLifeMultiplier: '3.0x Extended Floor Life',
    targetIndustries: ['asphalt', 'mining', 'process']
  },

  // 7. Earthmoving Bucket Tips
  {
    id: 'earthmoving-bucket-tips',
    name: 'Earthmoving Bucket Tips & Heavy Adapters',
    category: 'earthmoving-tips',
    categoryName: 'Earthmoving Bucket Tips',
    subtitle: 'Engineered Penetration & Wear Protection',
    tagline: 'Manufactured in high wear resistant alloys & application-matched materials for severe sites',
    description: 'WearGuard bucket tips and adapters are engineered to deliver dependable penetration, maximum impact resistance, and extended service life in harsh quarrying, excavation, and rock handling conditions. Built for strength, consistent pin fitment, and reliable self-sharpening profiles that improve fuel economy and cycle times.',
    features: [
      'Self-sharpening penetration profiles maintain digging efficiency as the tip wears down',
      'Cast in premium low-alloy nickel-chromium-molybdenum steel with deep core hardening',
      'Reinforced box section and adapter fitment reduces pin hole elongation and tooth loss',
      'Available in Heavy Penetration (HP), Rock Chisel (RC), Heavy Abrasion (HA), and Twin Tiger (TT) styles',
      'Custom tip profiles designed and cast for niche non-standard machine buckets'
    ],
    specifications: {
      'Tip Hardness': '48–53 HRC through-hardened (Core > 45 HRC)',
      'Impact Toughness': '> 25 Joules @ -40°C Charpy V-Notch',
      'Fitting Systems': 'CAT J-Series, Esco Ultralok/Super V, Komatsu, Volvo & Hensley styles',
      'Machine Classes': '10 Ton to 120 Ton Excavators, Loaders & Mining Shovels'
    },
    recommendedAlloys: ['Wearcast Max 1100', 'Wearcast Ultra 800', 'Ni-Cr-Mo High Tensile Steel'],
    compatibleBrands: ['Caterpillar', 'Komatsu', 'Hitachi', 'Volvo', 'Liebherr', 'Doosan', 'Kobelco', 'JCB'],
    image: '/images/earth-moving-bucket-tips-1.webp',
    badge: 'Brochure Page 14',
    typicalWearLifeMultiplier: '1.8x - 2.5x Penetration Life',
    targetIndustries: ['mining', 'concrete', 'process']
  }
];

export interface ApplicationCategoryMeta {
  id: ApplicationCategory;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  badge: string;
  image: string;
  iconName: string;
  keyDifferentiators: string[];
  annotatedPinHighlights: string[];
  targetIndustries: IndustryId[];
}

export const APPLICATION_CATEGORIES_DATA: ApplicationCategoryMeta[] = [
  {
    id: 'dryer-components',
    name: 'Dryer Components',
    shortName: 'Dryers',
    tagline: 'Continuous Heat, Thermal Shock & Aggregate Cascades',
    description: 'CFD-modeled veil flighting, forged trunnion assemblies, precision tire rings, and heavy structural shells that lower fuel consumption and eliminate burn-throughs.',
    badge: 'Thermal & Rotation',
    image: '/images/dryer-combo.webp',
    iconName: 'Flame',
    keyDifferentiators: [
      'CFD-analyzed curtain veil flighting improving heat transfer by 15-22%',
      'Induction-hardened forged 42CrMo4 trunnion rollers (50-55 HRC)',
      'Direct compatibility for Ammann, Astec, Benninghoven, Marini drums'
    ],
    annotatedPinHighlights: ['Forged Trunnion Rollers (52 HRC)', 'High-Temp P450 Flight Blades', 'Labyrinth Dust Seal Bearings'],
    targetIndustries: ['asphalt', 'process', 'mining']
  },
  {
    id: 'filter-components',
    name: 'Filters & Dust Collection',
    shortName: 'Filters',
    tagline: 'High-Temperature Acid Gases & Emission Compliance',
    description: 'DuPont Nomex® needlefelt bags, high-temperature stainless steel cages, and corrosion-resistant plenum plates maintaining airflow under extreme thermal and acid stress.',
    badge: 'Airflow & Gas',
    image: '/images/filter-combo.webp',
    iconName: 'Layers',
    keyDifferentiators: [
      '400-650 gsm DuPont Nomex® meta-aramid with PTFE membrane (< 5 mg/Nm³)',
      'CNC burr-free stainless steel 10-20 wire cages',
      'Continuous 200°C threshold with resistance to sulfur & acid condensation'
    ],
    annotatedPinHighlights: ['PTFE Membrane Nomex Media', 'Stainless Double Snap-Ring', 'High-Temp Anti-Corrosion Cage'],
    targetIndustries: ['asphalt', 'concrete', 'process']
  },
  {
    id: 'mixer-components',
    name: 'Mixers & Pugmill Systems',
    shortName: 'Mixers',
    tagline: 'Extreme Shear, Wet Slurry & High-Velocity Abrasion',
    description: 'High-Chrome (27% Cr, 60-65 HRC) and Ni-Hard 4 paddle arms, reversible blades, and wrap-around arm shields that protect central mixer drive shafts.',
    badge: 'Extreme Shear',
    image: '/images/mixer-omponents.webp',
    iconName: 'Wrench',
    keyDifferentiators: [
      'High-Chrome 27% Cr castings outlasting standard OEM arms by 3x',
      'Smart protective wrap-around arm shields preventing catastrophic shaft necking',
      'Reversible symmetrical paddle tip designs reducing spare parts cost by 50%'
    ],
    annotatedPinHighlights: ['27% Cr Cast Blade (64 HRC)', 'Shaft Protection Armor Shield', 'Recessed Hex Fastener Pockets'],
    targetIndustries: ['asphalt', 'concrete', 'process']
  },
  {
    id: 'liners-transfer',
    name: 'Liners & Transfer Zones',
    shortName: 'Liners',
    tagline: 'Chute Protection, Rock-Boxes & High Drop Impact',
    description: 'Interlocking EnduraCast Z-Core tiles, bi-metallic 700 BHN chocky bars, and rubber-ceramic composite panels engineered to eliminate structural blow-throughs.',
    badge: 'Impact & Chutes',
    image: '/images/liner-control-the-low.webp',
    iconName: 'Cpu',
    keyDifferentiators: [
      'EnduraCast Z-Core 58-62 HRC interlocking tiles with sub-frame protection',
      'Rock-box dead-bed inserts enabling rock-on-rock autogenous protection',
      'Bi-metallic 700 BHN chocky bars weldable directly to curved failure zones'
    ],
    annotatedPinHighlights: ['Interlocking Segmental Tile', '700 BHN White Iron Face', 'Weldable Mild Steel Backing'],
    targetIndustries: ['asphalt', 'concrete', 'mining', 'process']
  },
  {
    id: 'bucket-elevators',
    name: 'Bucket Elevators',
    shortName: 'Elevators',
    tagline: 'Vertical Material Lift, High Tonnage & Fatigue Resistance',
    description: 'High-tensile seamless pressed buckets with reinforced digging lips, induction-hardened bushing chains, and segmental bolt-on drive sprocket assemblies.',
    badge: 'Vertical Lift',
    image: '/images/elevator-combo.webp',
    iconName: 'Layers',
    keyDifferentiators: [
      'High-tensile pressed seamless buckets with reinforced sacrificial digging lips',
      'Induction-hardened alloy chains with proof loads from 180 kN to 950 kN',
      'Segmental bolt-on drive sprockets for quick tooth replacement without chain uncoupling'
    ],
    annotatedPinHighlights: ['Reinforced Bucket Digging Lip', 'Induction-Hardened Pin (56 HRC)', 'Segmental Bolt-On Sprocket Rim'],
    targetIndustries: ['asphalt', 'concrete', 'mining', 'process']
  },
  {
    id: 'drag-conveyors',
    name: 'Drag Conveyors',
    shortName: 'Drag Conveyors',
    tagline: 'High-Temperature Slat Conveyors & Continuous Floor Wear',
    description: 'WearGuard P500 through-hardened floor plates, drop-forged case-hardened chain links, and reversible high-chrome flight shoes for hot mix transfer.',
    badge: 'Continuous Drag',
    image: '/images/drive-sprockets.webp',
    iconName: 'Cpu',
    keyDifferentiators: [
      'WearGuard P500 (500 BHN) bottom floor slide plates',
      'Drop-forged alloy steel chain links with 58-62 HRC case-hardened pins',
      'Reversible cast high-chrome flight shoes doubling service life'
    ],
    annotatedPinHighlights: ['P500 Through-Hardened Floor', 'Drop-Forged 20MnCr5 Link', 'Cast High-Chrome Flight Shoe'],
    targetIndustries: ['asphalt', 'mining', 'process']
  },
  {
    id: 'earthmoving-tips',
    name: 'Earthmoving Bucket Tips',
    shortName: 'G.E.T. Tips',
    tagline: 'Severe Rock Gouging, High Penetration & Impact Shocks',
    description: 'Application-matched alloy excavator and loader teeth, heavy-duty adapters, and self-sharpening rock profiles for mining shovels and quarry fleets.',
    badge: 'Severe G.E.T.',
    image: '/images/earth-moving-bucket-tips-1.webp',
    iconName: 'Sparkles',
    keyDifferentiators: [
      'Deep core through-hardened alloy steels (48-53 HRC, core > 45 HRC)',
      'Self-sharpening profiles maintaining high penetration rate across full wear cycle',
      'Exact-fit compatible with CAT J-Series, Esco Ultralok, Komatsu, Volvo'
    ],
    annotatedPinHighlights: ['Self-Sharpening Penetration Nose', 'Deep Core Hardening (>45 HRC)', 'Reinforced Adapter Pin Box'],
    targetIndustries: ['mining', 'concrete', 'process']
  }
];

export const CUSTOM_ENGINEERING_STEPS = [
  {
    step: '01',
    title: '3D Scan & Reverse Engineering',
    description: 'Send us a worn part sample, dimension sketch, or CAD model. Our engineers perform laser scanning, dimensional verification, and wear pattern analysis.',
    icon: 'Scan3d'
  },
  {
    step: '02',
    title: 'Metallurgical Alloy Matching',
    description: 'We don’t just copy dimensions; we upgrade metallurgy. We select or formulate custom high-chrome, carbide, or manganese alloys matched to your site conditions.',
    icon: 'Sparkles'
  },
  {
    step: '03',
    title: 'Small-Batch Flexibility (1-10 Units)',
    description: 'Order as few as 1 to 10 units without punitive tooling fees. Ideal for testing, field trials, emergency repairs, or discontinued legacy equipment.',
    icon: 'Layers'
  },
  {
    step: '04',
    title: 'Precision Foundry & CNC Machining',
    description: 'Cast in state-of-the-art induction foundries, heat-treated in computer-controlled furnaces, and CNC machined to ISO 9001 precision fit tolerances.',
    icon: 'Cpu'
  },
  {
    step: '05',
    title: 'Rapid 6-8 Week Global Delivery',
    description: 'From signed approval drawing to delivery at your plant gate in 6-8 weeks, backed by WearGuard global logistics and on-site engineering support.',
    icon: 'Truck'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Switching our 350 TPH asphalt drum to WearGuard's CFD-analyzed flighting and P450 internals cut our burner fuel bill by 14% and we have not had a single flight burn-through in two full seasons.",
    author: "Mark S.",
    role: "Plant Operations Manager",
    company: "Major Australian Road Contracting Group",
    location: "Melbourne, Australia",
    industry: "Asphalt",
    verified: "350 TPH Continuous Drum"
  },
  {
    quote: "OEM quoted 26 weeks and an outrageous price for legacy twin-shaft mixer arm replacements. WearGuard 3D-scanned our worn arm, upgraded it with high-chrome protective shields, and delivered 24 units in 7 weeks.",
    author: "David V.",
    role: "Chief Maintenance Engineer",
    company: "Concrete & Quarry Materials Ltd",
    location: "Queensland, Australia",
    industry: "Concrete",
    verified: "Twin-Shaft Pugmill"
  },
  {
    quote: "In hard basalt quarrying, standard OEM bucket teeth were wearing out every 110 operating hours. WearGuard’s Wearcast Max 1100 tips reached 230 hours with crisp penetration throughout.",
    author: "Graeme R.",
    role: "Quarry Production Superintendent",
    company: "Pacific Aggregate Resources",
    location: "New South Wales, Australia",
    industry: "Mining",
    verified: "Basalt Quarry GET"
  },
  {
    quote: "Our cement clinker transfer chutes were blowing out every 6 weeks. WearGuard designed interlocking EnduraCast Z-Core tiles with countersunk blind fixings. 14 months later, there is zero measurable gouging.",
    author: "Andrew H.",
    role: "Reliability & Fixed Plant Lead",
    company: "Apex Cement & Lime Corporation",
    location: "Adelaide, Australia",
    industry: "Process & Cement",
    verified: "Clinker Impact Chute"
  },
  {
    quote: "Being able to order small batches of 6 custom cast mixer tips without paying for new pattern mold tooling saved our winter overhaul budget over $45,000.",
    author: "Stefan K.",
    role: "Operations Director",
    company: "Highland Asphalt & Paving",
    location: "Auckland, New Zealand",
    industry: "Asphalt",
    verified: "Batch Plant Mixer"
  },
  {
    quote: "The 24-hour drawing turnaround gave us full approval confidence. The castings arrived exactly to specification with zero on-site torching or grinding required.",
    author: "Michael T.",
    role: "Senior Mechanical Asset Engineer",
    company: "Trans-Pacific Bulk Terminals",
    location: "Western Australia",
    industry: "Bulk Handling",
    verified: "Ship Loader Chute"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Can WearGuard manufacture parts for obsolete or discontinued plant brands?",
    answer: "Yes! 'Any Brand. Any Era. No Excuses.' We specialize in reverse engineering legacy, obsolete, and non-standard equipment. You can send us a worn sample, engineering drawing, or photos with measurements, and we produce exact-fit CAD models with upgraded metallurgy."
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "We support small-batch flexibility: you can order as few as 1–10 units without massive upfront tooling commitments. This is ideal for testing prototype alloys, niche applications, or emergency spares."
  },
  {
    question: "How do WearGuard alloys outlast OEM parts by 20-60%?",
    answer: "OEM manufacturers typically use standard generic grade steels (e.g., standard mild or basic AR400) to minimize production cost. WearGuard analyzes your specific aggregate hardness, velocity, and thermal cycling, tailoring chemistry (up to 27% Chromium, Molybdenum, Boron, and Tungsten carbides) and heat treatment specifically for your wear mechanism."
  },
  {
    question: "What is the typical turnaround time from quote to delivery?",
    answer: "Standard custom cast and machined parts ship in 6–8 weeks from drawing approval. Common stock wear plates, filter bags, and standard bucket elevator components are available for expedited dispatch."
  },
  {
    question: "Do you offer on-site wear audits and engineering consultations?",
    answer: "Yes. Our engineering specialists conduct on-site and virtual wear audits to identify recurring failure choke points, recommend optimal alloy upgrades, and project measurable ROI."
  }
];

// Helper query functions
export function getProductById(id: string): ProductItem | undefined {
  return PRODUCTS_CATALOG.find(p => p.id === id);
}

export function getProductsByIndustry(industryId: IndustryId): ProductItem[] {
  return PRODUCTS_CATALOG.filter(p => p.targetIndustries.includes(industryId));
}

export function getProductsByCategory(category: ApplicationCategory): ProductItem[] {
  return PRODUCTS_CATALOG.filter(p => p.category === category);
}

export function getAlloyById(id: string): AlloyGrade | undefined {
  return ALLOY_GRADES_DATA.find(a => a.id === id);
}

export function getIndustryById(id: IndustryId): Industry | undefined {
  return INDUSTRIES_DATA.find(ind => ind.id === id);
}
