import { motion } from 'motion/react';
import { ShieldCheck, ClipboardCheck, Award, Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const standards = [
  {
    title: 'Evidence-Based Prescribing',
    description: 'Our clinical protocols are rooted in the latest psychiatric research and geriatric medicine guidelines. Explore our approach to behavioral health management.',
    icon: Target,
    image: '/images/Evidence-Based_Prescribing.webp',
    details: [
      'Strict adherence to APA and AGS guidelines',
      'Focus on non-pharmacological interventions first',
      'Regular peer review and clinical audits',
      'Continuous monitoring of treatment efficacy',
    ],
  },
  {
    title: 'CMS Psychotropic Standards',
    description: 'We ensure your facility stays ahead of CMS regulations regarding psychotropic medication use and compliance requirements.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200',
    details: [
      'Expertise in F-Tag 758 compliance',
      'Rigorous Gradual Dose Reduction (GDR) protocols',
      'Comprehensive documentation for survey readiness',
      'Support for behavioral health quality measures',
    ],
  },
  {
    title: 'Quality Assurance Approach',
    description: 'Our multi-layered QA system ensures consistent, high-quality care across all partner facilities.',
    icon: ClipboardCheck,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    details: [
      'Monthly clinical performance reviews',
      'Facility-specific outcome tracking',
      'Regular staff and family satisfaction surveys',
      'Proactive risk management strategies',
    ],
  },
];

export default function Standards() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Clinical Standards" 
        description="Explore Health Alliance SoCal's rigorous clinical standards, CMS psychotropic compliance, and our commitment to evidence-based prescribing."
      />
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-brand-accent/40 to-brand-accent/60">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-border text-brand-primary-text text-xs font-semibold uppercase tracking-widest mb-6">
              <Award size={14} />
              <span>Clinical Excellence</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-semibold text-brand-ink leading-[1.2] mb-5">
              Research &amp; Clinical Standards
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Setting the gold standard for behavioral health services through rigorous clinical protocols and regulatory expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Standards Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-10 lg:gap-14 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text mb-6 shadow-sm">
                    <standard.icon size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-primary-text mb-5">{standard.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-7">
                    {standard.title === 'Evidence-Based Prescribing' ? (
                      <>
                        {standard.description.split(' Explore')[0]} <Link to="/services/dementia-behavioral-management" className="text-brand-primary-text font-semibold hover:underline">Explore our behavioral health management</Link> approach.
                      </>
                    ) : standard.title === 'CMS Psychotropic Standards' ? (
                      <>
                        We ensure your facility stays ahead of CMS regulations regarding <Link to="/services/psychotropic-medication-management" className="text-brand-primary-text font-semibold hover:underline">psychotropic medication use</Link> and <Link to="/services/cms-f-tag-758-support" className="text-brand-primary-text font-semibold hover:underline">compliance requirements</Link>.
                      </>
                    ) : (
                      standard.description
                    )}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {standard.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 bg-brand-accent/20 border border-brand-border/50 rounded-xl p-4">
                        <CheckCircle2 size={18} className="text-brand-secondary shrink-0 mt-0.5" />
                        <span className="text-brand-primary-text text-[0.95rem] leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full mx-auto w-11/12 md:w-10/12 lg:w-full">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative group border border-brand-border/50">
                    <img
                      src={standard.image}
                      alt={standard.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="section-padding bg-brand-paper">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm relative overflow-hidden max-w-5xl mx-auto">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-10 lg:gap-14 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-primary-text mb-6">Our Quality Assurance Commitment</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We believe that clinical excellence is not a destination, but a continuous journey. Our QA program is designed to monitor, evaluate, and improve every aspect of our psychiatric services.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-brand-primary-text mb-1">Continuous Monitoring</h4>
                      <p className="text-gray-500 text-sm">Real-time tracking of clinical outcomes and facility compliance metrics.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shrink-0">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-brand-primary-text mb-1">Peer Review Excellence</h4>
                      <p className="text-gray-500 text-sm">Regular clinical case reviews by our senior psychiatric leadership team.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1758691462858-f1286e5daf40?auto=format&fit=crop&q=80&w=1200"
                    alt="Health Alliance SoCal quality assurance and clinical standards"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    width={1200}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <Link to="/about" className="absolute -bottom-6 -left-6 bg-brand-primary p-6 rounded-2xl text-brand-primary-content shadow-xl max-w-xs hover:shadow-2xl transition-all">
                  <p className="text-sm italic font-medium leading-relaxed">
                    "Our commitment to clinical standards ensures that every resident receives the highest quality of care, every time."
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-widest font-bold text-brand-accent">
                    — Danielle Ramage DNP, PMHNP-BC, Co-Founder
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#faf9f7] border-t border-brand-border/60 text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-brand-ink mb-5">
            Partner with a Clinical Leader
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Experience the difference that specialized psychiatric leadership and rigorous clinical standards can make in your facility.
          </p>
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-brand-primary text-brand-primary-content px-10 py-4 rounded-full font-bold hover:bg-brand-secondary transition-all shadow-md flex items-center justify-center gap-2 flex-1 sm:flex-none"
            >
              Request a Partnership Proposal
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="bg-white border border-brand-primary/20 text-brand-primary-text px-10 py-4 rounded-full font-bold hover:bg-brand-accent transition-all shadow-sm flex-1 sm:flex-none text-center"
            >
              Explore Our Services
            </Link>
            <Link
              to="/locations"
              className="bg-white border border-brand-primary/20 text-brand-primary-text px-10 py-4 rounded-full font-bold hover:bg-brand-accent transition-all shadow-sm flex-1 sm:flex-none text-center"
            >
              Service Areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
