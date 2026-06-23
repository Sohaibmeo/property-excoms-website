import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Home, Key, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Home,
    title: 'Acquisition Advisory',
    description: 'Search briefs, valuation checks, negotiation strategy, and due diligence for prime residential and commercial purchases.',
    color: '#3D6658',
    href: '#process',
  },
  {
    icon: Key,
    title: 'Premium Lettings',
    description: 'High-quality rental search, shortlisting, viewing support, and tenancy guidance for executives, families, and relocations.',
    color: '#C7A463',
    href: '#process',
  },
  {
    icon: Building2,
    title: 'Managed Assets',
    description: 'A calmer landlord experience with tenant care, compliance oversight, maintenance coordination, and reporting.',
    color: '#17233B',
    href: '#management',
  },
  {
    icon: TrendingUp,
    title: 'Investor Sourcing',
    description: 'Discreet investment routes assessed for yield, risk, exit route, and portfolio fit.',
    color: '#C7A463',
    href: '#investment',
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
          <p className="section-kicker mb-3">How We Advise</p>
          <h2
            className="section-title mb-4"
          >
            Property decisions deserve more than a search.
          </h2>
          <p className="section-copy">
            We work from a clear brief, test assumptions against the market, and stay close through the decisions that affect value, risk, and long-term fit.
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
                  <p className="mb-7 leading-relaxed text-sm" style={{ color: 'rgba(36, 39, 44, 0.78)' }}>
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="group/btn p-0 h-auto hover:bg-transparent"
                    style={{ color: service.color }}
                  >
                    <a href={service.href}>
                      Explore path
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </a>
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
