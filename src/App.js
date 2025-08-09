import React, { useState } from "react";

export default function App() {
  const [tipo, setTipo] = useState("vendite");
  const [categoria, setCategoria] = useState("");
  const [citta, setCitta] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({ tipo, categoria, citta });
    window.location.href = `/annunci?${params.toString()}`;
  };

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }}>
      <Hero
        tipo={tipo}
        setTipo={setTipo}
        categoria={categoria}
        setCategoria={setCategoria}
        citta={citta}
        setCitta={setCitta}
        onSearch={onSearch}
      />
      <AnnunciInEvidenza />
    </div>
  );
}

/* ---------------- Hero con immagine + ricerca ---------------- */
function Hero({ tipo, setTipo, categoria, setCategoria, citta, setCitta, onSearch }) {
  // Usa l’immagine che carichi in /public/hero.jpg
  const bg = "/hero.jpg";

  return (
    <section
      style={{
        backgroundImage: `linear-gradient( to bottom, rgba(0,0,0,.35), rgba(0,0,0,.5) ), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div style={{ width: "100%", maxWidth: 1100 }}>
        <h1 style={{ fontSize: "clamp(28px, 6vw, 56px)", margin: 0, fontWeight: 700 }}>
          Ogni casa una storia. <span style={{ whiteSpace: "nowrap" }}>La tua!</span>
        </h1>
        <p style={{ opacity: 0.9, marginTop: 8 }}>
          Trova subito l’immobile giusto tra vendite e affitti.
        </p>

        <form
          onSubmit={onSearch}
          style={{
            marginTop: 24,
            background: "rgba(255,255,255,.95)",
            borderRadius: 12,
            padding: 8,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr auto",
            gap: 8,
          }}
        >
          {/* Tipo */}
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} style={selectStyle} aria-label="Tipo">
            <option value="vendite">Vendite</option>
            <option value="affitti">Affitti</option>
          </select>

          {/* Categoria */}
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)} style={selectStyle} aria-label="Categoria">
            <option value="">Qualsiasi categoria</option>
            <option value="appartamento">Appartamento</option>
            <option value="villa">Villa</option>
            <option value="attico">Attico</option>
            <option value="commerciale">Commerciale</option>
          </select>

          {/* Città */}
          <select value={citta} onChange={(e) => setCitta(e.target.value)} style={selectStyle} aria-label="Città">
            <option value="">Tutte le città</option>
            <option value="Milano">Milano</option>
            <option value="Roma">Roma</option>
            <option value="Torino">Torino</option>
            <option value="Bologna">Bologna</option>
            <option value="Napoli">Napoli</option>
            <option value="Firenze">Firenze</option>
          </select>

          {/* Bottone Cerca */}
          <button type="submit" style={searchBtnStyle}>Cerca</button>
        </form>
      </div>
    </section>
  );
}

/* ---------------- Sezione Annunci in evidenza (6 card) ---------------- */
function AnnunciInEvidenza() {
  const annunci = [
    {
      id: 1,
      titolo: "Appartamento moderno in centro",
      prezzo: "€250.000",
      citta: "Milano",
      img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      titolo: "Villa con piscina e giardino",
      prezzo: "€750.000",
      citta: "Roma",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      titolo: "Attico panoramico",
      prezzo: "€420.000",
      citta: "Torino",
      img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      titolo: "Bilocale ristrutturato",
      prezzo: "€189.000",
      citta: "Bologna",
      img: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      titolo: "Trilocale luminoso",
      prezzo: "€315.000",
      citta: "Firenze",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      titolo: "Loft industriale",
      prezzo: "€390.000",
      citta: "Napoli",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section style={{ padding: "40px 20px", maxWidth: 1100, margin: "0 auto" }}>
      <h2 style={{ fontSize: "clamp(22px, 4vw, 32px)", marginBottom: 20 }}>
        Annunci in evidenza
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 20
      }}>
        {annunci.map((annuncio) => (
          <div key={annuncio.id} style={{
            background: "#fff",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}>
            <img
              src={annuncio.img}
              alt={annuncio.titolo}
              style={{ width: "100%", height: 200, objectFit: "cover" }}
              loading="lazy"
            />
            <div style={{ padding: 16 }}>
              <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>{annuncio.titolo}</h3>
              <p style={{ margin: "0 0 4px", fontWeight: "bold", color: "#1f2937" }}>{annuncio.prezzo}</p>
              <p style={{ margin: 0, color: "#555" }}>{annuncio.citta}</p>
              <div style={{ marginTop: 10 }}>
                <a href="/annunci" style={cardBtnStyle}>Vedi dettagli</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Stili inline riutilizzabili ---------------- */
const selectStyle = {
  appearance: "none",
  WebkitAppearance: "none",
  background: "#fff",
  border: "1px solid #d9d9d9",
  borderRadius: 10,
  padding: "12px 14px",
  fontSize: 16,
  color: "#111",
};

const searchBtnStyle = {
  background: "#1f2937",
  color: "white",
  border: "none",
  borderRadius: 10,
  padding: "12px 22px",
  fontSize: 16,
  cursor: "pointer",
  fontWeight: 600,
};

const cardBtnStyle = {
  display: "inline-block",
  background: "#111827",
  color: "white",
  textDecoration: "none",
  padding: "10px 14px",
  borderRadius: 10,
  fontSize: 14,
  fontWeight: 600,
};
