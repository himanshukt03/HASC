import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, ChevronUp, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import SEO from '../components/SEO';

const faqCategories = [
  { id: 'general', name: 'General Information' },
  { id: 'facilities', name: 'For Facilities' },
  { id: 'families', name: 'For Families' },
  { id: 'compliance', name: 'Regulatory & Compliance' },
];

const faqs = [
  {
    id: 1,
    category: 'general',
    question: 'What areas of Southern California do you serve?',
    answer: 'Health Alliance SoCal provides specialized psychiatric services to facilities across Los Angeles, Orange, Riverside, and San Bernardino counties. We are continuously expanding our network to reach more communities.',
  },
  {
    id: 2,
    category: 'facilities',
    question: 'How quickly can you begin providing services to our facility?',
    answer: 'Once a partnership agreement is finalized, we can typically begin providing clinical services within 14-21 business days. This timeframe allows for necessary credentialing and integration with your facility\'s electronic health records (EHR).',
  },
  {
    id: 3,
    category: 'families',
    question: 'How can I stay updated on my loved one\'s psychiatric care?',
    answer: 'We believe in transparent communication. Families can access updates through our Patient Portal, or by attending scheduled family counseling sessions. Our clinical team is also available for periodic updates as requested by the facility.',
  },
  {
    id: 4,
    category: 'compliance',
    question: 'How do your services support F-Tag 758 compliance?',
    answer: 'Our clinical team of nurse practitioners and physicians are experts in psychotropic medication oversight. We implement rigorous gradual dose reduction (GDR) protocols and provide the necessary documentation to satisfy CMS and state survey requirements.',
  },
  {
    id: 5,
    category: 'facilities',
    question: 'Do you provide 24/7 psychiatric coverage?',
    answer: 'While our primary clinical visits occur during standard business hours, we provide on-call support for urgent psychiatric consultations to ensure resident safety and facility peace of mind.',
  },
  {
    id: 6,
    category: 'general',
    question: 'Are your services HIPAA compliant?',
    answer: 'Absolutely. We utilize secure, HIPAA-compliant electronic health records and communication platforms to ensure the privacy and security of all patient health information.',
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const [openId, setOpenId] = useState<number | null>(1);

  const filteredFaqs = faqs.filter(
    (faq) =>
      (faq.category === activeCategory || searchQuery !== '') &&
      (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col">
      <SEO 
        title="FAQ" 
        description="Find answers to common questions about our psychiatric services, facility partnerships, and patient care standards."
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
              <HelpCircle size={14} />
              <span>Support &amp; Information</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-semibold text-brand-ink leading-[1.2] mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl">
              Find answers to common questions about our psychiatric services, facility partnerships, and patient care standards.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for questions..."
                className="w-full bg-white border border-brand-primary rounded-full py-4 pl-14 pr-6 shadow-md focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all hover:shadow-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Sidebar Categories */}
            <div className="lg:w-1/4">
              <div className="sticky top-32 space-y-2">
                <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-6 px-4">Categories</h4>
                {faqCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearchQuery('');
                    }}
                    className={cn(
                      "w-full text-left px-5 py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-between group border border-brand-border",
                      activeCategory === cat.id && searchQuery === ''
                        ? "bg-brand-primary text-brand-primary-content shadow-lg"
                        : "bg-white hover:bg-brand-accent text-brand-primary-text"
                    )}
                  >
                    {cat.name}
                    <ChevronDown size={18} className={cn("opacity-0 group-hover:opacity-100 transition-opacity", activeCategory === cat.id && "opacity-100")} />
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="lg:w-3/4">
              <div className="space-y-6">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-2xl overflow-hidden border border-brand-border hover:border-brand-primary shadow-md transition-all"
                    >
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="w-full text-left p-6 flex items-center justify-between gap-4 group hover:bg-brand-accent/10 transition-colors"
                      >
                        <span className="text-lg font-serif font-semibold text-brand-primary-text group-hover:text-brand-secondary transition-colors">
                          {faq.question}
                        </span>
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                          openId === faq.id ? "bg-brand-primary text-brand-primary-content" : "bg-gray-100 text-brand-primary-text"
                        )}>
                          {openId === faq.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {openId === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 text-gray-700 leading-relaxed text-base border-t border-brand-primary/20 pt-5 bg-brand-paper rounded-b-xl">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-14 bg-brand-paper rounded-2xl">
                    <HelpCircle size={48} className="text-brand-accent mx-auto mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-brand-primary-text mb-2">No results found</h3>
                    <p className="text-gray-500">Try adjusting your search or category selection.</p>
                  </div>
                )}
              </div>

              {/* Contact Support CTA */}
              <div className="mt-14 bg-brand-accent rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-brand-primary-text mb-2">Still have questions?</h3>
                  <p className="text-gray-600">Our support team is here to help you with any inquiries.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:3104623879" className="bg-white text-brand-primary-text px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-primary hover:text-brand-primary-content transition-all shadow-sm">
                    <Phone size={18} />
                    310.462.3879
                  </a>
                  <a href="mailto:DRamage@healthalliancesocal.com" className="bg-brand-primary text-brand-primary-content px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-brand-secondary transition-all shadow-md">
                    <Mail size={18} />
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
