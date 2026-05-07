'use client';

import { useState } from 'react';
import Link from 'next/link';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import ThemeToggle from '@/components/ThemeToggle';

interface NavItem {
  name: string;
  href: `#${string}`;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Startup', href: '#startup' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useSmoothScroll();

  return (
    <nav
      id="navbar"
      className="fixed top-3 left-3 right-3 mx-auto max-w-6xl bg-ubuntu-dark/95 backdrop-blur-sm border border-ubuntu-card rounded-2xl z-50 shadow-xl"
    >
      <div className="px-4 sm:px-5">
        <div className="flex justify-between items-center h-14 gap-3">
          {/* Logo */}
          <Link href="#home" className="text-ubuntu-orange font-bold text-xl tracking-tight whitespace-nowrap">
            Rama Permadoni
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-1.5 rounded-full text-sm hover:text-ubuntu-orange glass-hover cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden text-ubuntu-grey p-2 rounded-lg glass-hover"
            >
              <svg className="svg-inline--fa fa-bars w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1 border-t border-white/10 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-lg hover:text-ubuntu-orange glass-hover cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
