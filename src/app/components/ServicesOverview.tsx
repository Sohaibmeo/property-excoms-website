import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Home, Key, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Home,
    title: 'Buy Property',
    description: 'Expert guidance through every step of purchasing your ideal residential or commercial property, with exclusive access to premium opportunities.',
    color: '#3F6B5A',
  },
  {
    icon: Key,
    title: 'Rent Property',
    description: 'Discover exceptional rental properties tailored to your lifestyle and business needs, with comprehensive tenant support services.',
    color: '#C8A96B',
  },
  {
    icon: Building2,
    title: 'Property Management',
    description: 'Professional property management services for landlords, covering everything from tenant selection to maintenance coordination.',
    color: '#1E2A44',
  },
  {
    icon: TrendingUp,
    title: 'Investment Opportunities',
    description: 'Strategic investment advice and access to high-yield property opportunities, from buy-to-let to commercial developments.',
    color: '#C8A96B',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#F8F7F4' }}>
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
            Comprehensive Property Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2D2D2D' }}>
            From acquisition to management, we provide expert guidance at every stage of your property journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white border-none">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon size={32} style={{ color: service.color }} />
                  </div>
                  <h3
                    className="text-2xl mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#1E2A44',
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="mb-6 leading-relaxed" style={{ color: '#2D2D2D' }}>
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto hover:bg-transparent"
                    style={{ color: service.color }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
