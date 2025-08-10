
/* Base */
:root { --dark:#0f172a; }
*{box-sizing:border-box} body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;}

.hero-inner{ padding: 0 16px; }
.hero-title{ font-size: clamp(28px, 6vw, 52px); font-weight: 700; text-shadow: 0 2px 16px rgba(0,0,0,.6); margin: 0; }
.hero-sub{ margin-top: 12px; font-size: clamp(14px,3.5vw,18px); opacity:.95; text-shadow: 0 1px 8px rgba(0,0,0,.5); }

/* Navbar */
.navbar{
  position:absolute; top:0; left:0; width:100%;
  display:flex; align-items:center; justify-content:space-between;
  padding:12px 20px; background:rgba(0,0,0,.35); z-index:20;
}
.logo{ height:46px; object-fit:contain; }
.hamburger{ display:none; background:transparent; border:0; color:#fff; font-size:28px; line-height:1; cursor:pointer; }
.nav-links{ display:flex; gap:20px; }
.nav-link{ color:#fff; text-decoration:none; font-weight:600; }

/* Search */
.search{ margin-top:20px; display:grid; grid-template-columns:1fr 1fr 1fr auto; gap:10px;
  width:min(980px,100%); background:rgba(0,0,0,.35); padding:12px; border-radius:12px; backdrop-filter: blur(4px);
}
.search-select, .search-input{ width:100%; padding:12px; border-radius:8px; border:1px solid #e5e7eb; font-size:16px; }
.search-button{ background:var(--dark); color:#fff; border:none; border-radius:8px; padding:0 18px; font-weight:700; cursor:pointer; }

/* Cards */
.cards-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
.card{ border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; background:#fff; }
.card-img{ aspect-ratio:16/9; background:#f3f4f6; }
.card-img img{ width:100%; height:100%; object-fit:cover; display:block; }
.card-body{ padding:14px; }
.card-body h3{ margin:0 0 6px; font-size:18px; }
.card-badge{ display:inline-block; background:var(--dark); color:#fff; border-radius:6px; padding:6px 10px; font-size:12px; font-weight:600; }

/* Tablet */
@media (max-width: 900px){
  .logo{ height:38px; }
  .search{ grid-template-columns:1fr 1fr 1fr auto; }
  .cards-grid{ grid-template-columns:repeat(2,1fr); }
}

/* Mobile */
@media (max-width: 600px){
  .logo{ height:34px; }
  .hamburger{ display:block; }
  .nav-links{ display:none; }
  .nav-links.open{
    display:flex; flex-direction:column; gap:12px; position:absolute; right:12px; top:64px;
    background:rgba(0,0,0,.85); padding:12px; border-radius:10px;
  }

  .search{ grid-template-columns:1fr; gap:8px; }
  .search-button{ height:44px; }
  .cards-grid{ grid-template-columns:1fr; }
}
