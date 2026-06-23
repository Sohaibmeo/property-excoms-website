import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Home, KeyRound, Building, Rocket, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const investments = [
  {
    icon: Home,
    title: 'Prime Residential',
    description: 'Core London homes assessed for scarcity, buyer depth, refurbishment potential, and long-term liquidity.',
    metric: 'Capital preservation',
    ticket: 'GBP 750k+',
  },
  {
    icon: KeyRound,
    title: 'Buy-to-Let',
    description: 'Income-led acquisitions with rent evidence, local demand checks, compliance review, and management planning.',
    metric: 'Income strategy',
    ticket: 'GBP 350k+',
  },
  {
    icon: Building,
    title: 'Commercial Assets',
    description: 'Office, retail, and mixed-use opportunities reviewed around tenant covenant, lease structure, and capex exposure.',
    metric: 'Lease analysis',
    ticket: 'GBP 1m+',
  },
  {
    icon: Rocket,
    title: 'Development & Off-Plan',
    description: 'Selective early-stage opportunities where delivery risk, payment schedule, location fundamentals, and exit route are clear.',
    metric: 'Risk review',
    ticket: 'GBP 250k+',
  },
];

export function InvestmentOpportunities() {
  return (
    <section id="investment" className="py-20 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#17233B' }}>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(135deg, #C7A463 1px, transparent 1px)', backgroundSize: '42px 42px' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
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
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(247, 244, 237, 0.82)' }}>
            We avoid dressing every opportunity as a win. ExComS frames the upside, the constraints,
            the management realities, and the questions worth answering before capital is committed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investments.map((investment, index) => {
            const Icon = investment.icon;
            return (
              <motion.div
                key={investment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="p-7 h-full transition-all duration-300 group rounded-sm border"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', borderColor: 'rgba(247, 244, 237, 0.12)' }}
                >
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: '#C7A463' }}
                  >
                    <Icon size={28} style={{ color: '#17233B' }} />
                  </div>
                  <h3
                    className="text-2xl mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#F7F4ED',
                      fontWeight: 600,
                    }}
                  >
                    {investment.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-sm" style={{ color: 'rgba(247, 244, 237, 0.78)' }}>
                    {investment.description}
                  </p>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between gap-4">
                      <span style={{ color: 'rgba(247, 244, 237, 0.62)' }}>Focus</span>
                      <span className="text-right font-semibold" style={{ color: '#C7A463' }}>
                        {investment.metric}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span style={{ color: 'rgba(247, 244, 237, 0.62)' }}>Typical brief</span>
                      <span className="text-right font-semibold" style={{ color: '#C7A463' }}>
                        {investment.ticket}
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full group/btn hover:bg-white/10"
                    style={{ color: '#C7A463' }}
                  >
                    <a href="#contact">
                      Discuss strategy
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-xs leading-relaxed max-w-3xl" style={{ color: 'rgba(247, 244, 237, 0.55)' }}>
          Figures and entry levels are indicative examples only. Property investments can rise or fall in value,
          and suitability depends on individual circumstances, tax position, finance terms, and holding period.
        </p>
      </div>
    </section>
  );
}
