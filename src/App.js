import React, { useState } from "react";

/* =========================================================
   DATI IMMOBILI
   ========================================================= */

const properties = {

  /* =======================================================
     DIMORA BELVEDERE
     ======================================================= */

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
      },
      {
        title: "La posizione",
        paragraphs: [
          "La proprietà si trova a Montalto delle Marche, in provincia di Ascoli Piceno, in una posizione panoramica e tranquilla nel cuore delle Marche.",
          "Il Parco Nazionale dei Monti Sibillini è raggiungibile in circa 45 minuti, mentre gli aeroporti di Ancona e Pescara distano circa un'ora."
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
    ]
  },


  /* =======================================================
     APPARTAMENTO SAN BENEDETTO
     ======================================================= */

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
          "In vendita a San Benedetto del Tronto, elegante appartamento di recente costruzione, inserito in un piccolo edificio composto da sole sei unità.",
          "L'immobile si trova al primo piano con ascensore e offre ambienti moderni, funzionali e caratterizzati da finiture di qualità.",
          "La classe energetica A4 garantisce elevati standard di efficienza energetica e comfort abitativo."
        ]
      },
      {
        title: "Gli spazi",
        paragraphs: [
          "L'abitazione dispone di due camere matrimoniali, due bagni di cui uno en suite e una comoda cabina armadio.",
          "La distribuzione degli ambienti permette inoltre, secondo un progetto illustrativo, la possibilità di ricavare una terza camera.",
          "Completano la proprietà due balconi che ampliano gli spazi abitativi verso l'esterno."
        ]
      },
      {
        title: "Finiture e dotazioni",
        paragraphs: [
          "L'appartamento è dotato di riscaldamento a pavimento, pavimentazione in gres porcellanato, infissi in alluminio con doppio vetro, videocitofono, impianti certificati e porte interne dal design moderno."
        ]
      },
      {
        title: "Garage",
        paragraphs: [
          "È disponibile separatamente un garage, ideale per completare la proprietà con uno spazio privato per auto e deposito."
        ]
      },
      {
        title: "La posizione",
        paragraphs: [
          "L'appartamento è situato in una tranquilla zona residenziale di San Benedetto del Tronto, a pochi minuti dal mare e vicino ai principali servizi e a un'area verde.",
          "Le immagini relative alla possibile distribuzione degli ambienti sono da considerarsi illustrative."
        ]
      }
    ],

    features: [
      "Classe energetica A4",
      "100 m²",
      "Primo piano con ascensore",
      "Due camere matrimoniali",
      "Possibilità di terza camera",
      "Due bagni",
      "Bagno en suite",
      "Cabina armadio",
      "Due balconi",
      "Riscaldamento a pavimento",
      "Gres porcellanato",
      "Infissi in alluminio con doppio vetro",
      "Videocitofono",
      "Impianti certificati",
      "Porte interne di design",
      "Garage disponibile separatamente"
    ]
  },


  /* =======================================================
     CASALE COSSIGNANO
     ======================================================= */

  "casale-cossignano": {
    id: "casale-cossignano",
    title: "Casale vista mare",
    location: "Cossignano · Ascoli Piceno",
    price: "€370.000",
    subtitle: "Casale in mattoni ristrutturato · 4,7 ettari",
    cover: "20250930_092911.jpg",

    stats: [
      ["250 m²", "Superficie"],
      ["12", "Locali"],
      ["3", "Camere"],
      ["1", "Bagno"],
      ["47.000 m²", "Terreno"],
      ["2", "Piani"]
    ],

    images: [
      "20250930_092911.jpg",
      "20250930_092934.jpg",
      "20250930_093100.jpg",
      "20250930_093314.jpg",
      "20250930_093530.jpg",
      "20250930_104022.jpg",
      "20250930_104127.jpg",
      "20250930_104221.jpg",
      "20250930_104302.jpg"
    ],

    sections: [
      {
        title: "La proprietà",
        paragraphs: [
          "In splendida posizione panoramica, con vista mare e sulle colline marchigiane, proponiamo in vendita un caratteristico casale in mattoni recentemente ristrutturato con cura, circondato da un ampio terreno agricolo di circa 4,7 ettari.",
          "L'immobile mantiene intatto il fascino della tradizione rurale marchigiana grazie ai soffitti con travi a vista, ai pavimenti in parquet, agli infissi in legno con doppi vetri e alle finiture curate.",
          "Una proprietà dal grande potenziale, ideale per chi desidera vivere nella tranquillità della campagna marchigiana senza rinunciare alla vicinanza al mare."
        ]
      },
      {
        title: "Gli spazi",
        paragraphs: [
          "Il piano primo, destinato alla zona abitativa, comprende ingresso, soggiorno, cucina abitabile, tre camere da letto, bagno e magazzino.",
          "Uno dei punti di forza della proprietà è l'ampio terrazzo panoramico, collegato al portico e ideale per pranzi e cene all'aperto.",
          "Al piano terra si trovano quattro ampi vani rifiniti in mattoni, già dotati di impianti e da completare secondo le proprie esigenze.",
          "Completano il piano terra ampi spazi destinati a garage, deposito e rimessa."
        ]
      },
      {
        title: "Gli esterni",
        paragraphs: [
          "La proprietà comprende un cortile e un giardino privato piantumato con alberi ad alto fusto, che garantiscono privacy e tranquillità.",
          "Il terreno agricolo di circa 4,7 ettari è suddiviso tra seminativo e bosco misto e offre ampie possibilità per attività agricole, allevamento, vigneto, uliveto oppure semplicemente per vivere la natura."
        ]
      },
      {
        title: "Potenzialità",
        paragraphs: [
          "Grazie agli ampi spazi interni ed esterni, la proprietà si presta sia come residenza privata di charme sia come casa vacanze o struttura ricettiva.",
          "La distribuzione degli ambienti permette inoltre diverse possibilità di personalizzazione e sviluppo."
        ]
      },
      {
        title: "La posizione",
        paragraphs: [
          "Il casale gode di una posizione collinare, panoramica e riservata, con servizi e negozi raggiungibili anche a piedi.",
          "L'accesso è comodo da strada comunale asfaltata.",
          "Il mare è raggiungibile in circa 20 minuti, la montagna in circa 40 minuti e l'autostrada A14 in circa 20 minuti."
        ]
      }
    ],

    features: [
      "Casale in mattoni recentemente ristrutturato",
      "Vista mare e colline marchigiane",
      "Circa 4,7 ettari di terreno",
      "Terreno con seminativo e bosco misto",
      "Tre camere da letto",
      "Ampio terrazzo panoramico",
      "Portico",
      "Giardino privato",
      "Quattro vani accessori da rifinire",
      "Garage e depositi",
      "Camino",
      "Riscaldamento autonomo a gas naturale",
      "Box doppio compreso nel prezzo"
    ]
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
    info: "€360.000 · 100 m² · Classe A4",
    property: "appartamento-san-benedetto"
  },
  {
    img: "20250930_092911.jpg",
    titolo: "Casale vista mare",
    info: "€370.000 · 250 m² · 4,7 ettari",
    property: "casale-cossignano"
  }
];


/* =========================================================
   NAVBAR
   ========================================================= */

function Navbar({
  menuOpen,
  setMenuOpen,
  setSelectedProperty
}) {
  return (
    <nav className="navbar">

      <a
        href="#home"
        className="brand"
        onClick={() => {
          setSelectedProperty(null);
          setMenuOpen(false);

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
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
        aria-label={
          menuOpen ? "Chiudi menu" : "Apri menu"
        }
        aria-expanded={menuOpen}
        onClick={() =>
          setMenuOpen(o => !o)
        }
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

      <div
        className={`nav-links ${
          menuOpen ? "open" : ""
        }`}
      >

        <a
          href="#home"
          className="nav-link"
          onClick={() => {
            setSelectedProperty(null);
            setMenuOpen(false);

            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          }}
        >
          Home
        </a>

        <a
          href="#immobili"
          className="nav-link"
          onClick={() => {
            setMenuOpen(false);

            if (setSelectedProperty) {
              setSelectedProperty(null);
            }
          }}
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
  );
}


/* =========================================================
   FOOTER
   ========================================================= */

function Footer() {
  return (
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
  );
}


/* =========================================================
   PAGINA IMMOBILE
   ========================================================= */

function PropertyPage({
  property,
  setSelectedProperty,
  menuOpen,
  setMenuOpen
}) {
  return (
    <div id="home">

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        setSelectedProperty={setSelectedProperty}
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
          backgroundImage:
            `url('${encodeURI(
              "/" + property.cover
            )}')`,
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
                  ?.scrollIntoView({
                    behavior: "smooth"
                  })
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

            {property.stats.map(
              (stat, index) => (
                <div
                  key={index}
                  className="card"
                  style={{
                    padding: "18px"
                  }}
                >
                  <strong>
                    {stat[0]}
                  </strong>

                  <div>
                    {stat[1]}
                  </div>
                </div>
              )
            )}

          </div>


          {/* GALLERIA */}

          <section
            style={{
              marginBottom: "55px"
            }}
          >

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

              {property.images.map(
                (img, index) => (

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

                )
              )}

            </div>

          </section>


          {/* DESCRIZIONI */}

          {property.sections.map(
            (section, index) => (

              <section
                key={index}
                style={{
                  marginBottom: "45px"
                }}
              >

                <h2
                  style={{
                    fontSize: "30px"
                  }}
                >
                  {section.title}
                </h2>

                {section.paragraphs.map(
                  (paragraph, paragraphIndex) => (

                    <p
                      key={paragraphIndex}
                      style={{
                        fontSize: "17px",
                        lineHeight: 1.8,
                        color: "#444"
                      }}
                    >
                      {paragraph}
                    </p>

                  )
                )}

              </section>

            )
          )}


          {/* CARATTERISTICHE */}

          <section
            style={{
              marginBottom: "55px"
            }}
          >

            <h2
              style={{
                fontSize: "30px"
              }}
            >
              Caratteristiche
            </h2>

            <ul
              style={{
                lineHeight: 2,
                color: "#444",
                paddingLeft: "20px"
              }}
            >

              {property.features.map(
                (feature, index) => (
                  <li key={index}>
                    {feature}
                  </li>
                )
              )}

            </ul>

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
              Ti interessa {property.title}?
            </h2>

            <p
              style={{
                fontSize: "17px",
                color: "#555",
                marginBottom: "25px"
              }}
            >
              Contattaci per ricevere maggiori
              informazioni o per organizzare una visita.
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


      <Footer />

    </div>
  );
}


/* =========================================================
   APP
   ========================================================= */

export default function App() {

  const [
    menuOpen,
    setMenuOpen
  ] = useState(false);

  const [
    selectedProperty,
    setSelectedProperty
  ] = useState(null);


  /* =======================================================
     PAGINA IMMOBILE
     ======================================================= */

  if (selectedProperty) {

    const property =
      properties[selectedProperty];

    if (property) {
      return (
        <PropertyPage
          property={property}
          setSelectedProperty={
            setSelectedProperty
          }
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      );
    }

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
        setSelectedProperty={
          setSelectedProperty
        }
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
          backgroundImage:
            "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >

        <div className="hero-overlay" />

        <div
          className="hero-inner"
          style={{
            padding: "0 16px"
          }}
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


            <button
              className="search-button"
            >
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

            {featured.map(
              (casa, index) => (

                <article
                  key={index}
                  className="card"
                  onClick={() => {

                    if (casa.property) {

                      setSelectedProperty(
                        casa.property
                      );

                      window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                      });

                    }

                  }}
                  style={{
                    cursor:
                      casa.property
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
                      src={`/${encodeURI(
                        casa.img
                      )}`}
                      alt={casa.titolo}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />

                  </div>


                  <div
                    style={{
                      padding: "18px"
                    }}
                  >

                    <h3
                      style={{
                        margin:
                          "0 0 8px"
                      }}
                    >
                      {casa.titolo}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        color: "#666"
                      }}
                    >
                      {casa.info}
                    </p>

                  </div>

                </article>

              )
            )}

          </div>

        </section>

      </main>


            {/* SERVIZI */}

      <section
        id="servizi"
        className="container"
        style={{
          padding:
            "40px 16px 8px"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            margin:
              "0 0 20px"
          }}
        >
          Servizi
        </h2>


        <div
          className="cards-grid"
          style={{
            gap: 16
          }}
        >

          <article className="card">

            <div
              style={{
                padding: 18
              }}
            >

              <h3
                style={{
                  marginTop: 0
                }}
              >
                Valutazioni e Analisi
              </h3>

              <p
                style={{
                  marginBottom: 0
                }}
              >
                Stima realistica dell'immobile
                con dati di mercato aggiornati.
              </p>

            </div>

          </article>


          <article className="card">

            <div
              style={{
                padding: 18
              }}
            >

              <h3
                style={{
                  marginTop: 0
                }}
              >
                Marketing mirato
              </h3>

              <p
                style={{
                  marginBottom: 0
                }}
              >
                Foto/video professionali,
                portali top e promozione social.
              </p>

            </div>

          </article>


          <article className="card">

            <div
              style={{
                padding: 18
              }}
            >

              <h3
                style={{
                  marginTop: 0
                }}
              >
                Gestione pratiche
              </h3>

              <p
                style={{
                  marginBottom: 0
                }}
              >
                Dalla proposta al rogito:
                burocrazia, scadenze e documenti.
              </p>

            </div>

          </article>


          <article className="card">

            <div
              style={{
                padding: 18
              }}
            >

              <h3
                style={{
                  marginTop: 0
                }}
              >
                Collaborazioni internazionali
              </h3>

              <p
                style={{
                  marginBottom: 0
                }}
              >
                Visibilità all'estero grazie
                a partnership globali.
              </p>

            </div>

          </article>


          <article className="card">

            <div
              style={{
                padding: 18
              }}
            >

              <h3
                style={{
                  marginTop: 0
                }}
              >
                Offerta locazioni
              </h3>

              <p
                style={{
                  marginBottom: 0
                }}
              >
                Gestione e promozione di immobili in affitto,
                dalla ricerca dell'inquilino alla documentazione
                e al contratto.
              </p>

            </div>

          </article>


          <article className="card">

            <div
              style={{
                padding: 18
              }}
            >

              <h3
                style={{
                  marginTop: 0
                }}
              >
                Assistenza partecipazione aste
              </h3>

              <p
                style={{
                  marginBottom: 0
                }}
              >
                Supporto nella partecipazione alle aste immobiliari,
                dalla verifica della documentazione alle diverse
                fasi della procedura.
              </p>

            </div>

          </article>


        </div>

      </section>

      {/* FOOTER */}

      <Footer />

    </div>
  );
}
