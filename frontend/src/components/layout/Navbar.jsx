import React, { useState, useEffect, useRef } from 'react';


const PageTransitionOverlay = ({ phase }) => {

  if (phase === 'idle') return null;

  const baseStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    pointerEvents: phase !== 'idle' ? 'all' : 'none',
    fontFamily: "'Playfair Display', serif",
  };

  const curtainStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(160deg, #0d1829 0%, #1a2744 55%, #0f1e38 100%)',
    transformOrigin: 'bottom center',
    animation:
      phase === 'enter'
        ? 'curtainUp 0.7s cubic-bezier(0.76, 0, 0.24, 1) forwards'
        : phase === 'exit'
        ? 'curtainDown 0.7s cubic-bezier(0.76, 0, 0.24, 1) forwards'
        : 'none',
    transform: phase === 'hold' ? 'scaleY(1)' : undefined,
  };

  const shimmerStyle = {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(105deg, transparent 35%, rgba(209,162,67,0.07) 50%, transparent 65%)',
    backgroundSize: '200% 100%',
    animation: phase === 'hold' ? 'shimmer 1.6s ease-in-out infinite' : 'none',
  };

  const logoStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    animation:
      phase === 'enter'
        ? 'logoFadeIn 0.4s ease 0.5s forwards'
        : phase === 'exit'
        ? 'logoFadeOut 0.25s ease forwards'
        : 'none',
    opacity: phase === 'hold' ? 1 : 0,
  };

  return (
    <>
      <style>{`
        @keyframes curtainUp {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes curtainDown {
          from { transform: scaleY(1); }
          to   { transform: scaleY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes logoFadeIn {
          from { opacity: 0; transform: translate(-50%, calc(-50% + 12px)); }
          to   { opacity: 1; transform: translate(-50%, -50%); }
        }
        @keyframes logoFadeOut {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes lineSpreads {
          from { width: 0; }
          to   { width: 48px; }
        }
      `}</style>

      <div style={baseStyle}>
        <div style={curtainStyle}>
          <div style={shimmerStyle} />

          {/* Logo centré pendant la transition */}
          <div style={logoStyle}>
            <div style={{
              fontSize: '13px',
              letterSpacing: '0.45em',
              color: 'rgba(209,162,67,0.7)',
              textTransform: 'uppercase',
              marginBottom: '14px',
              fontFamily: 'sans-serif',
              fontWeight: 700,
            }}>
              — L'Hôtel —
            </div>
            <div style={{
              fontSize: '42px',
              color: '#FAF9F6',
              letterSpacing: '-0.01em',
              lineHeight: 1,
              fontStyle: 'italic',
            }}>
              Bienvenue
            </div>
            <div style={{
              margin: '18px auto 0',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #D1A243, transparent)',
              animation: phase === 'hold' ? 'lineSpreads 0.6s ease 0.1s forwards' : 'none',
              width: phase === 'hold' ? undefined : 0,
            }} />
          </div>

          {/* Coins décoratifs */}
          {[
            { top: 32, left: 32 },
            { top: 32, right: 32 },
            { bottom: 32, left: 32 },
            { bottom: 32, right: 32 },
          ].map((pos, i) => (
            <div key={i} style={{
              position: 'absolute',
              ...pos,
              width: 28,
              height: 28,
              borderTop: i < 2 ? '1px solid rgba(209,162,67,0.25)' : 'none',
              borderBottom: i >= 2 ? '1px solid rgba(209,162,67,0.25)' : 'none',
              borderLeft: i % 2 === 0 ? '1px solid rgba(209,162,67,0.25)' : 'none',
              borderRight: i % 2 === 1 ? '1px solid rgba(209,162,67,0.25)' : 'none',
            }} />
          ))}
        </div>
      </div>
    </>
  );
};


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState('idle'); // idle | enter | hold | exit
  const pendingHref = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (transitionPhase !== 'idle') return;

    pendingHref.current = href;
    setTransitionPhase('enter');

    setTimeout(() => {
      setTransitionPhase('hold');

      setTimeout(() => {
 
        setTransitionPhase('exit');

        setTimeout(() => {
          setTransitionPhase('idle');
        }, 750);
      }, 900);
    }, 700);
  };

  const navItems = ['Accueil', 'Chambres', 'Services', 'Événements', 'Galerie', 'Contact'];

  return (
    <>
      <PageTransitionOverlay phase={transitionPhase} />

      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 flex items-center justify-between px-6 md:px-12 text-white ${
        isScrolled ? 'bg-[#1a2744]/95 shadow-lg backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}>
        {/* Logo */}
        <div
          className="text-3xl font-serif tracking-tighter cursor-pointer hover:text-[#D1A243] transition-colors duration-300"
          style={{ fontFamily: "'Playfair Display', serif" }}
          onClick={(e) => handleNavClick(e, '/accueil')}
        >
          L'Hôtel
        </div>

        {/* Menu */}
        <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold tracking-[0.3em] uppercase">
          {navItems.map((item) => {
            const href = item === 'Événements' ? '/evenements' : `/${item.toLowerCase()}`;
            return (
              <a
                key={item}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="relative group transition-colors hover:text-[#D1A243]"
              >
                {item}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D1A243] transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
        </div>

        {/* Bouton Réserver */}
        <button
          onClick={(e) => handleNavClick(e, '/reservation')}
          className="border border-white/40 px-8 py-2.5 rounded-xl uppercase tracking-[0.2em] text-[10px] font-bold transition-all duration-300 hover:bg-[#D1A243] hover:text-white hover:border-[#D1A243]"
        >
          Réserver
        </button>
      </nav>
    </>
  );
};

export default Navbar;
