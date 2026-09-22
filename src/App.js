 import React, { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  // =========================================================
  // IMMOBILI
  // =========================================================

  const featured = [
    {
      img: "IMG20260730105350 copia.jpg",
      titolo: "Dimora Belvedere",
      info: "€750.000 · 330 m² · 4 camere",
      property: "dimora-belvedere"
    },
    {
      img: "immagine2.jpg",
      titolo: "Villa con piscina",
      info: "€500.000 · 4 camere"
    },
    {
      img: "immagine3.jpg",
      titolo: "Casale in campagna",
      info: "€350.000 · 5 camere"
    },
    {
      img: "immagine4.jpg",
      titolo: "Monolocale ristrutturato",
      info: "€120.000 · 1 camera"
    },
    {
      img: "immagine5.jpg",
      titolo: "Attico con terrazza",
      info: "€450.000 · 3 camere"
    },
    {
      img: "immagine6.jpg",
      titolo: "Appartamento in periferia",
      info: "€200.000 · 2 camere"
    }
  ];

  // =========================================================
  // FOTO DIMORA BELVEDERE
  // =========================================================

  const dimoraImages = [
    "IMG20260730094839 copia.jpg",
    "IMG20260730094850 copia.jpg",
    "IMG20260730095020 copia.jpg",
    "IMG20260730095039 copia.jpg",
    "IMG20260730095224 copia.jpg",
    "IMG20260730095456 copia.jpg",
    "IMG20260730095502 copia.jpg",
    "IMG20260730095713 copia.jpg",
    "IMG20260730095758 copia.jpg",
    "IMG20260730100058 copia.jpg",
    "IMG20260730100153 copia.jpg",
    "IMG20260730100359 copia.jpg",
    "IMG20260730100548 copia.jpg",
    "IMG20260730101013_01 copia.jpg",
    "IMG20260730101420 copia.jpg",
    "IMG20260730101457 copia.jpg",
    "IMG20260730101513 copia.jpg",
    "IMG20260730101620 copia.jpg",
    "IMG20260730101636 copia.jpg",
    "IMG20260730101722 copia.jpg",
    "IMG20260730102817 copia.jpg",
    "IMG20260730104356 copia.jpg",
    "IMG20260730104420 copia.jpg",
    "IMG20260730105047 copia.jpg",
    "IMG20260730105350 copia.jpg",
    "IMG20260730105410 copia.jpg",
    "IMG20260730105423 copia.jpg",
    "IMG20260730110451 copia.jpg",
    "IMG20260730110501 copia.jpg"
  ];

  // =========================================================
  // PAGINA DIMORA BELVEDERE
  // =========================================================

  if (selectedProperty === "dimora-belvedere") {
    return (
      <div id="home">

        {/* NAVBAR */}
        <nav className="navbar">

          <a
            href="#home"
            className="brand"
            onClick={() => {
              setSelectedProperty(null);
              setMenuOpen(false);
            }}
          >
            <img
              src="/vettoriale.png"
              alt="My Home Immobiliare"
              className="logo"
            />
          </a>

          <button
            className="hamburger"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a
              href="#home"
              className="nav-link"
              onClick={() => {
                setSelectedProperty(null);
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </a>

            <a
              href="#immobile"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Immobile
            </a>

            <a
              href="#contatti"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Contatti
            </a>
          </div>
        </nav>

        {/* HERO IMMOBILE */}
        <header
          style={{
            position: "relative",
            minHeight: "65vh",
            display: "grid",
            placeItems: "center",
            color: "#fff",
            textAlign: "center",
            backgroundImage:
              "url('/IMG20260730105350 copia.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.58))"
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "100px 20px 40px",
              maxWidth: "900px"
            }}
          >
            <p
              style={{
                fontSize: "15px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "12px"
              }}
            >
              My Home Immobiliare
            </p>

            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                margin: "0 0 12px",
                fontWeight: 600
              }}
            >
              Dimora Belvedere
            </h1>

            <p
              style={{
                fontSize: "20px",
                margin: 0
              }}
            >
              Montalto delle Marche · Ascoli Piceno
            </p>
          </div>
        </header>

        {/* CONTENUTO IMMOBILE */}
        <main id="immobile">

          <section
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "45px 20px 25px"
            }}
          >

            {/* PREZZO */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "30px"
              }}
            >

              <div>
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: 700,
                    marginBottom: "8px"
                  }}
                >
                  €750.000
                </div>

                <div style={{ color: "#666" }}>
                  Dimora in pietra completamente ristrutturata
                </div>
              </div>

              <button
                onClick={() =>
                  document
                    .getElementById("contatti")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  border: "none",
                  background: "#2D2D2D",
                  color: "#fff",
                  padding: "14px 24px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  cursor: "pointer"
                }}
              >
                Richiedi informazioni
              </button>

            </div>

            {/* CARATTERISTICHE */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "12px",
                marginBottom: "50px"
              }}
            >

              <div className="card" style={{ padding: "18px" }}>
                <strong>330 m²</strong>
                <div>Superficie</div>
              </div>

              <div className="card" style={{ padding: "18px" }}>
                <strong>12</strong>
                <div>Locali</div>
              </div>

              <div className="card" style={{ padding: "18px" }}>
                <strong>4</strong>
                <div>Camere</div>
              </div>

              <div className="card" style={{ padding: "18px" }}>
                <strong>4</strong>
                <div>Bagni</div>
              </div>

              <div className="card" style={{ padding: "18px" }}>
                <strong>3</strong>
                <div>Piani</div>
              </div>

              <div className="card" style={{ padding: "18px" }}>
                <strong>1.400 m²</strong>
                <div>Terreno</div>
              </div>

            </div>

            {/* GALLERIA */}
            <section style={{ marginBottom: "55px" }}>

              <h2
                style={{
                  fontSize: "30px",
                  marginBottom: "25px"
                }}
              >
                Galleria
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "12px"
                }}
              >

                {dimoraImages.map((img, index) => (
                  <div
                    key={index}
                    style={{
                      aspectRatio: "4/3",
                      overflow: "hidden",
                      borderRadius: "10px",
                      background: "#eee"
                    }}
                  >
                    <img
                      src={`/${img}`}
                      alt={`Dimora Belvedere - foto ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />
                  </div>
                ))}

              </div>
            </section>

            {/* DESCRIZIONE */}
            <section style={{ marginBottom: "45px" }}>

              <h2 style={{ fontSize: "30px" }}>
                La proprietà
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#444"
                }}
              >
                Dimora Belvedere è una splendida proprietà in pietra
                completamente ristrutturata, immersa nel paesaggio
                delle colline marchigiane e con una suggestiva vista
                panoramica sui Monti Sibillini.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#444"
                }}
              >
                La proprietà si sviluppa su tre livelli e offre ampi
                spazi interni ed esterni, una piscina privata, un
                portico e un terreno di circa 1.400 m².
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#444"
                }}
              >
                La disposizione degli ambienti e la posizione rendono
                questa dimora ideale sia come residenza privata sia
                come casa per vacanze o struttura destinata
                all'ospitalità.
              </p>

            </section>

            {/* GLI SPAZI */}
            <section style={{ marginBottom: "45px" }}>

              <h2 style={{ fontSize: "30px" }}>
                Gli spazi
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#444"
                }}
              >
                Al piano terra troviamo un ampio soggiorno con
                camino, una sala da pranzo, una cucina con accesso
                diretto al portico, uno studio e gli ambienti di
                servizio.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#444"
                }}
              >
                Il primo piano ospita quattro camere da letto,
                due bagni, due balconi e una piccola terrazza dalla
                quale si gode di una splendida vista panoramica.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#444"
                }}
              >
                Il piano seminterrato comprende ulteriori ambienti
                utilizzabili come sala hobby, palestra o cucina,
                oltre a locali di deposito e un garage di circa
                31 m².
              </p>

            </section>

            {/* ESTERNI */}
            <section style={{ marginBottom: "45px" }}>

              <h2 style={{ fontSize: "30px" }}>
                Gli esterni
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#444"
                }}
              >
                La proprietà è circondata da spazi esterni privati
                e dispone di una piscina panoramica, ideale per
                vivere all'aperto e godere della tranquillità del
                paesaggio marchigiano.
              </p>

            </section>

            {/* CARATTERISTICHE */}
            <section style={{ marginBottom: "45px" }}>

              <h2 style={{ fontSize: "30px" }}>
                Caratteristiche
              </h2>

              <ul
                style={{
                  lineHeight: 2,
                  color: "#444",
                  paddingLeft: "20px"
                }}
              >
                <li>Casa in pietra completamente ristrutturata</li>
                <li>Piscina privata</li>
                <li>Giardino privato</li>
                <li>Terreno di circa 1.400 m²</li>
                <li>Camino</li>
                <li>Riscaldamento autonomo a gas naturale</li>
                <li>Garage di circa 31 m²</li>
                <li>Balconi e terrazza panoramica</li>
                <li>Vista sui Monti Sibillini</li>
              </ul>

            </section>

            {/* POSIZIONE */}
            <section style={{ marginBottom: "55px" }}>

              <h2 style={{ fontSize: "30px" }}>
                La posizione
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#444"
                }}
              >
                La proprietà si trova a Montalto delle Marche,
                in provincia di Ascoli Piceno, in una posizione
                panoramica e tranquilla nel cuore delle Marche.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.8,
                  color: "#444"
                }}
              >
                Il Parco Nazionale dei Monti Sibillini è raggiungibile
                in circa 45 minuti, mentre gli aeroporti di Ancona e
                Pescara distano circa un'ora.
              </p>

            </section>

            {/* CONTATTI IMMOBILE */}
            <section
              id="contatti"
              style={{
                background: "#E5E5E0",
                borderRadius: "14px",
                padding: "40px 25px",
                textAlign: "center",
                marginBottom: "50px"
              }}
            >

              <h2 style={{ marginTop: 0 }}>
                Ti interessa Dimora Belvedere?
              </h2>

              <p
                style={{
                  fontSize: "17px",
                  color: "#555",
                  marginBottom: "25px"
                }}
              >
                Contattaci per ricevere maggiori informazioni
                o per organizzare una visita.
              </p>

              <p style={{ margin: "8px 0" }}>
                <strong>Telefono:</strong>{" "}
                <a href="tel:+390735367757">
                  0735 367757
                </a>
              </p>

              <p style={{ margin: "8px 0" }}>
                <strong>Cellulare:</strong>{" "}
                <a href="tel:+393487232091">
                  +39 348 723 2091
                </a>
              </p>

              <p style={{ margin: "8px 0" }}>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@myhomeimmobiliare.com">
                  info@myhomeimmobiliare.com
                </a>
              </p>

              <p
                style={{
                  marginTop: "18px",
                  fontWeight: 600
                }}
              >
                My Home Immobiliare
                <br />
                Via XX Settembre 34,
                San Benedetto del Tronto (AP)
              </p>

            </section>

            {/* TORNA AGLI IMMOBILI */}
            <div
              style={{
                textAlign: "center",
                paddingBottom: "50px"
              }}
            >

              <button
                onClick={() => {
                  setSelectedProperty(null);

                  setTimeout(() => {
                    document
                      .getElementById("immobili")
                      ?.scrollIntoView({
                        behavior: "smooth"
                      });
                  }, 100);
                }}
                style={{
                  border: "1px solid #555",
                  background: "#fff",
                  color: "#333",
                  padding: "12px 22px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "15px"
                }}
              >
                ← Torna agli immobili
              </button>

            </div>

          </section>
        </main>

        {/* FOOTER */}
        <footer>

          <div
            style={{
              backgroundColor: "#E5E5E0",
              color: "#2D2D2D",
              textAlign: "center",
              padding: "40px 20px"
            }}
          >

            <h3 style={{ marginTop: 0 }}>
              My Home Immobiliare
            </h3>

            <p style={{ margin: "6px 0" }}>
              Via XX Settembre 34,
              San Benedetto del Tronto (AP)
            </p>

            <p style={{ margin: "6px 0" }}>
              <a
                href="mailto:info@myhomeimmobiliare.com"
                style={{
                  color: "#000",
                  textDecoration: "none"
                }}
              >
                info@myhomeimmobiliare.com
              </a>
            </p>

            <p style={{ margin: "6px 0" }}>
              <a
                href="tel:+390735367757"
                style={{
                  color: "#000",
                  textDecoration: "none"
                }}
              >
                0735 367757
              </a>
              {" • "}
              <a
                href="tel:+393487232091"
                style={{
                  color: "#000",
                  textDecoration: "none"
                }}
              >
                +39 348 723 2091
              </a>
            </p>

          </div>

          <div
            style={{
              backgroundColor: "#D6CEC2",
              color: "#555",
              textAlign: "center",
              padding: "12px 20px",
              fontSize: "14px"
            }}
          >
            © {new Date().getFullYear()} My Home Immobiliare -
            Tutti i diritti riservati
          </div>

        </footer>

      </div>
    );
  }

  // =========================================================
  // HOMEPAGE
  // =========================================================

  return (
    <div id="home">

      {/* NAVBAR */}
      <nav className="navbar">

        <a
          href="#home"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/vettoriale.png"
            alt="My Home Immobiliare"
            className="logo"
          />
        </a>

        <button
          className="hamburger"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>

          <a
            href="#home"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#immobili"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Immobili
          </a>

          <a
            href="#servizi"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Servizi
          </a>

          <a
            href="#contatti"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Contatti
          </a>

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

        <div
          className="hero-inner"
          style={{ padding: "0 16px" }}
        >

          <p className="hero-sub">
            Trova subito la tua casa
          </p>

          {/* SEARCH BAR */}
          <div className="search">

            <select
              className="search-select"
              defaultValue="vendite"
            >
              <option value="vendite">Vendite</option>
              <option value="affitti">Affitti</option>
            </select>

            <select
              className="search-select"
              defaultValue="tutte"
            >
              <option value="tutte">
                Tutte le tipologie
              </option>
              <option value="appartamento">
                Appartamento
              </option>
              <option value="villa">
                Villa
              </option>
              <option value="attico">
                Attico
              </option>
              <option value="casale">
                Casale
              </option>
              <option value="monolocale">
                Monolocale
              </option>
            </select>

            <input
              className="search-input"
              type="text"
              placeholder="Città, indirizzo o CAP"
            />

            <button className="search-button">
              Cerca
            </button>

          </div>
        </div>
      </header>

      {/* IMMOBILI */}
      <main
        id="immobili"
        className="main"
      >

        <section className="container">

          <div className="cards-grid">

            {featured.map((casa, i) => (

              <article
                key={i}
                className="card"
                onClick={() => {
                  if (casa.property) {
                    setSelectedProperty(casa.property);

                    window.scrollTo({
                      top: 0,
                      behavior: "smooth"
                    });
                  }
                }}
                style={{
                  cursor: casa.property
                    ? "pointer"
                    : "default"
                }}
              >

                <div
                  className="card-media"
                  style={{
                    aspectRatio: "16/9",
                    background: "#f3f4f6"
                  }}
                >

                  <img
                    src={`/${casa.img}`}
                    alt={casa.titolo}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />

                </div>

                <div style={{ padding: 14 }}>

                  <h3
                    style={{
                      margin: "0 0 6px",
                      fontSize: 18
                    }}
                  >
                    {casa.titolo}
                  </h3>

                  <p className="card-badge">
                    {casa.info}
                  </p>

                  {casa.property && (
                    <p
                      style={{
                        margin: "10px 0 0",
                        fontSize: "14px",
                        fontWeight: 600
                      }}
                    >
                      Scopri la proprietà →
                    </p>
                  )}

                </div>

              </article>

            ))}

          </div>

        </section>
      </main>

      {/* SERVIZI */}
      <section
        id="servizi"
        className="container"
        style={{
          padding: "40px 16px 8px"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            margin: "0 0 20px"
          }}
        >
          Servizi
        </h2>

        <div
          className="cards-grid"
          style={{ gap: 16 }}
        >

          <article className="card">
            <div style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>
                Valutazioni e Analisi
              </h3>

              <p style={{ marginBottom: 0 }}>
                Stima realistica dell'immobile con dati
                di mercato aggiornati.
              </p>
            </div>
          </article>

          <article className="card">
            <div style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>
                Marketing mirato
              </h3>

              <p style={{ marginBottom: 0 }}>
                Foto/video professionali, portali top
                e promozione social.
              </p>
            </div>
          </article>

          <article className="card">
            <div style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>
                Gestione pratiche
              </h3>

              <p style={{ marginBottom: 0 }}>
                Dalla proposta al rogito: burocrazia,
                scadenze e documenti.
              </p>
            </div>
          </article>

          <article className="card">
            <div style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0 }}>
                Collaborazioni internazionali
              </h3>

              <p style={{ marginBottom: 0 }}>
                Visibilità all'estero grazie a
                partnership globali.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="contatti">

        <div
          style={{
            backgroundColor: "#E5E5E0",
            color: "#2D2D2D",
            textAlign: "center",
            padding: "40px 20px"
          }}
        >

          <h3 style={{ marginTop: 0 }}>
            My Home Immobiliare
          </h3>

          <p style={{ margin: "6px 0" }}>
            Via XX Settembre 34,
            San Benedetto del Tronto (AP)
          </p>

          <p style={{ margin: "6px 0" }}>

            <a
              href="mailto:info@myhomeimmobiliare.com"
              style={{
                color: "#000",
                textDecoration: "none"
              }}
            >
              info@myhomeimmobiliare.com
            </a>

          </p>

          <p style={{ margin: "6px 0" }}>

            <a
              href="tel:+390735367757"
              style={{
                color: "#000",
                textDecoration: "none"
              }}
            >
              0735 367757
            </a>

            {" • "}

            <a
              href="tel:+393487232091"
              style={{
                color: "#000",
                textDecoration: "none"
              }}
            >
              +39 348 723 2091
            </a>

          </p>

        </div>

        <div
          style={{
            backgroundColor: "#D6CEC2",
            color: "#555",
            textAlign: "center",
            padding: "12px 20px",
            fontSize: "14px"
          }}
        >
          © {new Date().getFullYear()} My Home Immobiliare -
          Tutti i diritti riservati
        </div>

      </footer>

    </div>
  );
}
