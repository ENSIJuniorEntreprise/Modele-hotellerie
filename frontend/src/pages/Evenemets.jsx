import { useState } from "react";
import "./evenemets.css";

/* ── Event type cards ─────────────────────────────────────── */
const eventTypes = [
  {
    id: 1,
    title: "Shooting Photo",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=85",
    description:
      "Studio professionnel et espaces exterieurs amenages pour vos shootings photo. Lumiere naturelle, decors exclusifs et equipes techniques disponibles sur demande.",
    details: ["Eclairage pro inclus", "Espaces interieurs et exterieurs", "Demi-journee ou journee complete", "Assistance technique"],
  },
  {
    id: 2,
    title: "Ceremonie",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=85",
    description:
      "Salles de ceremonie somptueuses pour vos evenements formels. Decoration sur-mesure, sonorisation et eclairage scene inclus.",
    details: ["Capacite jusqu'a 300 personnes", "Decoration personnalisee", "Sonorisation complete", "Coordination evenementielle"],
  },
  {
    id: 3,
    title: "Conference",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=85",
    description:
      "Salles de conference equipees des derniers equipements audiovisuels pour vos reunions d'affaires et seminaires professionnels.",
    details: ["Ecran & projecteur 4K", "Wifi haut debit", "Catering disponible", "De 10 a 200 participants"],
  },
  {
    id: 4,
    title: "Mariage",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=85",
    description:
      "Faites de votre mariage un souvenir eternel dans nos espaces de luxe. Jardins, salles de reception et suites nuptiales a votre disposition.",
    details: ["Salle de reception 400 pers.", "Jardins prives", "Menu gastronomique", "Suite nuptiale incluse"],
  },
];

/* ── Gallery slides ─────────────────────────────────────────── */
const gallerySlides = [
  [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=85",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=700&q=85",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=85",
  ],
  [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&q=85",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=700&q=85",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&q=85",
  ],
  [
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=85",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=700&q=85",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=85",
  ],
  [
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=85",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&q=85",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=85",
  ],
  [
    "https://images.unsplash.com/photo-1478147427282-58a87a433128?w=400&q=85",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=85",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=400&q=85",
  ],
];

/* ── Icons ──────────────────────────────────────────────────── */
function IconArrowLeft() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
function IconChevron() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ── Flip Card ───────────────────────────────────────────────── */
function FlipCard({ card }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={"ev-flip" + (flipped ? " ev-flip--flipped" : "")}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="ev-flip__inner">
        {/* FRONT */}
        <div className="ev-flip__front">
          <div className="ev-flip__img-wrap">
            <img src={card.image} alt={card.title} className="ev-flip__img" />
            <div className="ev-flip__img-overlay" />
          </div>
          <div className="ev-flip__front-body">
            <p className="ev-flip__front-title">{card.title}</p>
            <span className="ev-flip__hint"></span>
          </div>
        </div>
        {/* BACK */}
        <div className="ev-flip__back">
          <p className="ev-flip__back-tag">{card.title}</p>
          <p className="ev-flip__back-desc">{card.description}</p>
          <ul className="ev-flip__back-list">
            {card.details.map((d) => (
              <li key={d} className="ev-flip__back-item">
                <span className="ev-flip__back-check"><IconCheck /></span>
                {d}
              </li>
            ))}
          </ul>
          <span className="ev-flip__back-close"></span>
        </div>
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT ─────────────────────────────────────────── */
export default function Evenemets() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [form, setForm] = useState({
    nom: "", telephone: "", mail: "", invites: "", type: "", date: "",
  });

  function prevSlide() {
    setCurrentSlide((s) => (s - 1 + gallerySlides.length) % gallerySlides.length);
  }
  function nextSlide() {
    setCurrentSlide((s) => (s + 1) % gallerySlides.length);
  }
  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="ev-page">

      {/* ── HERO ── */}
      <section className="ev-hero">
        <div className="ev-hero__overlay" />
        <div className="ev-hero__content">
          <h1 className="ev-hero__title">Vos Evenements d&apos;Exception</h1>
          <p className="ev-hero__sub">
            Des espaces prestigieux et un service sur-mesure pour faire de chaque
            evenement un moment inoubliable.
          </p>
        </div>
      </section>

      {/* ── EVENT TYPES ── */}
      <section className="ev-types">
        <div className="ev-section-label">
          <span className="ev-label__line" />
          <span className="ev-label__text">Nos Services</span>
          <span className="ev-label__line" />
        </div>
        <h2 className="ev-section-title">Tous Vos Evenements</h2>
        <div className="ev-label__dot-row">
          <span className="ev-label__dot ev-label__dot--line" />
          <span className="ev-label__dot ev-label__dot--gold" />
          <span className="ev-label__dot ev-label__dot--line" />
        </div>
        <div className="ev-types__grid">
          {eventTypes.map((et) => (
            <FlipCard key={et.id} card={et} />
          ))}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="ev-gallery">
        <div className="ev-section-label ev-section-label--light">
          <span className="ev-label__line ev-label__line--gold" />
          <span className="ev-label__text ev-label__text--gold">NOTRE</span>
          <span className="ev-label__line ev-label__line--gold" />
        </div>
        <h2 className="ev-gallery__title">Galerie d&apos;Evenements</h2>
        <div className="ev-label__dot-row">
          <span className="ev-label__dot ev-label__dot--line-lt" />
          <span className="ev-label__dot ev-label__dot--gold" />
          <span className="ev-label__dot ev-label__dot--line-lt" />
        </div>

        <div className="ev-gallery__stage">
          {gallerySlides[currentSlide].map((img, idx) => (
            <div
              key={idx}
              className={
                "ev-gallery__img-wrap" +
                (idx === 1 ? " ev-gallery__img-wrap--center" : " ev-gallery__img-wrap--side")
              }
            >
              <img src={img} alt={"galerie " + idx} className="ev-gallery__img" />
            </div>
          ))}
        </div>

        <div className="ev-gallery__controls">
          <button className="ev-gallery__arrow" onClick={prevSlide}>
            <IconArrowLeft />
          </button>
          <div className="ev-gallery__dots">
            {gallerySlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={"ev-gallery__dot" + (i === currentSlide ? " ev-gallery__dot--active" : "")}
              />
            ))}
          </div>
          <button className="ev-gallery__arrow" onClick={nextSlide}>
            <IconArrowRight />
          </button>
        </div>
      </section>

      {/* ── BOOKING FORM ── */}
      <section className="ev-form-section">
        <h2 className="ev-form__title">Planifiez Votre Evenement</h2>
        <div className="ev-form__grid">
          <div className="ev-form__field">
            <label className="ev-form__label">Nom complet :</label>
            <input type="text" name="nom" placeholder="Nom complet" value={form.nom} onChange={handleForm} className="ev-form__input" />
          </div>
          <div className="ev-form__field">
            <label className="ev-form__label">Numero de telephone :</label>
            <input type="tel" name="telephone" placeholder="+33 789945561233" value={form.telephone} onChange={handleForm} className="ev-form__input" />
          </div>
          <div className="ev-form__field">
            <label className="ev-form__label">Adresse e-mail :</label>
            <input type="email" name="mail" placeholder="adresseemail@gmail.com" value={form.mail} onChange={handleForm} className="ev-form__input" />
          </div>
          <div className="ev-form__field">
            <label className="ev-form__label">Nombre d&apos;invites :</label>
            <input type="text" name="invites" placeholder="10-30 invites" value={form.invites} onChange={handleForm} className="ev-form__input" />
          </div>
          <div className="ev-form__field">
            <label className="ev-form__label">Type d&apos;evenement :</label>
            <div className="ev-form__select-wrap">
              <select name="type" value={form.type} onChange={handleForm} className="ev-form__select">
                <option value="">mariage, reunion, anniversaire...</option>
                <option value="mariage">Mariage</option>
                <option value="reunion">Reunion d&apos;affaires</option>
                <option value="anniversaire">Anniversaire</option>
                <option value="conference">Conference</option>
                <option value="shooting">Shooting photo</option>
                <option value="autre">Autre</option>
              </select>
              <span className="ev-form__select-icon"><IconChevron /></span>
            </div>
          </div>
          <div className="ev-form__field">
            <label className="ev-form__label">Date d&apos;evenement :</label>
            <input type="date" name="date" value={form.date} onChange={handleForm} className="ev-form__input ev-form__input--date" />
          </div>
        </div>
        <div className="ev-form__actions">
          <button
            className="ev-form__btn ev-form__btn--secondary"
            onClick={() => setForm({ nom: "", telephone: "", mail: "", invites: "", type: "", date: "" })}
          >
            Retour
          </button>
          <button className="ev-form__btn ev-form__btn--primary">Confirmer</button>
        </div>
      </section>

    </div>
  );
}
