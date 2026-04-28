'use client';

import { AiOutlineHome, AiOutlineFileText, AiOutlineTeam, AiOutlineBarChart, AiOutlineSetting } from 'lucide-react';
import { clsx } from 'clsx';
import { tailwindMerge } from 'tailwind-merge';
import AppSidebar from '@/components/layout/AppSidebar';
import AppHeader from '@/components/layout/AppHeader';
import DemoBanner from '@/components/layout/DemoBanner';

const navItems = [
  { label: 'Content Calendar', href: '/dashboard/content-calendar', icon: AiOutlineHome },
  { label: 'Content Library', href: '/dashboard/content-library', icon: AiOutlineFileText },
  { label: 'Collaboration Tools', href: '/dashboard/collaboration-tools', icon: AiOutlineTeam },
  { label: 'Analytics and Insights', href: '/dashboard/analytics', icon: AiOutlineBarChart },
  { label: 'Content Optimization', href: '/dashboard/content-optimization', icon: AiOutlineSetting },
];

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen">
      <AppSidebar navItems={navItems} />
      <div className="flex-1 overflow-y-auto">
        <AppHeader />
        <DemoBanner />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;