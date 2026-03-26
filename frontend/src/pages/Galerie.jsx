import { useEffect, useState } from "react";
import galerie from "../assets/galerie.png";
import locationIcon from '../assets/location2.png';
import phoneIcon from '../assets/telephone2.png';
import mailIcon from '../assets/email2.png';

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-['Cormorant_Garamond']">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[500px] w-full flex items-center justify-center overflow-hidden">
        {/* Background & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={galerie} 
            alt="Galerie" 
            className={`w-full h-full object-cover object-[center_60%] transition-transform duration-[1800ms] ease-out ${loaded ? "scale-100" : "scale-110"}`}
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(15,23,42,0.20), rgba(15,23,42,0.50), rgba(15,23,42,0.85))' }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 
            style={{ fontSize: '100px' }}
            className={`font-['Playfair_Display'] font-bold text-white leading-none tracking-tight mb-10 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Galerie
          </h1>
          <p 
            style={{ fontSize: '20px' }}
            className={`font-['Inter'] text-[#E8E2D9]/90 max-w-[900px] mx-auto leading-relaxed transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            “Explorez notre hôtel en images et en vidéo pour vivre une expérience visuelle complète avant votre arrivée.”
          </p>
        </div>

        {/* Scroll Dots */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-1000 delay-1000 ${loaded ? "opacity-60" : "opacity-0"}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8C97A] animate-bounce" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8C97A]/60 animate-bounce [animation-delay:0.2s]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8C97A]/30 animate-bounce [animation-delay:0.4s]" />
        </div>
      </section>

      <section className="py-16 px-[5%]">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-[50px] font-light text-[#1a253c]">Nos Espaces</h2>
          <p className="font-['Inter'] text-[17px] text-[#D1A243] uppercase tracking-wider">Explorer les images</p>
          <div className="w-[250px] h-px bg-[#1A2744] mx-auto mt-2" />
          <p className="font-['Inter'] text-[17px] text-[#1a253c] mx-auto mt-2 ">“Du lobby au rooftop, explorez chaque recoin de notre établissement”</p>
        </div>

      </section>

      <section className="py-16 px-[5%]">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-[50px] font-light text-[#1a253c]">Notre univers</h2>
          <p className="font-['Inter'] text-[17px] text-[#D1A243] uppercase tracking-wider">Un tour de l'hôtel</p>
          <div className="w-[250px] h-px bg-[#1A2744] mx-auto mt-2" />
          <p className="font-['Inter'] text-[17px] text-[#1a253c] mx-auto mt-2 ">“Plongez dans l’univers raffiné de notre hôtel à travers cette visite immersive.”</p>
        </div>

      </section>

 
    </div>
  );
}