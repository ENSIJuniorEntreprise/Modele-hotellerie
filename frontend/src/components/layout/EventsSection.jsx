import React from 'react';

const EventsSection = () => {
  return (
    <section className="bg-[#1a2744] py-16 lg:py-28 px-6 md:px-10 font-sans text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. EN-TÊTE DE LA SECTION (Entièrement centré) --- */}
        <div className="mb-12 lg:mb-16 text-center">
          <div className="flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.5em] text-[#D1A243] mb-4">
            <span className="w-8 md:w-12 h-[1px] bg-[#D1A243]/30"></span>
            ÉVÉNEMENTS & SÉMINAIRES
            <span className="w-8 md:w-12 h-[1px] bg-[#D1A243]/30"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Célébrez Vos <span className="text-[#D1A243]">Moments</span> d'Exception
          </h2>

          <div className="flex items-center justify-center gap-4 mb-6">
             <span className="w-12 md:w-20 h-[1px] bg-white/10"></span>
             <div className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#D1A243] rotate-45 shrink-0 shadow-lg shadow-[#D1A243]/20"></div>
             <span className="w-12 md:w-20 h-[1px] bg-white/10"></span>
          </div>

          <p className="text-white/70 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Que ce soit pour un mariage de rêve, une conférence professionnelle ou un événement privé, notre équipe dédiée vous accompagne pour créer des souvenirs inoubliables.
          </p>
        </div>

        {/* --- 2. CONTENU PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 lg:flex lg:flex-row gap-6 lg:gap-16">
          
          {/* COLONNE GAUCHE : Les 3 Lignes (Services) */}
          <div className="md:col-span-7 lg:w-1/2 flex flex-col justify-between gap-4 lg:gap-6">
            {/* Item 1 */}
            <div className="flex items-start text-left gap-5 group bg-white/5 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#D1A243]/50 transition-colors">
                 <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#D1A243]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-serif mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Mariages</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">Un cadre féérique pour votre jour unique, avec une organisation sur-mesure.</p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="flex items-start text-left gap-5 group bg-white/5 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#D1A243]/50 transition-colors">
                 <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#D1A243]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-serif mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Conférences</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">Équipements high-tech et services premium pour garantir le succès de vos rencontres.</p>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="flex items-start text-left gap-5 group bg-white/5 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#D1A243]/50 transition-colors">
                 <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[#D1A243]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-serif mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Séminaires</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed">Espaces modulables favorisant la concentration et la créativité de vos équipes.</p>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE : Statistiques */}
          {/* MODIFICATION: Utilisation de `grid grid-cols-2` dès le mobile au lieu de `flex-col` */}
          <div className="md:col-span-5 lg:w-1/2 grid grid-cols-2 gap-3 lg:gap-6">
            {[
              { value: "5", label: "SALLES MODULABLES" },
              { value: "98%", label: "CLIENTS SATISFAITS" },
              { value: "200+", label: "ÉVÉNEMENTS PAR AN" },
              { value: "500", label: "CAPACITÉ MAXIMALE" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 lg:p-8 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors duration-300">
                {/* MODIFICATION: J'ai retiré 'flex-1 lg:flex-none' qui est inutile avec la grille CSS */}
                <span className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#D1A243] mb-1 lg:mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.value}</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>

        {/* --- 3. BOUTON D'ACTION (Centré avec bordures arrondies) --- */}
        <div className="mt-12 lg:mt-16 flex justify-center w-full">
          <a 
            href="/evenements" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest text-[#1a2744] uppercase bg-[#D1A243] hover:bg-white transition-all duration-300 overflow-hidden rounded-xl"
          >
            Voir tous les événements
            <svg className="w-4 h-4 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default EventsSection;