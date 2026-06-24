import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import {
  V1AdvisoryProcess,
  V1AdvisoryStandards,
  V1InvestmentOpportunities,
  V1PropertyManagement,
  V1ServicesOverview,
  V1StatsAndTestimonials,
} from '../versions/V1Sections';

export function V1Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <V1ServicesOverview />
        <V1AdvisoryProcess />
        <WhyChooseUs />
        <V1InvestmentOpportunities />
        <V1PropertyManagement />
        <V1StatsAndTestimonials />
        <V1AdvisoryStandards />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
