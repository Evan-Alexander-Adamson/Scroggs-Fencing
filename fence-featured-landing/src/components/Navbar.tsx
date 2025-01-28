import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-foreground font-['Barlow_Semi_Condensed']">Scroggs Fencing</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground/80 hover:text-foreground font-['Barlow_Semi_Condensed']">Services</a>
            <a href="#about" className="text-foreground/80 hover:text-foreground font-['Barlow_Semi_Condensed']">About</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground font-['Barlow_Semi_Condensed']">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#services"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground font-['Barlow_Semi_Condensed']"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground font-['Barlow_Semi_Condensed']"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground font-['Barlow_Semi_Condensed']"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;