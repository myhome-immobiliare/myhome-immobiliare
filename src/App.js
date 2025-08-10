
import React from "react";

const App = () => {
  return (
    <div>
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
        <div className="hero-inner" style={{ padding: "0 16px" }}>
          <h1
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
              padding: 10,
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
            </select>

            <input
              className="search-input"
              type="text"
              placeholder="Città o zona"
            />
            <button
              className="search-button"
              style={{
                background: "#0f172a",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "0 18px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Cerca
            </button>
          </div>
        </div>
      </header>

      {/* ANNUNCI IN EVIDENZA */}
      <main style={{ padding: "28px 16px 56px" }}>
        <section style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div
            className="cards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {[
              {
                img: "immagine1.jpg",
                titolo: "Appartamento in centro",
                info: "€250.000 · 3 camere",
              },
              {
                img: "immagine2.jpg",
                titolo: "Villa con piscina",
                info: "€500.000 · 4 camere",
              },
              {
                img: "immagine3.jpg",
                titolo: "Casale in campagna",
                info: "€350.000 · 5 camere",
              },
              {
                img: "immagine4.jpg",
                titolo: "Monolocale ristrutturato",
                info: "€120.000 · 1 camera",
              },
              {
                img: "immagine5.jpg",
                titolo: "Attico con terrazza",
                info: "€450.000 · 3 camere",
              },
              {
                img: "immagine6.jpg",
                titolo: "Appartamento in periferia",
                info: "€200.000 · 2 camere",
              },
            ].map((casa, i) => (
              <article
                key={i}
                className="card"
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  overflow: "hidden",
                  background: "#fff",
                }}
              >
                <div style={{ aspectRatio: "16/9", background: "#f3f4f6" }}>
                  <img
                    src={casa.img}
                    alt={casa.titolo}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 14 }}>
                  <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>{casa.titolo}</h3>
                  <p
                    className="card-badge"
                    style={{
                      display: "inline-block",
                      background: "#0f172a",
                      color: "#fff",
                      borderRadius: 6,
                      padding: "6px 10px",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {casa.info}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ textAlign: "center", padding: "24px 12px", color: "#64748b" }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} My Home Immobiliare · Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
};

export default App;
