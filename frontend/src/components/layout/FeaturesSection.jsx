import React from 'react';

const FeaturesSection = () => {
re
  const features = [
    {
      title: "Luxe Raffiné",
      description: "Chaque détail est pensé pour vous offrir une expérience d'exception.",
      icon: (
       
        <svg className="w-12 h-12 text-[#D1A243]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10h8M12 7v6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Emplacement Idéal",
      description: "Au cœur de la ville, à proximité des plus beaux monuments.",
      icon: (
     
        <svg className="w-12 h-12 text-[#D1A243]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Gastronomie",
      description: "Une cuisine étoilée qui éveille les sens et ravit les palais.",
      icon: (
        <svg className="w-12 h-12 text-[#D1A243]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M3 12h18M9 20l3-4 3 4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
          <path d="M6 3v3M10 3v3M14 3v3M18 3v3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Service 5 Étoiles",
      description: "Un personnel dévoué, attentif à vos moindres désirs.",
      icon: (
        <svg className="w-12 h-12 text-[#D1A243]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M20 20v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 20H2M16 6l-2-2a2.828 2.828 0 00-4 0L8 6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="11" r="1.5" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#1a2744] py-28 px-6 md:px-10 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
      
        <div className="text-center mb-24 relative">
          <div className="flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.5em] text-[#D1A243] mb-4">
            <span className="w-12 h-[1px] bg-[#D1A243]/30"></span>
            NOS ATOUTS
            <span className="w-12 h-[1px] bg-[#D1A243]/30"></span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif text-[#FAF9F6] leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            L'Excellence <span className="text-[#D1A243]">au</span><br />Quotidien
          </h2>


          <div className="flex items-center justify-center gap-4 mb-8">
             <span className="w-20 h-[1px] bg-[#FAF9F6]/10"></span>
             <div className="w-2.5 h-2.5 bg-[#D1A243] rotate-45 shrink-0 shadow-lg shadow-[#D1A243]/20"></div>
             <span className="w-20 h-[1px] bg-[#FAF9F6]/10"></span>
          </div>

          <p className="text-[#FAF9F6]/70 font-light italic text-lg max-w-2xl mx-auto leading-relaxed">
            L'art de recevoir depuis des générations
          </p>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
  
              className="group bg-white border border-[#e8e2d9]/50 rounded-2xl p-10 flex flex-col items-center text-center transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#1a2744]/10 cursor-default"
            >
              <div className="mb-10 w-24 h-24 bg-[#FAF9F6] rounded-full flex items-center justify-center relative transform transition-transform duration-500 group-hover:scale-110">
                {feature.icon}
                <div className="absolute inset-0 border border-[#D1A243]/10 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-100"></div>
              </div>

              <h3 className="text-2xl font-serif text-[#1a2744] mb-4 group-hover:text-[#D1A243] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                {feature.title}
              </h3>
              
              <p className="text-[#1a2744]/60 text-[15px] font-light leading-relaxed mb-8 flex-grow">
                {feature.description}
              </p>

              <div className="mt-auto w-10 h-[2px] bg-[#e8e2d9] transition-all duration-500 group-hover:w-20 group-hover:bg-[#D1A243]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
