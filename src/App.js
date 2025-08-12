import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // immagini provvisorie (devono esistere in /public)
  const featured = [
    { img: "immagine1.jpg", titolo: "Appartamento in centro", info: "€250.000 • 3 camere" },
    { img: "immagine2.jpg", titolo: "Villa con piscina",       info: "€500.000 • 4 camere" },
    { img: "immagine3.jpg", titolo: "Casale in campagna",      info: "€350.000 • 5 camere" },
    { img: "immagine4.jpg", titolo: "Monolocale ristrutturato",info: "€120.000 • 1 camera" },
    { img: "immagine5.jpg", titolo: "Attico con terrazza",     info: "€450.000 • 3 camere" },
    { img: "immagine6.jpg", titolo: "Appartamento in periferia", info: "€200.000 • 2 camere" },
  ];

  return (
    <div id="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/vettoriale.png" alt="My Home Immobiliare" className="logo" />
        </a>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Link: desktop sempre visibili, mobile nel dropdown */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#immobili" className="nav-link" onClick={() => setMenuOpen(false)}>Immobili</a>
          <a href="#servizi" className="nav-link" onClick={() => setMenuOpen(false)}>Servizi</a>
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
        {/* overlay leggero per contrasto */}
        <div className="hero-overlay" />

        <div className="hero-inner" style={{ padding: "0 16px" }}>
          {/* Titolo nascosto su mobile (classe .hide-mobile in CSS) */}
          <h1 className="hero-title hide-mobile">Ogni casa una storia. La tua!</h1>
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

      {/* IMMOBILI IN EVIDENZA */}
      <main id="immobili" className="main">
        <section className="container">
          <div className="cards-grid">
            {featured.map((casa, i) => (
              <article key={i} className="card">
                <div className="card-media">
                  <img
                    src={`/${casa.img}`}
                    alt={casa.titolo}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
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

      {/* FASCIA SOTTO (SERVIZI + CONTATTI) */}
      <div className="underbar">
        {/* SERVIZI */}
        <section id="servizi" className="container">
          <div className="services">
            <div className="service">
              <h3>Intermediazione immobiliare</h3>
              <p>Valutazione e vendita dell’immobile con assistenza completa.</p>
            </div>
            <div className="service">
              <h3>Affitti residenziali</h3>
              <p>Ricerca inquilini affidabili e gestione pratiche di locazione.</p>
            </div>
            <div className="service">
              <h3>Home staging & photo</h3>
              <p>Allestimento e shooting per valorizzare la tua casa.</p>
            </div>
            <div className="service">
              <h3>Collaborazioni internazionali</h3>
              <p>Visibilità all’estero grazie a partnership globali.</p>
            </div>
          </div>
        </section>

        {/* CONTATTI (centrati, senza bottone) */}
        <section id="contatti" className="container">
          <div className="contact-card">
            <h2>Contattaci</h2>
            <div className="contact-lines">
              <a href="mailto:agenziaimmobiliare.myhome@gmail.com">
                agenziaimmobiliare.myhome@gmail.com
              </a>
              <p>0735 367757 • +39 348 723 2091</p>
              <p className="address">
                Via XX Settembre 34, San Benedetto del Tronto (AP)
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "24px 12px", color: "#6a748b" }}>
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} My Home Immobiliare — Tutti i diritti riservati.
        </p>
      </footer>
    </div>
  );
}
