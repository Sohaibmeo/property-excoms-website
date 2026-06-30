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
  brand: 'ExComS Properties',
  address: '95 Park Street, Luton LU1 3HG',
  shortAddress: '95 Park Street, Luton',
  postcode: 'LU1 3HG',
  eyebrow: 'Flexible property opportunity',
  title: 'Minutes from London Luton Airport',
  description:
    'A flexible multi-unit property opportunity positioned minutes from London Luton Airport, suitable for a range of accommodation and leasing models.',
  unitCount: 5,
  units: 'Five two-bedroom units',
  commercial: 'Ground-floor office / commercial frontage',
  layout: 'Multi-unit layout with ground-floor frontage',
  imageLabel: 'CGI visual',
}

export const contact = {
  email: 'leasing@lutoncorporatestays.co.uk',
  teamAvailability: 'Available by appointment',
  enquiryEndpoint: import.meta.env.VITE_ENQUIRY_ENDPOINT || '',
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
  { label: 'Five two-bedroom units', icon: BedDouble },
  { label: 'Commercial frontage', icon: Building2 },
  { label: 'High-speed Wi-Fi ready', icon: Wifi },
  { label: 'Flexible leasing enquiries', icon: BriefcaseBusiness },
  { label: 'Long-term letting potential', icon: Clock3 },
  { label: 'Near London Luton Airport', icon: Plane },
]

export const useCases = [
  {
    title: 'Airport staff accommodation',
    body: 'A practical location for staff and business travellers who need convenient airport access.',
    icon: Plane,
  },
  {
    title: 'Airline crew housing',
    body: 'A multi-unit layout that may suit organised crew stays, subject to relevant approvals.',
    icon: UsersRound,
  },
  {
    title: 'Contractor accommodation',
    body: 'A well-connected option for project teams working in Luton and the surrounding area.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Relocation housing',
    body: 'Potential interim accommodation for people relocating to the London–Luton corridor.',
    icon: MapPin,
  },
  {
    title: 'Short-stay operator enquiry',
    body: 'Scope to discuss serviced or short-stay use, subject to planning, licensing and compliance.',
    icon: Laptop,
  },
  {
    title: 'Long-term or investor enquiry',
    body: 'Explore longer-term letting, investment or operator arrangements for the property.',
    icon: Building2,
  },
]

export const galleryItems = [
  { title: 'Exterior elevation', type: 'image', label: 'CGI visual' },
  { title: 'Location & airport proximity', type: 'map', label: 'Illustrative map' },
  { title: 'Interior concept', type: 'interior', label: 'Placeholder visual' },
  { title: 'Two-bedroom plans', type: 'plan', label: 'Concept plan' },
  { title: 'Kitchen concept', type: 'kitchen', label: 'Placeholder visual' },
  { title: 'Future virtual tour', type: 'tour', label: 'Coming soon' },
]

export const leasingPoints = [
  'Long-term leasing potential',
  'Whole-building opportunity',
  'Five two-bedroom units',
  'Office / commercial frontage',
  'Management discussion welcomed',
  'Property information pack on request',
]

export const ctaText = {
  primary: 'Enquire About the Property',
  secondary: 'View Property Overview',
  form: 'Send Property Enquiry',
  pack: 'Request Property Pack',
}

export const disclaimers = {
  travel:
    'Travel times are indicative and must be independently verified before publication or reliance.',
  compliance:
    'Any use as serviced accommodation, short-stay accommodation, corporate housing or commercial accommodation is subject to planning permission, licensing, fire safety, insurance, building regulations and local authority requirements.',
  general:
    'Property information is indicative, may change and should be independently verified.',
  imagery:
    'CGI and placeholder visuals are illustrative and do not represent confirmed photography or final specification.',
}
