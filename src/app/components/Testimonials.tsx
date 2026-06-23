import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Private investor',
    content: 'ExComS challenged our assumptions before showing us stock. That saved time, sharpened the brief, and helped us build a portfolio we can actually manage.',
    rating: 5,
  },
  {
    name: 'James Richardson',
    role: 'Buyer client',
    content: 'The value was in the judgement. They explained the trade-offs clearly, handled negotiation calmly, and kept the process moving without pressure.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Portfolio landlord',
    content: 'Management is much more transparent now. I know what needs attention, what can wait, and how each decision affects the property long term.',
    rating: 5,
  },
];

export function Testimonials() {
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
          <p className="section-kicker mb-3">Client Perspective</p>
          <h2 className="section-title mb-4">Calm guidance is the product.</h2>
          <p className="section-copy">
            Clients come to ExComS for judgement, clarity, and steady execution through high-value property
            decisions where the details matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="premium-card p-8 h-full rounded-sm relative">
                <Quote
                  size={48}
                  className="absolute top-6 right-6 opacity-10"
                  style={{ color: '#C7A463' }}
                />
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#C7A463" color="#C7A463" />
                  ))}
                </div>

                <p className="leading-relaxed mb-8 relative z-10" style={{ color: '#24272C' }}>
                  "{testimonial.content}"
                </p>

                <div className="pt-5 border-t border-[#17233B]/10">
                  <h4
                    className="text-lg mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#17233B',
                      fontWeight: 600,
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p className="text-sm" style={{ color: 'rgba(36, 39, 44, 0.68)' }}>
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
