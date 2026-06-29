import {
  BedDouble,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Laptop,
  MapPin,
  Plane,
  RadioTower,
  TrainFront,
  UsersRound,
  Wifi,
} from 'lucide-react'

export const property = {
  brand: 'Luton Corporate Stays',
  address: '95 Park Street, Luton LU1 3HG',
  eyebrow: 'Premium corporate accommodation',
  title: 'Minutes from London Luton Airport',
  description:
    'A complete corporate accommodation base designed for airport teams, airline crews, contractors, relocation partners and business professionals.',
  units: '5 two-bedroom units',
  commercial: 'Ground-floor office / commercial frontage',
}

export const navItems = [
  ['Overview', 'overview'],
  ['Property', 'property'],
  ['Location', 'location'],
  ['Floorplans', 'floorplans'],
  ['Gallery', 'gallery'],
  ['Leasing Info', 'leasing'],
  ['Contact', 'contact'],
] as const

export const travelTimes = [
  { label: 'London Luton Airport', time: '5 mins', icon: Plane },
  { label: 'Luton Airport Parkway', time: '6 mins', icon: TrainFront },
  { label: 'M1 Junction 10', time: '8 mins', icon: RadioTower },
  { label: 'Luton Town Centre', time: '9 mins', icon: Building2 },
  { label: 'London St Pancras', time: '25 mins', icon: TrainFront },
]

export const features = [
  { label: '5 two-bedroom units', icon: BedDouble },
  { label: 'Commercial frontage', icon: Building2 },
  { label: 'High-speed Wi-Fi ready', icon: Wifi },
  { label: 'Corporate leasing', icon: BriefcaseBusiness },
  { label: 'Long-term potential', icon: Clock3 },
  { label: 'Airport-linked location', icon: Plane },
]

export const useCases = [
  {
    title: 'Airport staff accommodation',
    body: 'A practical base close to terminals, reducing transfer time for operational teams.',
    icon: Plane,
  },
  {
    title: 'Airline crew housing',
    body: 'Multi-unit flexibility for rotating crew stays and coordinated placements.',
    icon: UsersRound,
  },
  {
    title: 'Contractor accommodation',
    body: 'A well-connected long-stay option for project teams working across Luton.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Relocation housing',
    body: 'A convenient interim home for employees moving into the London–Luton corridor.',
    icon: MapPin,
  },
  {
    title: 'Operator opportunity',
    body: 'Five two-bedroom units with potential for a unified serviced accommodation model.',
    icon: Laptop,
  },
  {
    title: 'Office + accommodation',
    body: 'Combine ground-floor commercial frontage with accommodation above.',
    icon: Building2,
  },
]

export const galleryItems = [
  { title: 'Exterior elevation', type: 'image' },
  { title: 'Location & airport proximity', type: 'map' },
  { title: 'Interior concept', type: 'interior' },
  { title: 'Two-bedroom plans', type: 'plan' },
  { title: 'Kitchen concept', type: 'kitchen' },
  { title: 'Future virtual tour', type: 'tour' },
]

export const leasingPoints = [
  'Long-term leasing potential',
  'Whole-building opportunity',
  'Five two-bedroom units',
  'Office / commercial frontage',
  'Management discussion welcomed',
  'Corporate leasing pack on request',
]

export const ctaText = {
  primary: 'Enquire for Corporate Leasing',
  secondary: 'View Property Overview',
  form: 'Request Tailored Leasing Proposal',
}
