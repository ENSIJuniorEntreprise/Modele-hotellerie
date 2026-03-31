import { useState } from 'react';
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
      setMessage('Merci, votre inscription a bien été prise en compte !');
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <footer className="bg-[#1a253c] text-white w-full box-border overflow-hidden">

      {/* ── VERSION MOBILE (inchangée) ── */}
      <div className="flex flex-col items-center px-6 py-8 gap-6 sm:hidden">

        <h1 className="font-serif text-3xl text-white border-b border-white pb-2">
          L'Hôtel
        </h1>

        <div className="w-full">
          <p className="font-sans text-[#E8E2D9] text-sm text-center mb-3">
            Recevez nos offres exclusives
          </p>

          <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-2">
            <input
              type="email"
              placeholder="Votre adresse mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="w-full px-3 py-2.5 bg-transparent border border-white text-white text-sm placeholder-[#E8E2D9] outline-none disabled:opacity-50"
            />

            <button
              type="submit"
              disabled={loading}
              style={{ backgroundColor: '#E8E2D9', color: '#1a253c', borderRadius: '0' }}
              className="w-full py-2.5 text-sm font-medium cursor-pointer disabled:opacity-60"
            >
              {loading ? 'Envoi...' : 'Confirmer'}
            </button>
          </form>

          {message && (
            <p className="mt-2 text-xs text-green-400 text-center">
              {message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-serif text-sm text-white">Suivez-nous</span>

          {[
            { icon: <FaFacebookF />, href: '#' },
            { icon: <FaTwitter />, href: '#' },
            { icon: <FaLinkedinIn />, href: '#' },
            { icon: <FaInstagram />, href: '#' },
          ].map(({ icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-7 h-7 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-[#1a253c]"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-1.5 border-t border-white/10 pt-4 w-full">
          <span className="flex items-center gap-1.5 text-[#E8E2D9] text-xs">
            <img src={locationIcon} className="w-3.5" />
            258 Elisabeth Ava, CA
          </span>

          <span className="flex items-center gap-1.5 text-[#E8E2D9] text-xs">
            <img src={phoneIcon} className="w-3.5" />
            +569 2316 2156
          </span>

          <span className="flex items-center gap-1.5 text-[#E8E2D9] text-xs">
            <img src={mailIcon} className="w-3.5" />
            hotel@gmail.com
          </span>
        </div>
      </div>

      {/* ── VERSION DESKTOP RESPONSIVE FIX ── */}
      <div className="hidden sm:block px-[5%] pt-2 pb-4">

        <div className="text-center mb-0">
          <h1 className="font-serif text-[45px] border-b border-white inline-block pb-2 mb-3">
            L'Hôtel
          </h1>

          <p className="text-[#E8E2D9] text-base md:text-xl px-2">
            "L'excellence hôtelière où confort, prestige et raffinement se rencontrent."
          </p>
        </div>

        {/* GRID RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1300px] mx-auto my-10">

          <div>
            <h3 className="font-serif text-[22px] md:text-[25px] mb-6 border-b border-white pb-2">
              Réception
            </h3>
            <p className="text-[#E8E2D9] text-base md:text-xl mb-3">24h/24 , 7j/7</p>
            <p className="text-[#E8E2D9] text-base md:text-xl mb-3">Check-in: 15h00</p>
            <p className="text-[#E8E2D9] text-base md:text-xl mb-3">Check-out: 11h00</p>
          </div>

          <div>
            <h3 className="font-serif text-[22px] md:text-[25px] mb-6 border-b border-white pb-2">
              Découvrir
            </h3>
            <ul>
              <li className="mb-3"><a href="/Chambres" className="text-[#E8E2D9] text-base md:text-xl hover:text-white">Nos Chambres</a></li>
              <li className="mb-3"><a href="/Evenements" className="text-[#E8E2D9] text-base md:text-xl hover:text-white">Evénements</a></li>
              <li className="mb-3"><a href="/Services" className="text-[#E8E2D9] text-base md:text-xl hover:text-white">Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-[22px] md:text-[25px] mb-6 border-b border-white pb-2">
              Informations
            </h3>
            <ul>
              <li className="mb-3"><a href="/Contact" className="text-[#E8E2D9] text-base md:text-xl hover:text-white">Contact</a></li>
              <li className="mb-3"><a href="/Galerie" className="text-[#E8E2D9] text-base md:text-xl hover:text-white">Galerie</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-[22px] md:text-[25px] mb-6 border-b border-white pb-2">
              Rester en contact
            </h3>

            <p className="text-[#E8E2D9] text-base md:text-xl mb-3">
              Laissez-nous votre Email pour recevoir nos offres
            </p>

            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Votre adresse mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 md:p-4 border border-white text-white text-base md:text-xl mt-2"
              />

              <button className="w-full py-4 mt-3 bg-[#E8E2D9] text-[#1a253c] text-lg md:text-2xl">
                {loading ? 'Envoi...' : 'Confirmer'}
              </button>
            </form>

            {message && <p className="mt-3 text-sm text-green-400">{message}</p>}
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-5 flex flex-col lg:flex-row justify-between items-center gap-4">

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-[#E8E2D9] text-sm md:text-lg">

            <span className="flex items-center gap-2">
              <img src={locationIcon} className="w-[18px]" />
              258 Elisabeth Ava, CA
            </span>

            <span className="hidden lg:block text-white/30">|</span>

            <span className="flex items-center gap-2">
              <img src={phoneIcon} className="w-[18px]" />
              +569 2316 2156
            </span>

            <span className="hidden lg:block text-white/30">|</span>

            <span className="flex items-center gap-2">
              <img src={mailIcon} className="w-[18px]" />
              hotel@gmail.com
            </span>

          </div>

          <div className="flex items-center gap-3">
            <span className="font-serif text-lg md:text-[22px]">Suivez-nous</span>

            <div className="flex gap-2">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-[#1a253c]"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;