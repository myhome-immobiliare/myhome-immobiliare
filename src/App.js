import React, { useState } from "react";

/* =========================================================
   DATI IMMOBILI
   ========================================================= */

const properties = {
  "dimora-belvedere": {
    id: "dimora-belvedere",
    title: "Dimora Belvedere",
    location: "Montalto delle Marche · Ascoli Piceno",
    price: "€750.000",
    subtitle: "Dimora in pietra completamente ristrutturata",
    cover: "IMG20260730105350 copia.jpg",

    stats: [
      ["330 m²", "Superficie"],
      ["12", "Locali"],
      ["4", "Camere"],
      ["4", "Bagni"],
      ["3", "Piani"],
      ["1.400 m²", "Terreno"]
    ],

    images: [
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
    ],

    sections: [
      {
        title: "La proprietà",
        paragraphs: [
          "Dimora Belvedere è una splendida proprietà in pietra completamente ristrutturata, immersa nel paesaggio delle colline marchigiane e con una suggestiva vista panoramica sui Monti Sibillini.",
          "La proprietà si sviluppa su tre livelli e offre ampi spazi interni ed esterni, una piscina privata, un portico e un terreno di circa 1.400 m².",
          "La disposizione degli ambienti e la posizione rendono questa dimora ideale sia come residenza privata sia come casa per vacanze o struttura destinata all'ospitalità."
        ]
      },
      {
        title: "Gli spazi",
        paragraphs: [
          "Al piano terra troviamo un ampio soggiorno con camino, una sala da pranzo, una cucina con accesso diretto al portico, uno studio e gli ambienti di servizio.",
          "Il primo piano ospita quattro camere da letto, due bagni, due balconi e una piccola terrazza dalla quale si gode di una splendida vista panoramica.",
          "Il piano seminterrato comprende ulteriori ambienti utilizzabili come sala hobby, palestra o cucina, oltre a locali di deposito e un garage di circa 31 m²."
        ]
      },
      {
        title: "Gli esterni",
        paragraphs: [
          "La proprietà è circondata da spazi esterni privati e dispone di una piscina panoramica, ideale per vivere all'aperto e godere della tranquillità del paesaggio marchigiano."
        ]
      }
    ],

    features: [
      "Casa in pietra completamente ristrutturata",
      "Piscina privata",
      "Giardino privato",
      "Terreno di circa 1.400 m²",
      "Camino",
      "Riscaldamento autonomo a gas naturale",
      "Garage di circa 31 m²",
      "Balconi e terrazza panoramica",
      "Vista sui Monti Sibillini"
    ],

    position: [
      "La proprietà si trova a Montalto delle Marche, in provincia di Ascoli Piceno, in una posizione panoramica e tranquilla nel cuore delle Marche.",
      "Il Parco Nazionale dei Monti Sibillini è raggiungibile in circa 45 minuti, mentre gli aeroporti di Ancona e Pescara distano circa un'ora."
    ]
  },

  "appartamento-san-benedetto": {
    id: "appartamento-san-benedetto",
    title: "Appartamento moderno",
    location: "San Benedetto del Tronto · Ascoli Piceno",
    price: "€360.000",
    subtitle: "Classe A4 · 100 m² · Ascensore · Garage",
    cover: "20260420_112105.jpg",

    stats: [
      ["100 m²", "Superficie"],
      ["2-3", "Camere"],
      ["2", "Bagni"],
      ["A4", "Classe energetica"],
      ["2", "Balconi"],
      ["1°", "Piano"]
    ],

    images: [
      "20260420_112105.jpg",
      "20260420_112209.jpg",
      "20260420_112231.jpg",
      "20260420_112330.jpg",
      "20260420_112641.jpg",
      "Screenshot_20260511_155611_Nodalview(1).jpg",
      "Screenshot_20260511_155638_Nodalview(1).jpg",
      "Screenshot_20260511_155645_Nodalview(1).jpg",
      "Screenshot_20260511_155708_Nodalview(1).jpg"
    ],

    sections: [
      {
        title: "La proprietà",
        paragraphs: [
          "Se desideri una casa moderna, efficiente e pronta da abitare, questa proposta rappresenta un perfetto equilibrio tra comfort, qualità costruttiva e posizione.",
          "Situato in una zona tranquilla e residenziale, appena al di sopra della Nazionale Adriatica, questo elegante appartamento di circa 100 m² si trova al primo piano servito da ascensore, all'interno di una recente palazzina composta da sole sei unità abitative, in un contesto riservato e ben curato.",
          "L'ingresso si apre su un'ampia zona giorno open space con soggiorno e cucina a vista, un ambiente luminoso e accogliente grazie alle grandi aperture verso l'esterno."
        ]
      },
      {
        title: "Gli ambienti",
        paragraphs: [
          "La distribuzione degli spazi offre inoltre la possibilità di ricavare una terza stanza, come illustrato nell'ipotesi progettuale allegata, proposta a titolo puramente esemplificativo.",
          "La soluzione potrà essere valutata e sviluppata secondo le esigenze dell'acquirente e nel rispetto della normativa vigente.",
          "La zona notte è ben separata e comprende due camere matrimoniali, due bagni finestrati, di cui uno privato nella camera padronale, e una pratica cabina armadio."
        ]
      },
      {
        title: "Gli spazi esterni",
        paragraphs: [
          "Completano la proprietà due balconi abitabili, ideali per pranzi all'aperto, momenti di relax o semplicemente per godere di spazi esterni vivibili."
        ]
      },
      {
        title: "Qualità e dotazioni",
        paragraphs: [
          "L'immobile si distingue per l'elevata qualità delle finiture: riscaldamento a pavimento, pavimenti in gres porcellanato, infissi in alluminio con doppio vetro, videocitofono, impianti certificati e porte interne di design.",
          "La classe energetica A4 garantisce consumi ridotti, massimo comfort abitativo e un importante valore aggiunto nel tempo."
        ]
      },
      {
        title: "Garage",
        paragraphs: [
          "È inoltre possibile acquistare separatamente un comodo garage al piano seminterrato, facilmente accessibile direttamente dal fabbricato."
        ]
      },
      {
        title: "La posizione",
        paragraphs: [
          "La posizione rappresenta uno dei principali punti di forza: una zona tranquilla e residenziale, a pochi minuti dal mare, vicina a tutti i servizi principali e con un curato parco pubblico nelle immediate vicinanze, ideale per famiglie e per chi ama vivere gli spazi all'aperto.",
          "Una soluzione perfetta per chi cerca una casa recente, elegante, efficiente e pronta da vivere, senza dover affrontare lavori di ristrutturazione."
        ]
      },
      {
        title: "Nota sulle immagini",
        paragraphs: [
          "Alcune immagini con arredamento sono render a scopo puramente illustrativo e hanno l'obiettivo di mostrare alcune possibili soluzioni di interior design e valorizzare il potenziale degli ambienti."
        ]
      }
    ],

    features: [
      "Classe energetica A4",
      "Circa 100 m²",
      "Primo piano con ascensore",
      "Due camere matrimoniali",
      "Possibilità di ricavare una terza stanza",
      "Due bagni finestrati",
      "Bagno privato nella camera padronale",
      "Cabina armadio",
      "Due balconi abitabili",
      "Riscaldamento a pavimento",
      "Gres porcellanato",
      "Infissi in alluminio con doppio vetro",
      "Videocitofono",
      "Impianti certificati",
      "Porte interne di design",
      "Garage acquistabile separatamente"
    ],

    position: []
  }
};


/* =========================================================
   IMMOBILI IN EVIDENZA
   ========================================================= */

const featured = [
  {
    img: "IMG20260730105350 copia.jpg",
    titolo: "Dimora Belvedere",
    info: "€750.000 · 330 m² · 4 camere",
    property: "dimora-belvedere"
  },
  {
    img: "20260420_112105.jpg",
    titolo: "Appartamento moderno",
    info: "€360.000 · 100 m² · 2-3 camere",
    property: "appartamento-san-benedetto"
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


/* =========================================================
   NAVBAR
   ========================================================= */

function Navbar({ menuOpen, setMenuOpen, onHome, propertyPage = false }) {
  return (
    <nav className="navbar">

      <a
        href="#home"
        className="brand"
        onClick={(e) => {
          e.preventDefault();
          onHome();
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
          onClick={(e) => {
            e.preventDefault();
            onHome();
          }}
        >
          Home
        </a>

        <a
          href={propertyPage ? "#immobile" : "#immobili"}
          className="nav-link"
          onClick={() => {
            setMenuOpen(false);

            if (propertyPage) {
              setTimeout(() => {
                document
                  .getElementById("immobile")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }
          }}
        >
          {propertyPage ? "Immobile" : "Immobili"}
        </a>

        {!propertyPage && (
          <a
            href="#servizi"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            Servizi
          </a>
        )}

        <a
          href="#contatti"
          className="nav-link"
          onClick={() => {
            setMenuOpen(false);

            if (propertyPage) {
              setTimeout(() => {
                document
                  .getElementById("contatti")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }
          }}
        >
          Contatti
        </a>

      </div>
    </nav>
  );
}


/* =========================================================
   PAGINA IMMOBILE RIUTILIZZABILE
   ========================================================= */

function PropertyPage({
  property,
  menuOpen,
  setMenuOpen,
  onHome,
  onBack
}) {
  return (
    <div id="home">

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onHome={onHome}
        propertyPage
      />

      {/* HERO IMMOBILE */}
      <header
        style={{
          position: "relative",
          minHeight: "65vh",
          display: "grid",
          placeItems: "center",
          color: "#fff",
          textAlign: "center",
          backgroundImage: `url("${encodeURI(
            `/${property.cover}`
          )}")`,
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
            {property.title}
          </h1>

          <p
            style={{
              fontSize: "20px",
              margin: 0
            }}
          >
            {property.location}
          </p>

        </div>
      </header>


      {/* CONTENUTO */}
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
                {property.price}
              </div>

              <div style={{ color: "#666" }}>
                {property.subtitle}
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

            {property.stats.map((stat, index) => (
              <div
                className="card"
                style={{ padding: "18px" }}
                key={index}
              >
                <strong>{stat[0]}</strong>
                <div>{stat[1]}</div>
              </div>
            ))}

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

              {property.images.map((img, index) => (
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
                    src={`/${encodeURI(img)}`}
                    alt={`${property.title} - foto ${index + 1}`}
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


          {/* SEZIONI DESCRITTIVE */}
          {property.sections.map((section, index) => (
            <section
              key={index}
              style={{ marginBottom: "45px" }}
            >

              <h2 style={{ fontSize: "30px" }}>
                {section.title}
              </h2>

              {section.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.8,
                    color: "#444"
                  }}
                >
                  {paragraph}
                </p>
              ))}

            </section>
          ))}


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

              {property.features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}

            </ul>

          </section>


          {/* CONTATTI */}
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
              Ti interessa {property.title}?
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
              onClick={onBack}
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
      <Footer />

    </div>
  );
}


/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {
  return (
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
  );
}


/* =========================================================
   APP
   ========================================================= */

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);


  const goHome = () => {
    setSelectedProperty(null);
    setMenuOpen(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 50);
  };


  const goBackToProperties = () => {
    setSelectedProperty(null);
    setMenuOpen(false);

    setTimeout(() => {
      document
        .getElementById("immobili")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }, 100);
  };


  /* =======================================================
     PAGINA IMMOBILE
     ======================================================= */

  if (selectedProperty) {

    const property = properties[selectedProperty];

    return (
      <PropertyPage
        property={property}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onHome={goHome}
        onBack={goBackToProperties}
      />
    );
  }


  /* =======================================================
     HOMEPAGE
     ======================================================= */

  return (
    <div id="home">

      {/* NAVBAR */}
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onHome={goHome}
      />


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
              <option value="vendite">
                Vendite
              </option>

              <option value="affitti">
                Affitti
              </option>
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

            {featured.map((casa, index) => (

              <article
                key={index}
                className="card"
                onClick={() => {

                  if (casa.property) {

                    setSelectedProperty(casa.property);
                    setMenuOpen(false);

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
                    src={`/${encodeURI(casa.img)}`}
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
