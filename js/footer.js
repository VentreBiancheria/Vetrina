// Questo script cerca una scatola vuota per il footer chiamata 'footer-container'
// e ci inietta dentro il contenuto del footer.
// In questo modo, se un domani aggiungi una categoria, si aggiornerà in tutte le pagine!

document.getElementById("footer-container").innerHTML = `
    <footer class="main-footer">
        <div class="footer-content">
            
            <div class="footer-col">
                <h3>Contatti</h3>
                <ul class="lista-allineata">
                    <li class="riga-contatti">
                        <span><strong>Indirizzo:</strong> Via Duomo, 18/20, 84121 Salerno SA</span>
                    </li>

                    <li class="riga-contatti">
                        <a href="tel:+39089228601" style="color: inherit; text-decoration: none;">
                            <strong>Telefono:</strong> 089 228601
                        </a>
                    </li>

                    <li class="riga-contatti">
                        <a href="mailto:antonio-ventre@alice.it?subject=Richiesta%20informazioni" style="color: var(--colore-accento-footer); text-decoration: none; font-weight: bold;">
                            <i class="fa-solid fa-envelope" style="margin-right: 8px;"></i>antonio-ventre@alice.it
                        </a>
                    </li>

                    <li class="riga-contatti">
                        <a href="https://www.instagram.com/ventre.biancheria?igsh=MWc1YW5rcnR5cmxkbg==" target="_blank" rel="noopener noreferrer" style="color: var(--colore-accento-footer); text-decoration: none; font-weight: bold;">
                            <i class="fa-brands fa-instagram" style="margin-right: 8px;"></i>Seguici su Instagram
                        </a>
                    </li>

                    <li class="riga-contatti">
                        <a href="https://www.facebook.com/p/Ventre-biancheria-100066561880029/" target="_blank" rel="noopener noreferrer" style="color: var(--colore-accento-footer); text-decoration: none; font-weight: bold;">
                            <i class="fa-brands fa-facebook" style="margin-right: 8px;"></i>Seguici su Facebook
                        </a>
                    </li>
                </ul>
            </div>

            <div class="footer-col">
                <h3>Orari di Apertura</h3>
                <ul class="lista-allineata">
                    <li class="riga-orari"><span>Lunedì</span> <span>17:00 – 20:30</span></li>
                    <li class="riga-orari"><span>Martedì – Sabato</span> <span>09:15–13:15 / 17:00–20:30</span></li>
                    <li class="riga-orari"><span>Domenica</span> <span>Chiuso</span></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2026 Ventre Biancheria - Salerno. Tutti i diritti riservati.</p>
        </div>
    </footer>
`;
