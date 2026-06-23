import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesOverview } from './components/ServicesOverview';
import { AdvisoryProcess } from './components/AdvisoryProcess';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InvestmentOpportunities } from './components/InvestmentOpportunities';
import { PropertyManagement } from './components/PropertyManagement';
import { AdvisoryStandards } from './components/AdvisoryStandards';
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
        <AdvisoryProcess />
        <WhyChooseUs />
        <InvestmentOpportunities />
        <PropertyManagement />
        <AdvisoryStandards />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
