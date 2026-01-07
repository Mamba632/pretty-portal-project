import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { 
    href: '/find-healthcare', 
    label: 'Care at HealthConnect',
    hasDropdown: true 
  },
  { 
    href: '/self-care', 
    label: 'Health Library',
    hasDropdown: true 
  },
  { 
    href: '/consult', 
    label: 'For Medical Professionals',
    hasDropdown: true 
  },
  { 
    href: '/about', 
    label: 'Research & Education',
    hasDropdown: true 
  },
  { 
    href: '/contact', 
    label: 'Giving to HealthConnect',
    hasDropdown: true 
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex flex-col items-center leading-none">
              <span className="text-xs font-semibold tracking-[0.2em] text-foreground uppercase">Health</span>
              <span className="text-xs font-semibold tracking-[0.2em] text-foreground uppercase">Connect</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L12 22M2 12L22 12M7 7L17 17M17 7L7 17" strokeLinecap="round" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 text-sm transition-colors",
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="leading-tight">{link.label}</span>
                {link.hasDropdown && <ChevronDown className="h-3 w-3" />}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden xl:flex items-center gap-4">
            <Link 
              to="/consult" 
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Request appointment
            </Link>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <User className="h-4 w-4" />
              Log in
            </button>
            <button className="p-2 hover:bg-muted rounded-full transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="xl:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-colors",
                    location.pathname === link.href
                      ? "bg-primary-light text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <Link
                  to="/consult"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-secondary"
                >
                  Request appointment
                </Link>
                <button className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  Log in
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
