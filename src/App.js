import React, { useState } from "react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <img src="/vettoriale.png" alt="My Home Immobiliare" className="logo" />

        {/* Hamburger (solo mobile) */}
        <button
          className="hamburger"
          aria-label="Apri menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </button>

        {/* Link */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#annunci" className="nav-link" onClick={() => setMenuOpen(false)}>Annunci</a>
          <a href="#contatti" className="nav-link" onClick={() => setMenuOpen(false)}>Contatti</a>
        </div>
      </nav>

      {/* HERO */}
      <header
        className="hero"
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "grid",
          placeItems: "center",
          color: "#fff",
          textAlign: "center",
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-inner">
          <h1 className="hero-title">Ogni casa una storia. La tua!</h1>
          <p className="hero-sub">Trova subito la tua casa</p>

          {/* SEARCH BAR */}
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

      {/* ANNUNCI IN EVIDENZA */}
      <main style={{ padding: "28px 16px 56px" }}>
        <section id="annunci" style={{ maxWidth: 1160, margin: "0 auto" }}>
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
                <div className="card-img">
                  <img src={casa.img} alt={casa.titolo} />
                </div>
                <div className="card-body">
                  <h3>{casa.titolo}</h3>
                  <p className="card-badge">{casa.info}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contatti" style={{ textAlign: "center", padding: "24px 12px", color: "#64748B" }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} My Home Immobiliare · Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
};

export default App;
