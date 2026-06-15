import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, MapPin, CheckCircle2, PhoneCall, Building2, ChevronDown } from 'lucide-react';
import SEO from '../../components/SEO';
import { allLocations, getLocationBySlug, type LocationFAQ } from './locationData';

// ─── FAQ Accordion Item ─────────────────────────────────────────────────────
function FAQItem({ question, answer }: LocationFAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-brand-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-5 bg-white hover:bg-brand-accent/20 transition-colors text-left"
      >
        <span className="font-serif font-semibold text-brand-ink text-sm leading-snug">
          {question}
        </span>
        <ChevronDown
          size={16}
          className={`text-brand-primary-text shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-3 bg-brand-accent/20 border-t border-brand-border/60">
              <p className="text-gray-600 text-[0.9rem] leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Location Page ──────────────────────────────────────────────────────────
export default function LocationPage() {
  const { county } = useParams<{ county: string }>();
  const location = getLocationBySlug(county ?? '');

  if (!location) return <Navigate to="/locations" replace />;

  const related = allLocations.filter((l) => l.slug !== location.slug).slice(0, 3);

  // Generate geo-targeted SEO title including major cities
  const majorCities = location.areasServed?.slice(0, 3).join(', ') || location.county;
  const seoTitle = `Psychiatric & Behavioral Health Services in ${location.county} | ${majorCities}`;

  // Generate geo-targeted description with specific services and cities
  const seoDescription = `Expert psychiatric and behavioral health care in ${location.county} including ${majorCities}. Specialized services for skilled nursing facilities, assisted living communities, and memory care. Board-certified clinicians providing CMS-compliant behavioral health partnerships.`;

  // City-level service blurbs — turn the served-city list into unique, rankable
  // "[service] in [city]" body content. Rotating templates avoid boilerplate
  // repetition while covering the full service-keyword space.
  const cityBlurbs: ((city: string) => string)[] = [
    (city) => `Behavioral health and psychiatric partnerships for skilled nursing facilities in ${city}.`,
    (city) => `Assisted living and memory care behavioral health support throughout ${city}.`,
    (city) => `CMS-compliant psychotropic medication management for ${city} long-term care teams.`,
    (city) => `On-site and telepsychiatry psychiatric coverage for residential and board & care facilities in ${city}.`,
    (city) => `Dementia behavioral management and resident stabilization for memory care communities in ${city}.`,
    (city) => `Geriatric psychiatry and CMS F-Tag 758 compliance support for facilities across ${city}.`,
  ];

  return (
    <div className="flex flex-col">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={location.keywords ?? `behavioral health ${location.county}, HASC, psychiatry ${location.county}, skilled nursing psychiatry ${location.county}, long-term care behavioral health ${location.county}, ${location.county} psychiatric services, Health Alliance SoCal`}
        ogImage={location.heroImage}
        ogImageAlt={`Behavioral health services in ${location.county}`}
        schema={JSON.stringify(location.schema)}
      />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-brand-accent/40 to-brand-accent/60">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >
            <Link
              to="/locations"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary-text hover:underline mb-5"
            >
              <ArrowLeft size={13} />
              All Locations
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-border text-brand-secondary text-xs font-semibold uppercase tracking-widest mb-5 ml-4">
              <MapPin size={13} />
              <span>{location.badge}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif font-bold text-brand-ink leading-[1.18] mb-5">
              Behavioral Health Services in {location.county}
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              {location.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary text-brand-primary-content px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-secondary transition-colors shadow-md group"
              >
                Request a Partnership Proposal
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

      {/* ── OVERVIEW ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
                Serving {location.county}
              </p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink mb-6 leading-snug">
                Your Behavioral Health Partner in {location.county}
              </h2>
              <div className="space-y-4">
                {location.intro.map((para, i) => (
                  <p key={i} className="text-gray-600 text-[0.95rem] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Image + Stats */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-11/12 md:w-10/12 lg:w-full mx-auto"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-brand-border/40">
                <img
                  src={location.heroImage}
                  alt={`Behavioral health services in ${location.county}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                {location.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl border border-brand-border/60 p-3 text-center shadow-sm"
                  >
                    <p className="font-bold text-brand-primary-text text-base leading-none mb-0.5">{stat.value}</p>
                    <p className="text-gray-500 text-[10px] leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── SERVICES WE OFFER HERE ── */}
      <section style={{ backgroundColor: '#faf9f7' }} className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
              Our Services in {location.county}
            </p>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink leading-snug">
              What Behavioral Health Services Do We Provide in {location.county}?
            </h2>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed mt-3">
              Each service is available as a dedicated partnership — integrated into your facility's care team workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {location.servicesOffered.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex gap-4 items-start bg-white rounded-2xl border border-brand-border p-6 hover:border-brand-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center text-brand-primary-text shrink-0 mt-0.5 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <Building2 size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-brand-ink text-[1rem] mb-1.5 leading-snug group-hover:text-brand-primary-text transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-[0.88rem] leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-brand-primary-text text-xs font-bold group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL HIGHLIGHTS ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
              Local Expertise
            </p>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink leading-snug">
              Why {location.county} Facilities Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {location.localHighlights.map((highlight, i) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-accent/20 rounded-2xl border border-brand-border p-7 hover:border-brand-primary/20 hover:bg-brand-accent/30 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary-text mb-4">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="font-serif font-bold text-brand-ink text-[1rem] mb-3 leading-snug">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-[0.9rem] leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: '#faf9f7' }} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* Heading col */}
            <div>
              <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
                Common Questions
              </p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink leading-snug mb-4">
                Frequently Asked Questions About {location.county}
              </h2>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-6">
                Questions about our {location.county} behavioral health services? We've answered the most common ones below.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-brand-primary-text text-sm font-bold hover:underline"
              >
                Ask us something else <ArrowRight size={13} />
              </Link>
            </div>

            {/* Accordion col */}
            <div className="lg:col-span-2 space-y-3">
              {location.faq.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <FAQItem question={item.question} answer={item.answer} />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── AREAS SERVED ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
              Coverage Area
            </p>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink mb-5 leading-snug">
              Which Cities in {location.county} Do We Serve?
            </h2>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed">
              Health Alliance SoCal partners with skilled nursing facilities, assisted living communities, memory care units, and board &amp; care homes throughout {location.county}, including the cities and communities below. Don't see your area listed? Contact us — we're always expanding our coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {location.areasServed.map((area, i) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="bg-brand-accent/20 rounded-xl border border-brand-border p-5 hover:border-brand-primary/25 hover:bg-brand-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={13} className="text-brand-secondary shrink-0" />
                  <h3 className="font-serif font-semibold text-brand-ink text-sm leading-snug">
                    {area}
                  </h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {cityBlurbs[i % cityBlurbs.length](area)}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-primary text-brand-primary-content px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-secondary transition-colors shadow-md group"
            >
              Ask About Your Area
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── OTHER LOCATIONS ── */}
      {related.length > 0 && (
        <section style={{ backgroundColor: '#faf9f7' }} className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mb-10">
              <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
                Other Locations
              </p>
              <h2 className="font-serif font-bold text-2xl text-brand-ink leading-snug">
                We Also Serve These Counties
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((loc, i) => (
                <motion.div
                  key={loc.slug}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/locations/${loc.slug}`}
                    className="group block bg-brand-accent/20 rounded-2xl border border-brand-border p-6 hover:border-brand-secondary/30 hover:bg-brand-accent/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-secondary mb-4 shadow-sm group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                      <MapPin size={18} />
                    </div>
                    <h3 className="font-serif font-semibold text-brand-ink text-base mb-2 leading-snug group-hover:text-brand-primary-text transition-colors">
                      {loc.county}
                    </h3>
                    <div className="inline-flex items-center gap-1 text-brand-primary-text text-xs font-semibold mt-1 group-hover:gap-2 transition-all">
                      View services <ArrowRight size={11} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="section-padding bg-white border-t border-brand-border/60">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary-text text-[10px] font-bold uppercase tracking-widest mb-5">
            <PhoneCall size={11} />
            <span>Partner With Us in {location.county}</span>
          </div>
          <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-[2.1rem] text-brand-ink mb-4 leading-snug">
            Ready to Build a Behavioral Health Partnership?
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            If your facility is in {location.county}, we'd love to learn about your residents and explore how we can support your care team.
          </p>
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-brand-primary text-brand-primary-content px-4 sm:px-8 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-brand-secondary transition-colors shadow-md flex-1 sm:flex-none text-center"
            >
              Request a Partnership Proposal
            </Link>
            <Link
              to="/locations"
              className="bg-white border border-brand-primary/20 text-brand-primary-text px-4 sm:px-8 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-brand-accent transition-colors flex-1 sm:flex-none text-center shadow-sm"
            >
              View All Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
