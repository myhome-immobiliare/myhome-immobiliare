import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="brand">
          <img src="/vettoriale.png" alt="My Home Immobiliare" className="logo" />
        </a>

        {/* Hamburger (mobile) */}
        <button
          className="hamburger"
          aria-label="Apri menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          ☰
        </button>

        {/* Link */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#immobili" className="nav-link" onClick={() => setMenuOpen(false)}>Immobili</a>
          <a href="#servizi" className="nav-link" onClick={() => setMenuOpen(false)}>Servizi</a>
          <a href="#contatti" className="nav-link" onClick={() => setMenuOpen(false)}>Contatti</a>
        </div>
      </nav>

      {/* HERO / HOME */}
      <header
        className="hero"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "60vh",
          display: "grid",
          placeItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <div className="hero-inner">
          <h1 className="hero-title">Ogni casa una storia. La tua!</h1>
          <p className="hero-sub">Trova subito la tua casa</p>

          {/* Ricerca */}
          <div className="search">
            <select className="search-select" defaultValue="vendite">
              <option value="vendite">Vendite</option>
              <option value="affitti">Affitti</option>
            </select>
            <select className="search-select" defaultValue="tutte">
              <option value="tutte">Tutte le tipologie</option>
              <option value="appartamento">Appartamento</option>
              <option value="villa">Villa</option>
              <option value="attico">Attico</option>
              <option value="casale">Casale</option>
            </select>
            <input className="search-input" type="text" placeholder="Città o zona" />
            <button className="search-button">Cerca</button>
          </div>
        </div>
      </header>

      {/* IMMOBILI */}
      <main style={{ padding: "28px 16px 56px" }}>
        <section id="immobili" className="section">
          <h2 className="section-title">Immobili in evidenza</h2>
          <div className="cards-grid">
            {[
              { img: "immagine1.jpg", titolo: "Appartamento in centro", info: "€250.000 · 3 camere" },
              { img: "immagine2.jpg", titolo: "Villa con piscina", info: "€500.000 · 4 camere" },
              { img: "immagine3.jpg", titolo: "Casale in campagna", info: "€350.000 · 5 camere" },
              { img: "immagine4.jpg", titolo: "Monolocale ristrutturato", info: "€120.000 · 1 camera" },
              { img: "immagine5.jpg", titolo: "Attico con terrazza", info: "€450.000 · 3 camere" },
              { img: "immagine6.jpg", titolo: "Appartamento in periferia", info: "€200.000 · 2 camere" },
            ].map((casa, i) => (
              <article key={i} className="card">
                <div className="card-img"><img src={casa.img} alt={casa.titolo} /></div>
                <div className="card-body">
                  <h3>{casa.titolo}</h3>
                  <p className="card-badge">{casa.info}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SERVIZI */}
        <section id="servizi" className="section alt">
