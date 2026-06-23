import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Target, Heart, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc4MjIxNTI1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="ExComS Property team"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(30, 42, 68, 0.3), transparent)',
                }}
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:-right-12"
            >
              <Card
                className="p-6 border-none shadow-2xl"
                style={{ backgroundColor: '#C8A96B' }}
              >
                <div
                  className="text-4xl mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#1E2A44',
                    fontWeight: 700,
                  }}
                >
                  25+ Years
                </div>
                <div className="text-sm" style={{ color: '#1E2A44', opacity: 0.9 }}>
                  Industry Experience
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#1E2A44',
                fontWeight: 700,
              }}
            >
              About ExComS Property
            </h2>

            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#2D2D2D' }}>
              Founded in 1999, ExComS Property has grown to become one of London's most trusted property consultancy firms. We specialize in providing expert guidance to buyers, renters, landlords, and investors navigating the complex UK property market.
            </p>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#2D2D2D' }}>
              Our approach combines deep market knowledge, ethical practices, and personalized service to help clients make confident property decisions. Whether you're purchasing your first home, building an investment portfolio, or managing rental properties, we're here to guide you every step of the way.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1E2A44' }}
                >
                  <Target size={24} style={{ color: '#C8A96B' }} />
                </div>
                <div>
                  <h3
                    className="text-xl mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#1E2A44',
                      fontWeight: 600,
                    }}
                  >
                    Our Mission
                  </h3>
                  <p style={{ color: '#2D2D2D' }}>
                    To empower our clients with expert property guidance, transparent advice, and access to premium opportunities that align with their goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#3F6B5A' }}
                >
                  <Heart size={24} style={{ color: '#F8F7F4' }} />
                </div>
                <div>
                  <h3
                    className="text-xl mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#1E2A44',
                      fontWeight: 600,
                    }}
                  >
                    Our Values
                  </h3>
                  <p style={{ color: '#2D2D2D' }}>
                    Integrity, expertise, and client success drive everything we do. We believe in building long-term relationships based on trust and results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#C8A96B' }}
                >
                  <Lightbulb size={24} style={{ color: '#1E2A44' }} />
                </div>
                <div>
                  <h3
                    className="text-xl mb-2"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#1E2A44',
                      fontWeight: 600,
                    }}
                  >
                    Our Approach
                  </h3>
                  <p style={{ color: '#2D2D2D' }}>
                    Data-driven insights combined with personalized service. We take time to understand your unique needs and tailor our recommendations accordingly.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
