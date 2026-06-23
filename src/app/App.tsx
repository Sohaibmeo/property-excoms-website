import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { FeaturedOpportunities } from './components/FeaturedOpportunities';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InvestmentOpportunities } from './components/InvestmentOpportunities';
import { PropertyManagement } from './components/PropertyManagement';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <FeaturedOpportunities />
        <WhyChooseUs />
        <InvestmentOpportunities />
        <PropertyManagement />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
