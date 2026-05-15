import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { allServices } from './services/serviceData';

const highlights = [
  'Board-certified psychiatric clinicians',
  'CMS-aligned documentation & compliance',
  'Seamless care team integration',
  'Ongoing staff education & support',
  'Family communication & guidance',
  'Responsive consultation & coverage',
];

export default function Services() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Psychiatric Services"
        description="Health Alliance SoCal partners with skilled nursing facilities, assisted living communities, memory care units, and board and care homes across Southern California to deliver integrated behavioral health services."
        keywords="psychiatric services long-term care, behavioral health SNF, assisted living psychiatry, memory care behavioral health, CMS compliance behavioral health, Southern California psychiatry"
      />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-brand-accent/40 to-brand-accent/60">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-border text-brand-primary-text text-xs font-semibold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} />
              <span>Behavioral Health Partnership</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-bold text-brand-ink leading-[1.2] mb-5">
              Integrated Psychiatric Services Across Every Level of Care
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              Health Alliance SoCal partners with skilled nursing facilities, assisted living communities, memory care units, and board and care homes to deliver seamless, evidence-based behavioral health care across Southern California.
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
                to="/about"
                className="inline-flex items-center justify-center bg-white border border-brand-primary/15 text-brand-primary-text px-6 py-3 rounded-xl font-semibold text-sm hover:bg-brand-accent transition-colors"
              >
                Learn About Our Approach
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE DIRECTORY ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">Our Services</p>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink leading-snug">
              Comprehensive Behavioral Health Services
            </h2>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed mt-3">
              Each service below represents a dedicated partnership model tailored to the unique needs of that care setting or clinical challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-brand-border hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={service.heroImage}
                      alt={service.navLabel}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      width={800}
                      height={450}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="w-9 h-9 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shadow-sm mb-3 group-hover:bg-brand-primary group-hover:text-brand-primary-content transition-colors shrink-0">
                      <service.icon size={17} />
                    </div>
                    <h3 className="font-serif font-semibold text-brand-ink text-[1rem] mb-2 leading-snug flex-1">
                      {service.navLabel}
                    </h3>
                    <div className="inline-flex items-center gap-1 text-brand-primary-text text-xs font-semibold mt-auto group-hover:gap-2 transition-all pt-2">
                      Learn more <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section style={{ backgroundColor: '#faf9f7' }} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">Why Partner With Us</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink mb-6 leading-snug">
                What Every Partnership Includes
              </h2>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-8">
                Regardless of the service, every Health Alliance SoCal partnership is built on the same foundation: clinical excellence, regulatory integrity, and a genuine commitment to resident well-being.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-[0.9rem]">
                    <CheckCircle2 size={16} className="text-brand-primary-text shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-11/12 md:w-10/12 lg:w-full mx-auto"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900"
                  alt="Collaborative psychiatric care partnership"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  width={900}
                  height={675}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl px-5 py-4 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-accent flex items-center justify-center text-brand-primary-text">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="font-semibold text-brand-primary-text text-sm">CMS-Aligned</p>
                  <p className="text-gray-500 text-xs">Fully regulatory-compliant</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-[#faf9f7] border-t border-brand-border/60 text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-brand-ink mb-5">
            Ready to Build a Behavioral Health Partnership?
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed max-w-lg mx-auto">
            Let's talk about how Health Alliance SoCal can integrate seamlessly into your facility and support your residents.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-primary text-brand-primary-content px-10 py-4 rounded-full font-bold hover:bg-brand-secondary transition-all shadow-md"
          >
            Request a Partnership Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}
