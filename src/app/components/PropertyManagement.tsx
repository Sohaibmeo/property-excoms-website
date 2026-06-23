import { Card } from './ui/card';
import { motion } from 'motion/react';
import { Users, Wallet, Wrench, FileCheck } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    icon: Users,
    title: 'Tenant quality',
    description: 'Referencing, onboarding, communication, and renewal planning designed to protect income and reduce avoidable friction.',
  },
  {
    icon: Wallet,
    title: 'Financial visibility',
    description: 'Rent tracking, arrears escalation, owner statements, and practical reporting for portfolio decisions.',
  },
  {
    icon: Wrench,
    title: 'Maintenance control',
    description: 'Vetted contractor coordination, issue triage, quote review, and updates that keep owners informed without noise.',
  },
  {
    icon: FileCheck,
    title: 'Compliance oversight',
    description: 'Safety certificates, licensing awareness, tenancy documentation, and reminders around changing landlord obligations.',
  },
];

const stats = [
  { value: '500+', label: 'Managed and advised properties' },
  { value: '24/7', label: 'Maintenance response route' },
  { value: '98%', label: 'Reported client satisfaction' },
  { value: 'GBP 2.5B+', label: 'Advised property value' },
];

export function PropertyManagement() {
  return (
    <section id="management" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-kicker mb-3">For Landlords</p>
            <h2 className="section-title mb-5">Management that protects the asset, not just the tenancy.</h2>
            <p className="section-copy mb-8">
              Landlords need operational clarity, accountable communication, compliance awareness, and decisions
              that preserve rental performance over time.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <Card key={stat.label} className="rounded-sm border-none p-5" style={{ backgroundColor: '#F7F4ED' }}>
                  <div
                    className="text-3xl mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#17233B', fontWeight: 700 }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-sm leading-snug" style={{ color: 'rgba(36, 39, 44, 0.72)' }}>
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-sm px-7"
              style={{ backgroundColor: '#17233B', color: '#F7F4ED' }}
            >
              <a href="#contact">Request a management review</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-5"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card className="premium-card p-6 rounded-sm">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: index % 2 === 0 ? '#3D6658' : '#17233B' }}
                      >
                        <Icon size={23} style={{ color: index % 2 === 0 ? '#F7F4ED' : '#C7A463' }} />
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
                          {service.title}
                        </h3>
                        <p className="leading-relaxed text-sm" style={{ color: 'rgba(36, 39, 44, 0.76)' }}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
