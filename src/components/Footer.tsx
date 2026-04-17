import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-primary-content py-20">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/HASC_logo.png"
              alt="Health Alliance So Cal"
              className="h-12 md:h-14 w-auto rounded-lg bg-white p-1.5 opacity-95 group-hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-brand-accent/70 text-sm leading-relaxed max-w-xs">
            Specialized psychiatric care for skilled nursing, assisted living, and memory care facilities across Southern California.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
              <Twitter size={18} />
            </a>
          </div>
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
              <span>123 Medical Plaza Dr, Suite 400<br />Los Angeles, CA 90001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-brand-accent shrink-0" />
              <span>(800) 555-0123</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-brand-accent shrink-0" />
              <span>info@healthalliancesocal.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-brand-accent/50 uppercase tracking-widest font-medium">
        <span>© 2026 Health Alliance So Cal. All Rights Reserved.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a>
        </div>
      </div>
    </footer>
  );
}
