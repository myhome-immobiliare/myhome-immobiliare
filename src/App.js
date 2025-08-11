import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient"; // ok se non hai ancora dati: gestiamo fallback

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [annunci, setAnnunci] = useState([]);
  const [loading, setLoading] = useState(true);

  const imgUrl = (path) => {
    if (!path) return "";
    const { data } = supabase.storage.from("immagini").getPublicUrl(path);
    return data?.publicUrl || "";
  };

  useEffect(() => {
    const load = async () => {
      try {
        const { data, error } = await supabase
          .from("annunci")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(12);
        if (error) throw error;
        setAnnunci(data || []);
      } catch {
        setAnnunci([]); // nessun dato = nessun errore visivo
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div id="home">
      {/* NAVBAR */}
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/vettoriale.png" alt="My Home Immobiliare" />
        </a>

        {/* Hamburger solo mobile */}
        <button
          className="hamburger"
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Link: desktop sempre visibili, mobile nel dropdown */}
        <div className="nav-links">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#immobili" onClick={() => setMenuOpen(false)}>Immobili</a>
          <a href="#servizi" onClick={() => setMenuOpen(false)}>Servizi</a>
          <a href="#contatti" onClick={() => setMenuOpen(false)}>Contatti</a>
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
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay" />
        <div className="hero-inner">
          {/* Titolo nascosto SOLO su mobile con CSS .hide-mobile */}
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

            <input className="search-input" type="text" placeholder="Città o zona" />
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
                  <div className="card-media">
                    <img
                      src={imgUrl(casa.cover_path)}
                      alt={casa.titolo}
                      onError={(e) => (e.currentTarget.style.opacity = 0.2)}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">{casa.titolo}</h3>
                    <p className="card-badge">
                      €{Intl.NumberFormat("it-IT").format(casa.prezzo)} • {casa.camere} camere
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* SERVIZI */}
      <section id="servizi" className="container section">
        <h2>Servizi</h2>
        <p>Valutazioni, compravendite, locazioni, pratiche e consulenze su misura.</p>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="container section">
        <h2>Contatti</h2>
        <p>Scrivici a <a href="mailto:info@myhomeimmobiliare.com">info@myhomeimmobiliare.com</a></p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} My Home Immobiliare – Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}
