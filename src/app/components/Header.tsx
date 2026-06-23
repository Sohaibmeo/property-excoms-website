import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Properties for Sale', href: '#sale' },
    { label: 'Properties to Rent', href: '#rent' },
    { label: 'Property Management', href: '#management' },
    { label: 'Investment Opportunities', href: '#investment' },
    { label: 'About ExComS Property', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span
                className="text-2xl font-bold tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: isScrolled ? '#1E2A44' : '#ffffff'
                }}
              >
                ExComS
              </span>
              <span
                className="ml-2 text-sm tracking-wider uppercase"
                style={{ color: '#C8A96B' }}
              >
                Property
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium transition-colors hover:text-[#C8A96B]"
                style={{ color: isScrolled ? '#2D2D2D' : '#ffffff' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              style={{ backgroundColor: '#C8A96B', color: '#1E2A44' }}
              className="hover:opacity-90 transition-opacity"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: isScrolled ? '#1E2A44' : '#ffffff' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50 rounded-lg"
                  style={{ color: '#2D2D2D' }}
                >
                  {item.label}
                </a>
              ))}
              <Button
                style={{ backgroundColor: '#C8A96B', color: '#1E2A44' }}
                className="w-full mt-4"
              >
                Book Consultation
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
