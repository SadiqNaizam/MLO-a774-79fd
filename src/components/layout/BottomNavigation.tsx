import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Layers, BarChart2, MoreHorizontal, CreditCard } from 'lucide-react'; // Example icons

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label, isActive }) => {
  return (
    <Link to={to} className="flex flex-col items-center justify-center flex-1 py-2 space-y-1">
      <Icon className={`h-6 w-6 mb-0.5 ${isActive ? 'text-gradient-tsb' : 'text-tsb-subtext-grey'}`} strokeWidth={isActive ? 2.5 : 2} />
      <span className={`text-[10px] font-medium ${isActive ? 'text-gradient-tsb' : 'text-tsb-subtext-grey'}`}>
        {label}
      </span>
    </Link>
  );
};

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const navItems = [
    { to: '/accounts-dashboard', icon: Home, label: 'Home' },
    { to: '/accounts-overview', icon: Layers, label: 'Accounts' }, // Example, adjust routes
    { to: '/insights', icon: BarChart2, label: 'Insights' }, // Example
    { to: '/card-services', icon: CreditCard, label: 'Cards' }, // Example, linking to CardControlsPage or similar
    { to: '/more', icon: MoreHorizontal, label: 'More' }, // Example
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[64px] bg-tsb-white shadow-[0_-2px_5px_rgba(0,0,0,0.05)] flex items-stretch border-t border-tsb-neutral-grey-medium z-50">
      {/* Ensure safe area for bottom edge if needed, e.g. padding-bottom for iPhone home indicator */}
      <div className="container mx-auto flex justify-around items-stretch pb-safe"> {/* pb-safe for safe area, needs tailwind safelist */}
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isActive={location.pathname === item.to || (item.to === '/accounts-dashboard' && location.pathname === '/')}
          />
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;