import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2">
          <iframe
            className="w-full h-full object-cover scale-110"
            src="https://www.youtube.com/embed/cdKx1Zv3YKs?autoplay=1&mute=1&loop=1&playlist=cdKx1Zv3YKs&controls=0&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1"
            title="Hotel Video Background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>

        {/* Overlay général */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

        {/* Overlay mobile renforcé */}
        <div className="absolute inset-0 bg-[#1a2744]/60 block md:hidden"></div>
      </div>

      {/* ✅ CONTENU */}
      <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl animate-fadeIn pt-20">

        {/* Sous-titre */}
        <p className="text-[#D1A243] uppercase tracking-[0.5em] md:tracking-[0.8em] text-[9px] md:text-xs font-bold mb-6 md:mb-8">
          Bienvenue à l'excellence
        </p>

        {/* Titre principal */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-serif mb-6 leading-none tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          L'Hôtel
        </h1>

        {/* Slogan */}
        <p
          className="text-xl md:text-3xl font-serif italic mb-8 text-white/90"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          L'Art de Vivre au Sommet
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-white/70 font-light leading-relaxed mb-10 md:mb-16 text-sm md:text-xl tracking-wide px-4">
          Découvrez un havre de paix au cœur de la ville, où le luxe rencontre
          l'authenticité pour une expérience inoubliable.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10">
          <button className="w-full sm:w-auto bg-[#e8e2d9] text-[#1a2744] px-14 py-4 rounded-md font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#D1A243] hover:text-white transition-all duration-500 shadow-2xl">
            Réserver maintenant
          </button>

          <a
            href="/chambres"
            className="w-full sm:w-auto border border-white/40 backdrop-blur-md px-14 py-4 rounded-md font-bold uppercase tracking-[0.2em] text-[10px] text-white hover:bg-white hover:text-[#1a2744] transition-all duration-500 flex items-center justify-center"
          >
            Explorer nos chambres
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <div className="w-px h-8 bg-[#D1A243]/60 animate-pulse" />
      </div>

      {/* Styles d'animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          }
        `
      }} />
    </section>
  );
};

export default HeroSection;