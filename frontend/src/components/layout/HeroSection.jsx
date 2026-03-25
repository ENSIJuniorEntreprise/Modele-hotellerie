import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
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
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-[#1a2744]/60 block md:hidden"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 w-full max-w-5xl animate-fadeIn pt-20 md:pt-0">
  
      <p className="text-[#D1A243] uppercase tracking-[0.5em] md:tracking-[0.8em] text-[9px] md:text-xs font-bold mb-6 md:mb-8">
        Bienvenue à l'excellence
      </p>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif mb-6 leading-none tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          L'Hôtel
        </h1>
        
        <p className="text-xl md:text-3xl font-serif italic mb-10 text-white/90" style={{ fontFamily: "'Playfair Display', serif" }}>
          L'Art de Vivre au Sommet
        </p>

        <p className="max-w-2xl mx-auto text-white/70 font-light leading-relaxed mb-8 md:mb-16 text-base md:text-xl tracking-wide px-4">
          Découvrez un havre de paix au cœur de la ville, où le luxe rencontre l'authenticité pour une expérience inoubliable.
        </p>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10">
          <button className="bg-[#e8e2d9] text-[#1a2744] px-14 py-4 rounded-md font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#D1A243] hover:text-white transition-all duration-500 shadow-2xl">
            Réserver maintenant
          </button>
          

          <a 
            href="/chambres" 
            className="border border-white/40 backdrop-blur-md px-14 py-4 rounded-md font-bold uppercase tracking-[0.2em] text-[10px] text-white hover:bg-white hover:text-[#1a2744] transition-all duration-500 flex items-center justify-center"
          >
            Explorer nos chambres
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}} />
    </section>
  );
};

export default HeroSection;
