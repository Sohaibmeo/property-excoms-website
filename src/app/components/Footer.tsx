import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#1E2A44' }}>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span
                className="text-2xl font-bold tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#F8F7F4',
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
            <p className="mb-6 leading-relaxed" style={{ color: '#F8F7F4', opacity: 0.8 }}>
              Your trusted partner for premium property consultancy and investment guidance in the UK.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#C8A96B' }}
              >
                <Facebook size={18} style={{ color: '#1E2A44' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#C8A96B' }}
              >
                <Twitter size={18} style={{ color: '#1E2A44' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#C8A96B' }}
              >
                <Instagram size={18} style={{ color: '#1E2A44' }} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#C8A96B' }}
              >
                <Linkedin size={18} style={{ color: '#1E2A44' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xl mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#F8F7F4',
                fontWeight: 600,
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Properties for Sale', href: '#sale' },
                { label: 'Properties to Rent', href: '#rent' },
                { label: 'Property Management', href: '#management' },
                { label: 'Investment Opportunities', href: '#investment' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: '#F8F7F4', opacity: 0.8 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xl mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#F8F7F4',
                fontWeight: 600,
              }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Property Buying',
                'Property Rental',
                'Portfolio Management',
                'Investment Advisory',
                'Property Valuation',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:opacity-80 transition-opacity"
                    style={{ color: '#F8F7F4', opacity: 0.8 }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xl mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#F8F7F4',
                fontWeight: 600,
              }}
            >
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0" style={{ color: '#C8A96B' }} />
                <span style={{ color: '#F8F7F4', opacity: 0.8 }}>
                  123 Mayfair Avenue<br />
                  London, W1K 1AB
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="flex-shrink-0" style={{ color: '#C8A96B' }} />
                <span style={{ color: '#F8F7F4', opacity: 0.8 }}>
                  +44 20 7123 4567
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="flex-shrink-0" style={{ color: '#C8A96B' }} />
                <span style={{ color: '#F8F7F4', opacity: 0.8 }}>
                  info@excoms.property
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t"
          style={{ borderColor: 'rgba(248, 247, 244, 0.1)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ color: '#F8F7F4', opacity: 0.7 }}>
              © {currentYear} ExComS Property. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                style={{ color: '#F8F7F4', opacity: 0.7 }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                style={{ color: '#F8F7F4', opacity: 0.7 }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:opacity-80 transition-opacity"
                style={{ color: '#F8F7F4', opacity: 0.7 }}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
