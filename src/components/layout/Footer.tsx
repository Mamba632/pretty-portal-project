import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  'Site Information': [
    { label: 'About this site', href: '/about' },
    { label: 'Terms and conditions', href: '#' },
    { label: 'Privacy policy', href: '#' },
    { label: 'Advertising', href: '#' },
  ],
  'For Medical Professionals': [
    { label: 'Medical Professional Resources', href: '#' },
    { label: 'Refer a Patient', href: '/contact' },
    { label: 'Research and Education', href: '/about' },
  ],
  'For Everyone': [
    { label: 'Health Library', href: '/self-care' },
    { label: 'Find a Doctor', href: '/find-healthcare' },
    { label: 'Request Appointment', href: '/consult' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex flex-col items-center leading-none">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">Health</span>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase">Connect</span>
              </div>
              <div className="w-px h-8 bg-primary-foreground/30" />
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L12 22M2 12L22 12M7 7L17 17M17 7L7 17" strokeLinecap="round" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted partner in healthcare, providing comprehensive medical resources and connecting you with quality care.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-sm">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.href}
                      className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm opacity-80">Follow HealthConnect</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-xs opacity-60">
              © {new Date().getFullYear()} HealthConnect. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
