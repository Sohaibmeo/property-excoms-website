import { Card } from './ui/card';
import { motion } from 'motion/react';
import { FileSearch, LockKeyhole, MessageSquareText } from 'lucide-react';

const standards = [
  {
    icon: FileSearch,
    title: 'Documented judgement',
    description: 'Recommendations are supported by comparable evidence, risk notes, and a clear explanation of why a route is suitable.',
  },
  {
    icon: LockKeyhole,
    title: 'Discretion by default',
    description: 'Private client details, budgets, motivations, and negotiations are treated as sensitive from the first conversation.',
  },
  {
    icon: MessageSquareText,
    title: 'Plain-English advice',
    description: 'We avoid sales pressure and explain trade-offs directly, so clients can make decisions without noise or ambiguity.',
  },
];

export function AdvisoryStandards() {
  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: '#F7F4ED' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="section-kicker mb-3">Advisory Standards</p>
          <h2 className="section-title mb-4">Credibility without theatre.</h2>
          <p className="section-copy">
            Premium clients do not need exaggerated claims. They need thoughtful analysis, privacy,
            and a calm advisor who can separate attractive presentation from sound decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="premium-card p-8 h-full rounded-sm">
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#17233B' }}
                  >
                    <Icon size={23} style={{ color: '#C7A463' }} />
                  </div>
                  <h3
                    className="text-2xl mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#17233B',
                      fontWeight: 600,
                    }}
                  >
                    {standard.title}
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: 'rgba(36, 39, 44, 0.76)' }}>
                    {standard.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
