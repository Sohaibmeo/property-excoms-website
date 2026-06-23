import { Card } from './ui/card';
import { motion } from 'motion/react';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1758448511320-05d7d28f4298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmVzaWRlbnRpYWwlMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3ODIyMTUyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Mayfair Penthouse',
    location: 'Mayfair, London',
    type: 'Private sale',
    price: 'GBP 4,750,000',
    beds: 4,
    baths: 3,
    sqft: 3200,
    note: 'Lateral living, concierge, and long-view resale appeal.',
  },
  {
    image: 'https://images.unsplash.com/photo-1621831337128-35676ca30868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBnbGFzcyUyMGZhY2FkZXxlbnwxfHx8fDE3ODIyMTUyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Canary Wharf Office',
    location: 'Canary Wharf, London',
    type: 'Commercial',
    price: 'GBP 12,500,000',
    beds: null,
    baths: null,
    sqft: 15000,
    note: 'Grade A tenant profile with asset-management upside.',
  },
  {
    image: 'https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbW9kZXJuJTIwdG93bmhvdXNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MjIxNTI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Chelsea Townhouse',
    location: 'Chelsea, London',
    type: 'Family home',
    price: 'GBP 6,250,000',
    beds: 5,
    baths: 4,
    sqft: 4100,
    note: 'Freehold, garden, and planning potential subject to consent.',
  },
  {
    image: 'https://images.unsplash.com/photo-1435738623530-c32d3631932f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3ODIyMTUyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'City View Apartment',
    location: 'The City, London',
    type: 'Prime rental',
    price: 'GBP 8,500/month',
    beds: 3,
    baths: 2,
    sqft: 2400,
    note: 'Fully serviced option for executive relocation.',
  },
];

export function FeaturedOpportunities() {
  return (
    <section id="opportunities" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
        >
          <div className="max-w-3xl">
            <p className="section-kicker mb-3">Curated Opportunities</p>
            <h2 className="section-title mb-4">A smaller list, better qualified.</h2>
            <p className="section-copy">
              We focus on prime homes, executive rentals, and investment assets where location,
              condition, liquidity, and strategy have been carefully considered.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-sm border-[#17233B]/25 bg-white text-[#17233B] hover:bg-[#17233B] hover:text-[#F7F4ED] hover:border-[#17233B] lg:mb-2"
          >
            <a href="#contact">Request a private shortlist</a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="premium-card overflow-hidden group rounded-sm">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-[0.14em]"
                    style={{ backgroundColor: '#17233B', color: '#F7F4ED' }}
                  >
                    {property.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#17233B',
                      fontWeight: 600,
                    }}
                  >
                    {property.title}
                  </h3>
                  <div className="flex items-center mb-4" style={{ color: 'rgba(36, 39, 44, 0.72)' }}>
                    <MapPin size={16} className="mr-1" style={{ color: '#C7A463' }} />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div
                    className="text-2xl mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#C7A463',
                      fontWeight: 600,
                    }}
                  >
                    {property.price}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm" style={{ color: '#24272C' }}>
                    {property.beds && (
                      <div className="flex items-center gap-1">
                        <Bed size={16} />
                        <span>{property.beds} bed</span>
                      </div>
                    )}
                    {property.baths && (
                      <div className="flex items-center gap-1">
                        <Bath size={16} />
                        <span>{property.baths} bath</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Square size={16} />
                      <span>{property.sqft.toLocaleString()} sq ft</span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(36, 39, 44, 0.72)' }}>
                    {property.note}
                  </p>
                  <Button
                    asChild
                    className="w-full group/btn rounded-sm bg-[#17233B] text-[#F7F4ED] hover:bg-[#C7A463] hover:text-[#17233B]"
                  >
                    <a href="#contact">
                      Request details
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
