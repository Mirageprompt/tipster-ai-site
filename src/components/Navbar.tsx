
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text">Tipster.AI</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="hover:text-neon-green transition-colors duration-300">Início</a>
              <a href="#como-funciona" className="hover:text-neon-green transition-colors duration-300">Como Funciona</a>
              <a href="#beneficios" className="hover:text-neon-green transition-colors duration-300">Benefícios</a>
              <a href="#demo" className="hover:text-neon-green transition-colors duration-300">Demo</a>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="btn-outline text-sm">
              Login
            </button>
            <button className="btn-primary text-sm">
              Testar Grátis
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
