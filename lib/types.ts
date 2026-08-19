export type IndustryId = 'asphalt' | 'concrete' | 'process' | 'mining';

export interface Industry {
  id: IndustryId;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  image: string;
  challenges: string[];
  wearguardAdvantage: string[];
  keyComponents: string[];
  metrics: { label: string; value: string }[];
  operatingConditions?: string;
  recommendedSolutions?: string;
}

export type ApplicationCategory = 
  | 'dryer-components'
  | 'filters'
  | 'filter-components'
  | 'mixers'
  | 'mixer-components'
  | 'liners'
  | 'liners-transfer'
  | 'bucket-elevators'
  | 'drag-conveyors'
  | 'bucket-elevators-conveyors'
  | 'earthmoving-tips';

export interface ProductItem {
  id: string;
  name: string;
  category: ApplicationCategory;
  categoryName: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  recommendedAlloys: string[];
  compatibleBrands: string[];
  image: string;
  badge?: string;
  typicalWearLifeMultiplier: string;
  targetIndustries: IndustryId[];
  typicalLeadTime?: string;
}

export interface AlloyGrade {
  id: string;
  name: string;
  series: 'WearGuard Cut-to-Shape' | 'EnduraCast Z-Core' | 'WearCast High-Chrome' | 'Advanced Composites';
  hardness: string;
  impactResistance: 'Moderate' | 'High' | 'Severe Impact' | 'Extreme Shock';
  abrasionResistance: 'Very High' | 'Extreme' | 'Ultra Severe' | 'Maximum Diamond-Grade';
  maxTemp: string;
  recommendedUse: string;
  applications: string[];
  chemicalHighlights: string;
  thicknessAvailability: string;
}

export interface CustomPartRequest {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  partType: string;
  equipmentBrand: string;
  currentWearLifeMonths: string;
  quantityNeeded: string;
  notes: string;
  urgency: 'Standard (6-8 wks)' | 'Expedited' | 'Emergency Spares';
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
