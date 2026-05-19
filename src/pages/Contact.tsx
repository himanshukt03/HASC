import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Building2, Send, CheckCircle2, ShieldCheck, Award, Printer } from 'lucide-react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { toast } from 'sonner';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

const WEB3FORMS_ACCESS_KEY = 'e7e66c3d-2b75-4c14-90d3-c1fc7d3ddb1b';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [hcaptchaToken, setHcaptchaToken] = useState<string>('');
  const hcaptchaRef = useRef<HCaptcha>(null);
  const [formData, setFormData] = useState({
    name: '',
    job_title: '',
    email: '',
    phone: '',
    facility_name: '',
    facility_type: 'Skilled Nursing (SNF)',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!hcaptchaToken) {
      toast.error('Please verify the captcha', {
        description: 'You must complete the hCaptcha verification to submit the form.',
      });
      return;
    }

    setFormState('submitting');

    try {
      const submitData = new FormData();
      submitData.append('access_key', WEB3FORMS_ACCESS_KEY);
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('job_title', formData.job_title);
      submitData.append('facility_name', formData.facility_name);
      submitData.append('facility_type', formData.facility_type);
      submitData.append('message', formData.message);
      submitData.append('h-captcha-response', hcaptchaToken);
      submitData.append('from_name', 'Health Alliance SoCal Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
        setHcaptchaToken('');
        if (hcaptchaRef.current) {
          hcaptchaRef.current.resetCaptcha();
        }
        setFormData({
          name: '',
          job_title: '',
          email: '',
          phone: '',
          facility_name: '',
          facility_type: 'Skilled Nursing (SNF)',
          message: '',
        });
        toast.success('Partnership request submitted successfully!', {
          description: 'Our clinical team will contact you within 24 business hours.',
        });
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      setFormState('idle');
      setHcaptchaToken('');
      if (hcaptchaRef.current) {
        hcaptchaRef.current.resetCaptcha();
      }
      toast.error('Failed to submit form', {
        description: error instanceof Error ? error.message : 'Please try again or contact us directly.',
      });
    }
  };

  const handleHCaptchaChange = (token: string) => {
    setHcaptchaToken(token);
  };

  return (
    <div className="flex flex-col">
      <SEO
        title="Contact Us"
        description="Get in touch with Health Alliance SoCal to discuss psychiatric partnerships for your skilled nursing or memory care facility."
        keywords="contact Health Alliance SoCal, HASC partnerships, psychiatric services inquiries, behavioral health partnership request, SNF psychiatry contact"
      />
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
                      <p className="text-gray-500 leading-relaxed">501 E. Hardy St. Ste. 425<br />Inglewood, CA 90301</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-11 h-11 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shrink-0 shadow-sm">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-brand-primary-text mb-1">Call Us</h4>
                      <p className="text-gray-500 leading-relaxed">310.462.3879<br />Mon-Fri, 8am - 6pm PST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-11 h-11 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shrink-0 shadow-sm">
                      <Printer size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-brand-primary-text mb-1">Fax</h4>
                      <p className="text-gray-500 leading-relaxed">310.356.3417</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-11 h-11 bg-brand-accent rounded-xl flex items-center justify-center text-brand-primary-text shrink-0 shadow-sm">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-brand-primary-text mb-1">Email Us</h4>
                      <p className="text-gray-500 leading-relaxed">info@healthalliancesocal.com</p>
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
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-4">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-white border border-gray-200 rounded-xl py-3 px-5 focus:ring-2 focus:ring-brand-primary transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-4">Job Title</label>
                        <input
                          required
                          type="text"
                          name="job_title"
                          placeholder="Administrator"
                          value={formData.job_title}
                          onChange={handleChange}
                          className="bg-white border border-gray-200 rounded-xl py-3 px-5 focus:ring-2 focus:ring-brand-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-4">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="john@facility.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-white border border-gray-200 rounded-xl py-3 px-5 focus:ring-2 focus:ring-brand-primary transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-4">Phone Number</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          placeholder="(555) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-white border border-gray-200 rounded-xl py-3 px-5 focus:ring-2 focus:ring-brand-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-4">Facility Name</label>
                      <input
                        required
                        type="text"
                        name="facility_name"
                        placeholder="health care center"
                        value={formData.facility_name}
                        onChange={handleChange}
                        className="bg-white border border-gray-200 rounded-xl py-3 px-5 focus:ring-2 focus:ring-brand-primary transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-4">Facility Type</label>
                      <select
                        name="facility_type"
                        value={formData.facility_type}
                        onChange={handleChange}
                        className="bg-white border border-gray-200 rounded-xl py-3 px-5 focus:ring-2 focus:ring-brand-primary transition-all appearance-none"
                      >
                        <option>Skilled Nursing (SNF)</option>
                        <option>Assisted Living (ALF)</option>
                        <option>Memory Care</option>
                        <option>Board & Care</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500 ml-4">Additional Information</label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your facility's specific needs..."
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-white border border-gray-200 rounded-xl py-3 px-5 focus:ring-2 focus:ring-brand-primary transition-all resize-none"
                      />
                    </div>

                    <div className="flex justify-center py-4">
                      <HCaptcha
                        ref={hcaptchaRef}
                        sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                        reCaptchaCompat={false}
                        onVerify={handleHCaptchaChange}
                      />
                    </div>

                    <button
                      disabled={formState === 'submitting'}
                      type="submit"
                      className={cn(
                        "w-full bg-brand-primary text-brand-primary-content py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group",
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

