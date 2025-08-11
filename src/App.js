import React, { useEffect, useState } from "react";
// Se hai già il client di Supabase lascia questa import:
import { supabase } from "./supabaseClient"; // altrimenti il codice mostrerà i 6 annunci statici di fallback

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [annunci, setAnnunci] = useState([]);
  const [loading, setLoading] = useState(true);

  // helper: URL pubblico di un file su storage
  function imgUrl(path) {
    if (!path) return "";
    const { data } = supabase.storage.from("immagini").getPublicUrl(path);
    return data?.publicUrl || "";
  }

  // carica annunci da Supabase (se configurato) altrimenti fallback
  useEffect(() => {
    async function load() {
      try {
        const { data, error } = await supabase
          .from("annunci")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(12);

        if (error) throw error;
        setAnnunci(data || []);
      } catch {
        // fallback statico
        setAnnunci([
          { id: "1", titolo: "Appartamento in centro", info: "€250.000 · 3 camere", cover_path: "", img: "immagine1.jpg" },
          { id: "2", titolo: "Villa con piscina", info: "€500.000 · 4 camere", cover_path: "", img: "immagine2.jpg" },
          { id: "3", titolo: "Casale in campagna", info: "€350.000 · 5 camere", cover_path: "", img: "immagine3.jpg" },
          { id: "4", titolo: "Monolocale ristrutturato", info: "€120.000 · 1 camera", cover_path: "", img: "immagine4.jpg" },
          { id: "5", titolo: "Attico con terrazza", info: "€450.000 · 3 camere", cover_path: "", img: "immagine5.jpg" },
          { id: "6", titolo: "Appartamento in periferia", info: "€200.000 · 2 camere", cover_path: "", img: "immagine6.jpg" },
        ]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // scroll morbido
  const go = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <img src="/vettoriale.png" alt="My Home Immobiliare" className="logo" />
        <button
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Link desktop */}
        <div className="nav-links">
          <button className="nav-link" onClick={() => go("home")}>Home</button>
          <button className="nav-link" onClick={() => go("immobili")}>Immobili</button>
          <button className="nav-link" onClick={() => go("servizi")}>Servizi</button>
          <button className="nav-link" onClick={() => go("contatti")}>Contatti</button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="nav-dropdown">
            <button className="nav-link" onClick={() => go("home")}>Home</button>
            <button className="nav-link" onClick={() => go("immobili")}>Immobili</button>
            <button className="nav-link" onClick={() => go("servizi")}>Servizi</button>
            <button className="nav-link" onClick={() => go("contatti")}>Contatti</button>
          </div>
        )}
      </nav>

      {/* HERO / HOME */}
      <header id="home" className="hero" style={{
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
      }}>
        <div className="hero-overlay"></div>

        <div className="hero-inner" style={{ padding: "0 16px" }}>
          {/* H1 nascosto SOLO su mobile (classe già gestita in app.css) */}
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

      {/* IMMOBILI */}
      <main id="immobili" className="main">
        <section className="container">
          {loading ? (
            <p>Carico gli immobili…</p>
          ) : annunci.length === 0 ? (
            <p>Nessun annuncio disponibile.</p>
          ) : (
            <div className="cards-grid">
              {annunci.map((casa) => (
                <article key={casa.id} className="card">
                  <div className="card-media" style={{ aspectRatio: "16/9", background: "#f3f4f6" }}>
                    <img
                      src={casa.cover_path ? imgUrl(casa.cover_path) : `/${casa.img || "hero.jpg"}`}
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
          )}
        </section>
      </main>

      {/* SERVIZI */}
      <section id="servizi" className="main">
        <section className="container">
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>I nostri servizi</h2>
          <div className="cards-grid">
            {[
              { t: "Valutazioni gratuite", d: "Stime realistiche basate sui dati di mercato." },
              { t: "Vendita e affitto", d: "Promozione mirata e gestione visite." },
              { t: "Consulenza mutui", d: "Supporto nella scelta del finanziamento." },
            ].map((s, i) => (
              <article key={i} className="card">
                <div style={{ padding: 18 }}>
                  <h3 style={{ margin: "0 0 8px" }}>{s.t}</h3>
                  <p style={{ margin: 0, opacity: 0.9 }}>{s.d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="main">
        <section className="container">
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>Contattaci</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              const nome = fd.get("nome");
              const email = fd.get("email");
              const msg = fd.get("messaggio");
              // mailto semplice (puoi sostituire con Formspree / API quando vuoi)
              const subject = encodeURIComponent("Richiesta informazioni dal sito");
              const body = encodeURIComponent(`Nome: ${nome}\nEmail: ${email}\n\n${msg}`);
              window.location.href = `mailto:agenziaimmobiliare.myhome@gmail.com?subject=${subject}&body=${body}`;
            }}
            style={{
              maxWidth: 680,
              margin: "0 auto",
              display: "grid",
              gap: 12
            }}
          >
            <input name="nome" required placeholder="Nome e cognome" />
            <input name="email" type="email" required placeholder="Email" />
            <textarea name="messaggio" rows={5} placeholder="Come possiamo aiutarti?" />
            <button type="submit" className="search-button" style={{ justifySelf: "start" }}>
              Invia richiesta
            </button>
          </form>

          <p style={{ marginTop: 16, opacity: 0.8 }}>
            Oppure scrivici a <a href="mailto:agenziaimmobiliare.myhome@gmail.com">agenziaimmobiliare.myhome@gmail.com</a>
          </p>
        </section>
      </section>

      <footer style={{ textAlign: "center", padding: "24px 12px", color: "#64748b" }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} My Home Immobiliare — Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
