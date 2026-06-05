import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { allServices } from '../pages/services/serviceData';
import { allLocations } from '../pages/locations/locationData';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Locations', path: '/locations' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Resources', path: '/resources' },
  { name: 'Careers', path: '/careers' },
  { name: 'Standards', path: '/standards' },
];

type DropdownKey = 'services' | 'locations' | null;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileLocationsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');
  const isLocationsActive = location.pathname.startsWith('/locations');

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            setActiveDropdown(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group shrink-0"
        >
          <img
            src="/HASC_logo.png"
            alt="Health Alliance SoCal"
            className="h-10 md:h-12 w-auto"
            width={160}
            height={48}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => {
            if (link.name === 'Services') {
              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to="/services"
                    className={cn(
                      'flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-primary-text',
                      isServicesActive ? 'text-brand-primary-text' : 'text-gray-600'
                    )}
                  >
                    Services
                    <ChevronDown
                      size={13}
                      className={cn('transition-transform duration-200', activeDropdown === 'services' && 'rotate-180')}
                    />
                  </Link>

                  <AnimatePresence>
                    {activeDropdown === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white rounded-2xl shadow-2xl ring-1 ring-black/6 overflow-hidden"
                      >
                        <div className="flex">
                          {/* Left panel */}
                          <div className="w-56 shrink-0 bg-brand-primary p-8 flex flex-col justify-between">
                            <div>
                              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                                Our Services
                              </p>
                              <h3 className="text-white font-semibold text-base leading-snug mb-4">
                                Behavioral health across every level of care
                              </h3>
                              <p className="text-white/70 text-sm leading-relaxed">
                                Eight specialized service lines — each a dedicated clinical partnership.
                              </p>
                            </div>
                            <Link
                              to="/services"
                              onClick={() => setActiveDropdown(null)}
                              className="inline-flex items-center gap-2 text-sm font-bold text-white/90 hover:text-white mt-6 group"
                            >
                              View all
                              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>

                          {/* Right panel — 2-col grid */}
                          <div className="flex-1 p-6 grid grid-cols-2 gap-3 content-start">
                            {allServices.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                onClick={() => setActiveDropdown(null)}
                                className={cn(
                                  'flex items-center gap-3 rounded-xl px-4 py-3.5 hover:bg-brand-accent/60 transition-colors group',
                                  location.pathname === `/services/${service.slug}` &&
                                    'bg-brand-accent/40'
                                )}
                              >
                                <div className="w-9 h-9 rounded-lg bg-brand-accent flex items-center justify-center text-brand-primary-text shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                  <service.icon size={16} />
                                </div>
                                <span className="text-sm font-semibold text-brand-ink leading-snug group-hover:text-brand-primary-text transition-colors">
                                  {service.navLabel}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Footer strip */}
                        <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-3 flex items-center justify-between">
                          <p className="text-xs text-gray-400 font-medium">
                            California's behavioral health partner
                          </p>
                          <Link
                            to="/contact"
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs font-bold text-brand-primary-text hover:underline"
                          >
                            Contact us →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (link.name === 'Locations') {
              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('locations')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to="/locations"
                    className={cn(
                      'flex items-center gap-1 text-sm font-semibold transition-colors hover:text-brand-primary-text',
                      isLocationsActive ? 'text-brand-primary-text' : 'text-gray-600'
                    )}
                  >
                    Locations
                    <ChevronDown
                      size={13}
                      className={cn('transition-transform duration-200', activeDropdown === 'locations' && 'rotate-180')}
                    />
                  </Link>

                  <AnimatePresence>
                    {activeDropdown === 'locations' && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white rounded-2xl shadow-2xl ring-1 ring-black/6 overflow-hidden"
                      >
                        <div className="flex">
                          {/* Left panel */}
                          <div className="w-48 shrink-0 bg-brand-secondary p-8 flex flex-col justify-between">
                            <div>
                              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-3">
                                We Serve
                              </p>
                              <h3 className="text-white font-semibold text-base leading-snug mb-4">
                                California Counties
                              </h3>
                              <p className="text-white/70 text-sm leading-relaxed">
                                Counties served across Southern and Northern California
                              </p>
                            </div>
                            <Link
                              to="/locations"
                              onClick={() => setActiveDropdown(null)}
                              className="inline-flex items-center gap-2 text-sm font-bold text-white/90 hover:text-white mt-6 group"
                            >
                              View all
                              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </div>

                          {/* Right panel */}
                          <div className="flex-1 p-6 flex flex-col gap-2">
                            {allLocations.map((loc) => (
                              <Link
                                key={loc.slug}
                                to={`/locations/${loc.slug}`}
                                onClick={() => setActiveDropdown(null)}
                                className={cn(
                                  'flex items-center gap-3 rounded-xl px-4 py-3.5 hover:bg-brand-accent/60 transition-colors group',
                                  location.pathname === `/locations/${loc.slug}` && 'bg-brand-accent/40'
                                )}
                              >
                                <div className="w-9 h-9 rounded-lg bg-brand-accent flex items-center justify-center text-brand-secondary shrink-0 group-hover:bg-brand-secondary group-hover:text-white transition-colors">
                                  <MapPin size={15} />
                                </div>
                                <span className="text-sm font-semibold text-brand-ink leading-snug group-hover:text-brand-primary-text transition-colors">
                                  {loc.county}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-semibold transition-colors hover:text-brand-primary-text',
                  location.pathname === link.path ? 'text-brand-primary-text' : 'text-gray-600'
                )}
              >
                {link.name}
              </Link>
            );
          })}

          <Link to="/contact" className="btn-primary py-2 text-sm">
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-primary-text p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-5 gap-0.5">
              {navLinks.map((link) => {
                if (link.name === 'Services') {
                  return (
                    <div key={link.path}>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className={cn(
                          'w-full flex items-center justify-between text-base font-semibold py-3 px-2 rounded-xl',
                          isServicesActive
                            ? 'text-brand-primary-text bg-brand-accent/30'
                            : 'text-gray-700 hover:bg-gray-50'
                        )}
                      >
                        Services
                        <ChevronDown
                          size={15}
                          className={cn('transition-transform duration-200', mobileServicesOpen && 'rotate-180')}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ maxHeight: 0, opacity: 0 }}
                            animate={{ maxHeight: 500, opacity: 1 }}
                            exit={{ maxHeight: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-2 pt-1 pb-2 flex flex-col gap-0.5">
                              <Link
                                to="/services"
                                className="text-xs font-bold text-brand-primary-text py-2 px-3 rounded-lg hover:bg-brand-accent/40"
                                onClick={() => setIsOpen(false)}
                              >
                                All Services →
                              </Link>
                              {allServices.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/services/${service.slug}`}
                                  className="flex items-center gap-2.5 text-sm font-medium text-gray-600 py-2 px-3 rounded-lg hover:bg-brand-accent/40 hover:text-brand-primary-text"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <service.icon size={13} className="text-brand-primary-text shrink-0" />
                                  {service.navLabel}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (link.name === 'Locations') {
                  return (
                    <div key={link.path}>
                      <button
                        onClick={() => setMobileLocationsOpen((v) => !v)}
                        className={cn(
                          'w-full flex items-center justify-between text-base font-semibold py-3 px-2 rounded-xl',
                          isLocationsActive
                            ? 'text-brand-primary-text bg-brand-accent/30'
                            : 'text-gray-700 hover:bg-gray-50'
                        )}
                      >
                        Locations
                        <ChevronDown
                          size={15}
                          className={cn('transition-transform duration-200', mobileLocationsOpen && 'rotate-180')}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileLocationsOpen && (
                          <motion.div
                            initial={{ maxHeight: 0, opacity: 0 }}
                            animate={{ maxHeight: 500, opacity: 1 }}
                            exit={{ maxHeight: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-2 pt-1 pb-2 flex flex-col gap-0.5">
                              <Link
                                to="/locations"
                                className="text-xs font-bold text-brand-primary-text py-2 px-3 rounded-lg hover:bg-brand-accent/40"
                                onClick={() => setIsOpen(false)}
                              >
                                All Locations →
                              </Link>
                              {allLocations.map((loc) => (
                                <Link
                                  key={loc.slug}
                                  to={`/locations/${loc.slug}`}
                                  className="flex items-center gap-2.5 text-sm font-medium text-gray-600 py-2 px-3 rounded-lg hover:bg-brand-accent/40 hover:text-brand-primary-text"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <MapPin size={13} className="text-brand-secondary shrink-0" />
                                  {loc.county}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'text-base font-semibold py-3 px-2 rounded-xl',
                      location.pathname === link.path
                        ? 'text-brand-primary-text bg-brand-accent/30'
                        : 'text-gray-700 hover:bg-gray-50'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-gray-100">
                <Link
                  to="/contact"
                  className="btn-primary w-full block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
