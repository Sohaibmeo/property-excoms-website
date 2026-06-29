import { motion } from 'motion/react';
import { FileCheck, LockKeyhole, MessageSquareText } from 'lucide-react';

const standards = [
  {
    icon: FileCheck,
    title: 'Clear information',
    description: 'We explain the next step plainly, so clients understand what is happening and what is needed from them.',
  },
  {
    icon: LockKeyhole,
    title: 'Respectful handling',
    description: 'Client details, property information, budgets, and conversations are handled carefully from the first enquiry.',
  },
  {
    icon: MessageSquareText,
    title: 'Plain-English support',
    description: 'We keep communication simple and avoid unnecessary jargon, pressure, or overcomplicated promises.',
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
              <p className="section-kicker mb-3">Service Standards</p>
              <h2
                className="text-3xl md:text-5xl leading-tight mb-5"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#F7F4ED',
                  fontWeight: 700,
                }}
              >
                Professional support, kept simple.
              </h2>
              <p className="leading-relaxed" style={{ color: 'rgba(247, 244, 237, 0.78)' }}>
                Clients need clear communication, careful handling, and practical help with the property task in front of them.
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
