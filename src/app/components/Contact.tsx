import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { motion } from 'motion/react';
import { Calendar, CheckCircle2 } from 'lucide-react';

const expectations = [
  'Brief review within one business day',
  'Private discussion with a senior advisor',
  'Clear next steps before any engagement',
];

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-24" style={{ backgroundColor: '#F7F4ED' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <p className="section-kicker mb-3">Start With a Brief</p>
          <h2 className="section-title mb-4">Tell us what the property decision needs to achieve.</h2>
          <p className="section-copy">
            The best first conversation is specific. Share your goal, timing, approximate budget or asset value,
            and any constraints you already know.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 h-full"
          >
            <Card className="premium-card p-6 md:p-8 rounded-sm h-full">
              <h3
                className="text-2xl mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#17233B',
                  fontWeight: 600,
                }}
              >
                Request a private consultation
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" type="tel" placeholder="Your preferred number" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="interest">Primary need</Label>
                    <select
                      id="interest"
                      className="w-full h-10 px-3 py-2 border border-[#17233B]/15 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C7A463]"
                      style={{ backgroundColor: '#F7F4ED' }}
                    >
                      <option value="">Select a service</option>
                      <option value="buy">Acquisition advisory</option>
                      <option value="rent">Premium rental search</option>
                      <option value="management">Landlord management review</option>
                      <option value="investment">Investor sourcing</option>
                      <option value="consultation">General consultation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Decision timeline</Label>
                    <select
                      id="timeline"
                      className="w-full h-10 px-3 py-2 border border-[#17233B]/15 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#C7A463]"
                      style={{ backgroundColor: '#F7F4ED' }}
                    >
                      <option value="">Select timing</option>
                      <option value="now">Ready now</option>
                      <option value="quarter">Within 3 months</option>
                      <option value="six-months">Within 6 months</option>
                      <option value="exploring">Exploring options</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Brief</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your target location, budget, property type, investment goals, or management challenge."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-sm"
                  style={{ backgroundColor: '#17233B', color: '#F7F4ED' }}
                >
                  Submit confidential brief
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 h-full"
          >
            <Card className="premium-card p-7 rounded-sm">
              <h3
                className="text-2xl mb-5"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#17233B',
                  fontWeight: 600,
                }}
              >
                What happens next
              </h3>
              <div className="space-y-4">
                {expectations.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#3D6658' }} />
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(36, 39, 44, 0.78)' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-7 border-none shadow-lg rounded-sm flex flex-col justify-between" style={{ backgroundColor: '#17233B' }}>
              <div>
                <Calendar size={42} className="mb-4" style={{ color: '#C7A463' }} />
                <h3
                  className="text-2xl mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#F7F4ED',
                    fontWeight: 600,
                  }}
                >
                  Prefer to speak first?
                </h3>
                <p className="mb-6 leading-relaxed text-sm" style={{ color: 'rgba(247, 244, 237, 0.82)' }}>
                  Book a short call to confirm whether we are the right advisory fit for your brief.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full rounded-sm"
                style={{ backgroundColor: '#C7A463', color: '#17233B' }}
              >
                <a href="mailto:info@excoms.property?subject=Private%20property%20consultation">Book by email</a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
