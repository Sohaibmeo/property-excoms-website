import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#17233B' }}>
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <span
                className="text-2xl font-bold tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#F7F4ED',
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
            <p className="mb-6 leading-relaxed max-w-sm" style={{ color: 'rgba(247, 244, 237, 0.78)' }}>
              Practical property support for buying, selling, renting, lettings, and landlord management.
            </p>
          </div>

          <div>
            <h3
              className="text-xl mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#F7F4ED',
                fontWeight: 600,
              }}
            >
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Services', href: '#advisory' },
                { label: 'Process', href: '#process' },
                { label: 'Selling', href: '#investment' },
                { label: 'Landlords', href: '#management' },
                { label: 'About', href: '#about' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C7A463] transition-colors"
                    style={{ color: 'rgba(247, 244, 237, 0.78)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xl mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#F7F4ED',
                fontWeight: 600,
              }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Buy a property',
                'Sell a property',
                'Find a rental',
                'Landlord management',
                'General property help',
              ].map((service) => (
                <li key={service} style={{ color: 'rgba(247, 244, 237, 0.78)' }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xl mb-5"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#F7F4ED',
                fontWeight: 600,
              }}
            >
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0" style={{ color: '#C7A463' }} />
                <span style={{ color: 'rgba(247, 244, 237, 0.78)' }}>
                  London and wider UK enquiries<br />
                  Appointments available
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="flex-shrink-0" style={{ color: '#C7A463' }} />
                <span style={{ color: 'rgba(247, 244, 237, 0.78)' }}>
                  +44 20 7123 4567
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="flex-shrink-0" style={{ color: '#C7A463' }} />
                <span style={{ color: 'rgba(247, 244, 237, 0.78)' }}>
                  info@excoms.property
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t" style={{ borderColor: 'rgba(247, 244, 237, 0.12)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: 'rgba(247, 244, 237, 0.62)' }}>
              Copyright {currentYear} ExComS Property. All rights reserved.
            </p>
            <p className="text-sm" style={{ color: 'rgba(247, 244, 237, 0.62)' }}>
              Property consultations by appointment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
