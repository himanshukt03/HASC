import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="flex flex-col">
      <SEO 
        title="Terms of Service" 
        description="Health Alliance SoCal Terms of Service and user agreements."
      />
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-brand-accent/40 to-brand-accent/60">
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-semibold text-brand-ink mb-5">
              Terms of Service
            </h1>
            <p className="text-gray-600">Last Updated: April 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Health Alliance SoCal website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">2. Medical Disclaimer</h2>
              <p>
                The content provided on the Health Alliance SoCal website is for informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">3. Use of Services</h2>
              <p className="mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Using the site in any way that violates any applicable federal, state, local, or international law.</li>
                <li>Attempting to interfere with the proper working of the site.</li>
                <li>Engaging in any conduct that restricts or inhibits anyone's use or enjoyment of the site.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">4. Intellectual Property</h2>
              <p>
                The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Health Alliance SoCal and are protected by United States and international copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">5. Limitation of Liability</h2>
              <p>
                In no event will Health Alliance SoCal, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind arising out of or in connection with your use, or inability to use, the website or our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-semibold text-brand-ink mb-4">6. Contact Information</h2>
              <p>
                To ask questions or comment about these Terms of Service, contact us at: DRamage@healthalliancesocal.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
