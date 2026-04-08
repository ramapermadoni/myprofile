'use client';

import useSmoothScroll from '@/hooks/useSmoothScroll';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: `#${string}`;
}

export default function Footer() {
  useSmoothScroll();

  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Startup', href: '#startup' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer id="footer" className="py-20 px-4 glass border-t border-border/50 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <Link href="#home" className="text-apple-gradient font-bold text-2xl tracking-tight mb-4 inline-block">
              Rama Permadoni
            </Link>
            <p className="text-muted-foreground font-medium">© {new Date().getFullYear()} Rama Permadoni. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-semibold tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}