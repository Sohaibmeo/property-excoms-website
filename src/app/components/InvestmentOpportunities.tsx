import { motion } from 'motion/react';
import { ArrowRight, Building, Home, KeyRound, Rocket } from 'lucide-react';
import { Button } from './ui/button';

const investments = [
  {
    icon: Home,
    title: 'Prime Residential',
    description: 'Scarcity, buyer depth, refurbishment potential, and long-term liquidity.',
    metric: 'Capital preservation',
  },
  {
    icon: KeyRound,
    title: 'Buy-to-Let',
    description: 'Rent evidence, local demand, compliance exposure, and running costs.',
    metric: 'Income strategy',
  },
  {
    icon: Building,
    title: 'Commercial Assets',
    description: 'Tenant covenant, lease structure, capex exposure, and exit assumptions.',
    metric: 'Lease analysis',
  },
  {
    icon: Rocket,
    title: 'Development & Off-Plan',
    description: 'Delivery risk, payment schedule, location fundamentals, and liquidity.',
    metric: 'Risk review',
  },
];

export function InvestmentOpportunities() {
  return (
    <section id="investment" className="py-20 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#17233B' }}>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(135deg, #C7A463 1px, transparent 1px)', backgroundSize: '42px 42px' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <p className="section-kicker mb-3">Investor Advisory</p>
            <h2
              className="text-3xl md:text-5xl leading-tight mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#F7F4ED',
                fontWeight: 700,
              }}
            >
              Investment work with the risk still visible.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(247, 244, 237, 0.82)' }}>
              We avoid dressing every route as a win. ExComS frames the upside, constraints,
              management realities, and the questions worth answering before capital is committed.
            </p>
            <Button
              asChild
              className="rounded-sm bg-[#C7A463] text-[#17233B] hover:bg-[#F7F4ED]"
            >
              <a href="#contact">
                Discuss strategy
                <ArrowRight className="ml-2" size={16} />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-y border-[#F7F4ED]/15"
          >
            {investments.map((investment, index) => {
              const Icon = investment.icon;
              return (
                <div
                  key={investment.title}
                  className="grid gap-5 md:grid-cols-[56px_0.75fr_1fr] py-7 border-b border-[#F7F4ED]/12 last:border-b-0"
                >
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: '#C7A463' }}
                  >
                    <Icon size={23} style={{ color: '#17233B' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2" style={{ color: '#C7A463' }}>
                      {investment.metric}
                    </p>
                    <h3
                      className="text-2xl"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#F7F4ED',
                        fontWeight: 600,
                      }}
                    >
                      {investment.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed" style={{ color: 'rgba(247, 244, 237, 0.76)' }}>
                    {investment.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        <p className="mt-8 text-xs leading-relaxed max-w-3xl" style={{ color: 'rgba(247, 244, 237, 0.55)' }}>
          ExComS does not provide financial advice or publish investment products on this website.
          Property investments can rise or fall in value, and suitability depends on individual circumstances,
          tax position, finance terms, and holding period.
        </p>
      </div>
    </section>
  );
}
