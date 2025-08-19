import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Annunci vetrina (le immagini devono stare in /public)
  const featured = [
    { img: "immagine1.jpg", titolo: "Appartamento in centro", info: "€250.000 · 3 camere" },
    { img: "immagine2.jpg", titolo: "Villa con piscina", info: "€500.000 · 4 camere" },
    { img: "immagine3.jpg", titolo: "Casale in campagna", info: "€350.000 · 5 camere" },
    { img: "immagine4.jpg", titolo: "Monolocale ristrutturato", info: "€120.000 · 1 camera" },
    { img: "immagine5.jpg", titolo: "Attico con terrazza", info: "€450.000 · 3 camere" },
    { img: "immagine6.jpg", titolo: "Appartamento in periferia", info: "€200.000 · 2 camere" }
  ];

  return (
    <div id="home">
      {/* NAVBAR */}
      <nav className="navbar">
        {/* Logo */}
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/vettoriale.png" alt="My Home Immobiliare" className="logo" />
        </a>

        {/* Bottone hamburger (mobile) */}
        <button
          className="hamburger"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Link: desktop visibili, mobile nel dropdown */}
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
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-inner" style={{ padding: "0 16px" }}>
          {/* Su mobile vogliamo solo la frase sotto */}
          {/* <h1 className="hero-title hide-mobile">Ogni casa, una storia. La tua!</h1> */}
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

      {/* IMMOBILI */}
      <main id="immobili" className="main">
        <section className="container">
          <div className="cards-grid">
            {featured.map((casa, i) => (
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
      <section id="servizi" className="container" style={{ padding: "40px 16px 8px" }}>
        <h2 style={{ textAlign: "center", margin: "0 0 20px" }}>Servizi</h2>

        <div className="cards-grid" style={{ gap: 16 }}>
          <article className="card">
            <div style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>Valutazioni e Analisi</h3>
              <p style={{ marginBottom: 0 }}>
                Stima realistica dell’immobile con dati di mercato aggiornati.
              </p>
            </div>
          </article>

          <article className="card">
            <div style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>Marketing mirato</h3>
              <p style={{ marginBottom: 0 }}>
                Foto/video professionali, portali top e promozione social.
              </p>
            </div>
          </article>

          <article className="card">
            <div style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>Gestione pratiche</h3>
              <p style={{ marginBottom: 0 }}>
                Dalla proposta al rogito: burocrazia, scadenze e documenti.
              </p>
            </div>
          </article>

          <article className="card">
            <div style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>Collaborazioni internazionali</h3>
              <p style={{ marginBottom: 0 }}>
                Visibilità all’estero grazie a partnership globali.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* FOOTER (beige) */}
      <footer id="contatti">
        {/* blocco principale footer */}
        <div
          style={{
            backgroundColor: "#E5E5E0",
            color: "#2D2D2D",
            textAlign: "center",
            padding: "40px 20px"
          }}
        >
          <h3 style={{ marginTop: 0 }}>My Home Immobiliare</h3>
          <p style={{ margin: "6px 0" }}>Via XX Settembre 34, San Benedetto del Tronto (AP)</p>

          <p style={{ margin: "6px 0" }}>
            <a
              href="mailto:info@myhomeimmobiliare.com"
              style={{ color: "#000", textDecoration: "none" }}
            >
              info@myhomeimmobiliare.com
            </a>
          </p>

          <p style={{ margin: "6px 0" }}>
            <a
              href="tel:+390735367757"
              style={{ color: "#000", textDecoration: "none" }}
            >
              0735 367757
            </a>{" "}
            •{" "}
            <a
              href="tel:+393487232091"
              style={{ color: "#000", textDecoration: "none" }}
            >
              +39 348 723 2091
            </a>
          </p>
        </div>

        {/* fascia bassa */}
        <div
          style={{
            backgroundColor: "#D6CEC2",
            color: "#555",
            textAlign: "center",
            padding: "12px 20px",
            fontSize: "14px"
          }}
        >
          © {new Date().getFullYear()} My Home Immobiliare - Tutti i diritti riservati
        </div>
      </footer>
    </div>
  );
}
