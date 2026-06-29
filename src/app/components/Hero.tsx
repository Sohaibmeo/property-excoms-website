import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

const trustSignals = ['Buy and sell support', 'Rental property help', 'Landlord management'];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1800"
          alt="Residential property exterior"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(8, 18, 35, 0.94) 0%, rgba(15, 30, 54, 0.84) 46%, rgba(15, 30, 54, 0.38) 100%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7F4ED] to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-kicker mb-5">Premium Property Consultancy</p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-[0.98] max-w-4xl"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#F7F4ED',
                fontWeight: 700,
              }}
            >
              Clear property help for buying, selling, and renting.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 leading-relaxed"
            style={{ color: 'rgba(247, 244, 237, 0.9)', maxWidth: '680px' }}
          >
            ExComS Property helps buyers, sellers, tenants, and landlords move through the property market with practical guidance and steady support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button
              asChild
              size="lg"
              style={{ backgroundColor: '#C7A463', color: '#17233B' }}
              className="group hover:opacity-90 transition-all px-8 py-6 text-base rounded-sm"
            >
              <a href="#contact">
                Start Your Enquiry
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border text-white border-white/70 bg-white/5 hover:bg-white/10 px-8 py-6 text-base rounded-sm"
            >
              <a href="#contact">
                <Calendar className="mr-2" size={20} />
                Book a Call
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="grid gap-3 sm:grid-cols-3 max-w-3xl"
          >
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(247, 244, 237, 0.88)' }}>
                <CheckCircle2 size={17} style={{ color: '#C7A463' }} />
                <span>{signal}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
