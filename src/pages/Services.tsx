import { motion } from 'motion/react';
import { Stethoscope, Pill, ClipboardCheck, Users, GraduationCap, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

const services = [
  {
    title: 'Psychiatric Evaluations',
    description: 'Comprehensive initial assessments and ongoing psychiatric evaluations for residents in long-term care settings.',
    icon: Stethoscope,
    details: [
      'Diagnostic clarification',
      'Cognitive assessments',
      'Behavioral health screenings',
      'Risk assessments',
    ],
    image: '/images/Psychiatric Evaluations.png',
  },
  {
    title: 'Medication Management',
    description: 'Expert oversight of psychotropic medications, focusing on efficacy, safety, and gradual dose reduction (GDR).',
    icon: Pill,
    details: [
      'Psychotropic medication monitoring',
      'Side effect management',
      'Drug interaction screening',
      'GDR protocol implementation',
    ],
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'CMS Compliance Support',
    description: 'Specialized support to ensure your facility meets and exceeds CMS behavioral health regulations.',
    icon: ClipboardCheck,
    details: [
      'F-Tag 758 compliance support',
      'Survey preparation',
      'Quality measure improvement',
      'Documentation audits',
    ],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Staff Training & Education',
    description: 'Empowering your clinical and non-clinical staff with the knowledge to manage behavioral health effectively.',
    icon: GraduationCap,
    details: [
      'Dementia care training',
      'De-escalation techniques',
      'Medication administration safety',
      'Behavioral intervention plans',
    ],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Services() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Psychiatric Services" 
        description="Comprehensive psychiatric evaluations, medication management, CMS compliance support, and staff training for long-term care facilities."
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
              <ShieldCheck size={14} />
              <span>Clinical Excellence</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-semibold text-brand-ink leading-[1.2] mb-5">
              Elevating Behavioral Healthcare Standards
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Our comprehensive suite of psychiatric services is designed to integrate seamlessly into your facility's workflow, improving resident outcomes and ensuring regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col lg:flex-row gap-10 lg:gap-14 items-center",
                  index % 2 === 1 && "lg:flex-row-reverse"
                )}
              >
                <div className="flex-1">
                  <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text mb-6">
                    <service.icon size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-primary-text mb-5">{service.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-7">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 bg-brand-accent/20 border border-brand-border/50 rounded-xl p-4">
                        <CheckCircle2 size={18} className="text-brand-secondary shrink-0 mt-0.5" />
                        <span className="text-brand-primary-text text-[0.95rem] leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-primary text-brand-primary-content px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-secondary transition-all shadow-md hover:shadow-lg group"
                  >
                    Inquire About This Service
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="flex-1 w-full mx-auto w-11/12 md:w-10/12 lg:w-full">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative group border border-brand-border/50">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* overlay removed */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="section-padding bg-brand-paper">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-8 md:p-14 shadow-sm relative overflow-hidden">
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-primary-text mb-6">Regulatory Compliance &amp; Survey Readiness</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Navigating the complex landscape of CMS behavioral health regulations can be challenging. Our clinical leadership team provides the expertise needed to ensure your facility is always survey-ready.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-brand-primary-text mb-1">F-Tag 758 Expertise</h4>
                      <p className="text-gray-500 text-sm">We specialize in psychotropic medication oversight and gradual dose reduction (GDR) compliance.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shrink-0">
                      <ClipboardCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-brand-primary-text mb-1">Quality Measure Improvement</h4>
                      <p className="text-gray-500 text-sm">Our interventions are designed to positively impact your facility's Five-Star Quality Rating.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
                    alt="Compliance Support"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-brand-primary p-6 rounded-2xl text-brand-primary-content shadow-xl max-w-xs">
                  <p className="text-sm italic font-medium leading-relaxed">
                    "Their expertise in CMS compliance has been a game-changer for our facility's survey readiness."
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-widest font-bold text-brand-accent">
                    — Facility Administrator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#faf9f7] border-t border-brand-border/60 text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-brand-ink mb-5">
            Comprehensive Care, Simplified.
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Let us handle the complexities of behavioral healthcare so you can focus on what matters most: your residents.
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
