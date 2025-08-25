import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import drosuLogo from "../assets/drosu-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Acasă", href: "#home" },
    { name: "Servicii", href: "#services" },
    { name: "Piese", href: "#parts" },
    { name: "Despre Noi", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    document.getElementById(targetId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const handleMobileNavClick = (href: string, e: React.MouseEvent) => {
    handleNavClick(href, e);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={drosuLogo} 
              alt="DROSU Engineering Logo" 
              className="h-12 w-auto"
            />
            <div className="text-xl font-bold text-foreground">
              DROSU<span className="text-performance-red">Engineering</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-performance-red transition-colors duration-300 relative group cursor-pointer"
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
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
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
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                  className="text-foreground hover:text-performance-red transition-colors duration-300 cursor-pointer"
                  onClick={(e) => handleMobileNavClick(item.href, e)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="performance" 
                size="default" 
                className="mt-4"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                  setIsMenuOpen(false);
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