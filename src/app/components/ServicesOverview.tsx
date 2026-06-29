import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Home, Key, Building2, Tag, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Home,
    title: 'Buy a Property',
    description: 'Search support, shortlisting, viewing guidance, and offer help for people looking for the right home or property.',
    color: '#3D6658',
  },
  {
    icon: Key,
    title: 'Rent a Property',
    description: 'Rental search, viewing support, and simple guidance for tenants, families, and people relocating.',
    color: '#C7A463',
  },
  {
    icon: Building2,
    title: 'Landlord Support',
    description: 'Tenant communication, rent tracking, maintenance coordination, and regular updates for landlords.',
    color: '#17233B',
  },
  {
    icon: Tag,
    title: 'Sell a Property',
    description: 'Pricing guidance, marketing preparation, viewing coordination, and offer support for sellers.',
    color: '#C7A463',
  },
];

export function ServicesOverview() {
  return (
    <section id="advisory" className="py-20 lg:py-24" style={{ backgroundColor: '#F7F4ED' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="section-kicker mb-3">What We Do</p>
          <h2
            className="section-title mb-4"
          >
            Straightforward help for everyday property needs.
          </h2>
          <p className="section-copy">
            Whether you want to buy, sell, rent, let, or manage a property, we keep the process clear and practical from the first conversation.
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
                <Card className="premium-card p-7 h-full group rounded-sm">
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center mb-7 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon size={28} style={{ color: service.color }} />
                  </div>
                  <h3
                    className="text-2xl mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#17233B',
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: 'rgba(36, 39, 44, 0.78)' }}>
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <Button
            asChild
            className="rounded-sm bg-[#17233B] text-[#F7F4ED] hover:bg-[#C7A463] hover:text-[#17233B]"
          >
            <a href="#contact">
              Start your enquiry
              <ArrowRight className="ml-2" size={16} />
            </a>
          </Button>
          <p className="text-sm leading-relaxed max-w-xl" style={{ color: 'rgba(36, 39, 44, 0.68)' }}>
            Tell us what you need and we will guide you toward the right next step.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
