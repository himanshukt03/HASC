import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Privacy Policy" 
        description="Health Alliance SoCal Privacy Policy detailing how we collect, use, and protect your information."
      />
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-brand-accent/40 to-brand-accent/60">
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-semibold text-brand-ink mb-5">
              Privacy Policy
            </h1>
            <p className="text-gray-600">Last Updated: April 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">1. Information We Collect</h2>
              <p className="mb-4">
                Health Alliance SoCal is committed to protecting your privacy. We collect information that you voluntarily provide to us when expressing an interest in obtaining information about us or our services, when participating in activities on the website, or otherwise contacting us.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Personal identifiers (name, email address, phone number)</li>
                <li>Professional details (facility name, job title)</li>
                <li>Technical data automatically collected (IP address, browser type)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use personal information collected via our website for a variety of business purposes described below:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To respond to your inquiries and offer support.</li>
                <li>To send administrative information to you.</li>
                <li>To fulfill and manage requests, partnerships, and service delivery.</li>
                <li>For other business purposes, such as data analysis and improving our services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">3. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">4. Sharing Your Information</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell or rent your personal information to third parties for their marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">5. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at DRamage@healthalliancesocal.com or by post to:
                <br /><br />
                Health Alliance SoCal<br />
                501 E. Hardy St. Ste. 425<br />
                Inglewood, CA 90301
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
