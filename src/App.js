<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Home Immobiliare</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="hero">
            <img src="hero.jpg" alt="Hero Image" class="hero-image">
            <div class="hero-content">
                <h1>Ogni casa una storia. La tua!</h1>
                <p>Trova subito la tua casa</p>
                <div class="search-bar">
                    <form action="/search" method="get">
                        <input type="text" name="query" placeholder="Cerca la tua casa..." id="search-input">
                        <select name="tipologia" id="tipologia">
                            <option value="vendita">Vendita</option>
                            <option value="affitto">Affitto</option>
                            <option value="casale">Casale</option>
                        </select>
                        <input type="text" name="citta" placeholder="Tutte le città" id="city-input">
                        <button type="submit">Cerca</button>
                    </form>
                </div>
            </div>
        </div>
    </header>

    <main>
        <section class="featured">
            <h2>Annunci in evidenza</h2>
            <div class="annunci">
                <div class="annuncio">
                    <img src="immagine1.jpg" alt="Annuncio 1">
                    <h3>Appartamento in centro</h3>
                    <p>€250.000 - 3 camere da letto</p>
                </div>
                <div class="annuncio">
                    <img src="immagine2.jpg" alt="Annuncio 2">
                    <h3>Villa con piscina</h3>
                    <p>€500.000 - 4 camere da letto</p>
                </div>
                <div class="annuncio">
                    <img src="immagine3.jpg" alt="Annuncio 3">
                    <h3>Casale in campagna</h3>
                    <p>€350.000 - 5 camere da letto</p>
                </div>
                <div class="annuncio">
                    <img src="immagine4.jpg" alt="Annuncio 4">
                    <h3>Monolocale ristrutturato</h3>
                    <p>€150.000 - 1 camera da letto</p>
                </div>
                <div class="annuncio">
                    <img src="immagine5.jpg" alt="Annuncio 5">
                    <h3>Attico con terrazza</h3>
                    <p>€450.000 - 3 camere da letto</p>
                </div>
                <div class="annuncio">
                    <img src="immagine6.jpg" alt="Annuncio 6">
                    <h3>Appartamento in periferia</h3>
                    <p>€200.000 - 2 camere da letto</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>© 2025 My Home Immobiliare - Tutti i diritti riservati.</p>
    </footer>
</body>
</html>

