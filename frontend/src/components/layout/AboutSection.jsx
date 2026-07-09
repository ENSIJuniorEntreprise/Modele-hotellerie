import React from 'react';

const AboutSection = () => {
  const features = [
    {
      title: "Héritage Rare",
      desc: "Un lieu chargé d'histoire depuis 1925",
      icon: (
        <svg className="w-10 h-10 lg:w-12 lg:h-12 text-[#D1A243]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 10h8M12 7v6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Service Discret",
      desc: "L'art de l'anticipation à chaque instant",
      icon: (
        <svg className="w-10 h-10 lg:w-12 lg:h-12 text-[#D1A243]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M18 15a6 6 0 00-12 0v2h12v-2zM12 4v3M2 20h20" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="11" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      title: "Confort Ultime",
      desc: "Des suites pensées comme des refuges",
      icon: (
        <svg className="w-10 h-10 lg:w-12 lg:h-12 text-[#D1A243]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M2 20v-8a2 2 0 012-2h16a2 2 0 012 2v8M2 17h20M7 10V7a2 2 0 012-2h6a2 2 0 012 2v3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="13" r="1.5" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#FAF9F6] py-16 lg:py-24 px-0 md:px-10 font-sans overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
      `}} />
      
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16 lg:mb-20 relative px-6 md:px-0">
          <div className="flex items-center justify-center gap-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] text-[#D1A243] mb-4">
            <span className="w-6 md:w-8 h-[1px] bg-[#D1A243]/40"></span>
            NOTRE HISTOIRE
            <span className="w-6 md:w-8 h-[1px] bg-[#D1A243]/40"></span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1a2744] mb-4 md:mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            À Propos
          </h2>

          <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
             <span className="w-12 md:w-16 h-[1px] bg-[#D1A243]/20"></span>
             <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#D1A243] rotate-45 shrink-0"></div>
             <span className="w-12 md:w-16 h-[1px] bg-[#D1A243]/20"></span>
          </div>

          <p className="text-[#1a2744]/60 font-light italic text-base md:text-lg max-w-2xl mx-auto">
            Un lieu chargé d'histoire depuis 1921
          </p>
        </div>

        {/* AJOUTS : px-[10vw] sur mobile pour centrer la première/dernière carte, et md:px-0 */}
        <div 
          className="hide-scroll flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-[10vw] md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {features.map((item, idx) => (
            <div 
              key={idx} 
              // AJOUTS : mx-auto pour centrer et max-w-[320px] pour éviter qu'elles ne soient trop larges
              className={`group mx-auto bg-white border border-[#e8e2d9]/50 rounded-2xl p-8 lg:p-10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-[#1a2744]/5 hover:-translate-y-2 min-w-[280px] w-[80vw] max-w-[320px] md:min-w-0 md:w-full md:max-w-none shrink-0 snap-center ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1 md:w-[70%] md:mx-auto lg:w-full' : ''
              }`}
            >
              <div className="mb-6 lg:mb-8 w-20 h-20 lg:w-24 lg:h-24 bg-[#FAF9F6] rounded-full flex items-center justify-center relative transform transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-xl lg:text-2xl font-serif text-[#1a2744] mb-3 lg:mb-4 group-hover:text-[#D1A243] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                {item.title}
              </h3>
              
              <p className="text-[#1a2744]/60 text-sm lg:text-[15px] font-light leading-relaxed max-w-[260px]">
                {item.desc}
              </p>
              
              <div className="mt-6 lg:mt-8 w-8 lg:w-10 h-[2px] bg-[#e8e2d9] transition-all duration-500 group-hover:w-16 lg:group-hover:w-20 group-hover:bg-[#D1A243]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;