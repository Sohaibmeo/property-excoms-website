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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-sm overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#17233B' }}
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-7 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#F7F4ED]/12">
              <p className="section-kicker mb-3">Advisory Standards</p>
              <h2
                className="text-3xl md:text-5xl leading-tight mb-5"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#F7F4ED',
                  fontWeight: 700,
                }}
              >
                Credibility without theatre.
              </h2>
              <p className="leading-relaxed" style={{ color: 'rgba(247, 244, 237, 0.78)' }}>
                Premium clients do not need exaggerated claims. They need thoughtful analysis, privacy,
                and a calm advisor who can separate attractive presentation from sound decision-making.
              </p>
            </div>

            <div>
              {standards.map((standard, index) => {
                const Icon = standard.icon;
                return (
                  <div
                    key={standard.title}
                    className="grid gap-5 md:grid-cols-[56px_0.8fr_1.2fr] p-7 md:p-8 border-b border-[#F7F4ED]/12 last:border-b-0"
                  >
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: index === 1 ? '#3D6658' : '#C7A463' }}
                    >
                      <Icon size={23} style={{ color: index === 1 ? '#F7F4ED' : '#17233B' }} />
                    </div>
                    <h3
                      className="text-2xl"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#F7F4ED',
                        fontWeight: 600,
                      }}
                    >
                      {standard.title}
                    </h3>
                    <p className="leading-relaxed text-sm" style={{ color: 'rgba(247, 244, 237, 0.76)' }}>
                      {standard.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
