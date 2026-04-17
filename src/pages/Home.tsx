import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Users, Stethoscope, Building2, Heart, CheckCircle2, PhoneCall, TrendingDown, ClipboardList, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800',
  },
];

const doctors = [
  {
    name: 'Dr. Danielle Ramage',
    role: 'Co-Founder & CEO',
    bio: 'Dr. Ramage leads Health Alliance So Cal with a commitment to compassionate, evidence-based psychiatric care in long-term settings.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Dr. Anil Sharma',
    role: 'Co-Founder & CMO',
    bio: 'Dr. Sharma oversees medical operations, ensuring clinical programs align with the highest standards of CMS-compliant psychiatric practice.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
  },
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
    description: 'Our psychiatrists work directly with nursing, social work, and administration staff for cohesive care.',
  },
  {
    title: 'Education for Staff & Families',
    description: 'Ongoing training and guidance empower facility teams and families to support resident wellbeing.',
  },
];

const whyChooseUs = [
  {
    label: 'Reduced Hospitalizations',
    description: 'Proactive psychiatric management helps keep residents stable and avoids costly ER transfers.',
    icon: TrendingDown,
    image: '/images/reduced_hospitalizations.png',
  },
  {
    label: 'Support for Difficult Cases',
    description: 'Expert consultation on complex behavioral presentations that challenge facility staff.',
    icon: Users,
    image: '/images/difficult_cases.png',
  },
  {
    label: 'Regulatory Documentation',
    description: 'Audit-ready records and CMS-aligned care plans that protect facilities during surveys.',
    icon: ClipboardList,
    image: '/images/regulatory_documentation.png',
  },
  {
    label: 'Reliable Coverage',
    description: 'Consistent psychiatric presence your residents and staff can count on week after week.',
    icon: CalendarCheck,
    image: '/images/reliable_coverage.png',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative flex items-center min-h-[600px] pt-32 lg:pt-24 pb-10 overflow-hidden bg-brand-accent/30 lg:h-screen">
        {/* background accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-accent/60 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-44 h-44 rounded-full bg-brand-accent/30 blur-2xl" />
        </div>

        <div className="container-custom relative z-10 w-full h-full flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* ── Left: Copy ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="order-2 lg:order-1"
            >
              {/* eyebrow */}


              {/* headline */}
              <h1 className="font-serif font-extrabold text-[1.7rem] sm:text-[2rem] lg:text-[2.4rem] text-brand-ink leading-[1.18] tracking-tight mb-4">
                Specialized Psychiatric Care for{' '}
                <span className="text-brand-primary-text">Skilled Nursing &amp; Memory Care</span>{' '}
                Communities
              </h1>

              {/* sub */}
              <p className="text-gray-500 text-sm sm:text-[0.95rem] leading-relaxed max-w-[420px] mb-7">
                Evidence-based mental health care for medically complex adults and older adults across Southern California.
              </p>

              {/* CTAs */}
              <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3">
                <Link
                  to="/contact"
                  className="bg-brand-primary text-brand-primary-content px-4 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-brand-secondary transition-colors shadow-md flex items-center justify-center gap-2 group flex-1 sm:flex-none text-center"
                >
                  Partner With Us
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  to="/resources"
                  className="bg-white text-brand-primary-text border border-brand-primary/15 px-4 sm:px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-brand-accent transition-colors flex items-center justify-center flex-1 sm:flex-none text-center"
                >
                  Family Resources
                </Link>
              </div>

              {/* trust row */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-5">
                {['Board-Certified Psychiatrists', 'HIPAA Compliant', 'CMS-Aligned Care'].map((label) => (
                  <div key={label} className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                    <CheckCircle2 size={13} className="text-brand-primary-text" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Right: Image ── */}
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

      {/* ── Who We Serve ── */}
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

      {/* ── Our Approach ── */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left: Steps */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand-primary-text text-sm font-semibold uppercase tracking-widest mb-3">How We Work</p>
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
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900"
                  alt="Clinical psychiatry consultation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-5 py-4 shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center text-brand-primary-text">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="font-serif font-bold text-brand-primary-text text-sm">CMS-Aligned</p>
                  <p className="text-gray-400 text-xs">Fully regulatory-compliant</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Why Facilities Choose Us ── */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom relative z-10 transition-all duration-1000">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-brand-primary-text text-sm font-semibold uppercase tracking-widest mb-3">Why Partner With Us</p>
              <h2 className="font-serif font-semibold text-2xl md:text-3xl text-brand-ink leading-snug">
                Why Facilities Choose<br />Health Alliance So Cal
              </h2>
            </div>
            <p className="text-gray-500 text-base max-w-xs leading-relaxed">
              Purpose-built for the realities of long-term care environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white border border-brand-border/50 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group relative flex flex-col h-full"
              >
                {/* Image top */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={item.image} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-serif font-semibold text-brand-ink text-lg mb-3">{item.label}</h3>
                  <p className="text-gray-600 text-[0.95rem] leading-relaxed mb-6 flex-grow">{item.description}</p>
                  
                  <div className="mt-auto">
                    <Link to="/about" className="text-brand-primary-text font-semibold text-sm flex items-center gap-2 hover:text-brand-secondary transition-colors group/link">
                      Read More
                      <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-2">Our Founders</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink">Clinical Leadership</h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Board-certified psychiatrists dedicated to elevating behavioral health standards in long-term care.
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
                <div className="aspect-[3/4] rounded-[28px] overflow-hidden mb-4 shadow-lg relative group">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <p className="text-white text-xs leading-relaxed italic drop-shadow-md">"{doctor.bio}"</p>
                  </div>
                </div>
                <h3 className="font-serif font-bold text-brand-primary-text text-lg mb-0.5">{doctor.name}</h3>
                <p className="text-brand-secondary font-semibold text-xs uppercase tracking-widest">{doctor.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-brand-primary">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-5">
            <PhoneCall size={11} />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-serif font-bold text-2xl md:text-3xl lg:text-[2.2rem] text-white mb-4">
            Ready to Elevate Your Facility's Behavioral Health Care?
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Partner with Health Alliance So Cal and bring specialized psychiatric expertise directly to your residents.
          </p>
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-primary-text px-4 sm:px-7 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-brand-accent transition-colors shadow-lg flex-1 sm:flex-none text-center"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 border border-white/20 text-white px-4 sm:px-7 py-3 rounded-xl font-semibold text-xs sm:text-sm hover:bg-white/20 transition-colors flex-1 sm:flex-none text-center"
            >
              Request Partnership Info
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
