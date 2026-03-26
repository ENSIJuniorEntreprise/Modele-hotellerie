
import { useEffect, useState } from "react";
import photo from "./assets/photo.png";
import locationIcon from './assets/location2.png';
import phoneIcon from './assets/telephone2.png';
import mailIcon from './assets/email2.png';

function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={photo}
          alt="Hotel"
          className={`w-full h-full object-cover object-[center_60%] transition-transform duration-[1800ms] ${
            loaded ? "scale-100" : "scale-[1.08]"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,23,42,0.5)] via-[rgba(26,37,60,0.7)] to-[rgba(26,37,60,0.9)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-16">
        <h1
          className={`font-['Playfair_Display'] text-[96px] font-bold text-white tracking-wide mb-20 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}
        >
          Contact
        </h1>

        <p
          className={`font-['Inter'] text-[24px] text-[rgba(232,226,217,0.9)] max-w-[900px] mx-auto leading-[1.75] transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          N'hésitez pas à nous contacter pour toute information, demande de réservation ou assistance.
        </p>
      </div>

      {/* Scroll dots */}
      <div
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity duration-1000 ${
          loaded ? "opacity-50" : "opacity-0"
        }`}
      >
        <div className="w-[5px] h-[5px] rounded-full bg-[#E8C97A] animate-bounce"></div>
        <div className="w-[5px] h-[5px] rounded-full bg-[#E8C97A] opacity-60 animate-bounce delay-200"></div>
        <div className="w-[5px] h-[5px] rounded-full bg-[#E8C97A] opacity-30 animate-bounce delay-400"></div>
      </div>
    </section>
  );
}

/* COORDONNEES */
function Coordonnees() {
  const cards = [
    { icon: locationIcon, title: "Notre localisation", info: "258 Elisabeth Ave, CA, 90025" },
    { icon: phoneIcon, title: "Notre numéro téléphonique", info: "+569 2316 2156" },
    { icon: mailIcon, title: "Notre adresse mail", info: "hotel@gmail.com" },
  ];

  return (
    <section className="bg-[#FAF8F5] px-[5%] py-12">
      <div className="text-center mb-8">
        <h2 className="font-['Playfair_Display'] text-[50px] text-[#1a253c] font-light">
          Nos coordonnées
        </h2>
        <p className="font-['Inter'] text-[17px] text-[#D1A243] uppercase">
          Nos informations
        </p>
        <div className="w-[250px] h-[1px] bg-[#1a253c] mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-3 gap-5 px-[2%]">
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-[#ede8de] p-6 text-center shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition"
          >
            <img src={c.icon} alt="" className="w-[30px] h-[30px] mx-auto mb-3" />
            <p className="font-['Playfair_Display'] text-[23px] text-[#1a253c]">
              {c.title}
            </p>
            <p className="font-['Inter'] text-[15px] text-[#1a253c]">
              {c.info}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* FORMULAIRE */
function FormulaireSection() {
  const [form, setForm] = useState({
    nom: "", email: "", telephone: "", sujet: "", message: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
  };

  return (
    <section className="bg-[#FAF8F5] px-[5%] py-10">
      <div className="max-w-[1200px] mx-auto flex gap-16">

        {/* MAP */}
        <div className="w-[40%]">
          <iframe
            title="map"
            className="w-full h-full min-h-[300px] border border-[#d0c9bb]"
            src="https://www.google.com/maps/embed?pb=!1m18..."
          />
        </div>

        {/* FORM */}
        <div className="flex-1">
          <h2 className="font-['Playfair_Display'] text-[40px] text-[#1a253c] mb-6">
            Envoyez-nous un message
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">

              <div className="flex flex-col">
                <label className="font-['Playfair_Display'] text-[20px] text-[#1a253c]">
                  Nom complet :
                </label>
                <input
                  name="nom"
                  onChange={handleChange}
                  className="bg-[#E8E2D9] p-4 shadow-md outline-none"
                  placeholder="Votre nom"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-['Playfair_Display'] text-[20px] text-[#1a253c]">
                  Email :
                </label>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  className="bg-[#E8E2D9] p-4 shadow-md outline-none"
                  placeholder="Votre email"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-['Playfair_Display'] text-[20px] text-[#1a253c]">
                  Téléphone :
                </label>
                <input
                  name="telephone"
                  onChange={handleChange}
                  className="bg-[#E8E2D9] p-4 shadow-md"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-['Playfair_Display'] text-[20px] text-[#1a253c]">
                  Sujet :
                </label>
                <input
                  name="sujet"
                  onChange={handleChange}
                  className="bg-[#E8E2D9] p-4 shadow-md"
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* MESSAGE */}
      <div className="max-w-[1200px] mx-auto mt-6">
        <textarea
          name="message"
          onChange={handleChange}
          rows={5}
          placeholder="Votre message"
          className="w-full bg-[#E8E2D9] p-4 shadow-md"
        />
      </div>

      {/* BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={handleSubmit}
          className="font-['Playfair_Display'] text-[1.3rem] px-12 py-4 bg-[#E8E2D9] text-[#1a253c] shadow-md hover:bg-[#1a253c] hover:text-white transition"
        >
          Envoyer le message
        </button>
      </div>
    </section>
  );
}

/* PAGE */
export default function Contact() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen flex flex-col">
      <Hero />
      <Coordonnees />
      <FormulaireSection />
    </div>
  );
}