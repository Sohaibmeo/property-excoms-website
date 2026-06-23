import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Calendar } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28" style={{ backgroundColor: '#F8F7F4' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#1E2A44',
              fontWeight: 700,
            }}
          >
            Get In Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#2D2D2D' }}>
            Ready to start your property journey? Our expert consultants are here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-white border-none shadow-lg">
              <h3
                className="text-2xl mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#1E2A44',
                  fontWeight: 600,
                }}
              >
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Smith" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.smith@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+44 20 1234 5678" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <select
                    id="interest"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{ backgroundColor: '#F8F7F4' }}
                  >
                    <option value="">Select an option</option>
                    <option value="buy">Buying Property</option>
                    <option value="rent">Renting Property</option>
                    <option value="management">Property Management</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your property needs..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  style={{ backgroundColor: '#1E2A44', color: '#F8F7F4' }}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Office Information */}
            <Card className="p-8 bg-white border-none shadow-lg">
              <h3
                className="text-2xl mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#1E2A44',
                  fontWeight: 600,
                }}
              >
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#1E2A44' }}
                  >
                    <Phone size={20} style={{ color: '#C8A96B' }} />
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: '#1E2A44' }}>
                      Phone
                    </p>
                    <p style={{ color: '#2D2D2D' }}>+44 20 7123 4567</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#3F6B5A' }}
                  >
                    <Mail size={20} style={{ color: '#F8F7F4' }} />
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: '#1E2A44' }}>
                      Email
                    </p>
                    <p style={{ color: '#2D2D2D' }}>info@excoms.property</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#C8A96B' }}
                  >
                    <MapPin size={20} style={{ color: '#1E2A44' }} />
                  </div>
                  <div>
                    <p className="font-medium mb-1" style={{ color: '#1E2A44' }}>
                      Office
                    </p>
                    <p style={{ color: '#2D2D2D' }}>
                      123 Mayfair Avenue<br />
                      London, W1K 1AB<br />
                      United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Book Consultation */}
            <Card
              className="p-8 border-none shadow-lg"
              style={{ backgroundColor: '#1E2A44' }}
            >
              <div className="text-center">
                <Calendar size={48} className="mx-auto mb-4" style={{ color: '#C8A96B' }} />
                <h3
                  className="text-2xl mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#F8F7F4',
                    fontWeight: 600,
                  }}
                >
                  Book a Consultation
                </h3>
                <p className="mb-6 leading-relaxed" style={{ color: '#F8F7F4', opacity: 0.9 }}>
                  Schedule a free consultation with our property experts.
                </p>
                <Button
                  size="lg"
                  className="w-full"
                  style={{ backgroundColor: '#C8A96B', color: '#1E2A44' }}
                >
                  Schedule Now
                </Button>
              </div>
            </Card>

            {/* Office Hours */}
            <Card className="p-8 bg-white border-none shadow-lg">
              <h3
                className="text-xl mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#1E2A44',
                  fontWeight: 600,
                }}
              >
                Office Hours
              </h3>
              <div className="space-y-2 text-sm" style={{ color: '#2D2D2D' }}>
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
