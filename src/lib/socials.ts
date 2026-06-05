import { Facebook, Linkedin, Instagram, type LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  href: string;
  Icon: LucideIcon;
}

// Single source of truth for HASC social profiles — used in Footer, About, and Contact.
export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/Health-Alliance-So-Cal/61589812634424/',
    Icon: Facebook,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/health-alliance-so-cal/',
    Icon: Linkedin,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/healthalliancesocal/',
    Icon: Instagram,
  },
];
