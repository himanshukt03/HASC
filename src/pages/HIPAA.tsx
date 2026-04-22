import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function HIPAA() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="HIPAA Compliance" 
        description="Learn about our commitment to HIPAA compliance and how we protect protected health information (PHI) at Health Alliance SoCal."
      />
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-brand-accent/40 to-brand-accent/60">
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-border text-brand-primary-text text-xs font-semibold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} />
              <span>Security & Compliance</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-semibold text-brand-ink mb-5">
              HIPAA Compliance
            </h1>
            <p className="text-gray-600">Last Updated: April 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">Our Commitment to Privacy</h2>
              <p>
                At Health Alliance SoCal, safeguarding the protected health information (PHI) of the residents we serve is our highest priority. We are fully committed to complying with the Health Insurance Portability and Accountability Act (HIPAA) of 1996, the Health Information Technology for Economic and Clinical Health (HITECH) Act, and all applicable state and federal regulations governing patient privacy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">Physical & Technical Safeguards</h2>
              <p className="mb-4">
                We employ comprehensive physical, technical, and administrative safeguards to ensure the confidentiality, integrity, and availability of electronic protected health information (ePHI). These include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>End-to-end encryption of all communications and data at rest.</li>
                <li>Strict role-based access controls to limit PHI access to authorized personnel only.</li>
                <li>Secure, HIPAA-compliant telehealth platforms and messaging systems.</li>
                <li>Regular risk assessments and security audits to identify and mitigate vulnerabilities.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">Business Associate Agreements (BAAs)</h2>
              <p>
                Health Alliance SoCal executes rigorous Business Associate Agreements (BAAs) with all partner facilities, vendors, and technology providers. These agreements ensure that our partners uphold the same rigorous standards for PHI protection and are held accountable for maintaining compliance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">Staff Training & Auditing</h2>
              <p>
                Every member of our clinical and administrative staff undergoes mandatory, ongoing HIPAA compliance training. We cultivate a culture of privacy awareness and conduct routine internal audits to ensure our policies and procedures are strictly followed in day-to-day operations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">Reporting & Contact</h2>
              <p>
                If you have questions regarding our HIPAA compliance program, or if you believe there has been a potential privacy violation, please contact our Privacy Officer immediately:
                <br /><br />
                <strong>Privacy Officer</strong><br />
                Health Alliance SoCal<br />
                501 E. Hardy St. Ste. 425<br />
                Inglewood, CA 90301<br />
                DRamage@healthalliancesocal.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
