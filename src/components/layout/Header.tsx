import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { Button } from '@/components/ui/button';
import { Menu, Bell, UserCircle } from 'lucide-react'; // Example icons

interface HeaderProps {
  siteName?: string;
}

const Header: React.FC<HeaderProps> = ({ siteName = "MyBank" }) => {
  console.log("Rendering Header");

  // Placeholder for mobile menu state and toggle function
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Site Name */}
          <Link to="/" className="text-xl font-bold">
            {siteName}
          </Link>

          {/* Desktop Navigation (Example) */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/90">Dashboard</Button>
            </Link>
            <Link to="/transfer">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/90">Transfers</Button>
            </Link>
            <Link to="/cards">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/90">Cards</Button>
            </Link>
            {/* Add more navigation items as needed */}
          </nav>

          {/* Right side icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="icon" aria-label="Profile">
                <UserCircle className="h-6 w-6" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-primary/50">
          <nav className="flex flex-col space-y-1 px-2 py-3">
            <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-primary/90">Dashboard</Button>
            </Link>
            <Link to="/transfer" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-primary/90">Transfers</Button>
            </Link>
            <Link to="/cards" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-primary/90">Cards</Button>
            </Link>
            <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-primary/90">Profile</Button>
            </Link>
             <Button variant="ghost" className="w-full justify-start text-primary-foreground hover:bg-primary/90" aria-label="Notifications">
              <Bell className="h-5 w-5 mr-2" /> Notifications
            </Button>
            {/* Add more mobile navigation items */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;