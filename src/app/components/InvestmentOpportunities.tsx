import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Home, KeyRound, Building, Rocket, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const investments = [
  {
    icon: Home,
    title: 'Residential Investments',
    description: 'High-value residential properties in prime London locations, offering strong capital appreciation potential.',
    yield: '4.2% - 5.8%',
    minInvestment: '£500,000',
  },
  {
    icon: KeyRound,
    title: 'Buy-to-Let Opportunities',
    description: 'Carefully selected rental properties with verified tenant demand and proven income streams.',
    yield: '5.5% - 7.2%',
    minInvestment: '£350,000',
  },
  {
    icon: Building,
    title: 'Commercial Property',
    description: 'Office, retail, and mixed-use developments with established corporate tenants and long-term leases.',
    yield: '6.0% - 8.5%',
    minInvestment: '£1,000,000',
  },
  {
    icon: Rocket,
    title: 'Off-Plan Developments',
    description: 'Early-stage investment in new developments with significant upside potential and flexible payment plans.',
    yield: '8.0% - 12.0%',
    minInvestment: '£250,000',
  },
];

export function InvestmentOpportunities() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: '#1E2A44' }}>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#C8A96B', filter: 'blur(100px)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: '#3F6B5A', filter: 'blur(100px)' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
              color: '#F8F7F4',
              fontWeight: 700,
            }}
          >
            Investment Opportunities
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#F8F7F4', opacity: 0.9 }}>
            Diversified property investment solutions designed to build wealth and generate passive income.
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
                  className="p-8 h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer border-none"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: '#C8A96B' }}
                  >
                    <Icon size={32} style={{ color: '#1E2A44' }} />
                  </div>
                  <h3
                    className="text-2xl mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#F8F7F4',
                      fontWeight: 600,
                    }}
                  >
                    {investment.title}
                  </h3>
                  <p className="mb-6 leading-relaxed" style={{ color: '#F8F7F4', opacity: 0.9 }}>
                    {investment.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: '#F8F7F4', opacity: 0.7 }}>
                        Expected Yield
                      </span>
                      <span
                        className="font-semibold"
                        style={{ color: '#C8A96B', fontFamily: "'Playfair Display', serif" }}
                      >
                        {investment.yield}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm" style={{ color: '#F8F7F4', opacity: 0.7 }}>
                        Min. Investment
                      </span>
                      <span
                        className="font-semibold"
                        style={{ color: '#C8A96B', fontFamily: "'Playfair Display', serif" }}
                      >
                        {investment.minInvestment}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full group/btn hover:bg-white/10"
                    style={{ color: '#C8A96B' }}
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
