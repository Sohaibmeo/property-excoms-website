import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Target, ShieldCheck, Lightbulb } from 'lucide-react';

const principles = [
  {
    icon: Target,
    title: 'Need-led',
    text: 'We clarify whether you want to buy, sell, rent, let, or manage a property before suggesting the next step.',
  },
  {
    icon: ShieldCheck,
    title: 'Practical',
    text: 'We focus on location, budget, condition, timing, viewings, offers, and the details that make the process move.',
  },
  {
    icon: Lightbulb,
    title: 'Relationship-led',
    text: 'Clients get direct, steady guidance from first conversation through completion, letting, or ongoing management.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[480px] lg:h-[620px] rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc4MjIxNTI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="ExComS Property consultation meeting"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(23, 35, 59, 0.45), transparent)',
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 left-6 right-6 lg:left-auto lg:-right-10 lg:w-72"
            >
              <Card
                className="p-6 border-none shadow-2xl rounded-sm"
                style={{ backgroundColor: '#C7A463' }}
              >
                <div
                  className="text-4xl mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#17233B',
                    fontWeight: 700,
                  }}
                >
                  Property Help
                </div>
                <div className="text-sm" style={{ color: '#17233B', opacity: 0.9 }}>
                  Buying, selling, renting, lettings, and landlord support
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-kicker mb-3">About ExComS Property</p>
            <h2 className="section-title mb-6">A practical property partner for everyday decisions.</h2>

            <p className="section-copy mb-6">
              ExComS Property supports buyers, sellers, tenants, and landlords across the UK property market,
              with a focus on clear communication and practical support.
            </p>

            <p className="section-copy mb-8">
              Our role is to help clients understand their options, arrange the right next steps, and stay organised through the property process.
            </p>

            <div className="space-y-5">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div key={principle.title} className="flex gap-4">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: index === 1 ? '#3D6658' : '#17233B' }}
                    >
                      <Icon size={23} style={{ color: index === 1 ? '#F7F4ED' : '#C7A463' }} />
                    </div>
                    <div>
                      <h3
                        className="text-xl mb-2"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: '#17233B',
                          fontWeight: 600,
                        }}
                      >
                        {principle.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(36, 39, 44, 0.76)' }}>
                        {principle.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
