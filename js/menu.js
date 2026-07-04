// Questo script cerca una scatola vuota chiamata 'header-container' 
// e ci inietta dentro la nostra barra di navigazione.
// In questo modo, se un domani aggiungi una categoria, si aggiornerà in tutte le pagine!

document.getElementById("header-container").innerHTML = `
    <header class="top-bar">
        
        <div class="logo-container">
            <a href="index.html">
                <img src="./img/logo.png" alt="Ventre Biancheria" class="logo-img">
            </a>
        </div>

        <div class="info-destra">
            <a href="tel:+39089228601" class="telefono-header" aria-label="Chiama Ventre Biancheria al numero 089 228601">
                <i class="fa-solid fa-phone"></i>
                <span>089 228601</span>
            </a>

            <a href="https://maps.app.goo.gl/XsoQcuGuuysRmFhs6"
               target="_blank"
               rel="noopener noreferrer"
               class="btn-raggiungerci"
               aria-label="Apri le indicazioni stradali per Ventre Biancheria su Google Maps">
                <i class="fa-solid fa-location-dot"></i>
                <span>Come raggiungerci</span>
            </a>

            <a href="chi-siamo.html" class="btn-chi-siamo">
                Chi siamo
            </a>
        </div>

    </header>
`;