import { Card } from './ui/card';
import { motion } from 'motion/react';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1758448511320-05d7d28f4298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwcmVzaWRlbnRpYWwlMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3ODIyMTUyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Mayfair Penthouse',
    location: 'Mayfair, London',
    type: 'For Sale',
    price: '£4,750,000',
    beds: 4,
    baths: 3,
    sqft: 3200,
  },
  {
    image: 'https://images.unsplash.com/photo-1621831337128-35676ca30868?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBnbGFzcyUyMGZhY2FkZXxlbnwxfHx8fDE3ODIyMTUyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Canary Wharf Office',
    location: 'Canary Wharf, London',
    type: 'Commercial Investment',
    price: '£12,500,000',
    beds: null,
    baths: null,
    sqft: 15000,
  },
  {
    image: 'https://images.unsplash.com/photo-1721815693498-cc28507c0ba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbW9kZXJuJTIwdG93bmhvdXNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MjIxNTI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Chelsea Townhouse',
    location: 'Chelsea, London',
    type: 'For Sale',
    price: '£6,250,000',
    beds: 5,
    baths: 4,
    sqft: 4100,
  },
  {
    image: 'https://images.unsplash.com/photo-1435738623530-c32d3631932f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3ODIyMTUyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'City View Apartment',
    location: 'The City, London',
    type: 'To Rent',
    price: '£8,500/month',
    beds: 3,
    baths: 2,
    sqft: 2400,
  },
];

export function FeaturedOpportunities() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#1E2A44',
              fontWeight: 700,
            }}
          >
            Featured Opportunities
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2D2D2D' }}>
            Carefully curated premium properties selected for their exceptional value and investment potential.
          </p>
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
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium"
                    style={{ backgroundColor: '#1E2A44', color: '#F8F7F4' }}
                  >
                    {property.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#1E2A44',
                      fontWeight: 600,
                    }}
                  >
                    {property.title}
                  </h3>
                  <div className="flex items-center mb-4" style={{ color: '#2D2D2D' }}>
                    <MapPin size={16} className="mr-1" style={{ color: '#C8A96B' }} />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <div
                    className="text-2xl mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#C8A96B',
                      fontWeight: 600,
                    }}
                  >
                    {property.price}
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-sm" style={{ color: '#2D2D2D' }}>
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
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full group/btn"
                    style={{ color: '#1E2A44' }}
                  >
                    View Details
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
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
