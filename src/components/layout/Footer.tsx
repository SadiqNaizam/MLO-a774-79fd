import React from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About/Brand */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">MyBank PLC</h3>
            <p className="text-sm">
              Committed to providing secure and reliable banking services.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="hover:text-primary">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal/Contact Info (Example) */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Contact</h3>
            <p className="text-sm">123 Banking St, Finance City, UK</p>
            <p className="text-sm">Phone: (012) 345-6789</p>
            {/* Social media icons could go here */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-6 text-center text-sm">
          <p>&copy; {currentYear} MyBank PLC. All rights reserved.</p>
          <p className="mt-1">
            MyBank PLC is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;