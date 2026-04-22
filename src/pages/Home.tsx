import { motion } from 'motion/react';
import {
  ArrowRight, ShieldCheck, Users, Stethoscope, Building2, Heart, CheckCircle2,
  PhoneCall, Star, Activity, Pill, ClipboardList, HandHeart,
  GraduationCap,
} from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

/* ─────────────── Data ─────────────── */

const services = [
  {
    title: 'Skilled Nursing Facilities',
    description: 'Specialized psychiatric care for medically complex adults in SNF settings.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Assisted Living Communities',
    description: 'Behavioral health support tailored for assisted living residents and staff.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Memory Care Units',
    description: 'Expert care for residents with dementia and related cognitive impairments.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Families',
    description: 'Resources and counseling for families navigating long-term behavioral health care.',
    icon: Stethoscope,
    image: '/images/family.jpg',
  },
];

const careSettings = [
  {
    title: 'Skilled Nursing',
    description: 'Structured, compliant psychiatric care',
    icon: Building2,
  },
  {
    title: 'Assisted Living',
    description: 'Support independence and emotional stability',
    icon: Heart,
  },
  {
    title: 'Memory Care',
    description: 'Specialized dementia-focused care',
    icon: Users,
  },
  {
    title: 'Board & Care',
    description: 'Personalized psychiatric oversight',
    icon: HandHeart,
  },
];

const facilityBullets = [
  'Psychotropic medication management',
  'CMS-aligned documentation and compliance',
  'Behavioral stabilization strategies',
  'Ongoing clinical collaboration',
];

const residentBullets = [
  'Respectful, individualized care',
  'Focus on emotional well-being',
  'Reduction in distress',
  'Clear communication with families',
];

const approach = [
  {
    title: 'Evidence-Based Psychiatry',
    description: 'All care plans are grounded in the latest clinical research and best practices in geriatric psychiatry.',
  },
  {
    title: 'CMS-Compliant Psychotropic Management',
    description: 'We navigate complex regulatory requirements to ensure resident safety and documentation integrity.',
  },
  {
    title: 'Collaborative Care With Facility Teams',
    description: 'Our clinical team works directly with nursing, social work, and administration staff for cohesive, coordinated care.',
  },
  {
    title: 'Education for Staff & Families',
    description: 'Ongoing training and guidance empower facility teams and families to support resident wellbeing.',
  },
];

const outcomes = [
  { label: 'Stable and supported residents', icon: Activity },
  { label: 'Reduced behavioral distress', icon: Heart },
  { label: 'Appropriate medication use', icon: Pill },
  { label: 'Coordinated care', icon: ClipboardList },
  { label: 'Family confidence', icon: Users },
];

const doctors = [
  {
    name: 'Danielle Ramage DNP, PMHNP-BC',
    role: 'Co-Founder',
    credentials: 'Doctor of Nursing Practice (DNP) · Psychiatric Mental Health Nurse Practitioner, Board Certified (PMHNP-BC)',
    bio: 'Danielle Ramage leads Health Alliance SoCal with a commitment to compassionate, evidence-based psychiatric care in long-term settings.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Anil Sharma MD',
    role: 'Co-Founder',
    credentials: 'Medical Doctor (MD)',
    bio: 'Anil Sharma oversees medical operations, ensuring clinical programs align with the highest standards of CMS-compliant psychiatric practice.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
  },
];

/* ─────────────── Component ─────────────── */

export default function Home() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Home" 
        description="Evidence-based mental health care for medically complex adults across Southern California. Expert psychiatric services for skilled nursing and memory care communities."
        keywords="psychiatric care, behavioral health, long-term care psychiatry, skilled nursing facility psychiatry, memory care psychiatry, Southern California psychiatrists"
      />
      {/* ── HERO ── */}
      <section className="relative flex items-center min-h-[600px] pt-32 lg:pt-24 pb-10 overflow-hidden bg-brand-accent/30 lg:h-screen">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-accent/60 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-44 h-44 rounded-full bg-brand-accent/30 blur-2xl" />
        </div>

        <div className="container-custom relative z-10 w-full h-full flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="order-2 lg:order-1"
            >
              <h1 className="font-serif font-extrabold text-[1.7rem] sm:text-[2rem] lg:text-[2.4rem] text-brand-ink leading-[1.18] tracking-tight mb-4">
                Expert Behavioral Health Care{' '}
                <span className="text-brand-primary-text">Across Every Level of Care</span>
              </h1>

              <p className="text-gray-500 text-sm sm:text-[0.95rem] leading-relaxed max-w-[440px] mb-3">
                Supporting residents, families, and care teams with compassionate, evidence-based psychiatric services in skilled nursing, assisted living, memory care, and residential settings.
              </p>

              <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3">
                <Link
                  to="/contact"
                  className="bg-brand-primary text-brand-primary-content px-4 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-brand-secondary transition-colors shadow-md flex items-center justify-center gap-2 group flex-1 sm:flex-none text-center"
                >
                  Schedule a Consultation
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="bg-white text-brand-primary-text border border-brand-primary/15 px-4 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-brand-accent transition-colors flex items-center justify-center flex-1 sm:flex-none text-center"
                >
                  Learn About Our Approach
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-5">
                {['Board-Certified Clinicians', 'HIPAA Compliant', 'CMS-Aligned Care'].map((label) => (
                  <div key={label} className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <CheckCircle2 size={13} className="text-brand-primary-text" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="order-1 lg:order-2 relative w-11/12 mx-auto lg:w-full lg:h-[min(65vh,500px)]"
            >
              <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-xl max-h-[250px] lg:max-h-none mx-auto lg:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1200"
                  alt="Compassionate caregiver with elderly resident"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-5 bg-brand-primary">
        <div className="container-custom">
          <p className="text-center text-white/80 text-sm font-semibold tracking-wide">
            Trusted by Facilities.&nbsp;&nbsp;·&nbsp;&nbsp;Valued by Families.&nbsp;&nbsp;·&nbsp;&nbsp;Centered on Residents.
          </p>
        </div>
      </section>

      {/* ── CORE VALUE ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-11/12 md:w-10/12 lg:w-full mx-auto"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/family_healthcare.jpg"
                  alt="Collaborative behavioral health care"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">Core Value</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink mb-5 leading-snug">
                Care That Supports<br />the Whole Person
              </h2>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-4">
                Behavioral health care in long-term settings is about more than symptoms—it's about understanding each resident's history, environment, and emotional needs.
              </p>
              <p className="text-gray-500 text-[0.95rem] leading-relaxed">
                Our team works collaboratively with residents, families, and facility staff to create care plans that are both clinically appropriate and deeply compassionate.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── DUAL VALUE ── */}
      <section style={{ backgroundColor: '#faf9f7' }} className="section-padding">
        <div className="container-custom">

          <div className="max-w-2xl mb-12">
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">Our Dual Commitment</p>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink">
              Supporting Care Teams While<br className="hidden md:block" /> Advocating for Residents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* For Facilities */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="bg-white rounded-2xl border border-brand-border p-8 sm:p-10"
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center text-brand-primary-text shrink-0">
                  <Building2 size={24} />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-ink m-0">For Facilities</h3>
              </div>
              <ul className="space-y-4">
                {facilityBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-[0.95rem]">
                    <CheckCircle2 size={18} className="text-brand-primary-text shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* For Residents & Families */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="bg-white rounded-2xl border border-brand-border p-8 sm:p-10"
            >
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#4A9E8E]/10 flex items-center justify-center text-brand-secondary shrink-0">
                  <Heart size={24} />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-ink m-0">For Residents &amp; Families</h3>
              </div>
              <ul className="space-y-4">
                {residentBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 text-[0.95rem]">
                    <CheckCircle2 size={18} className="text-brand-secondary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ── WHO WE SERVE ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-brand-primary-text text-sm font-semibold uppercase tracking-widest mb-2">Who We Serve</p>
              <h2 className="font-serif font-semibold text-2xl md:text-3xl text-brand-ink">
                Comprehensive Care Across<br className="hidden md:block" /> Long-Term Settings
              </h2>
            </div>
            <p className="text-gray-500 text-base max-w-xs leading-relaxed">
              Psychiatric services across the entire spectrum of long-term care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-400 border border-brand-border/50"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5">
                  <div className="w-9 h-9 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shadow-sm mb-3 group-hover:bg-brand-primary group-hover:text-brand-primary-content transition-colors">
                    <service.icon size={18} />
                  </div>
                  <h3 className="font-serif font-semibold text-brand-ink text-lg mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY FACILITIES CHOOSE US ── */}
      <section className="section-padding bg-brand-accent/20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-2">Why Partner With Us</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink leading-snug">
                Why Facilities Choose<br className="hidden md:block" /> Health Alliance So Cal
              </h2>
            </div>
            <p className="text-gray-500 text-base max-w-xs leading-relaxed">
              Purpose-built for the realities of long-term care environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Reduced Hospitalizations',
                description: 'Proactive psychiatric management helps keep residents stable and avoids costly ER transfers.',
                image: '/images/Reduced Hospitalizations.jpg',
              },
              {
                title: 'Support for Difficult Cases',
                description: 'Expert consultation on complex behavioral presentations that challenge facility staff.',
                image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800',
              },
              {
                title: 'Regulatory Documentation',
                description: 'Audit-ready records and CMS-aligned care plans that protect facilities during surveys.',
                image: '/images/Regulatory Documentation.jpg',
              },
              {
                title: 'Reliable Coverage',
                description: 'Consistent psychiatric presence your residents and staff can count on week after week.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-2xl border border-brand-border hover:border-brand-primary/30 hover:shadow-md transition-all duration-300 flex flex-col p-2"
              >
                <div className="aspect-[3/2] overflow-hidden rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-serif font-bold text-brand-ink text-[1.05rem] leading-tight mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-[0.9rem] leading-relaxed flex-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section style={{ backgroundColor: '#faf9f7' }} className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Steps */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">How We Work</p>
              <h2 className="font-serif font-semibold text-2xl md:text-3xl text-brand-ink mb-10 leading-snug">
                A Thoughtful,<br />Evidence-Based Approach
              </h2>
              <div className="space-y-4">
                {approach.map((item, i) => (
                  <motion.div
                    key={item.title}
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
                      {i < approach.length - 1 && (
                        <div className="w-px flex-1 bg-brand-primary/15 mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-serif font-semibold text-brand-ink text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-[0.95rem] leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-11/12 md:w-10/12 lg:w-full mx-auto"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900"
                  alt="Clinical psychiatry consultation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl px-5 py-4 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-accent flex items-center justify-center text-brand-primary-text">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="font-semibold text-brand-primary-text text-sm">CMS-Aligned</p>
                  <p className="text-gray-400 text-xs">Fully regulatory-compliant</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section style={{ backgroundColor: '#faf9f7' }} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">Outcomes</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink mb-8 leading-snug">
                Improving Outcomes<br />That Matter
              </h2>
              <div className="space-y-3">
                {outcomes.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 bg-white px-5 py-3.5 rounded-xl border border-brand-border/60 shadow-sm hover:border-brand-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-accent/50 flex items-center justify-center text-brand-primary-text shrink-0">
                      <item.icon size={18} />
                    </div>
                    <span className="text-brand-ink text-[0.95rem] font-semibold">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-11/12 md:w-10/12 lg:w-full mx-auto lg:order-first"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-brand-border/50">
                <img
                  src="/images/family_confidence.jpg"
                  alt="Positive resident outcomes"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* badge */}
              <div className="absolute -bottom-5 -right-5 md:-right-8 lg:-right-6 bg-white rounded-xl px-5 py-4 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-accent flex items-center justify-center text-brand-primary-text">
                  <Activity size={20} />
                </div>
                <div>
                  <p className="font-semibold text-brand-primary-text text-sm">Proven Results</p>
                  <p className="text-gray-400 text-xs">Measurable clinical impact</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-brand-secondary fill-brand-secondary" />
              ))}
            </div>
            <blockquote className="font-serif text-xl md:text-2xl text-brand-ink leading-relaxed mb-8 font-medium">
              "Their team not only understands regulatory expectations—they genuinely care about our residents. We've seen meaningful improvements in both clinical outcomes and overall well-being."
            </blockquote>
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest">
              — Facility Administrator, Southern California
            </p>
          </div>
        </div>
      </section>



      {/* ── LEADERSHIP ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-2">Our Founders</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink">Clinical Leadership</h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Board-certified clinicians dedicated to elevating behavioral health standards in long-term care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg relative group">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5 bg-gradient-to-t from-black/50 to-transparent">
                    <p className="text-white text-xs leading-relaxed italic drop-shadow-md">"{doctor.bio}"</p>
                  </div>
                </div>
                <h3 className="font-serif font-bold text-brand-primary-text text-lg mb-0.5">{doctor.name}</h3>
                <p className="text-brand-secondary font-semibold text-xs uppercase tracking-widest">{doctor.role}</p>
                <p className="text-gray-400 text-[0.7rem] leading-tight mt-1">{doctor.credentials}</p>
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
          <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-[2.2rem] text-brand-ink mb-4">
            Let's Support Better Care—Together
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Whether you're a facility leader or a family member, our team is here to help.
          </p>
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-brand-primary text-brand-primary-content px-4 sm:px-7 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-brand-secondary transition-colors shadow-md flex-1 sm:flex-none text-center"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/contact"
              className="bg-white border border-brand-primary/20 text-brand-primary-text px-4 sm:px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-brand-accent transition-colors flex-1 sm:flex-none text-center shadow-sm"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
