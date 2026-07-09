import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alexandre Moreau",
      role: "Famille en vacances",
      text: "Un hôtel qui sait accueillir les familles avec classe. Les enfants ont adoré la piscine et nous avons apprécié le calme et le raffinement.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Sophie Laurent",
      role: "Couple en lune de miel",
      text: "Un cadre romantique idéal pour notre lune de miel. Le spa est divin, les chambres somptueuses et le personnel aux petits soins.",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Jean Dupont",
      role: "Voyageur d'affaires",
      text: "Le service est d'une efficacité rare. Les salles de réunion sont parfaitement équipées et le confort de la literie est exceptionnel.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Emma Roche",
      role: "Escapade Solo",
      text: "Une expérience ressourçante. La vue depuis la suite était à couper le souffle et la cuisine du chef est une véritable œuvre d'art.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  const stats = [
    { value: "4.5/5", label: "NOTE MOYENNE" },
    { value: "500+", label: "AVIS VÉRIFIÉS" },
    { value: "98%", label: "RECOMMANDENT" }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(totalPages - 1);
    }
  }, [totalPages, currentPage]);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleTestimonials = testimonials.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage);

  return (
    <section className="bg-[#faf8f5] py-24 px-6 md:px-10 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 md:mb-20 relative">
          <div className="flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.5em] text-[#D1A243] mb-4">
            <span className="w-12 h-[1px] bg-[#D1A243]/30"></span>
            TÉMOIGNAGES
            <span className="w-12 h-[1px] bg-[#D1A243]/30"></span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-[#1a2744] leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ce Que Disent <span className="text-[#D1A243]">Nos Hôtes</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
             <span className="w-16 h-[1px] bg-[#1a2744]/10"></span>
             <div className="w-2.5 h-2.5 bg-[#D1A243] rotate-45 shrink-0"></div>
             <span className="w-16 h-[1px] bg-[#1a2744]/10"></span>
          </div>

          <p className="text-[#1a2744]/60 font-light italic text-lg max-w-2xl mx-auto">
            Votre Avis Sincère qui nous concerne
          </p>
        </div>

        {/* Conteneur des avis et des flèches */}
        <div className="relative px-0 md:px-16">
          
          {/* Flèche Gauche */}
          <button 
            onClick={prevPage}
            className="absolute left-[-10px] md:left-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-[#e8e2d9] flex items-center justify-center text-[#1a2744] hover:bg-[#D1A243] hover:text-white transition-all duration-300 shadow-md"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Cartes d'avis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 md:mb-16">
            {visibleTestimonials.map((t, idx) => (
              <div 
                key={currentPage + "-" + idx} 
                className="bg-white border border-[#e8e2d9]/50 p-10 md:p-14 rounded-[32px] shadow-sm flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500 animate-fadeIn relative z-10"
              >
                <img src={t.imageUrl} alt={t.name} className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-[#faf8f5] shadow-md" />
                <h4 className="text-2xl font-serif text-[#1a2744] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{t.name}</h4>
                <p className="text-[#D1A243] text-[10px] font-bold uppercase tracking-widest mb-6">{t.role}</p>
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#D1A243] fill-[#D1A243]" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>

                <p className="text-[#1a2744]/70 font-light leading-relaxed italic text-base md:text-lg">"{t.text}"</p>
              </div>
            ))}
          </div>

          {/* Flèche Droite */}
          <button 
            onClick={nextPage}
            className="absolute right-[-10px] md:right-[-20px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a2744] flex items-center justify-center text-white hover:bg-[#D1A243] transition-all duration-300 shadow-lg"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        {/* Pagination (Points) */}
        <div className="flex justify-center gap-3 mb-16 md:mb-20">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-2 transition-all duration-300 rounded-full ${currentPage === i ? 'w-8 bg-[#D1A243]' : 'w-2 bg-[#e8e2d9]'}`}
            />
          ))}
        </div>

        {/* Statistiques en bas */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto pt-10 border-t border-[#e8e2d9]">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl md:text-5xl font-serif text-[#1a2744] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
              <div className="text-[8px] md:text-[10px] font-bold text-[#D1A243] tracking-[0.1em] md:tracking-[0.3em] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}} />
    </section>
  );
};

export default TestimonialsSection;