'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui';

interface AppHeaderProps {
  logo: string;
  navLinks: { label: string; href: string }[];
  demoBadge: string;
}

const AppHeader: FC<AppHeaderProps> = ({ logo, navLinks, demoBadge }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setMobileMenuOpen(false);
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md py-4">
      <div className="container flex justify-between items-center">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">{logo}</h1>
          <Button
            variant="ghost"
            size="sm"
            className="ml-4 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <HiOutlineCog size={20} />
          </Button>
        </div>
        <nav className={`md:flex justify-between items-center ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-sm font-medium text-gray-700 hover:text-primary py-2 md:px-4">
              {link.label}
            </a>
          ))}
          <span className="text-sm font-medium text-gray-700 ml-4 md:ml-0">{demoBadge}</span>
        </nav>
      </div>
    </header>
  );
};

interface AppSidebarProps {
  items: { icon: React.ReactNode; label: string; href: string; active?: boolean }[];
}

const AppSidebar: FC<AppSidebarProps> = ({ items }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setSidebarOpen(false);
    };

    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  return (
    <aside className={`hidden md:block ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
      <div className="fixed left-0 top-0 bottom-0 bg-white shadow-md p-4 w-64">
        <ul>
          {items.map((item, index) => (
            <li key={index} className={`py-2 ${item.active ? 'bg-primary text-white' : 'text-gray-700'}`}>
              <a href={item.href} className="flex justify-between items-center">
                {item.icon}
                <span className="text-sm font-medium ml-4">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

interface DemoBannerProps {
  children: React.ReactNode;
}

const DemoBanner: FC<DemoBannerProps> = ({ children }) => {
  const [dismissed, setDismissed] = useState(() => localStorage.getItem('demo-banner-dismissed') === 'true');

  if (dismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-primary text-white py-2 text-center font-bold text-lg">
      {children}
      <Button
        variant="ghost"
        size="sm"
        className="ml-4"
        onClick={() => {
          setDismissed(true);
          localStorage.setItem('demo-banner-dismissed', 'true');
        }}
      >
        Dismiss
      </Button>
    </div>
  );
};

export { AppHeader, AppSidebar, DemoBanner };