import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

const services = [
  {
    title: 'Tenant quality',
    description: 'Referencing, onboarding, communication, and renewal planning designed to protect income.',
  },
  {
    title: 'Rent updates',
    description: 'Rent tracking, owner updates, and practical reporting so landlords know what is happening.',
  },
  {
    title: 'Maintenance control',
    description: 'Vetted contractor coordination, issue triage, quote review, and clear owner updates.',
  },
  {
    title: 'Document reminders',
    description: 'Helpful reminders around tenancy documents, key dates, and landlord paperwork.',
  },
];

const managementPrinciples = [
  'Clear owner updates',
  'Vetted coordination',
  'Document reminders',
  'Maintenance coordination',
];

export function PropertyManagement() {
  return (
    <section id="management" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-kicker mb-3">For Landlords</p>
            <h2 className="section-title mb-5">Practical support for landlords and rental properties.</h2>
            <p className="section-copy mb-8">
              Landlords need clear updates, tenant communication, maintenance coordination, and help keeping the rental process organised.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {managementPrinciples.map((principle) => (
                <div key={principle} className="flex items-center gap-3 border-t border-[#17233B]/12 pt-4">
                  <CheckCircle2 size={19} className="flex-shrink-0" style={{ color: '#3D6658' }} />
                  <span className="text-sm font-medium" style={{ color: '#17233B' }}>
                    {principle}
                  </span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-sm px-7"
              style={{ backgroundColor: '#17233B', color: '#F7F4ED' }}
            >
              <a href="#contact">
                Request landlord support
                <ArrowRight className="ml-2" size={16} />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[560px] overflow-hidden rounded-sm shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
              alt="Managed residential property interior"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17233B]/88 via-[#17233B]/42 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="section-kicker mb-5">Management Priorities</p>
              <div className="space-y-5">
                {services.map((service) => (
                  <div key={service.title} className="border-t border-[#F7F4ED]/18 pt-5">
                    <h3
                      className="text-xl mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#F7F4ED',
                        fontWeight: 600,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(247, 244, 237, 0.78)' }}>
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
