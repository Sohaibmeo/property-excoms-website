import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Property Investor',
    content: 'ExComS Property helped us build a £3M portfolio over 5 years. Their investment insights and market knowledge are second to none. We trust them completely with our property decisions.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    name: 'James Richardson',
    role: 'First-Time Buyer',
    content: 'As a first-time buyer, I was overwhelmed by the process. The team at ExComS guided me every step of the way. They found me the perfect property and negotiated an excellent price.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
  },
  {
    name: 'Priya Sharma',
    role: 'Landlord',
    content: 'Their property management service is exceptional. Rent collection is seamless, maintenance is handled promptly, and they keep me fully informed. Best decision I made for my rental portfolio.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
  {
    name: 'David Chen',
    role: 'Commercial Investor',
    content: 'We invested in a commercial development recommended by ExComS. The returns exceeded projections, and their ongoing support has been invaluable. True professionals in every sense.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
];

export function Testimonials() {
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
            Client Success Stories
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2D2D2D' }}>
            Hear from our clients about their property journey with ExComS Property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 bg-white border-none relative">
                <Quote
                  size={48}
                  className="absolute top-6 right-6 opacity-10"
                  style={{ color: '#C8A96B' }}
                />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4
                      className="text-lg mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#1E2A44',
                        fontWeight: 600,
                      }}
                    >
                      {testimonial.name}
                    </h4>
                    <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.7 }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="#C8A96B" color="#C8A96B" />
                  ))}
                </div>

                <p className="leading-relaxed" style={{ color: '#2D2D2D' }}>
                  "{testimonial.content}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
