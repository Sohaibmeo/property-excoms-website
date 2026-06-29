import { FormEvent, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Compass,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MousePointer2,
  Phone,
  Plane,
  Route,
  Sparkles,
  X,
} from 'lucide-react'
import heroImage from '../assets/property-hero.png'
import {
  ctaText,
  features,
  galleryItems,
  leasingPoints,
  navItems,
  property,
  travelTimes,
  useCases,
} from './siteData'

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

function Button({
  href,
  children,
  secondary = false,
}: {
  href: string
  children: React.ReactNode
  secondary?: boolean
}) {
  return (
    <a className={`button ${secondary ? 'button--secondary' : ''}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={16} aria-hidden="true" />
    </a>
  )
}

function Logo() {
  return (
    <a className="logo" href="#overview" aria-label="Luton Corporate Stays home">
      <span className="logo__mark"><Building2 size={22} /></span>
      <span><b>LUTON</b><small>CORPORATE STAYS</small></span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <Logo />
        <nav className="nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="header__cta" href="#contact">Enquire Now <ArrowDownRight size={15} /></a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            aria-label="Mobile navigation"
          >
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<ArrowRight size={16} /></a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function RouteGraphic() {
  return (
    <div className="route-map" aria-label="Illustrative route from London Luton Airport to 95 Park Street">
      <div className="map-grid" />
      <div className="map-road map-road--one" />
      <div className="map-road map-road--two" />
      <svg className="route-line" viewBox="0 0 600 430" fill="none" aria-hidden="true">
        <motion.path
          d="M82 82 C155 124 164 197 245 210 C338 226 346 311 516 341"
          stroke="rgba(209,164,77,.28)"
          strokeWidth="13"
          strokeLinecap="round"
        />
        <motion.path
          d="M82 82 C155 124 164 197 245 210 C338 226 346 311 516 341"
          stroke="#e9b94f"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />
      </svg>
      <div className="map-marker map-marker--airport">
        <span><Plane size={17} /></span>
        <div><b>London Luton Airport</b><small>Approx. 5 mins drive</small></div>
      </div>
      <div className="map-marker map-marker--property">
        <span><MapPin size={17} /></span>
        <div><b>Your property</b><small>95 Park Street</small></div>
      </div>
      <div className="route-chip"><Route size={14} /> 2.4 miles <span>•</span> 5 mins</div>
      <div className="map-compass"><Compass size={20} /><small>N</small></div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="overview">
      <img className="hero__image" src={heroImage} alt="Architectural visual of 95 Park Street at dusk" />
      <div className="hero__veil" />
      <div className="hero__glow" />
      <div className="hero__content shell">
        <motion.div className="hero__copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <div className="eyebrow"><Plane size={14} /> {property.eyebrow}</div>
          <h1>Minutes from<br /><em>London Luton Airport</em></h1>
          <p>{property.description}</p>
          <div className="hero__actions">
            <Button href="#contact">{ctaText.primary}</Button>
            <Button href="#property" secondary>{ctaText.secondary}</Button>
          </div>
          <div className="hero__proof">
            <span><b>05</b> two-bedroom units</span>
            <span><b>01</b> commercial unit</span>
            <span><b>05</b> mins to airport*</span>
          </div>
        </motion.div>
        <motion.aside className="proximity-card" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <div className="proximity-card__top">
            <span>Everything close by</span>
            <span className="live-dot">Live location</span>
          </div>
          {travelTimes.map(({ label, time, icon: Icon }) => (
            <div className="travel-row" key={label}>
              <span className="travel-row__icon"><Icon size={17} /></span>
              <span>{label}</span>
              <b>{time}</b>
            </div>
          ))}
          <small>*Illustrative travel times. Verify before publication.</small>
        </motion.aside>
      </div>
      <div className="hero__location">
        <span><MapPin size={16} /> 95 Park Street</span>
        <span>Luton · LU1 3HG</span>
      </div>
      <a className="scroll-cue" href="#property"><span>Discover the opportunity</span><ChevronDown size={18} /></a>
    </section>
  )
}

function FeatureStrip() {
  return (
    <section className="feature-strip" aria-label="Property highlights">
      <div className="shell feature-strip__inner">
        {features.map(({ label, icon: Icon }) => (
          <div className="feature" key={label}><Icon size={21} /><span>{label}</span></div>
        ))}
      </div>
    </section>
  )
}

function SectionIntro({ label, title, body }: { label: string; title: React.ReactNode; body: string }) {
  return (
    <motion.div className="section-intro" {...fadeUp}>
      <div className="eyebrow">{label}</div>
      <h2>{title}</h2>
      <p>{body}</p>
    </motion.div>
  )
}

function PropertyOverview() {
  return (
    <section className="section property-section" id="property">
      <div className="shell">
        <SectionIntro
          label="The opportunity"
          title={<>One address. <em>A complete corporate base.</em></>}
          body="A focused, multi-unit accommodation opportunity with the flexibility corporate occupiers and specialist operators need."
        />
        <div className="property-grid">
          <motion.article className="property-visual" {...fadeUp}>
            <img src={heroImage} alt="Dusk exterior concept for 95 Park Street" />
            <div className="property-visual__badge"><Sparkles size={15} /> Premium airport-linked proposition</div>
            <div className="property-visual__caption">
              <span>95 Park Street</span>
              <span>Luton · LU1 3HG</span>
            </div>
          </motion.article>
          <div className="property-details">
            <motion.article className="stat-card stat-card--wide" {...fadeUp}>
              <span className="stat-card__number">05</span>
              <div><h3>Two-bedroom apartments</h3><p>Multi-unit accommodation arranged within a single corporate opportunity.</p></div>
            </motion.article>
            <motion.article className="stat-card" {...fadeUp}>
              <Building2 />
              <h3>Commercial frontage</h3>
              <p>Ground-floor office or operational space with street presence.</p>
            </motion.article>
            <motion.article className="stat-card" {...fadeUp}>
              <Plane />
              <h3>Airport proximity</h3>
              <p>Positioned for teams whose schedules revolve around London Luton Airport.</p>
            </motion.article>
            <motion.blockquote {...fadeUp}>
              “A complete corporate accommodation base minutes from the airport.”
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

function LocationSection() {
  return (
    <section className="section location-section" id="location">
      <div className="shell">
        <SectionIntro
          label="Location advantage"
          title={<>Five minutes can make <em>all the difference.</em></>}
          body="For airport-linked teams, a shorter transfer is more than convenience—it supports smoother shift changes, faster mobilisation and a better stay."
        />
        <motion.div className="location-panel" {...fadeUp}>
          <RouteGraphic />
          <div className="location-list">
            <div className="location-list__header">
              <div><small>Selected location</small><h3>95 Park Street, Luton</h3></div>
              <span><MapPin size={16} /> LU1 3HG</span>
            </div>
            {travelTimes.map(({ label, time, icon: Icon }, index) => (
              <motion.div className="location-row" key={label} whileHover={{ x: 4 }}>
                <span className="location-row__index">0{index + 1}</span>
                <span className="location-row__icon"><Icon size={19} /></span>
                <span><b>{label}</b><small>{index === 0 ? 'Primary travel link' : 'Connected destination'}</small></span>
                <strong>{time}</strong>
              </motion.div>
            ))}
            <p className="location-note">Travel times are indicative, editable and should be independently verified before publication or reliance.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const floors = {
  'Ground Floor': [
    { title: 'Office frontage', meta: 'Commercial / operational space' },
    { title: 'Main entrance', meta: 'Controlled building access' },
    { title: 'Circulation', meta: 'Access to accommodation above' },
  ],
  'First Floor': [
    { title: 'Two-bedroom units', meta: 'Corporate accommodation' },
    { title: 'Living spaces', meta: 'Flexible stay layout' },
    { title: 'Service zones', meta: 'Kitchen and bathroom areas' },
  ],
  'Second Floor': [
    { title: 'Two-bedroom units', meta: 'Corporate accommodation' },
    { title: 'Private bedrooms', meta: 'Team and crew-ready concept' },
    { title: 'Shared living', meta: 'Rest and work space' },
  ],
}

function FloorplanSection() {
  const [active, setActive] = useState<keyof typeof floors>('Ground Floor')
  return (
    <section className="section floor-section" id="floorplans">
      <div className="shell">
        <div className="floor-heading">
          <SectionIntro label="Explore inside" title={<>A flexible building, <em>floor by floor.</em></>} body="An early-stage interactive preview, structured for future 3D plans and room-by-room exploration." />
          <span className="coming-badge"><Layers3 size={16} /> 3D interactive floorplan coming soon</span>
        </div>
        <motion.div className="floor-panel" {...fadeUp}>
          <div className="floor-tabs" role="tablist">
            {(Object.keys(floors) as (keyof typeof floors)[]).map((floor) => (
              <button key={floor} onClick={() => setActive(floor)} className={active === floor ? 'active' : ''} role="tab" aria-selected={active === floor}>{floor}</button>
            ))}
          </div>
          <div className="floor-content">
            <div className="floor-plan">
              <div className="plan-grid">
                <div className="room room--a"><span>01</span><small>{active === 'Ground Floor' ? 'Office' : 'Bedroom'}</small></div>
                <div className="room room--b"><span>02</span><small>{active === 'Ground Floor' ? 'Entrance' : 'Living'}</small></div>
                <div className="room room--c"><span>03</span><small>{active === 'Ground Floor' ? 'Access' : 'Kitchen'}</small></div>
                <div className="room room--d"><span>04</span><small>{active === 'Ground Floor' ? 'Service' : 'Bedroom'}</small></div>
              </div>
              <span className="plan-hint"><MousePointer2 size={15} /> Hover to explore rooms</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div className="floor-rooms" key={active} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }}>
                <span className="floor-rooms__label">Now viewing</span>
                <h3>{active}</h3>
                <p>Conceptual layout preview. Detailed architectural plans can be shared as part of the leasing discussion.</p>
                {floors[active].map((room, index) => (
                  <button className="room-card" key={room.title}>
                    <span>0{index + 1}</span>
                    <span><b>{room.title}</b><small>{room.meta}</small></span>
                    <ArrowRight size={16} />
                  </button>
                ))}
                <Button href="#contact">Request Full Plans</Button>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Phase 2: mount React Three Fiber / Three.js floorplan canvas inside .floor-plan */}
        </motion.div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="shell">
        <SectionIntro label="Property gallery" title={<>Designed to be <em>seen differently.</em></>} body="A visual leasing toolkit ready to be updated with final photography, plans and a future virtual tour." />
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.article className={`gallery-card gallery-card--${item.type} ${index === 0 ? 'gallery-card--feature' : ''}`} key={item.title} {...fadeUp}>
              {item.type === 'image' && <img src={heroImage} alt="" />}
              {item.type === 'map' && <RouteGraphic />}
              {item.type === 'plan' && <div className="mini-plan"><i/><i/><i/><i/></div>}
              {item.type === 'interior' && <div className="interior-scene"><span/><i/><b/></div>}
              {item.type === 'kitchen' && <div className="kitchen-scene"><i/><i/><i/><i/></div>}
              {item.type === 'tour' && <div className="tour-orbit"><span>360°</span></div>}
              <div className="gallery-card__overlay"><span>{item.title}</span><ExternalLink size={17} /></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  return (
    <section className="section use-section">
      <div className="shell">
        <SectionIntro label="Built around business" title={<>One property. <em>Multiple corporate uses.</em></>} body="A flexible proposition for businesses, agencies and accommodation partners operating in and around Luton." />
        <div className="use-grid">
          {useCases.map(({ title, body, icon: Icon }, index) => (
            <motion.article className="use-card" key={title} {...fadeUp}>
              <span className="use-card__number">0{index + 1}</span>
              <span className="use-card__icon"><Icon size={22} /></span>
              <h3>{title}</h3>
              <p>{body}</p>
              <ArrowDownRight className="use-card__arrow" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function LeasingSection() {
  return (
    <section className="section leasing-section" id="leasing">
      <div className="shell leasing-grid">
        <motion.div className="leasing-copy" {...fadeUp}>
          <div className="eyebrow">Leasing information</div>
          <h2>Start the right <em>corporate conversation.</em></h2>
          <p>95 Park Street is being presented for corporate and serviced accommodation discussions, with scope to explore a whole-building arrangement.</p>
          <p>Lease structure, operational responsibilities, maintenance, management and intended use would be agreed through direct discussion and appropriate professional advice.</p>
          <div className="notice"><Sparkles size={17} /><span>Compliance, planning and operational suitability must be independently verified before final operation.</span></div>
        </motion.div>
        <motion.div className="leasing-card" {...fadeUp}>
          <span className="leasing-card__label">Opportunity at a glance</span>
          <h3>Corporate leasing pack</h3>
          <div className="leasing-points">
            {leasingPoints.map((point) => <span key={point}><Check size={15} /> {point}</span>)}
          </div>
          <Button href="#contact">Request Leasing Pack</Button>
          <small>Shared with qualified corporate enquiries.</small>
        </motion.div>
      </div>
    </section>
  )
}

function EnquirySection() {
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="shell contact-grid">
        <motion.div className="contact-copy" {...fadeUp}>
          <div className="eyebrow">Corporate enquiries</div>
          <h2>Tell us what your <em>team needs.</em></h2>
          <p>Share your accommodation requirements and we’ll prepare a tailored leasing conversation around your organisation.</p>
          <div className="contact-detail"><Mail size={18} /><span><small>Email</small>leasing@lutoncorporatestays.co.uk</span></div>
          <div className="contact-detail"><Phone size={18} /><span><small>Property team</small>Available by appointment</span></div>
          <div className="contact-detail"><MapPin size={18} /><span><small>Property</small>{property.address}</span></div>
        </motion.div>
        <motion.div className="form-card" {...fadeUp}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div className="form-success" key="success" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }}>
                <span><Check size={26} /></span>
                <h3>Thank you for your enquiry.</h3>
                <p>Your details have been captured for this demonstration. Backend delivery can be connected in phase two.</p>
                <button onClick={() => setSubmitted(false)}>Send another enquiry</button>
              </motion.div>
            ) : (
              <motion.form onSubmit={onSubmit} key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="form-row">
                  <label>Company name<input required name="company" placeholder="Your organisation" /></label>
                  <label>Contact name<input required name="name" placeholder="Full name" /></label>
                </div>
                <div className="form-row">
                  <label>Email<input required type="email" name="email" placeholder="name@company.com" /></label>
                  <label>Phone<input required type="tel" name="phone" placeholder="+44 (0) ..." /></label>
                </div>
                <div className="form-row">
                  <label>Intended use<select required name="use" defaultValue=""><option value="" disabled>Select use</option><option>Airport staff accommodation</option><option>Airline crew housing</option><option>Contractor accommodation</option><option>Relocation housing</option><option>Serviced accommodation</option><option>Other corporate use</option></select></label>
                  <label>Occupants / staff<input required type="number" min="1" name="occupants" placeholder="Estimated number" /></label>
                </div>
                <label>Preferred lease duration<select required name="duration" defaultValue=""><option value="" disabled>Select duration</option><option>3–6 months</option><option>6–12 months</option><option>12–24 months</option><option>24+ months</option><option>Open to discussion</option></select></label>
                <label>Message<textarea required name="message" rows={4} placeholder="Tell us about your requirements, preferred dates and any operational needs." /></label>
                <button className="button form-submit" type="submit"><span>{ctaText.form}</span><ArrowRight size={17} /></button>
                <small className="form-privacy">By submitting, you consent to being contacted about this property opportunity.</small>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ClosingCta() {
  return (
    <section className="closing-section">
      <img src={heroImage} alt="" />
      <div className="closing-section__veil" />
      <motion.div className="shell closing-content" {...fadeUp}>
        <div className="eyebrow">95 Park Street · Luton</div>
        <h2>Secure a corporate accommodation opportunity <em>minutes from London Luton Airport.</em></h2>
        <div>
          <Button href="#contact">Request Leasing Pack</Button>
          <Button href="#contact" secondary>Book a Viewing</Button>
          <a href="mailto:leasing@lutoncorporatestays.co.uk" className="text-link">Contact Property Team <ArrowRight size={16} /></a>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__top">
        <Logo />
        <p>Premium corporate accommodation and leasing opportunity near London Luton Airport.</p>
        <div className="footer__links">{navItems.slice(0, 6).map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div>
      </div>
      <div className="shell footer__bottom"><span>© {new Date().getFullYear()} Luton Corporate Stays</span><span>Property information is indicative and subject to verification.</span></div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        <PropertyOverview />
        <LocationSection />
        <FloorplanSection />
        <Gallery />
        <UseCases />
        <LeasingSection />
        <EnquirySection />
        <ClosingCta />
      </main>
      <Footer />
      {/* Phase 2 integration hooks: cinematic fly-in, R3F map, 3D floorplans and GSAP scroll sequences. */}
    </>
  )
}
