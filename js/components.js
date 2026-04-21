// ===== SHARED COMPONENTS =====

const LOGO_SVG = `
<svg viewBox="0 0 220 56" xmlns="http://www.w3.org/2000/svg" class="logo-svg">
  <!-- PET text -->
  <text x="0" y="44" font-family="Fredoka One, cursive" font-size="46" font-weight="900" fill="#1a1a1a" letter-spacing="-1">PET</text>
  <!-- Bites text with heart in B -->
  <text x="110" y="44" font-family="Fredoka One, cursive" font-size="42" fill="#1a1a1a">Bites</text>
  <!-- Heart on B -->
  <path d="M114 10 C114 7, 112 5, 110 7 C108 5, 106 7, 106 10 C106 13, 110 16, 110 16 C110 16, 114 13, 114 10Z" fill="#05C9B4"/>
  <!-- Teal dash between words -->
  <rect x="84" y="22" width="22" height="5" rx="2.5" fill="#05C9B4"/>
</svg>`;

const NAV_HTML = `
<header>
  <nav>
    <a href="../index.html" class="nav-logo">
      ${LOGO_SVG}
    </a>
    <ul class="nav-links">
      <li><a href="../index.html">Inicio</a></li>
      <li><a href="nosotros.html">Nosotroooos</a></li>
      <li><a href="servicios.html">Servicios</a></li>
      <li><a href="membresia.html">Membresía</a></li>
      <li><a href="contacto.html">Contacto</a></li>
      <li><a href="registro.html" class="nav-cta">¡Regístrate!</a></li>
    </ul>
    <div class="hamburger">
      <span></span><span></span><span></span>
    </div>
  </nav>
  <div class="mobile-menu">
    <a href="../index.html">🏠 Inicio</a>
    <a href="nosotros.html">🐾 Nosotros</a>
    <a href="servicios.html">🥗 Servicios</a>
    <a href="membresia.html">⭐ Membresía</a>
    <a href="contacto.html">📩 Contacto</a>
    <a href="registro.html">✅ ¡Regístrate!</a>
  </div>
</header>`;

const WHATSAPP_BTN = `
<a href="https://wa.me/59178855799" target="_blank" class="whatsapp-float" title="Escríbenos por WhatsApp">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
</a>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      ${LOGO_SVG.replace('class="logo-svg"', 'class="logo-svg" style="filter: invert(1) brightness(2)"')}
      <p style="margin-top:16px;">Nutrición inteligente y científicamente personalizada para mascotas. Optimizamos su energía, salud y longevidad.<br><br>Una marca de <strong style="color:var(--teal)">SMART FIT Nutrition & Health</strong></p>
    </div>
    <div class="footer-col">
      <h4>Navegación</h4>
      <ul>
        <li><a href="../index.html">Inicio</a></li>
        <li><a href="nosotros.html">Nosotros</a></li>
        <li><a href="servicios.html">Servicios</a></li>
        <li><a href="membresia.html">Membresía</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Servicios</h4>
      <ul>
        <li><a href="servicios.html">Plan Nutricional</a></li>
        <li><a href="servicios.html">Seguimiento</a></li>
        <li><a href="servicios.html">Retroalimentación</a></li>
        <li><a href="membresia.html">Membresía Premium</a></li>
        <li><a href="registro.html">Registro de Mascota</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contacto</h4>
      <ul>
        <li><a href="https://wa.me/59178855799" target="_blank">📱 +591 78855799</a></li>
        <li><a href="mailto:pierremonasterios@icloud.com">✉️ pierremonasterios@icloud.com</a></li>
        <li><a href="#">📍 Av. José Manuel Chinchilla, La Paz, Bolivia</a></li>
        <li><a href="https://pierremonasterios.wixsite.com/healthcoach" target="_blank">🌐 Sitio SMART FIT</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 PET Bites · SMART FIT Nutrition & Health · La Paz, Bolivia</p>
    <a href="https://wa.me/59178855799" target="_blank" class="footer-wa">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      WhatsApp
    </a>
  </div>
</footer>`;

// Inject into page
document.addEventListener('DOMContentLoaded', () => {
  // Nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // WhatsApp
  const waPlaceholder = document.getElementById('wa-placeholder');
  if (waPlaceholder) waPlaceholder.innerHTML = WHATSAPP_BTN;
});
