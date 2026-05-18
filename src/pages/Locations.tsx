import { motion } from 'motion/react';
import { MapPin, ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { allLocations } from './locations/locationData';

const countyImages: Record<string, string> = {
  'los-angeles-county':
    'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800',
  'orange-county':
    'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
  'san-diego-county':
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
  'riverside-county':
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
  'ventura-county':
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
};

const whyLocal = [
  {
    title: 'County-Specific Regulatory Knowledge',
    description:
      'California DHCS requirements layer on top of federal CMS standards. Our team understands both — and the nuances that vary across Southern California counties.',
  },
  {
    title: 'On-the-Ground Clinical Presence',
    description:
      'We provide in-person psychiatric visits across our entire service area, not just telehealth. Residents and staff benefit from consistent face-to-face clinical relationships.',
  },
  {
    title: 'Tailored to Each Community',
    description:
      'Each county we serve has a distinct demographic profile, cultural makeup, and long-term care landscape. Our partnerships reflect those differences, not a one-size-fits-all model.',
  },
  {
    title: 'Expanding Coverage',
    description:
      'We are actively growing our presence across Southern California. If your county isn\'t listed, reach out — we may already be serving facilities nearby.',
  },
];

export default function Locations() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Locations We Serve"
        description="Health Alliance SoCal provides integrated behavioral health and psychiatric care across Los Angeles, Orange, San Diego, Riverside, and Ventura counties — partnering with long-term care facilities throughout Southern California."
        keywords="behavioral health Southern California, psychiatry Los Angeles County, behavioral health Orange County, psychiatry San Diego County, long-term care psychiatry Riverside County, Ventura County behavioral health, HASC, Health Alliance SoCal, psychiatric services Southern California"
      />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-brand-accent/40 to-brand-accent/60">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-border text-brand-secondary text-xs font-semibold uppercase tracking-widest mb-6">
              <MapPin size={14} />
              <span>Southern California</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-bold text-brand-ink leading-[1.2] mb-5">
              Serving Long-Term Care Facilities Across Southern California
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              Health Alliance SoCal partners with skilled nursing facilities, assisted living communities, memory care units, and board and care homes in five Southern California counties — providing the same integrated behavioral health partnership in every community we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary text-brand-primary-content px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-secondary transition-colors shadow-md group"
              >
                Find a Partnership in Your Area
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-white border border-brand-primary/15 text-brand-primary-text px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-accent transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COUNTY GRID ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
              Counties We Serve
            </p>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink leading-snug">
              Our Southern California Service Area
            </h2>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed mt-3">
              Select a county to learn about our behavioral health services, areas covered, and the local expertise we bring to each community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {allLocations.map((loc, i) => (
              <motion.div
                key={loc.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={`/locations/${loc.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-brand-border hover:border-brand-secondary/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={countyImages[loc.slug] ?? loc.heroImage}
                      alt={`Behavioral health services in ${loc.county}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      width={800}
                      height={450}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-brand-secondary shrink-0 group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                        <MapPin size={15} />
                      </div>
                      <h3 className="font-serif font-bold text-brand-ink text-lg leading-snug group-hover:text-brand-primary-text transition-colors">
                        {loc.county}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-[0.88rem] leading-relaxed flex-1 mb-4">
                      {loc.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {loc.servicesOffered.slice(0, 2).map((s) => (
                        <span
                          key={s.slug}
                          className="text-[10px] font-semibold px-2 py-1 rounded-md bg-brand-accent/60 text-brand-primary-text border border-brand-border/60"
                        >
                          {s.title.split(' ').slice(0, 3).join(' ')}
                        </span>
                      ))}
                      {loc.servicesOffered.length > 2 && (
                        <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-gray-100 text-gray-500">
                          +{loc.servicesOffered.length - 2} more
                        </span>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-1 text-brand-primary-text text-xs font-bold group-hover:gap-2 transition-all">
                      View {loc.county} services <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LOCAL MATTERS ── */}
      <section style={{ backgroundColor: '#faf9f7' }} className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
              Local Expertise
            </p>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink leading-snug">
              Why Local Behavioral Health Partnership Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyLocal.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-brand-border p-7 hover:border-brand-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-brand-accent flex items-center justify-center text-brand-primary-text shrink-0 mt-0.5">
                    <CheckCircle2 size={17} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-brand-ink text-[1rem] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-[0.9rem] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-[#faf9f7] border-t border-brand-border/60">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary-text text-[10px] font-bold uppercase tracking-widest mb-5">
            <PhoneCall size={11} />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-[2.1rem] text-brand-ink mb-4 leading-snug">
            Ready to Partner With Us?
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Whether your facility is in one of our current service counties or a region we're exploring, let's start a conversation about your behavioral health needs.
          </p>
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-brand-primary text-brand-primary-content px-4 sm:px-8 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-brand-secondary transition-colors shadow-md flex-1 sm:flex-none text-center"
            >
              Request a Partnership Proposal
            </Link>
            <Link
              to="/services"
              className="bg-white border border-brand-primary/20 text-brand-primary-text px-4 sm:px-8 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-brand-accent transition-colors flex-1 sm:flex-none text-center shadow-sm"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
