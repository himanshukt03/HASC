import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2, PhoneCall } from 'lucide-react';
import SEO from '../../components/SEO';
import { allServices, getServiceBySlug } from './serviceData';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug ?? '');

  if (!service) return <Navigate to="/services" replace />;

  const related = allServices.filter((s) => service.relatedSlugs.includes(s.slug));

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': `https://www.healthalliancesocal.com/services/${service.slug}/#service`,
        name: service.title,
        description: service.metaDescription,
        url: `https://www.healthalliancesocal.com/services/${service.slug}`,
        medicalSpecialty: 'Psychiatry',
        provider: {
          '@id': 'https://www.healthalliancesocal.com/#organization',
        },
        knowsAbout: ['Behavioral Health', 'Psychiatric Care', 'Geriatric Psychiatry'],
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://www.healthalliancesocal.com/services/${service.slug}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.healthalliancesocal.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://www.healthalliancesocal.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `https://www.healthalliancesocal.com/services/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col">
      <SEO
        title={service.title}
        description={service.metaDescription}
        keywords={`${service.keywords}, HASC, Health Alliance SoCal`}
        ogImage={service.heroImage}
        ogImageAlt={service.title}
        schema={JSON.stringify(serviceSchema)}
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
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary-text hover:underline mb-5"
            >
              <ArrowLeft size={13} />
              All Services
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-border text-brand-primary-text text-xs font-semibold uppercase tracking-widest mb-5 ml-4">
              <service.icon size={13} />
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-serif font-bold text-brand-ink leading-[1.18] mb-5">
              {service.title}
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
              {service.tagline}
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
                Explore All Services
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
                Our Approach
              </p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink mb-6 leading-snug">
                A True Behavioral Health Partnership
              </h2>
              <div className="space-y-4">
                {service.intro.map((paragraph, i) => (
                  <p key={i} className="text-gray-600 text-[0.95rem] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Board-Certified Clinicians', 'CMS-Aligned Care', 'HIPAA Compliant'].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-accent/60 text-brand-primary-text text-xs font-semibold border border-brand-primary/10"
                  >
                    <CheckCircle2 size={11} />
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-11/12 md:w-10/12 lg:w-full mx-auto"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-brand-border/40">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-5 py-4 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-accent flex items-center justify-center text-brand-primary-text">
                  <service.icon size={20} />
                </div>
                <div>
                  <p className="font-semibold text-brand-primary-text text-sm">{service.badge}</p>
                  <p className="text-gray-500 text-xs">Specialized partnership</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ backgroundColor: '#faf9f7' }} className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
              What We Provide
            </p>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink leading-snug">
              Integrated Clinical Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-brand-border p-6 hover:border-brand-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center text-brand-primary-text mb-4 group-hover:bg-brand-primary group-hover:text-brand-primary-content transition-colors shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <h3 className="font-serif font-bold text-brand-ink text-[1.05rem] mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-[0.9rem] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
              Our Dual Commitment
            </p>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink leading-snug">
              Supporting Facilities & Residents Together
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-brand-accent/20 rounded-2xl border border-brand-border p-8"
            >
              <h3 className="font-serif font-bold text-xl text-brand-ink mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center text-brand-primary-content text-xs font-bold">F</span>
                For Facilities & Care Teams
              </h3>
              <ul className="space-y-3">
                {service.facilityBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-[0.95rem]">
                    <CheckCircle2 size={16} className="text-brand-primary-text shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="bg-[#4A9E8E]/5 rounded-2xl border border-[#4A9E8E]/20 p-8"
            >
              <h3 className="font-serif font-bold text-xl text-brand-ink mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-brand-secondary flex items-center justify-center text-white text-xs font-bold">R</span>
                For Residents & Families
              </h3>
              <ul className="space-y-3">
                {service.residentBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-[0.95rem]">
                    <CheckCircle2 size={16} className="text-brand-secondary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HOW WE PARTNER ── */}
      <section style={{ backgroundColor: '#faf9f7' }} className="section-padding">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
              Our Process
            </p>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink leading-snug">
              How We Build the Partnership
            </h2>
          </div>

          <div className="space-y-4">
            {service.processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 group"
              >
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-primary text-brand-primary-content text-sm font-semibold flex items-center justify-center shadow-md group-hover:bg-brand-secondary transition-colors">
                    {i + 1}
                  </div>
                  {i < service.processSteps.length - 1 && (
                    <div className="w-px flex-1 bg-brand-primary/15 mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-serif font-semibold text-brand-ink text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-[0.95rem] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      {related.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mb-10">
              <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">
                Related Services
              </p>
              <h2 className="font-serif font-bold text-2xl text-brand-ink leading-snug">
                More Ways We Partner With You
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel, i) => (
                <motion.div
                  key={rel.slug}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={`/services/${rel.slug}`}
                    className="group block bg-brand-accent/20 rounded-2xl border border-brand-border p-6 hover:border-brand-primary/30 hover:bg-brand-accent/40 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-primary-text mb-4 shadow-sm group-hover:bg-brand-primary group-hover:text-brand-primary-content transition-colors">
                      <rel.icon size={18} />
                    </div>
                    <h3 className="font-serif font-semibold text-brand-ink text-base mb-1 leading-snug group-hover:text-brand-primary-text transition-colors">
                      {rel.navLabel}
                    </h3>
                    <div className="inline-flex items-center gap-1 text-brand-primary-text text-xs font-semibold mt-2 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={11} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            Whether you're a facility leader exploring behavioral health partnership or a family seeking care guidance, our team is here to help.
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
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
