import { motion } from 'motion/react';
import { Target, Users, Heart, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const values = [
  {
    title: 'Clinical Excellence',
    description: 'We adhere to the highest standards of psychiatric practice, utilizing evidence-based protocols to ensure optimal patient outcomes.',
    icon: Target,
  },
  {
    title: 'Compassionate Care',
    description: 'Every resident is treated with dignity, respect, and empathy. We believe in care that honors the individual behind the diagnosis.',
    icon: Heart,
  },
  {
    title: 'Integrity & Compliance',
    description: 'Our operations are built on a foundation of transparency and strict adherence to CMS and state regulatory requirements.',
    icon: ShieldCheck,
  },
];

const team = [
  {
    name: 'Danielle Ramage DNP, PMHNP-BC',
    role: 'Co-Founder',
    credentials: 'Doctor of Nursing Practice (DNP) · Psychiatric Mental Health Nurse Practitioner, Board Certified (PMHNP-BC)',
    bio: 'Danielle Ramage leads Health Alliance SoCal with a commitment to compassionate, evidence-based psychiatric care in long-term settings.',
    image: '/DanielleRamage.jpg',
  },
  {
    name: 'Anil Sharma MD',
    role: 'Co-Founder',
    credentials: 'Medical Doctor (MD)',
    bio: 'Anil Sharma oversees medical operations, ensuring all clinical programs align with the highest standards of CMS-compliant psychiatric practice.',
    image: '/Anil_Sharma.jpg',
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="About Us" 
        description="Learn about Health Alliance SoCal's mission to elevate behavioral healthcare in long-term care facilities through clinical excellence and compassionate service."
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
              <span>Our Mission &amp; Vision</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-semibold text-brand-ink leading-[1.2] mb-5">
              Dedicated to Elevating Behavioral Health Standards
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Health Alliance SoCal was founded on a simple premise: residents in long-term care facilities deserve the same high-quality psychiatric care available in any other clinical setting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-11/12 md:w-10/12 lg:w-full mx-auto"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/closeup-female-patient-mental-health-professional.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-primary-text mb-6">Our Story</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Health Alliance SoCal emerged from a recognized gap in the Southern California healthcare landscape. While physical health services in skilled nursing facilities were robust, behavioral health often remained underserved, leading to poor resident outcomes and regulatory challenges.
                </p>
                <p>
                  Our founders—board-certified clinicians and healthcare administrators—envisioned a partnership model that would integrate seamless psychiatric care directly into the facility's workflow.
                </p>
                <p>
                  Our mission from day one has been to provide a lifeline for residents and a trusted clinical partner for facility administrators — building a new standard for behavioral health in long-term care.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-secondary" />
                  <span className="font-semibold text-brand-primary-text">Board Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-secondary" />
                  <span className="font-semibold text-brand-primary-text">HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-secondary" />
                  <span className="font-semibold text-brand-primary-text">CMS Expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-secondary" />
                  <span className="font-semibold text-brand-primary-text">24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section style={{ backgroundColor: '#faf9f7' }} className="section-padding">
        <div className="container-custom">

          {/* Header */}
          <div className="max-w-2xl mb-12">
            <p className="text-brand-primary-text text-xs font-bold uppercase tracking-widest mb-3">Our Purpose</p>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-brand-ink mb-3">Mission &amp; Vision</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              Delivering compassionate, patient-centered, evidence-based psychiatric care that enhances the lives of individuals across all care settings.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Mission */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-brand-accent flex items-center justify-center text-brand-primary-text shrink-0">
                  <Target size={24} />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-ink m-0">Mission Statement</h3>
              </div>
              <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                Health Alliance SoCal's mission is to deliver high-quality, evidence-based psychiatric care across skilled nursing facilities, assisted living communities, memory care units, and board and care homes. We are dedicated to enhancing the mental health, safety, and overall quality of life of every patient we serve through compassionate, patient-centered care, while partnering with families and facility teams to provide reliable, compliant, and responsive behavioral health services.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl border border-brand-border p-8 sm:p-10">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#4A9E8E]/10 flex items-center justify-center text-brand-secondary shrink-0">
                  <Heart size={24} />
                </div>
                <h3 className="font-serif font-bold text-xl text-brand-ink m-0">Vision Statement</h3>
              </div>
              <p className="text-gray-600 text-[0.95rem] leading-relaxed">
                Our vision is to redefine behavioral health care in post-acute and long-term care settings by setting the standard for patient-centered, clinically excellent, and compliant care. Health Alliance SoCal strives to be the trusted partner for patients, families, and facilities—advancing the integration of psychiatry into whole-person care, expanding access to mental health education, and building a scalable, innovative model rooted in dignity and respect.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}

      <section className="section-padding bg-brand-paper">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-primary-text mb-4">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide every clinical decision we make and every partnership we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text mb-5 group-hover:bg-brand-primary group-hover:text-brand-primary-content transition-colors">
                  <value.icon size={24} />
                </div>
                <h3 className="text-lg font-serif font-semibold text-brand-primary-text mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-primary-text mb-4">
                Clinical Leadership
              </h2>
              <p className="text-gray-600">
                Meet the clinicians dedicated to elevating the standard of behavioral health care in your facility.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col max-w-[270px]"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-sm leading-relaxed italic drop-shadow-md bg-black/30 p-4 rounded-xl">
                      "{member.bio}"
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-semibold text-brand-primary-text mb-1">{member.name}</h3>
                <p className="text-brand-secondary font-semibold text-sm uppercase tracking-widest">{member.role}</p>
                <p className="text-gray-400 text-xs leading-tight mt-1">{member.credentials}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#faf9f7] border-t border-brand-border/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
        </div>
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-brand-ink mb-6">
            Ready to Elevate Your Facility's Clinical Performance?
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Partner with Health Alliance SoCal and transform your behavioral health services.
          </p>
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-brand-primary text-brand-primary-content px-4 sm:px-10 py-4 rounded-full font-bold text-xs sm:text-base hover:bg-brand-secondary transition-all shadow-md flex-1 sm:flex-none text-center"
            >
              Request a Partnership
            </Link>
            <Link
              to="/services"
              className="bg-white border border-brand-primary/20 text-brand-primary-text px-4 sm:px-10 py-4 rounded-full font-bold text-xs sm:text-base hover:bg-brand-accent transition-all flex-1 sm:flex-none text-center shadow-sm"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
