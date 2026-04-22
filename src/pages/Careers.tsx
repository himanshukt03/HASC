import { motion } from 'motion/react';
import { Users, Heart, Award, GraduationCap, ArrowRight, CheckCircle2, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const positions = [
  {
    title: 'Psychiatric Nurse Practitioner',
    type: 'Full-time / Part-time',
    location: 'SoCal Region',
    description: 'Provide specialized psychiatric evaluations and medication management in long-term care settings.',
  },
  {
    title: 'Psychiatrist',
    type: 'Full-time / Consulting',
    location: 'SoCal Region',
    description: 'Lead clinical teams and provide expert psychiatric care for medically complex residents.',
  },
  {
    title: 'Behavioral Health Specialist',
    type: 'Full-time',
    location: 'SoCal Region',
    description: 'Support facility staff and residents with behavioral interventions and de-escalation strategies.',
  },
];

const benefits = [
  {
    title: 'Mission-Driven Care',
    description: 'Join a team dedicated to improving the quality of life for underserved residents in long-term care.',
    icon: Heart,
  },
  {
    title: 'Supportive Clinical Team',
    description: 'Work alongside experienced, board-certified clinicians and supportive clinical leadership.',
    icon: Users,
  },
  {
    title: 'Professional Development',
    description: 'Ongoing training in geriatric psychiatry, CMS compliance, and advanced clinical practices.',
    icon: GraduationCap,
  },
  {
    title: 'High Clinical Standards',
    description: 'Practice within a framework of evidence-based medicine and strict regulatory alignment.',
    icon: Award,
  },
];

export default function Careers() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Careers" 
        description="Join Health Alliance SoCal and build a career with purpose. Explore open psychiatric and clinical positions in Southern California."
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
              <Briefcase size={14} />
              <span>Join Our Team</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-semibold text-brand-ink leading-[1.2] mb-5">
              Build a Career with Purpose
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              We are looking for passionate clinical professionals to help us set the gold standard for behavioral health services in Southern California.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-primary-text mb-4">Why Work With Us</h2>
            <p className="text-gray-600">
            At Health Alliance SoCal, we value our clinical team as our greatest asset. We provide the support and environment you need to excel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-brand-paper p-6 rounded-2xl hover:shadow-lg transition-all duration-500 group"
              >
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-brand-primary-text mb-4 group-hover:bg-brand-primary group-hover:text-brand-primary-content transition-colors shadow-sm">
                  <benefit.icon size={22} />
                </div>
                <h3 className="text-base font-serif font-semibold text-brand-primary-text mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-brand-paper">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-primary-text mb-4">Open Positions</h2>
              <p className="text-gray-600">
                Explore our current opportunities and find where you can make the most impact.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {positions.map((pos, index) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-xl font-serif font-semibold text-brand-primary-text group-hover:text-brand-secondary transition-colors">
                      {pos.title}
                    </h3>
                    <span className="bg-brand-accent text-brand-primary-text text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {pos.type}
                    </span>
                    <span className="text-gray-400 text-xs font-medium flex items-center gap-1">
                      <CheckCircle2 size={14} />
                      {pos.location}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {pos.description}
                  </p>
                </div>
                <button className="bg-brand-primary text-brand-primary-content px-6 py-3 rounded-full font-semibold text-sm hover:bg-brand-secondary transition-all shadow-md flex items-center gap-2 shrink-0">
                  Apply Now
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-brand-primary rounded-2xl p-10 md:p-16 text-brand-primary-content text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-5">
                Don't See the Right Fit?
              </h2>
              <p className="text-brand-accent/80 mb-10 leading-relaxed">
                We're always looking for talented individuals to join our mission. Send us your resume and we'll keep you in mind for future openings.
              </p>
              <Link
                to="/contact"
                className="bg-white text-brand-primary-text px-10 py-4 rounded-full font-bold hover:bg-brand-accent transition-all shadow-xl hover:shadow-2xl"
              >
                Send Your Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
