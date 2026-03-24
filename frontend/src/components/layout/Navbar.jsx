import React, { useState, useEffect } from 'react';

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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 flex items-center justify-between px-6 md:px-12 py-5 text-white ${
      isScrolled ? 'bg-[#1a2744]/95 shadow-lg backdrop-blur-md py-4' : 'bg-transparent py-8'
    }`}>
      {/* Logo */}
      <div className="text-3xl font-serif tracking-tighter cursor-pointer hover:text-[#D1A243] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
        L'Hôtel
      </div>

      {/* Menu avec ajout de Événements */}
      <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold tracking-[0.3em] uppercase">
        {['Accueil', 'Chambres', 'Services', 'Événements', 'Galerie', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={item === 'Événements' ? '/evenements' : `/${item.toLowerCase()}`} 
            className="relative group transition-colors hover:text-[#D1A243]"
          >
            {item}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D1A243] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Bouton Réserver avec border-radius identique aux cadres (ex: rounded-xl) */}
      <button className="border border-white/40 px-8 py-2.5 rounded-xl uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-300 hover:bg-[#D1A243] hover:text-white hover:border-[#D1A243]">
        Réserver
      </button>
    </nav>
  );
};

export default Navbar;