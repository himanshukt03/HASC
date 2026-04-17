import { motion } from 'motion/react';
import { Target, Users, Heart, ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    name: 'Dr. Danielle Ramage',
    role: 'Co-Founder & CEO',
    bio: 'Dr. Ramage leads Health Alliance So Cal with a commitment to compassionate, evidence-based psychiatric care in long-term settings.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Dr. Anil Sharma',
    role: 'Co-Founder & CMO',
    bio: 'Dr. Sharma oversees medical operations, ensuring all clinical programs align with the highest standards of CMS-compliant psychiatric practice.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
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
              Health Alliance So Cal was founded on a simple premise: residents in long-term care facilities deserve the same high-quality psychiatric care available in any other clinical setting.
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
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
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
                  Health Alliance So Cal emerged from a recognized gap in the Southern California healthcare landscape. While physical health services in skilled nursing facilities were robust, behavioral health often remained underserved, leading to poor resident outcomes and regulatory challenges.
                </p>
                <p>
                  Our founders, a group of board-certified psychiatrists and healthcare administrators, envisioned a partnership model that would integrate seamless psychiatric care directly into the facility's workflow.
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
                Meet the experts dedicated to elevating the standard of care in your facility.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-5 shadow-lg relative group">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
        </div>
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-6">
            Ready to Elevate Your Facility's Clinical Performance?
          </h2>
          <p className="text-brand-accent/80 mb-10 leading-relaxed">
            Partner with Health Alliance So Cal and transform your behavioral health services.
          </p>
          <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-primary-text px-4 sm:px-10 py-4 rounded-full font-bold text-xs sm:text-base hover:bg-brand-accent transition-all shadow-xl hover:shadow-2xl flex-1 sm:flex-none text-center"
            >
              Request a Partnership
            </Link>
            <Link
              to="/services"
              className="bg-transparent border border-white/30 text-white px-4 sm:px-10 py-4 rounded-full font-bold text-xs sm:text-base hover:bg-white/10 transition-all flex-1 sm:flex-none text-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
