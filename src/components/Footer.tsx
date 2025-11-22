'use client';

import useSmoothScroll from '@/hooks/useSmoothScroll';

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
    <footer id="footer" className="py-12 px-4 border-t border-ubuntu-card">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-ubuntu-grey">© {new Date().getFullYear()} Rama Permadoni. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 w-full md:w-auto">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="text-ubuntu-grey hover:text-ubuntu-orange transition-colors cursor-pointer"
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