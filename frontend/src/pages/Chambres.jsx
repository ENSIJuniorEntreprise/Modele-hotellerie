import { useState } from "react";
import "./chambres.css";

const rooms = [
  {
    id: 1,
    category: "classique",
    tag: "CLASSIQUE",
    title: "Chambre Classique",
    description: "Confort et simplicite pour un sejour agreable. Decoration sobre et elegante.",
    price: 180,
    guests: 2,
    size: 25,
    amenities: ["Wifi", "Climatisation", "TV HD", "Mini-bar"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=85",
  },
  {
    id: 2,
    category: "deluxe",
    tag: "DELUXE",
    title: "Chambre Deluxe",
    description: "Elegance et confort pour un sejour raffine. Vue sur les jardins, literie haut de gamme.",
    price: 280,
    guests: 2,
    size: 35,
    amenities: ["Wifi", "Climatisation", "TV HD", "Mini-bar"],
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=900&q=85",
  },
  {
    id: 3,
    category: "suites",
    tag: "SUITE",
    title: "Suite Junior",
    description: "Espace et confort avec un coin salon pour se detendre apres une journee bien remplie.",
    price: 380,
    guests: 2,
    size: 45,
    amenities: ["Wifi", "Climatisation", "TV HD", "Mini-bar"],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=85",
  },
  {
    id: 4,
    category: "suites",
    tag: "SUITE",
    title: "Suite Executive",
    description: "Espace genereux avec salon prive, ideal pour les voyageurs d'affaires exigeants.",
    price: 450,
    guests: 2,
    size: 55,
    amenities: ["Wifi", "Climatisation", "TV HD", "Mini-bar"],
    image: "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=900&q=85",
  },
  {
    id: 5,
    category: "prestige",
    tag: "PRESTIGE",
    title: "Suite Prestige",
    description: "Le summum du luxe avec terrasse privee, jacuzzi et service de majordome dedie.",
    price: 299,
    guests: 4,
    size: 85,
    amenities: ["Wifi", "Climatisation", "TV HD", "Mini-bar"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=85",
  },
  {
    id: 6,
    category: "prestige",
    tag: "PRESTIGE",
    title: "Suite Royale",
    description: "Notre suite la plus exclusive avec vue panoramique, sauna privee et service personnalise.",
    price: 1200,
    guests: 4,
    size: 120,
    amenities: ["Wifi", "Climatisation", "TV HD", "Mini-bar"],
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=900&q=85",
  },
];

const categories = [
  { key: "toutes",    label: "TOUTES"    },
  { key: "classique", label: "CLASSIQUE" },
  { key: "deluxe",    label: "DELUXE"    },
  { key: "suites",    label: "SUITES"    },
  { key: "prestige",  label: "PRESTIGE"  },
];

function IconUsers() {
  return (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconSize() {
  return (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

function IconWifi() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="currentColor" />
    </svg>
  );
}

function IconAC() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="8" rx="2" />
      <path d="M7 11v4M12 11v4M17 11v4M5 19h14" />
    </svg>
  );
}

function IconTV() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}

function IconMinibar() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
      <line x1="12" y1="2" x2="12" y2="6" />
      <path d="M8 6h8l1 12H7L8 6z" />
      <path d="M9 10h6" />
    </svg>
  );
}

const amenityConfig = {
  "Wifi":          { icon: <IconWifi />,    label: "Wifi"          },
  "Climatisation": { icon: <IconAC />,      label: "Climatisation" },
  "TV HD":         { icon: <IconTV />,      label: "TV HD"         },
  "Mini-bar":      { icon: <IconMinibar />, label: "Mini-bar"      },
};

export default function Chambres() {
  const [activeCategory, setActiveCategory] = useState("toutes");

  const filtered =
    activeCategory === "toutes"
      ? rooms
      : rooms.filter((r) => r.category === activeCategory);

  return (
    <div className="ch-page">

      {/* ── HERO ── */}
      <section className="ch-hero">
  <div className="ch-hero__bg">
    <div className="ch-hero__slide ch-hero__slide--1" />
    <div className="ch-hero__slide ch-hero__slide--2" />
    <div className="ch-hero__slide ch-hero__slide--3" />
    <div className="ch-hero__slide ch-hero__slide--4" />
  </div>
  <div className="ch-hero__overlay" />
  <div className="ch-hero__mesh" />
  <div className="ch-hero__content">
          
          <h1 className="ch-hero__title">Nos Chambres &amp;Suites</h1>
          <p className="ch-hero__sub">
            Découvrez nos hebergements d&apos;exception, concus pour vous offrir
            un sejour inoubliable alliant confort , elegance et serenite.
          </p>
        </div>
      </section>

      {/* ── CATEGORY NAV — fond midnight, style image 3 ── */}
      <nav className="ch-nav">
        <div className="ch-nav__inner">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={
                "ch-nav__btn" +
                (activeCategory === cat.key ? " ch-nav__btn--active" : "")
              }
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── ROOMS GRID ── */}
      <section className="ch-section">
        <div className="ch-grid">
          {filtered.map((room, i) => (
            <article
              key={room.id}
              className="ch-card"
              style={{ animationDelay: i * 80 + "ms" }}
            >
              {/* IMAGE */}
              <div className="ch-card__img-wrap">
                
                <img src={room.image} alt={room.title} className="ch-card__img" />
                <div className="ch-card__badge">
                  
                  <span className="ch-badge__label">A PARTIR DE</span>
                  <span className="ch-badge__price">
                    <span className="ch-badge__euro">EUR </span>{room.price}
                  </span>
                  <span className="ch-badge__night">/ nuit</span>
                </div>
              </div>
              

              {/* BODY — fond ivory clair, texte sombre */}
              <div className="ch-card__body">
                <h2 className="ch-card__title">{room.title}</h2>
                <p className="ch-card__desc">{room.description}</p>

                <div className="ch-card__meta">
                  <span className="ch-meta__item">
                    <IconUsers />
                    <span>{room.guests} pers.</span>
                  </span>
                  <span className="ch-meta__item">
                    <IconSize />
                    <span>{room.size} m²</span>
                  </span>
                </div>

                <div className="ch-card__sep" />

                <div className="ch-card__amenities">
                  {room.amenities.map((a) => {
                    const cfg = amenityConfig[a];
                    return (
                      <span key={a} className="ch-amenity">
                        {cfg ? cfg.icon : null}
                        <span>{cfg ? cfg.label : a}</span>
                      </span>
                    );
                  })}
                </div>

                <button className="ch-card__cta">
                  RESERVER CETTE CHAMBRE
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}

