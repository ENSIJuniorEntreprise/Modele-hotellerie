import { useState } from "react";

const chambres = [
  {
    id: 1,
    nom: "Chambre Classique",
    description: "La chambre classique offre une ambiance chaleureuse et privée, pensée et aménagée avec soin pour un séjour agréable.",
    prix: 120,
    categorie: "CLASSIQUE",
    places: 2,
    superficie: 18,
  },
  {
    id: 2,
    nom: "Suite Prestige",
    description: "La suite offre de nombreux avantages, l'espace, le luxe, la beauté et la magnificence de détails.",
    prix: 280,
    categorie: "PRESTIGE",
    places: 2,
    superficie: 45,
  },
  {
    id: 3,
    nom: "Chambre Deluxe",
    description: "Élégante et confort pour un séjour raffiné. Profitez des jardins, baies vitrées et du calme.",
    prix: 180,
    categorie: "DELUXE",
    places: 2,
    superficie: 30,
  },
  {
    id: 4,
    nom: "Chambre Junior",
    description: "La chambre junior offre tout le confort attendu, alliant espace et raffinement dans les moindres détails.",
    prix: 150,
    categorie: "JUNIOR",
    places: 2,
    superficie: 25,
  },
  {
    id: 5,
    nom: "Suite Executive",
    description: "La suite executive vous offrira un séjour dans les meilleures conditions et atmosphères.",
    prix: 350,
    categorie: "EXECUTIVE",
    places: 2,
    superficie: 60,
  },
  {
    id: 6,
    nom: "Chambre Familiale",
    description: "Élégante et confortable pour toute la famille. Vue sur les jardins et tout le confort de la gamme.",
    prix: 220,
    categorie: "FAMILIALE",
    places: 4,
    superficie: 50,
  },
];

const categories = ["TOUTES", "CLASSIQUE", "PRESTIGE", "DELUXE", "JUNIOR", "EXECUTIVE", "FAMILIALE"];

function ChambreCard({ chambre }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "4px",
        overflow: "hidden",
        border: "1px solid #eee",
        transition: "transform .2s, box-shadow .2s",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.10)" : "none",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "200px", background: "#d5cdc0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: "13px", color: "#888" }}>📷 {chambre.nom}</span>
        <span style={{
          position: "absolute", top: "12px", right: "12px",
          background: "rgba(26,39,68,0.85)", color: "#fff",
          fontSize: "11px", fontWeight: "600", padding: "4px 10px",
          borderRadius: "2px", letterSpacing: "0.06em",
        }}>
          {chambre.categorie}
        </span>
      </div>

      {/* Contenu */}
      <div style={{ padding: "18px 20px 20px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "700", margin: "0 0 8px", color: "#1a2744" }}>
          {chambre.nom}
        </h3>
        <p style={{ fontSize: "13px", color: "#666", lineHeight: "1.65", margin: "0 0 12px" }}>
          {chambre.description}
        </p>

        {/* Infos */}
        <div style={{
          display: "flex", gap: "16px", fontSize: "12px", color: "#888",
          paddingTop: "12px", borderTop: "1px solid #f0f0f0", marginBottom: "16px"
        }}>
          <span>👥 {chambre.places} pers.</span>
          <span>📐 {chambre.superficie} m²</span>
        </div>

        {/* Prix + bouton */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <span style={{ fontSize: "20px", fontWeight: "700", color: "#1a2744" }}>{chambre.prix} €</span>
            <span style={{ fontSize: "11px", color: "#999" }}> / nuit</span>
          </div>
          <button style={{
            background: "#1a2744", color: "#fff", border: "none",
            padding: "9px 18px", borderRadius: "3px", fontSize: "12px",
            fontWeight: "600", letterSpacing: "0.06em", cursor: "pointer",
          }}>
            RÉSERVER
          </button>
        </div>
      </div>
    </div>
  );
}

function Chambres() {
  const [categorieActive, setCategorieActive] = useState("TOUTES");

  const chambresAffichees = categorieActive === "TOUTES"
    ? chambres
    : chambres.filter((c) => c.categorie === categorieActive);

  return (
    <section style={{ fontFamily: "'Segoe UI', sans-serif", color: "#1a1a2e", backgroundColor: "#f9f9f9" }}>

      {/* Hero */}
      <div style={{
        background: "linear-gradient(rgba(10,20,60,0.65), rgba(10,20,60,0.65))",
        backgroundColor: "#1a2744", color: "#fff",
        padding: "80px 40px", textAlign: "center",
      }}>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "700", marginBottom: "16px" }}>
          Nos Chambres &amp; Suites
        </h1>
        <p style={{ fontSize: "15px", opacity: 0.8, maxWidth: "560px", margin: "0 auto", lineHeight: "1.7" }}>
          Découvrez nos hébergements d'exception, conçus pour vous offrir un séjour inoubliable alliant confort, élégance et sérénité.
        </p>
      </div>

      {/* Filtres */}
      <div style={{
        display: "flex", justifyContent: "center", flexWrap: "wrap",
        background: "#fff", borderBottom: "2px solid #e8e8e8", padding: "0 20px",
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategorieActive(cat)}
            style={{
              padding: "16px 20px", border: "none", cursor: "pointer",
              fontSize: "12px", fontWeight: "600", letterSpacing: "0.08em",
              background: "transparent", marginBottom: "-2px",
              borderBottom: categorieActive === cat ? "2px solid #1a2744" : "2px solid transparent",
              color: categorieActive === cat ? "#1a2744" : "#888",
              transition: "all .2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "24px", padding: "40px",
        maxWidth: "1200px", margin: "0 auto",
      }}>
        {chambresAffichees.map((chambre) => (
          <ChambreCard key={chambre.id} chambre={chambre} />
        ))}
      </div>

    </section>
  );
}

export default Chambres;
