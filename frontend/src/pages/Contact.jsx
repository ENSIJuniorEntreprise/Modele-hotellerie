import { useEffect, useState } from "react";
import photo from "../assets/photo.png";
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
            src={photo} 
            alt="Hotel" 
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
            Contact
          </h1>
          <p 
            style={{ fontSize: '20px' }}
            className={`font-['Inter'] text-[#E8E2D9]/90 max-w-[900px] mx-auto leading-relaxed transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            "N'hésitez pas à nous contacter pour toute information, demande de réservation ou assistance. 
            Notre équipe se fera un plaisir de vous répondre dans les plus brefs délais."
          </p>
        </div>

        {/* Scroll Dots */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-1000 delay-1000 ${loaded ? "opacity-60" : "opacity-0"}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8C97A] animate-bounce" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8C97A]/60 animate-bounce [animation-delay:0.2s]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8C97A]/30 animate-bounce [animation-delay:0.4s]" />
        </div>
      </section>

      {/* ─── COORDONNÉES ─── */}
      <section className="py-16 px-[5%]">
        <div className="text-center mb-12">
          <h2 className="font-['Playfair_Display'] text-[50px] font-light text-[#1a253c]">Nos coordonnées</h2>
          <p className="font-['Inter'] text-[17px] text-[#D1A243] uppercase tracking-wider">Nos informations</p>
          <div className="w-[250px] h-px bg-[#1a253c] mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-full mx-auto px-[2%]">
          {[
            { icon: locationIcon, title: "Notre localisation", info: "258 Elisabeth Ave, CA, 90025" },
            { icon: phoneIcon, title: "Notre numéro téléphonique", info: "+569 2316 2156" },
            { icon: mailIcon, title: "Notre adresse mail", info: "hotel@gmail.com" }
          ].map((card, i) => (
            <div key={i} className="bg-[#ede8de] p-8 text-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-lg transition-shadow">
              <img src={card.icon} alt={card.title} className="w-[30px] h-[30px] mx-auto mb-3" />
              <p className="font-['Playfair_Display'] text-2xl text-[#1a253c] mb-1 whitespace-nowrap">{card.title}</p>
              <p className="font-['Inter'] text-[15px] text-[#1a253c]">{card.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FORMULAIRE & MAP ─── */}
            <section className="py-10 px-[5%] max-w-[96%] mx-auto">



        {/* Map + Champs haut */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Map petite */}
          <div className="w-full lg:w-[30%] min-h-[400px]">
            <iframe
              title="map"
              className="w-full h-[350px] border border-[#d0c9bb]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.423!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA3LjkiTiAxMTjCsDI1JzIyLjgiVw!5e0!3m2!1sen!2sus!4v1625000000000"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Champs nom, email, téléphone, sujet */}
          
          <div className="flex-1">
                    {/* Titre */}
            <h2 className="font-['Playfair_Display'] text-[40px] md:text-[40px] text-[#1a253c] mb-13 leading-tight">
              Envoyez-nous un message
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{[
  { label: "Nom complet : *", name: "nom", placeholder: "Votre nom" },
  { label: "Email : *", name: "email", placeholder: "Votre Email", type: "email" },
  { label: "Numéro de téléphone:", name: "telephone", placeholder: "Votre numéro de téléphone" },
  { label: "Sujet:", name: "sujet", placeholder: "Votre sujet" }
].map((field, index) => (
  <div key={index} className="flex flex-col gap-2">
    {/* Label augmenté à text-2xl (env. 24px) */}
    <label className="font-['Playfair_Display'] text-15px md:text-3xl text-[#1a253c] font-medium">
      {field.label}
    </label>
    
    {/* Input augmenté à text-lg pour une meilleure lisibilité */}
    <input 
      type={field.type || "text"}
      className="bg-[#E8E2D9] p-5 font-['Playfair_Display'] text-lg md:text-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)] outline-none focus:ring-2 ring-[#1a253c] transition-all" 
      placeholder={field.placeholder}
    />
  </div>
))}
            </div>
          </div>
        </div>

        {/* Message en pleine largeur en dessous */}
<div className="flex flex-col mt-10 gap-4">
  <label className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl text-[#1a253c] font-medium">
    Message:
  </label>
  
  <textarea 
    rows={8}
    className="bg-[#E8E2D9] 
               p-8 
               font-['Playfair_Display'] 
               text-xl md:text-2xl 
               shadow-[0_10px_30px_rgba(0,0,0,0.15)] 
               outline-none 
               resize-none 
               focus:ring-2 
               ring-[#1a253c] 
               transition-all 
               w-full"
    placeholder="Décrivez votre demande ici..."
  />

  
</div>

        {/* Bouton centré */}
<div className="text-center mt-12 mb-12 flex justify-center w-full">
  <button className="
    font-['Playfair_Display'] 
    !text-3xl md:!text-4xl
    !text-[#1a253c] 
    
    !bg-[#EDE8DE] 
    !rounded-md 
    
    !px-16 !py-6
    md:!px-20 md:!py-7
    
    shadow-[0_4px_16px_rgba(0,0,0,0.06)] 
    
    active:!text-white     
    active:!bg-[#1a253c]    
    active:!scale-[0.98] 

    mx-auto !block
  ">
    Envoyer le message
  </button>
</div>

      </section>
    </div>
  );
}