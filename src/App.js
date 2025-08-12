import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const featured = [
    { img: "immagine1.jpg", titolo: "Appartamento in centro", info: "€250.000 · 3 camere" },
    { img: "immagine2.jpg", titolo: "Villa con piscina", info: "€500.000 · 4 camere" },
    { img: "immagine3.jpg", titolo: "Casale in campagna", info: "€350.000 · 5 camere" },
    { img: "immagine4.jpg", titolo: "Monolocale ristrutturato", info: "€120.000 · 1 camera" },
    { img: "immagine5.jpg", titolo: "Attico con terrazza", info: "€450.000 · 3 camere" },
    { img: "immagine6.jpg", titolo: "Appartamento in periferia", info: "€200.000 · 2 camere" },
  ];

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/vettoriale.png" alt="My Home Immobiliare" className="logo" />
        </a>

        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#immobili" className="nav-link">Immobili</a>
          <a href="#servizi" className="nav-link">Servizi</a>
          <a href="#contatti" className="nav-link">Contatti</a>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span>
        </button>

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
          minHeight: "70vh",
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
        <div className="hero-overlay" />
        <div className="hero-inner">
          {/* NASCONDERE SOLO SU MOBILE */}
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
                    onError={(e) => { e.currentTarget.src = "/hero.jpg"; }}
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{casa.titolo}</h3>
                  <p className="card-badge">{casa.info}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* SERVIZI */}
      <section id="servizi" className="services">
        <div className="container">
          <h2 className="section-title">I nostri servizi</h2>
          <p className="section-intro">
            Supporto completo per vendere, acquistare o affittare con sicurezza e velocità.
          </p>

          <div className="service-grid">
            <article className="service-card">
              <h3>Valutazioni</h3>
              <p>Stime precise basate su dati di mercato aggiornati.</p>
            </article>

            <article className="service-card">
              <h3>Consulenza</h3>
              <p>Soluzioni su misura per vendita, acquisto e locazione.</p>
            </article>

            <article className="service-card">
              <h3>Marketing</h3>
              <p>Foto professionali e promozione mirata online.</p>
            </article>

            <article className="service-card">
              <h3>Pratiche</h3>
              <p>Gestione documenti, contratti e atti notarili.</p>
            </article>

            <article className="service-card">
              <h3>Collaborazioni internazionali</h3>
              <p>Visibilità all’estero grazie a partnership globali.</p>
            </article>
          </div>

          <div className="contact-strip">
            <h3>Contattaci</h3>
            <p>
              <a href="mailto:agenziaimmobiliare.myhome@gmail.com">agenziaimmobiliare.myhome@gmail.com</a><br />
              <a href="tel:+390735367757">0735 367757</a> • <a href="tel:+393487232091">+39 348 723 2091</a><br />
              <strong>Via XX Settembre 34, San Benedetto del Tronto (AP)</strong>
            </p>
            <a href="#contatti" className="btn-primary">Scrivici ora</a>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="container section">
        <h2>Contatti</h2>
        <p style={{ margin: "8px 0" }}>
          Email: <a href="mailto:agenziaimmobiliare.myhome@gmail.com">agenziaimmobiliare.myhome@gmail.com</a>
        </p>
        <p style={{ margin: "8px 0" }}>Telefono fisso: <a href="tel:+390735367757">0735 367757</a></p>
        <p style={{ margin: "8px 0" }}>Cellulare: <a href="tel:+393487232091">+39 348 723 2091</a></p>
        <p style={{ margin: "8px 0" }}>
          Sede: <strong>Via XX Settembre 34, San Benedetto del Tronto (AP)</strong>
        </p>
      </section>

      <footer style={{ textAlign: "center", padding: "24px 12px", color: "#64748B" }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} My Home Immobiliare - Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
