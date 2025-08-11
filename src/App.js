import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        {/* Logo */}
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/vettoriale.png" alt="My Home Immobiliare" className="logo" />
        </a>

        {/* Links desktop */}
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#immobili" className="nav-link">Immobili</a>
          <a href="#servizi" className="nav-link">Servizi</a>
          <a href="#contatti" className="nav-link">Contatti</a>
        </div>

        {/* Hamburger mobile */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Dropdown mobile */}
        {menuOpen && (
          <div className="menu">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#immobili" onClick={() => setMenuOpen(false)}>Immobili</a>
            <a href="#servizi" onClick={() => setMenuOpen(false)}>Servizi</a>
            <a href="#contatti" onClick={() => setMenuOpen(false)}>Contatti</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header
        id="home"
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
        <div className="hero-overlay"></div>

        <div className="hero-inner" style={{ padding: "0 16px" }}>
          {/* NASCONDERE SOLO SU MOBILE */}
          <h1
            className="hero-title hide-mobile"
            style={{
              fontSize: "clamp(28px, 6vw, 52px)",
              fontWeight: 700,
              textShadow: "0 2px 16px rgba(0,0,0,.6)",
              margin: 0,
            }}
          >
            Ogni casa una storia. La tua!
          </h1>

          <p
            className="hero-sub"
            style={{
              marginTop: 12,
              fontSize: "clamp(14px, 3.5vw, 18px)",
              opacity: 0.95,
              textShadow: "0 1px 8px rgba(0,0,0,.5)",
            }}
          >
            Trova subito la tua casa
          </p>

          {/* SEARCH BAR */}
          <div
            className="search"
            style={{
              marginTop: 20,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr auto",
              gap: 10,
              width: "min(980px, 100%)",
              background: "rgba(0,0,0,.35)",
              padding: 12,
              borderRadius: 12,
              backdropFilter: "blur(4px)",
            }}
          >
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
              <option value="monolocale">Monolocale</option>
            </select>

            <input
              className="search-input"
              type="text"
              placeholder="Città, indirizzo o CAP"
            />

            <button className="search-button">Cerca</button>
          </div>
        </div>
      </header>

      {/* IMMOBILI */}
      <main id="immobili" className="main">
        <section className="container">
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
                <div className="card-media" style={{ aspectRatio: "16/9", background: "#f3f4f6" }}>
                  <img
                    src={`/${casa.img}`}
                    alt={casa.titolo}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 14 }}>
                  <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>{casa.titolo}</h3>
                  <p className="card-badge">{casa.info}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* SERVIZI */}
      <section id="servizi" className="container" style={{ padding: "48px 16px" }}>
        <h2 style={{ margin: "0 0 16px" }}>Servizi</h2>
        <p>
          Valutazioni, consulenza mutuo, home staging e gestione pratiche. Contattaci per un preventivo.
        </p>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="container" style={{ padding: "48px 16px" }}>
        <h2 style={{ margin: "0 0 16px" }}>Contatti</h2>
        <p>Email: info@myhomeimmobiliare.com · Tel: +39 000 000 000</p>
      </section>

      <footer style={{ textAlign: "center", padding: "24px 12px", color: "#64748B" }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} My Home Immobiliare - Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
