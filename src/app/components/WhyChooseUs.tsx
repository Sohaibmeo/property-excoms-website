import { motion } from 'motion/react';
import { Award, Shield, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Market Expertise',
    description: 'Decades of combined experience in the UK property market, providing unmatched insights and knowledge.',
  },
  {
    icon: Shield,
    title: 'Trusted Guidance',
    description: 'Transparent, ethical advice tailored to your unique needs and long-term property goals.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Insights',
    description: 'Data-driven analysis and strategic recommendations to maximize your property portfolio returns.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal account management and 24/7 support throughout your property journey.',
  },
];

export function WhyChooseUs() {
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
            Why Choose ExComS Property
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2D2D2D' }}>
            Your trusted partner for premium property consultancy and investment guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: '#1E2A44' }}
                >
                  <Icon size={36} style={{ color: '#C8A96B' }} />
                </div>
                <h3
                  className="text-2xl mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#1E2A44',
                    fontWeight: 600,
                  }}
                >
                  {feature.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#2D2D2D' }}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
