import { motion } from 'motion/react';
import { ArrowRight, Building, Home, KeyRound, Megaphone } from 'lucide-react';
import { Button } from './ui/button';

const sellingServices = [
  {
    icon: Home,
    title: 'Selling Preparation',
    description: 'Practical guidance on presentation, pricing expectations, photos, and listing readiness.',
    metric: 'Prepare',
  },
  {
    icon: KeyRound,
    title: 'Letting Support',
    description: 'Help with finding tenants, arranging viewings, and keeping the rental process organised.',
    metric: 'Let',
  },
  {
    icon: Building,
    title: 'Property Marketing',
    description: 'Support with clear property details, enquiry handling, and viewing coordination.',
    metric: 'Market',
  },
  {
    icon: Megaphone,
    title: 'Offer Follow-Up',
    description: 'Simple support around buyer or tenant questions, offers, and next steps.',
    metric: 'Agree',
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
            <p className="section-kicker mb-3">Selling and Letting</p>
            <h2
              className="text-3xl md:text-5xl leading-tight mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#F7F4ED',
                fontWeight: 700,
              }}
            >
              Support when you want to sell or let your property.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(247, 244, 237, 0.82)' }}>
              From preparing a listing to arranging viewings and following up enquiries, we help keep the process organised and easy to understand.
            </p>
            <Button
              asChild
              className="rounded-sm bg-[#C7A463] text-[#17233B] hover:bg-[#F7F4ED]"
            >
              <a href="#contact">
                Discuss your property
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
            {sellingServices.map((investment, index) => {
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
          ExComS provides property support and introductions where appropriate. Specialist legal, mortgage, tax, or survey advice should be taken from qualified professionals.
        </p>
      </div>
    </section>
  );
}
