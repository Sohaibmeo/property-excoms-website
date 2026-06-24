import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

const process = [
  {
    title: 'Private brief',
    description: 'We establish objectives, timing, budget parameters, preferred structure, and any confidentiality requirements before making recommendations.',
  },
  {
    title: 'Market intelligence',
    description: 'We review comparable evidence, location fundamentals, rental context, building risk, and the wider commercial picture.',
  },
  {
    title: 'Decision support',
    description: 'You receive a clear view of trade-offs, negotiation points, risk factors, and whether the brief should proceed, pause, or change direction.',
  },
  {
    title: 'Execution and stewardship',
    description: 'We stay close through negotiation, handover, letting, or management so the strategy remains coherent after the initial decision.',
  },
];

const advisorySignals = [
  'Prime homes and private client briefs',
  'Rental and management implications reviewed early',
  'Investment routes assessed before introductions are made',
];

export function AdvisoryProcess() {
  return (
    <section id="process" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
        >
          <div className="max-w-3xl">
            <p className="section-kicker mb-3">How We Work</p>
            <h2 className="section-title mb-4">Advisory before access.</h2>
            <p className="section-copy">
              ExComS works from a private brief, filters the market with discretion, and only progresses
              routes that stand up commercially.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="rounded-sm border-[#17233B]/25 bg-white text-[#17233B] hover:bg-[#17233B] hover:text-[#F7F4ED] hover:border-[#17233B] lg:mb-2"
          >
            <a href="#contact">Start a confidential brief</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[1.35fr_0.65fr] gap-6 mb-14"
        >
          <div className="relative min-h-[420px] lg:min-h-[560px] overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
              alt="Elegant contemporary residence"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#17233B]/80 via-[#17233B]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="section-kicker mb-3">Private Market Lens</p>
              <h3
                className="text-3xl md:text-5xl leading-tight max-w-2xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#F7F4ED',
                  fontWeight: 700,
                }}
              >
                Beautiful property is only the beginning of the assessment.
              </h3>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-sm border-none p-7 flex flex-col justify-between" style={{ backgroundColor: '#17233B' }}>
              <div>
                <p className="section-kicker mb-4">What We Filter For</p>
                <div className="space-y-4">
                  {advisorySignals.map((signal) => (
                    <div key={signal} className="flex gap-3">
                      <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#C7A463' }} />
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(247, 244, 237, 0.82)' }}>
                        {signal}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-8 text-sm leading-relaxed" style={{ color: 'rgba(247, 244, 237, 0.62)' }}>
                Each brief is considered for suitability, confidentiality, commercial sense, and long-term fit.
              </p>
            </div>

            <div className="relative min-h-[220px] overflow-hidden rounded-sm shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1000"
                alt="Refined residential interior"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17233B]/65 to-transparent" />
              <p className="absolute bottom-5 left-5 right-5 text-sm font-medium" style={{ color: '#F7F4ED' }}>
                Condition, specification, light, outlook, and building quality are considered alongside price.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="border-y border-[#17233B]/12">
          {process.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="grid gap-5 md:grid-cols-[90px_0.8fr_1.2fr] py-7 border-b border-[#17233B]/10 last:border-b-0"
            >
              <span className="section-kicker">0{index + 1}</span>
              <h3
                className="text-2xl"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#17233B',
                  fontWeight: 600,
                }}
              >
                {step.title}
              </h3>
              <p className="leading-relaxed" style={{ color: 'rgba(36, 39, 44, 0.76)' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Button
            asChild
            className="rounded-sm bg-[#17233B] text-[#F7F4ED] hover:bg-[#C7A463] hover:text-[#17233B]"
          >
            <a href="#contact">
              Discuss your brief
              <ArrowRight className="ml-2" size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
