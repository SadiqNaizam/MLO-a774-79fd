import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Bell, Settings, X } from 'lucide-react'; // Added X for close
import TsbLogo from '@/components/icons/TsbLogo'; // Assuming a TSB logo SVG component

interface HeaderProps {
  pageTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle = "Overview" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="bg-tsb-white text-tsb-dark-text shadow-sm sticky top-0 z-50 border-b border-tsb-neutral-grey-medium">
        <div className="container mx-auto px-4 h-[56px] flex items-center justify-between">
          {/* Left Icon: Hamburger Menu */}
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Open menu" className="md:hidden text-tsb-blue">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <div className="hidden md:block w-10"> {/* Spacer for desktop if no left icon */}
            <Link to="/" aria-label="Home">
              <TsbLogo className="h-7 text-tsb-blue" />
            </Link>
          </div>


          {/* Center: TSB Logo or Page Title */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
            <Link to="/" className="md:hidden">
              <TsbLogo className="h-7 text-tsb-blue" />
            </Link>
            <span className="hidden md:block text-lg font-semibold text-tsb-dark-text">{pageTitle}</span>
          </div>

          {/* Right Icons: Notification Bell or Settings */}
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" aria-label="Notifications" className="text-tsb-blue">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Settings" className="text-tsb-blue">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Dropdown) - Full screen or styled dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[56px] bg-tsb-white z-40 p-4">
          <nav className="flex flex-col space-y-2">
            <Link to="/accounts-dashboard" onClick={toggleMobileMenu} className="p-3 rounded-md hover:bg-tsb-neutral-grey-light text-tsb-dark-text font-medium">Dashboard</Link>
            <Link to="/fund-transfer" onClick={toggleMobileMenu} className="p-3 rounded-md hover:bg-tsb-neutral-grey-light text-tsb-dark-text font-medium">Transfers</Link>
            <Link to="/card-controls" onClick={toggleMobileMenu} className="p-3 rounded-md hover:bg-tsb-neutral-grey-light text-tsb-dark-text font-medium">Cards</Link>
            <Link to="/profile" onClick={toggleMobileMenu} className="p-3 rounded-md hover:bg-tsb-neutral-grey-light text-tsb-dark-text font-medium">Profile</Link>
            {/* Add more mobile navigation items */}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;