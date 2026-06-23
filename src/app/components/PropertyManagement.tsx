import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Users, Wallet, Wrench, FileCheck } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Tenant Management',
    description: 'Comprehensive tenant screening, onboarding, and relationship management to ensure quality occupancy.',
  },
  {
    icon: Wallet,
    title: 'Rent Collection',
    description: 'Automated rent collection, financial reporting, and tax documentation for seamless cash flow.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Coordination',
    description: '24/7 maintenance support with vetted contractors and rapid response times for property issues.',
  },
  {
    icon: FileCheck,
    title: 'Compliance Assistance',
    description: 'Full regulatory compliance support including safety certificates, licensing, and legal requirements.',
  },
];

export function PropertyManagement() {
  return (
    <section id="management" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
              Property Management for Landlords
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#2D2D2D' }}>
              Professional property management services that maximize returns while minimizing hassle. Let us handle the day-to-day operations while you enjoy passive income.
            </p>

            <div className="space-y-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: '#3F6B5A' }}
                        >
                          <Icon size={24} style={{ color: '#F8F7F4' }} />
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
                            {service.title}
                          </h3>
                          <p className="leading-relaxed" style={{ color: '#2D2D2D' }}>
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats/Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <Card
              className="p-8 text-center border-none"
              style={{ backgroundColor: '#1E2A44' }}
            >
              <div
                className="text-5xl mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#C8A96B',
                  fontWeight: 700,
                }}
              >
                500+
              </div>
              <div className="text-sm" style={{ color: '#F8F7F4', opacity: 0.9 }}>
                Properties Managed
              </div>
            </Card>

            <Card
              className="p-8 text-center border-none"
              style={{ backgroundColor: '#3F6B5A' }}
            >
              <div
                className="text-5xl mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#F8F7F4',
                  fontWeight: 700,
                }}
              >
                98%
              </div>
              <div className="text-sm" style={{ color: '#F8F7F4', opacity: 0.9 }}>
                Client Satisfaction
              </div>
            </Card>

            <Card
              className="p-8 text-center border-none"
              style={{ backgroundColor: '#C8A96B' }}
            >
              <div
                className="text-5xl mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#1E2A44',
                  fontWeight: 700,
                }}
              >
                24/7
              </div>
              <div className="text-sm" style={{ color: '#1E2A44', opacity: 0.9 }}>
                Support Available
              </div>
            </Card>

            <Card
              className="p-8 text-center border-none"
              style={{ backgroundColor: '#1E2A44' }}
            >
              <div
                className="text-5xl mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#C8A96B',
                  fontWeight: 700,
                }}
              >
              £2.5B+
              </div>
              <div className="text-sm" style={{ color: '#F8F7F4', opacity: 0.9 }}>
                Assets Under Management
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
