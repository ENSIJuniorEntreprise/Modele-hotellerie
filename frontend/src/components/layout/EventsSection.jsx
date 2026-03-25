import React from 'react';

const EventsSection = () => {
  const features = [
    {
      title: "Mariages",
      desc: "Un cadre féerique pour votre jour unique",
      icon: (
        <svg className="w-8 h-8 text-[#D1A243]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Conférences",
      desc: "Équipements high-tech et services premium",
      icon: (
        <svg className="w-8 h-8 text-[#D1A243]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Séminaires",
      desc: "Espaces modulables pour vos réunions d'affaires",
      icon: (
        <svg className="w-8 h-8 text-[#D1A243]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const stats = [
    { number: "5", label: "Salles modulables" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "200+", label: "Événements par an" },
    { number: "500", label: "Capacité maximale" }
  ];

  return (
    <section className="bg-[#1a2744] py-24 px-6 md:px-10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        

        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.5em] text-[#D1A243] mb-4">
            <span className="w-10 h-[1px] bg-[#D1A243]/30"></span>
            ÉVÉNEMENTS & SÉMINAIRES
            <span className="w-10 h-[1px] bg-[#D1A243]/30"></span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl  font-serif text-[#faf8f5] leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Célébrez Vos <span className="text-[#D1A243]">Moments</span> d'Exception
          </h2>

          <div className="flex items-center justify-center gap-4 mt-8">
             <span className="w-16 h-[1px] bg-[#e8e2d9]/20"></span>
             <div className="w-2.5 h-2.5 bg-[#D1A243] rotate-45"></div>
             <span className="w-16 h-[1px] bg-[#e8e2d9]/20"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
         
          <div className="space-y-12">
            <p className="text-[#faf8f5]/70 text-lg font-light leading-relaxed max-w-lg">
              Que ce soit pour un mariage de rêve, une conférence professionnelle ou un événement privé, notre équipe dédiée vous accompagne pour créer des souvenirs inoubliables.
            </p>
            
            <div className="space-y-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="p-3 border border-[#D1A243]/20 rounded-xl group-hover:bg-[#D1A243]/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[#faf8f5] text-xl font-serif mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h4>
                    <p className="text-[#faf8f5]/50 text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-[#faf8f5]/5 border border-[#faf8f5]/10 p-8 md:p-12 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#faf8f5]/10 hover:-translate-y-2 group"
              >
                <span className="text-4xl md:text-5xl font-serif text-[#D1A243] mb-3 transition-transform duration-500 group-hover:scale-110" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.number}
                </span>
                <span className="text-[#faf8f5]/80 text-[10px] uppercase tracking-[0.2em] font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

       
        <div className="mt-20 flex justify-center">
          <a 
            href="/evenements" 
            className="inline-flex items-center gap-4 bg-transparent border border-[#D1A243]/40 px-12 py-5 text-[#D1A243] font-bold text-[11px] uppercase tracking-[0.3em] rounded-xl transition-all duration-500 hover:bg-[#D1A243] hover:text-[#1a2744] hover:shadow-[0_0_30px_rgba(209,162,67,0.2)] group"
          >
            Voir tous les événements
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default EventsSection;
