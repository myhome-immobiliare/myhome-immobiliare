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
    </div>
  );
}

function Hero({ tipo, setTipo, categoria, setCategoria, citta, setCitta, onSearch }) {
  const bg = "/hero.jpg"; // <- usa l'immagine che hai caricato in /public

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
          Oggi casa una storia. <span style={{ whiteSpace: "nowrap" }}>La tua!</span>
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
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} style={selectStyle} aria-label="Tipo">
            <option value="vendite">Vendite</option>
            <option value="affitti">Affitti</option>
          </select>

          <select value={categoria} onChange={(e) => setCategoria(e.target.value)} style={selectStyle} aria-label="Categoria">
            <option value="">Qualsiasi categoria</option>
            <option value="appartamento">Appartamento</option>
            <option value="villa">Villa</option>
            <option value="attico">Attico</option>
            <option value="commerciale">Commerciale</option>
          </select>

          <select value={citta} onChange={(e) => setCitta(e.target.value)} style={selectStyle} aria-label="Città">
            <option value="">Tutte le città</option>
            <option value="Milano">Milano</option>
            <option value="Roma">Roma</option>
            <option value="Torino">Torino</option>
            <option value="Bologna">Bologna</option>
          </select>

          <button type="submit" style={searchBtnStyle}>Cerca</button>
        </form>
      </div>
    </section>
  );
}

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
