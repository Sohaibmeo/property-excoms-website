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
    { label: 'Advisory', href: '#advisory' },
    { label: 'Process', href: '#process' },
    { label: 'Investors', href: '#investment' },
    { label: 'Landlords', href: '#management' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#17233B]/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span
                className="text-2xl font-bold tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: isScrolled ? '#17233B' : '#ffffff'
                }}
              >
                ExComS
              </span>
              <span
                className="ml-2 text-sm tracking-wider uppercase"
                style={{ color: '#C7A463' }}
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
                className="px-3 py-2 text-sm font-medium transition-colors hover:text-[#C7A463]"
                style={{ color: isScrolled ? '#24272C' : '#ffffff' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              asChild
              style={{ backgroundColor: '#C7A463', color: '#17233B' }}
              className="hover:opacity-90 transition-opacity rounded-sm px-5"
            >
              <a href="#contact">Private Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            style={{ color: isScrolled ? '#17233B' : '#ffffff' }}
            aria-label="Toggle navigation menu"
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
            className="lg:hidden bg-white border-t border-[#17233B]/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium transition-colors hover:bg-[#F7F4ED] rounded-sm"
                  style={{ color: '#24272C' }}
                >
                  {item.label}
                </a>
              ))}
              <Button
                asChild
                style={{ backgroundColor: '#C7A463', color: '#17233B' }}
                className="w-full mt-4 rounded-sm"
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Private Consultation
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
