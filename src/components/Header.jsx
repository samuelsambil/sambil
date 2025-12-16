import { useState, useEffect } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-lg' : 'bg-black/80 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-xl font-semibold text-white tracking-wide lowercase">
          sambil
        </h2>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-gray-400 transition-colors duration-300 font-medium text-sm"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gray-400 transition-colors duration-300 font-medium text-sm"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-gray-400 transition-colors duration-300 font-medium text-sm"
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gray-400 transition-colors duration-300 font-medium text-sm"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-black border-l border-gray-800 transition-transform duration-300 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col space-y-8 pt-24 px-8">
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white text-lg hover:text-gray-400 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white text-lg hover:text-gray-400 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-white text-lg hover:text-gray-400 transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white text-lg hover:text-gray-400 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;