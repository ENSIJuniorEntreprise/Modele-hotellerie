import React from 'react';

const RoomsSection = () => {
  const rooms = [
    {
      title: "Chambre Deluxe",
      price: "89",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop",
      desc: "Élégance et confort pour un séjour raffiné. Vue sur les jardins, literie haut de gamme.",
      pers: "2 pers.",
      size: "55 m²"
    },
    {
      title: "Suite Executive",
      price: "199",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
      desc: "Espace généreux avec salon privé, idéal pour les voyageurs d'affaires exigeants.",
      pers: "2 pers.",
      size: "65 m²"
    },
    {
      title: "Suite Prestige",
      price: "299",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
      desc: "Le summum du luxe avec terrasse privée, jacuzzi et service de majordome dédié.",
      pers: "4 pers.",
      size: "85 m²"
    }
  ];

  return (
    <section className="bg-[#faf8f5] py-24 px-6 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
  
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 text-[11px] font-bold uppercase tracking-[0.5em] text-[#D1A243] mb-4">
            <span className="w-10 h-[1px] bg-[#D1A243]/30"></span>
            DÉCOUVRIR NOS
            <span className="w-10 h-[1px] bg-[#D1A243]/30"></span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif text-[#1a2744] mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Chambres & Suites
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
             <span className="w-20 h-[1px] bg-[#e8e2d9]"></span>
             <div className="w-2.5 h-2.5 bg-[#D1A243] rotate-45"></div>
             <span className="w-20 h-[1px] bg-[#e8e2d9]"></span>
          </div>

          <p className="text-[#1a2744]/60 font-light italic text-lg max-w-2xl mx-auto leading-relaxed">
            Des refuges pensés pour votre confort absolu
          </p>
        </div>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {rooms.map((room, index) => (
            <div key={index} className="group cursor-pointer">
              
              
              <div className="relative overflow-hidden mb-8 bg-white transition-all duration-500 rounded-2xl p-0 group-hover:p-4 shadow-sm group-hover:shadow-2xl">
                <div className="relative overflow-hidden rounded-xl h-[450px]">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-[#1a2744]/0 group-hover:bg-[#1a2744]/10 transition-colors duration-500"></div>

              
                  <div className="absolute bottom-6 right-6 bg-[#1a2744] text-white p-5 min-w-[130px] text-center border-l-2 border-b-2 border-[#D1A243] shadow-2xl rounded-tr-2xl rounded-bl-2xl">
                    <span className="block text-[10px] uppercase tracking-widest text-[#D1A243] mb-1 font-bold">À partir de</span>
                    <div className="flex items-baseline justify-center">
                      <span className="text-2xl font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>{room.price}€</span>
                      <span className="text-[10px] ml-1 text-white/50">/ nuit</span>
                    </div>
                  </div>
                </div>
              </div>

            
              <div className="text-center px-4">
                <h3 className="text-2xl font-serif text-[#1a2744] mb-4 group-hover:text-[#D1A243] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {room.title}
                </h3>
                
                <p className="text-[#1a2744]/60 text-sm leading-relaxed mb-6 font-light italic h-12 overflow-hidden">
                  "{room.desc}"
                </p>
                
                <div className="flex items-center justify-center gap-8 text-[#1a2744]/70 text-[11px] font-bold uppercase tracking-widest border-t border-[#e8e2d9] pt-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#D1A243]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {room.pers}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#D1A243]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    {room.size}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="flex justify-center">
          <a 
            href="/chambres" 
            className="inline-flex items-center gap-4 bg-white border border-[#e8e2d9] shadow-sm px-10 py-5 rounded-xl text-[#1a2744] font-bold text-[11px] uppercase tracking-[0.3em] transition-all duration-500 hover:bg-[#1a2744] hover:text-white hover:border-[#1a2744] group"
          >
            Toutes nos chambres
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default RoomsSection;
