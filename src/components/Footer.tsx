import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Printer } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-primary-content py-20">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/HASC_logo_white.png"
              alt="Health Alliance SoCal"
              className="h-12 md:h-14 w-auto opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-brand-accent/70 text-sm leading-relaxed max-w-xs">
            Specialized psychiatric care for skilled nursing, assisted living, and memory care facilities across Southern California.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-serif font-semibold">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-brand-accent/80 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
            <li><Link to="/portal" className="hover:text-white transition-colors">Facility Portal</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/standards" className="hover:text-white transition-colors">Clinical Standards</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-serif font-semibold">Our Services</h4>
          <ul className="flex flex-col gap-3 text-brand-accent/80 text-sm">
            <li>Psychiatric Evaluations</li>
            <li>Medication Management</li>
            <li>CMS Compliance Support</li>
            <li>Staff Training</li>
            <li>Family Counseling</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-serif font-semibold">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-brand-accent/80 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-brand-accent shrink-0" />
              <span>501 E. Hardy St. Ste. 425<br />Inglewood, CA 90301</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-brand-accent shrink-0" />
              <span>310.462.3879</span>
            </li>
            <li className="flex items-center gap-3">
              <Printer size={20} className="text-brand-accent shrink-0" />
              <span>Fax: 310.356.3417</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-brand-accent shrink-0" />
              <span>DRamage@healthalliancesocal.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-brand-accent/50 uppercase tracking-widest font-medium">
        <span>© 2026 Health Alliance SoCal. All Rights Reserved.</span>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/hipaa" className="hover:text-white transition-colors">HIPAA Compliance</Link>
        </div>
      </div>
    </footer>
  );
}
