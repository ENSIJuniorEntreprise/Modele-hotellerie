import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import locationIcon from '../../assets/location.png';
import phoneIcon from '../../assets/phone-call.png';
import mailIcon from '../../assets/mail.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    setTimeout(() => {
      setMessage('Merci, votre inscription a bien été prisee en compte !');
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <footer className="bg-[#1a253c] text-white w-full px-[5%] pt-2 pb-4 box-border">

      <div className="text-center mb-0">
        <h1 className="font-serif text-[45px] text-white border-b border-white inline-block pb-2 mb-3">L'Hôtel</h1>
        <p className="font-sans font-normal text-[#E8E2D9] text-[20px] text-xl mt-0">"L'excellence hôtelière où confort, prestige et raffinement se rencontrent."</p>
      </div>

      <div className="grid grid-cols-4 gap-5 w-full max-w-[1300px] mx-auto my-16 text-left">
        <div className="flex flex-col items-start">
          <h3 className="font-serif font-bold text-[25px] mb-6 border-b border-white pb-2 w-full">Réception</h3>
          <p className="font-sans font-normal text-[#E8E2D9] text-xl mb-4">24h/24 , 7j/7</p>
          <p className="font-sans font-normal text-[#E8E2D9] text-xl mb-4">Check-in: 15h00</p>
          <p className="font-sans font-normal text-[#E8E2D9] text-xl mb-4">Check-out: 11h00</p>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="font-serif font-bold text-[25px] mb-6 border-b border-white pb-2 w-full">Découvrir</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-4">
              <a href="/chambres" className="font-sans font-normal !text-[#E8E2D9] text-xl no-underline hover:text-white hover:underline hover:pl-1 transition-all duration-200">Nos Chambres</a>
            </li>
            <li className="mb-4">
              <a href="/evenements" className="font-sans font-normal !text-[#E8E2D9] text-xl no-underline hover:text-white hover:underline hover:pl-1 transition-all duration-200">Evénements</a>
            </li>
            <li className="mb-4">
              <a href="/services" className="font-sans font-normal !text-[#E8E2D9] text-xl no-underline hover:text-white hover:underline hover:pl-1 transition-all duration-200">Services</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="font-serif font-bold text-[25px] mb-6 border-b border-white pb-2 w-full">Informations</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-4">
              <a href="/contact" className="font-sans font-normal !text-[#E8E2D9] text-xl no-underline hover:text-white hover:underline hover:pl-1 transition-all duration-200">Contact</a>
            </li>
            <li className="mb-4">
              <a href="/galerie" className="font-sans font-normal !text-[#E8E2D9] text-xl no-underline hover:text-white hover:underline hover:pl-1 transition-all duration-200">Galerie</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="font-serif font-bold text-[25px] mb-6 border-b border-white pb-2 w-full">Rester en contact</h3>
          <p className="font-sans font-normal text-[#E8E2D9] text-xl mb-4">Laissez-nous votre Email pour recevoir nos offres</p>
          <form onSubmit={handleSubscribe} className="w-full">
            <input
              type="email"
              placeholder="Votre adresse mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="w-full p-4 bg-transparent border border-white text-white font-sans text-xl mt-2 placeholder-[#E8E2D9] box-border disabled:opacity-50 outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              style={{ backgroundColor: '#E8E2D9', color: '#1a253c', borderRadius: '0', padding:'20px 16px' ,fontSize:'18px' }}

              className="w-full py-5 border-none font-medium text-2xl mt-3 cursor-pointer text-left disabled:opacity-60 transition-colors duration-200 px-4">

              {loading ? 'Envoi...' : 'Confirmer'}
            </button>
          </form>
          {message && (
            <p className="mt-3 text-sm font-sans text-green-400">
              {message}
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 pt-5 flex flex-row justify-between items-center flex-nowrap gap-5">

        <div className="flex flex-row items-center flex-nowrap gap-4 shrink min-w-0">
          <span className="flex items-center whitespace-nowrap font-sans font-medium text-[#E8E2D9] text-lg">
            <img src={locationIcon} alt="Localisation" className="w-[22px] h-auto mr-2 shrink-0" />
            258 Elisabeth Ava, CA
          </span>
          <span className="text-white/30 text-xl shrink-0">|</span>
          <span className="flex items-center whitespace-nowrap font-sans font-medium text-[#E8E2D9] text-lg">
            <img src={phoneIcon} alt="Téléphone" className="w-[22px] h-auto mr-2 shrink-0" />
            +569 2316 2156
          </span>
          <span className="text-white/30 text-xl shrink-0">|</span>
          <span className="flex items-center whitespace-nowrap font-sans font-medium text-[#E8E2D9] text-lg">
            <img src={mailIcon} alt="Mail" className="w-[22px] h-auto mr-2 shrink-0" />
            hotel@gmail.com
          </span>
        </div>

        <div className="flex flex-row items-center gap-3 shrink-0">
          <span className="font-serif font-bold text-[22px] text-white whitespace-nowrap">
            Suivez-nous
          </span>
          <div className="flex flex-row items-center gap-2">
            {[
              { icon: <FaFacebookF />, href: 'https://facebook.com' },
              { icon: <FaTwitter />,   href: 'https://twitter.com' },
              { icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
              { icon: <FaInstagram />, href: 'https://instagram.com' },
            ].map(({ icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="!border-white rounded-full w-8 h-8 flex items-center justify-center !text-white cursor-pointer transition-all duration-300 hover:bg-white hover:!text-[#1a253c]"
                style={{ border: '1px solid white', borderRadius: '50%', color: 'white' }}

              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;