'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@/components/FontAwesomeProviders';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
  };

  const showSun = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={showSun ? 'Switch to light mode' : 'Switch to dark mode'}
      title={showSun ? 'Switch to light mode' : 'Switch to dark mode'}
      className="glass-toggle w-9 h-9 rounded-full inline-flex items-center justify-center"
    >
      {theme === null ? (
        <span className="w-4 h-4" />
      ) : (
        <FontAwesomeIcon
          icon={showSun ? faSun : faMoon}
          className="w-4 h-4 text-ubuntu-orange"
        />
      )}
    </button>
  );
}
