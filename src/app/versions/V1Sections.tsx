import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Building,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck,
  FileSearch,
  Handshake,
  Home,
  Key,
  KeyRound,
  LockKeyhole,
  MessageSquareText,
  Rocket,
  Scale,
  SearchCheck,
  Star,
  TrendingUp,
  Users,
  Wallet,
  Wrench,
} from 'lucide-react';
import sarahPortrait from '../../assets/testimonials/sarah-mitchell.png';
import jamesPortrait from '../../assets/testimonials/james-richardson.png';
import priyaPortrait from '../../assets/testimonials/priya-sharma.png';

const services = [
  {
    icon: Home,
    title: 'Acquisition Advisory',
    description: 'Search briefs, valuation checks, negotiation strategy, and due diligence for prime residential and commercial purchases.',
    color: '#3D6658',
    href: '#process',
  },
  {
    icon: Key,
    title: 'Premium Lettings',
    description: 'High-quality rental search, shortlisting, viewing support, and tenancy guidance for executives, families, and relocations.',
    color: '#C7A463',
    href: '#process',
  },
  {
    icon: Building2,
    title: 'Managed Assets',
    description: 'A calmer landlord experience with tenant care, compliance oversight, maintenance coordination, and reporting.',
    color: '#17233B',
    href: '#management',
  },
  {
    icon: TrendingUp,
    title: 'Investor Sourcing',
    description: 'Discreet investment routes assessed for yield, risk, exit route, and portfolio fit.',
    color: '#C7A463',
    href: '#investment',
  },
];

export function V1ServicesOverview() {
  return (
    <section id="advisory" className="py-20 lg:py-24" style={{ backgroundColor: '#F7F4ED' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="section-kicker mb-3">How We Advise</p>
          <h2 className="section-title mb-4">Property decisions deserve more than a search.</h2>
          <p className="section-copy">
            We work from a clear brief, test assumptions against the market, and stay close through the decisions that affect value, risk, and long-term fit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="premium-card p-7 h-full group rounded-sm">
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center mb-7 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <Icon size={28} style={{ color: service.color }} />
                  </div>
                  <h3
                    className="text-2xl mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#17233B',
                      fontWeight: 600,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="mb-7 leading-relaxed text-sm" style={{ color: 'rgba(36, 39, 44, 0.78)' }}>
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className="group/btn p-0 h-auto hover:bg-transparent"
                    style={{ color: service.color }}
                  >
                    <a href={service.href}>
                      Explore path
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const process = [
  {
    icon: ClipboardCheck,
    title: 'Private brief',
    description: 'We establish objectives, timing, budget parameters, preferred structure, and any confidentiality requirements before making recommendations.',
  },
  {
    icon: SearchCheck,
    title: 'Market intelligence',
    description: 'We review comparable evidence, location fundamentals, rental context, building risk, and the wider commercial picture.',
  },
  {
    icon: Scale,
    title: 'Decision support',
    description: 'You receive a clear view of trade-offs, negotiation points, risk factors, and whether the brief should proceed, pause, or change direction.',
  },
  {
    icon: Handshake,
    title: 'Execution and stewardship',
    description: 'We stay close through negotiation, handover, letting, or management so the strategy remains coherent after the initial decision.',
  },
];

const advisorySignals = [
  'Prime homes and private client briefs',
  'Rental and management implications reviewed early',
  'Investment routes assessed before introductions are made',
];

export function V1AdvisoryProcess() {
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
            <Card className="rounded-sm border-none p-7 flex flex-col justify-between" style={{ backgroundColor: '#17233B' }}>
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
            </Card>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Card className="premium-card h-full p-7 rounded-sm">
                  <div className="flex items-center justify-between mb-7">
                    <div
                      className="w-12 h-12 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: index % 2 === 0 ? '#17233B' : '#3D6658' }}
                    >
                      <Icon size={24} style={{ color: index % 2 === 0 ? '#C7A463' : '#F7F4ED' }} />
                    </div>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: 'rgba(23, 35, 59, 0.35)' }}
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <h3
                    className="text-2xl mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#17233B',
                      fontWeight: 600,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(36, 39, 44, 0.76)' }}>
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
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

const investments = [
  {
    icon: Home,
    title: 'Prime Residential',
    description: 'Core London homes assessed for scarcity, buyer depth, refurbishment potential, and long-term liquidity.',
    metric: 'Capital preservation',
    review: 'Scarcity and resale depth',
  },
  {
    icon: KeyRound,
    title: 'Buy-to-Let',
    description: 'Income-led acquisitions with rent evidence, local demand checks, compliance review, and management planning.',
    metric: 'Income strategy',
    review: 'Rent evidence and running costs',
  },
  {
    icon: Building,
    title: 'Commercial Assets',
    description: 'Office, retail, and mixed-use briefs reviewed around tenant covenant, lease structure, and capex exposure.',
    metric: 'Lease analysis',
    review: 'Covenant and lease structure',
  },
  {
    icon: Rocket,
    title: 'Development & Off-Plan',
    description: 'Selective early-stage briefs where delivery risk, payment schedule, location fundamentals, and exit route are clear.',
    metric: 'Risk review',
    review: 'Delivery and exit assumptions',
  },
];

export function V1InvestmentOpportunities() {
  return (
    <section id="investment" className="py-20 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#17233B' }}>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(135deg, #C7A463 1px, transparent 1px)', backgroundSize: '42px 42px' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="section-kicker mb-3">Investor Advisory</p>
          <h2
            className="text-3xl md:text-5xl leading-tight mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#F7F4ED',
              fontWeight: 700,
            }}
          >
            Investment work with the risk still visible.
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(247, 244, 237, 0.82)' }}>
            We avoid dressing every opportunity as a win. ExComS frames the upside, the constraints,
            the management realities, and the questions worth answering before capital is committed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {investments.map((investment, index) => {
            const Icon = investment.icon;
            return (
              <motion.div
                key={investment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="p-7 h-full transition-all duration-300 group rounded-sm border"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', borderColor: 'rgba(247, 244, 237, 0.12)' }}
                >
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: '#C7A463' }}
                  >
                    <Icon size={28} style={{ color: '#17233B' }} />
                  </div>
                  <h3
                    className="text-2xl mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#F7F4ED',
                      fontWeight: 600,
                    }}
                  >
                    {investment.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-sm" style={{ color: 'rgba(247, 244, 237, 0.78)' }}>
                    {investment.description}
                  </p>
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex justify-between gap-4">
                      <span style={{ color: 'rgba(247, 244, 237, 0.62)' }}>Focus</span>
                      <span className="text-right font-semibold" style={{ color: '#C7A463' }}>
                        {investment.metric}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span style={{ color: 'rgba(247, 244, 237, 0.62)' }}>Review</span>
                      <span className="text-right font-semibold" style={{ color: '#C7A463' }}>
                        {investment.review}
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full group/btn hover:bg-white/10"
                    style={{ color: '#C7A463' }}
                  >
                    <a href="#contact">
                      Discuss strategy
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </a>
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-xs leading-relaxed max-w-3xl" style={{ color: 'rgba(247, 244, 237, 0.55)' }}>
          ExComS does not provide financial advice or publish investment products on this website.
          Property investments can rise or fall in value, and suitability depends on individual circumstances,
          tax position, finance terms, and holding period.
        </p>
      </div>
    </section>
  );
}

const managementServices = [
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

const managementPrinciples = [
  { value: 'Clear', label: 'Owner reporting and decision records' },
  { value: 'Vetted', label: 'Contractor and tenant coordination' },
  { value: 'Aware', label: 'Compliance reminders and documentation' },
  { value: 'Measured', label: 'Maintenance triage before unnecessary spend' },
];

export function V1PropertyManagement() {
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
              {managementPrinciples.map((stat) => (
                <Card key={stat.label} className="rounded-sm border-none p-5" style={{ backgroundColor: '#F7F4ED' }}>
                  <div
                    className="text-2xl mb-2"
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
            {managementServices.map((service, index) => {
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

export function V1AdvisoryStandards() {
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

const v1Stats = [
  { value: '500+', label: 'Properties managed and advised' },
  { value: '98%', label: 'Reported client satisfaction' },
  { value: '24/7', label: 'Maintenance support route' },
  { value: 'GBP 2.5B+', label: 'Assets under management' },
];

const v1Testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Property Investor',
    image: sarahPortrait,
    imagePosition: 'center 24%',
    content: 'ExComS Property helped us build a GBP 3M portfolio over 5 years. Their investment insights and market knowledge are second to none.',
  },
  {
    name: 'James Richardson',
    role: 'First-Time Buyer',
    image: jamesPortrait,
    imagePosition: 'center 22%',
    content: 'The team guided me every step of the way, found the right property, and negotiated a strong result.',
  },
  {
    name: 'Priya Sharma',
    role: 'Landlord',
    image: priyaPortrait,
    imagePosition: 'center 20%',
    content: 'Their management service is seamless. Rent collection, maintenance, and updates are all handled professionally.',
  },
];

export function V1StatsAndTestimonials() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-kicker mb-3">Proof Points</p>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-end">
            <div>
              <h2 className="section-title mb-5">Numbers and client stories.</h2>
              <p className="section-copy">
                V1 keeps the earlier proof-heavy approach with stronger statistics and named success stories.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 rounded-sm overflow-hidden border border-[#17233B]/10">
              {v1Stats.map((stat) => (
                <div key={stat.label} className="p-5 border-r border-b lg:border-b-0 border-[#17233B]/10 last:border-r-0 odd:last:border-r" style={{ backgroundColor: '#F7F4ED' }}>
                  <div
                    className="text-2xl md:text-3xl mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#17233B', fontWeight: 700 }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-xs md:text-sm leading-snug" style={{ color: 'rgba(36, 39, 44, 0.72)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {v1Testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <Card className="premium-card rounded-sm overflow-hidden h-full">
                <div className="h-72 md:h-80 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover grayscale-[8%]"
                    style={{ objectPosition: testimonial.imagePosition }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div>
                      <h3
                        className="text-xl"
                        style={{ fontFamily: "'Playfair Display', serif", color: '#17233B', fontWeight: 600 }}
                      >
                        {testimonial.name}
                      </h3>
                      <p className="text-sm" style={{ color: 'rgba(36, 39, 44, 0.68)' }}>
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} size={14} fill="#C7A463" color="#C7A463" />
                      ))}
                    </div>
                  </div>
                  <p className="leading-relaxed" style={{ color: '#24272C' }}>
                    "{testimonial.content}"
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
