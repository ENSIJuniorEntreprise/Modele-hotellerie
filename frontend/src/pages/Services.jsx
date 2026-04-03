import { useEffect, useRef } from "react";
import "./Services.css";

// ─── DATA ────────────────────────────────────────────────────────────────────

const restaurants = [
  {
    title: "Restaurant Buffet",
    image: "image-services/buffet.png",
    items: [
      "Saveurs internationales raffinées",
      "Produits frais du jour",
      "Ateliers culinaires en direct",
    ],
  },
  {
    title: "Restaurant à la carte",
    image: "image-services/à la carte.png",
    items: [
      "Carte gastronomique saisonnière",
      "Service élégant personnalisé",
      "Ambiance feutrée élégante",
    ],
  },
  {
    title: "Restaurant Snack",
    image: "image-services/snack.png",
    items: [
      "Restaurant vue mer panoramique",
      "Carte légère servie en continu",
      "Cadre idyllique",
    ],
  },
];

const bars = [
  {
    title: "Lounge Bar",
    image: "image-services/lounge.png",
    items: [
      "Cocktails signatures exclusifs",
      "Spiritueux rares sélectionnés",
      "Ambiance feutrée nocturne",
      "Tapas aux inspirations méditerranéennes",
      "Salon chic aux assises profondes",
    ],
  },
  {
    title: "Pool Bar",
    image: "image-services/pool.png",
    items: [
      "Boissons premium au bord de l'eau",
      "Jus frais pressés exotiques",
      "Créations glacées fruitées",
      "Service au transat",
      "Atmosphère estivale élégante",
    ],
  },
];

const spaImages = [
  "image-services/spa.png",
  "image-services/spa2.jpg",
  "image-services/spa3.jpg",
  "image-services/spa4.jpg",
  "image-services/spa5.jpg",
];

const spaServices = [
  { icon: "image-services/hand.png",                    label: "Hammam"   },
  { icon: "image-services/body-massage.png",            label: "Massage"  },
  { icon: "image-services/body-scrub.png",              label: "Gommage"  },
  { icon: "image-services/pedicure.png",                label: "Pédicure" },
  { icon: "image-services/steam.png",                   label: "Sauna"    },
  { icon: "image-services/swimming-silhouette.png",     label: "Jaccuzzi" },
];

const activities = [
  { icon: "image-services/jet ski.png",     label: "Jet Ski"       },
  { icon: "image-services/pirate.png",      label: "Bateau Pirate" },
  { icon: "image-services/banana.png",      label: "Banana Ski"    },
  { icon: "image-services/camel tour.png",  label: "Camel Tour"    },
  { icon: "image-services/parachute.png",   label: "Parachute"     },
  { icon: "image-services/quad.png",        label: "Quad"          },
];

const fitness = [
  {
    title: "Fitness",
    image: "image-services/fitness.png",
    items: [
      "Équipements haut de gamme",
      "Coaching privé sur demande",
      "Espace lumineux épuré",
    ],
  },
  {
    title: "Piscine",
    image: "image-services/piscine.png",
    items: [
      "Piscine extérieure à débordement",
      "Transats confort premium",
      "Rafraîchissements à la demande",
    ],
  },
  {
    title: "Piscine Couverte",
    image: "image-services/piscine couverte.png",
    items: [
      "Piscine intérieure chauffée",
      "Lumière naturelle apaisante",
      "Atmosphère calme toute saison",
    ],
  },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function SectionHeader({ subtitle, title, light = false }) {
  return (
    <div className="section-title-group">
      <p className="section-subtitle">{subtitle}</p>
      <h2 className="section-title" style={light ? { color: "var(--color-offwhite)" } : {}}>
        {title}
      </h2>
    </div>
  );
}

/** Flip card petite (restaurants / fitness) */
function FlipCard({ title, image, items }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="card-front">
          <div className="card-title">{title}</div>
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="card-back">
          <h2 className="back-title">{title}</h2>
          <ul className="card-list">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Flip card grande (bars) */
function FlipCard1({ title, image, items }) {
  return (
    <div className="flip-card1">
      <div className="flip-card-inner1">
        <div className="card-front1">
          <div className="card-title1">{title}</div>
          <div className="card-image1">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="card-back1">
          <h2 className="back-title1">{title}</h2>
          <ul className="card-list1">
            {items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Slider spa */
function SpaSlider({ images }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const SLIDE_WIDTH = 1360;

    function moveSlide() {
      container.style.transition = "transform 0.8s ease-in-out";
      container.style.transform = `translateX(-${SLIDE_WIDTH}px)`;

      setTimeout(() => {
        container.appendChild(container.firstElementChild);
        container.style.transition = "none";
        container.style.transform = "translateX(0)";
      }, 800);
    }

    const interval = setInterval(moveSlide, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div className="slides" ref={containerRef}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`spa-${i}`} />
        ))}
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function Services() {
  return (
    <div>

      {/* ── HERO ── */}
      <section id="section-hero">
        <div className="hero-wrapper">
          <img src="image-services/bg.png" alt="Hero Background" className="hero-bg" />
          <div className="hero-overlay">
            <div className="hero-content container">
              <p className="hero-subtitle">NOS SERVICES</p>
              <h1 className="hero-title">SERVICES HÔTELIERS D'EXCEPTION</h1>
              <p className="hero-desc">Des expériences pensées pour un confort absolu</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESTAURANTS ── */}
      <section id="section-restaurants">
        <div className="container">
          <SectionHeader subtitle="DÉCOUVRIR NOS" title="Restaurants" />
          <div className="restaurants-grid">
            {restaurants.map((r) => (
              <FlipCard key={r.title} {...r} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BARS ── */}
      <section id="section-bars">
        <div className="container">
          <SectionHeader subtitle="DÉCOUVRIR NOS" title="Bars" light />
          <div className="bars-grid">
            {bars.map((b) => (
              <FlipCard1 key={b.title} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SPA ── */}
      <section id="section-spa">
        <div className="container">
          <SectionHeader subtitle="DÉCOUVRIR NOTRE" title="Spa" />
          <div className="spa-layout">
            <SpaSlider images={spaImages} />
            <div className="services">
              {spaServices.map((s) => (
                <div key={s.label} className="card3">
                  <img src={s.icon} alt={s.label} />
                  <span className="service-title3">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTIVITÉS ── */}
      <section id="section-activities">
        <div className="container">
          <SectionHeader subtitle="DÉCOUVRIR NOS" title="Activités & Aventures" light />
          <div className="activities">
            {activities.map((a) => (
              <div key={a.label} className="card4">
                <img src={a.icon} alt={a.label} />
                <h3 className="title4">{a.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FITNESS & PISCINE ── */}
      <section id="section-fitness">
        <div className="container1">
          <SectionHeader subtitle="DÉCOUVRIR NOS" title="Fitness & Piscine" />
          <div className="restaurants-grid">
            {fitness.map((f) => (
              <FlipCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
