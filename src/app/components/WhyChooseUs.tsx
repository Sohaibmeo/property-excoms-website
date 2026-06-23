import { motion } from 'motion/react';
import { Award, Shield, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Selective market access',
    description: 'We focus on better-qualified opportunities, including discreet sales and landlord-led instructions that rarely suit a mass-market search.',
  },
  {
    icon: Shield,
    title: 'Advice before volume',
    description: 'Every recommendation is tested against your brief, timing, risk tolerance, holding plan, and exit route.',
  },
  {
    icon: TrendingUp,
    title: 'Commercial discipline',
    description: 'Investor work includes rent evidence, yield context, capex pressure, liquidity, and the practical levers that affect performance.',
  },
  {
    icon: Users,
    title: 'Senior-led service',
    description: 'You work with a consistent advisory contact from brief to completion, handover, or ongoing management.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: '#F7F4ED' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start"
        >
          <div>
            <p className="section-kicker mb-3">Why ExComS</p>
            <h2 className="section-title mb-5">A consultancy posture, not a listings habit.</h2>
            <div className="gold-divider mb-6" />
            <p className="section-copy">
              Premium clients need clarity, confidentiality, and commercial judgement. ExComS brings structure
              to complex property decisions, helping you move with confidence rather than volume-led pressure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="premium-card rounded-sm p-6"
                >
                  <div
                    className="w-11 h-11 rounded-sm flex items-center justify-center mb-5"
                    style={{ backgroundColor: '#17233B' }}
                  >
                    <Icon size={22} style={{ color: '#C7A463' }} />
                  </div>
                  <h3
                    className="text-xl mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#17233B',
                      fontWeight: 600,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(36, 39, 44, 0.76)' }}>
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
