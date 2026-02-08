import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import drosuLogo from "../assets/drosu-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Acasă", href: "#home" },
    { name: "Servicii", href: "#services" },
    { name: "Piese", href: "/piese" },
    { name: "Despre Noi", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // If it's an external link (starts with /), navigate to it
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }
    
    // If it's an anchor link (#)
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      
      // If we're not on the main page, navigate to main page with hash
      if (location.pathname !== '/') {
        window.location.href = `/${href}`;
      } else {
        // We're already on main page, just scroll
        document.getElementById(targetId)?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }
    }
  };

  const handleMobileNavClick = (href: string, e: React.MouseEvent) => {
    handleNavClick(href, e);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md' 
        : 'bg-transparent border-b-0'
    }`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate('/')}
          >
            <img 
              src={drosuLogo} 
              alt="DROSU Engineering Logo" 
              className="h-14 w-auto"
            />
            <div className="text-2xl font-bold text-foreground">
              DROSU<span className="text-performance-red">Engineering</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-normal nav-text text-foreground hover:text-performance-red transition-colors duration-300 relative group cursor-pointer"
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-performance-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="performance" 
              size="default"
              className="text-base"
              onClick={() => {
                if (location.pathname !== '/') {
                  window.location.href = '/#contact';
                } else {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }
              }}
            >
              Programează Consultanță
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl font-semibold text-foreground hover:text-performance-red transition-colors duration-300 cursor-pointer"
                  onClick={(e) => handleMobileNavClick(item.href, e)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="performance" 
                size="default" 
                className="mt-4 text-lg font-semibold"
                onClick={() => {
                  setIsMenuOpen(false);
                  if (location.pathname !== '/') {
                    window.location.href = '/#contact';
                  } else {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }
                }}
              >
                Programează Consultanță
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;