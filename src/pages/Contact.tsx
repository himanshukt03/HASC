import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Building2, Send, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-brand-accent/40 to-brand-accent/60">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-brand-secondary/5 blur-2xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-brand-border text-brand-primary-text text-xs font-semibold uppercase tracking-widest mb-6">
              <Building2 size={14} />
              <span>Facility Partnerships</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-semibold text-brand-ink leading-[1.2] mb-5">
              Request a Partnership Proposal
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl">
              Ready to elevate your facility's behavioral health standards? Complete the form below, and our clinical leadership team will reach out to discuss a tailored partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-brand-primary-text mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <div className="w-11 h-11 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shrink-0 shadow-sm">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-brand-primary-text mb-1">Our Headquarters</h4>
                      <p className="text-gray-500 leading-relaxed">123 Medical Plaza Dr, Suite 400<br />Los Angeles, CA 90001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-11 h-11 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shrink-0 shadow-sm">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-brand-primary-text mb-1">Call Us</h4>
                      <p className="text-gray-500 leading-relaxed">(800) 555-0123<br />Mon-Fri, 8am - 6pm PST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-11 h-11 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shrink-0 shadow-sm">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-brand-primary-text mb-1">Email Us</h4>
                      <p className="text-gray-500 leading-relaxed">partnerships@healthalliancesocal.com<br />info@healthalliancesocal.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-paper rounded-2xl p-7 space-y-5">
                <h3 className="text-lg font-serif font-semibold text-brand-primary-text">Why Partner With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-brand-primary-text font-semibold">
                    <CheckCircle2 className="text-brand-secondary" />
                    <span>Board Certified Clinical Team</span>
                  </div>
                  <div className="flex items-center gap-4 text-brand-primary-text font-semibold">
                    <CheckCircle2 className="text-brand-secondary" />
                    <span>HIPAA Compliant Infrastructure</span>
                  </div>
                  <div className="flex items-center gap-4 text-brand-primary-text font-semibold">
                    <CheckCircle2 className="text-brand-secondary" />
                    <span>CMS Compliance Expertise</span>
                  </div>
                  <div className="flex items-center gap-4 text-brand-primary-text font-semibold">
                    <CheckCircle2 className="text-brand-secondary" />
                    <span>24/7 Clinical Support</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 border border-brand-accent rounded-2xl">
                <ShieldCheck size={28} className="text-brand-secondary shrink-0" />
                <p className="text-sm text-gray-500 font-medium">
                  Your information is secure and will only be used to contact you regarding your partnership request.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-brand-secondary text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-brand-primary-text mb-4">Request Received!</h3>
                    <p className="text-gray-500 text-lg mb-10 max-w-sm mx-auto">
                      Thank you for your interest. A member of our clinical leadership team will contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="bg-brand-primary text-brand-primary-content px-10 py-4 rounded-full font-bold hover:bg-brand-secondary transition-all shadow-lg"
                    >
                      Send Another Request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-4">Full Name</label>
                        <input
                          required
                          type="text"
                          placeholder="John Doe"
                          className="bg-brand-paper border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-primary transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-4">Job Title</label>
                        <input
                          required
                          type="text"
                          placeholder="Administrator"
                          className="bg-brand-paper border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-4">Email Address</label>
                        <input
                          required
                          type="email"
                          placeholder="john@facility.com"
                          className="bg-brand-paper border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-primary transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-4">Phone Number</label>
                        <input
                          required
                          type="tel"
                          placeholder="(555) 000-0000"
                          className="bg-brand-paper border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-4">Facility Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Health Care Center of So Cal"
                        className="bg-brand-paper border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-primary transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-4">Facility Type</label>
                      <select className="bg-brand-paper border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-primary transition-all appearance-none">
                        <option>Skilled Nursing (SNF)</option>
                        <option>Assisted Living (ALF)</option>
                        <option>Memory Care</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-400 ml-4">Additional Information</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your facility's specific needs..."
                        className="bg-brand-paper border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-primary transition-all resize-none"
                      />
                    </div>

                    <button
                      disabled={formState === 'submitting'}
                      type="submit"
                      className={cn(
                        "w-full bg-brand-primary text-brand-primary-content py-5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group",
                        formState === 'submitting' && "opacity-70 cursor-not-allowed"
                      )}
                    >
                      {formState === 'submitting' ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Submit Partnership Request
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

