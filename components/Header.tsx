import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigate(href);
  };

  const navLinks = [
    { name: 'Giới thiệu', href: '/about' },
    { name: 'Dịch vụ', href: '/services' }, 
    { name: 'Thư viện', href: '/library' },
    { name: 'Liên hệ', href: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-background/80 backdrop-blur-md border-b border-border' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="group inline-flex items-center">
  <img
    src="src/assets/logo.png"
    alt="NTT Logo"
    className="h-8 w-auto transition-opacity group-hover:opacity-80"
  />
</Link>


          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.href}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === link.href 
                    ? 'text-accent' 
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Bắt đầu dự án
            </Link>
          </nav>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="fixed inset-0 z-[60] bg-background">
    
    {/* Close button */}
    <div className="flex justify-end p-6">
      <button onClick={() => setMobileMenuOpen(false)}>
        <X className="w-8 h-8 text-primary" />
      </button>
    </div>

    {/* Menu items */}
    <div className="flex flex-col items-center justify-center h-[80vh] gap-10">
      {navLinks.map(link => (
        <Link
          key={link.name}
          to={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="text-4xl font-display font-bold text-primary hover:text-accent transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </div>

  </div>
)}
    </>
  );
};