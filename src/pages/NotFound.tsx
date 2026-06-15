import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Health Alliance SoCal's main website."
        keywords="404 error, page not found, HASC"
        noindex
      />

      {/* Hero Section */}
      <section className="relative flex-grow flex items-center pt-32 pb-32 overflow-hidden bg-gradient-to-br from-white via-brand-accent/40 to-brand-accent/60">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-brand-secondary/5 blur-2xl" />
        </div>

        <div className="container-custom relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Large 404 Display */}
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-8xl md:text-9xl font-bold text-brand-primary/10 font-serif mb-4"
              >
                404
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-ink mb-4 leading-tight">
                  Page Not Found
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto">
                  The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
                </p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-brand-primary text-brand-primary-content px-8 py-4 rounded-xl font-bold hover:bg-brand-secondary transition-colors shadow-lg hover:shadow-xl group"
              >
                <Home size={20} />
                Back to Home
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-brand-primary text-brand-primary-text px-8 py-4 rounded-xl font-bold hover:bg-brand-accent/20 transition-colors shadow-md"
              >
                Contact Support
              </Link>
            </motion.div>

            {/* Helpful Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 pt-12 border-t border-gray-200"
            >
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
                Explore Popular Pages
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto">
                {[
                  { label: 'Services', path: '/services' },
                  { label: 'Locations', path: '/locations' },
                  { label: 'About Us', path: '/about' },
                  { label: 'FAQ', path: '/faq' },
                  { label: 'Careers', path: '/careers' },
                  { label: 'Resources', path: '/resources' },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm font-semibold text-brand-primary-text hover:text-brand-primary hover:underline transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
