const translations = {
  en: {
    pageTitle: "Petr Martinec - Mobile App Developer",
    subtitle: "Mobile App Developer for Android",
    bioIntro: "Mobile game developer for Android with games published on Google Play.",
    "skill-games": "🎮 Mobile Games",
    "skill-android": "📱 Android",
    "skill-design": "✨ Modern Design",
    "skill-perf": "⚡ Stable Performance",
    "skill-code": "🔧 Clean Code",
    "skill-play": "🚀 Google Play",
    gamesTitle: "My Games on Google Play",
    "desc-mahjong": "Classic tile-matching Mahjong – remove tiles and clear the board.",
    "desc-tictactoe": "Classic Tic Tac Toe for one or two players. Simple but fun.",
    "desc-dodge": "Arcade game – dodge falling boxes as long as you can.",
    "desc-uhadni": "Geography quiz – guess which city is in the picture. Do you know world cities?",
    "desc-kawaii": "Cute match-3 puzzle – match kawaii fruits and clear the board.",
    "desc-nomad": "Arcade shooter – fly through 10 missions, defeat bosses and upgrade your ship.",
    itchTitle: "My Creations on itch.io",
    itchButton: "View on itch.io",
    "desc-duopix": "A focused pixel art editor for game sprites and seamless tiles.",
    "desc-coins": "7 low-poly coin shapes, 21 PBR variants and matching normal maps. GLB, FBX, OBJ and Blender source included.",
    "desc-gems": "12 stylized low-poly 3D gems – diamonds, rubies, crystals and more for your game.",
    "desc-fruits": "7 hand-crafted 128×128 pixel art fruit sprites with transparent backgrounds.",
  },
  cs: {
    pageTitle: "Petr Martinec - Vývojář mobilních aplikací",
    subtitle: "Vývojář mobilních aplikací pro Android",
    bioIntro: "Vývojář mobilních her pro Android s hrami vydanými na Google Play.",
    "skill-games": "🎮 Mobilní hry",
    "skill-android": "📱 Android",
    "skill-design": "✨ Moderní design",
    "skill-perf": "⚡ Stabilní výkon",
    "skill-code": "🔧 Čistý kód",
    "skill-play": "🚀 Google Play",
    gamesTitle: "Moje hry na Google Play",
    "desc-mahjong": "Klasická párová hra Mahjong – odstraňuj dlaždice a vyčisti herní plochu.",
    "desc-tictactoe": "Klasické piškvorky pro jednoho nebo dva hráče. Jednoduchá, ale zábavná.",
    "desc-dodge": "Arkádová hra – vyhýbej se padajícím krabicím co nejdéle dokážeš.",
    "desc-uhadni": "Zeměpisný kvíz – uhádni, které město je na obrázku. Znáš světová města?",
    "desc-kawaii": "Roztomilá match-3 puzzle – páruj kawaii ovoce a vyčisti herní plochu.",
    "desc-nomad": "Arkádová střílečka – proleť 10 misí, poraz bossy a vylepšuj svou loď.",
    itchTitle: "Moje výtvory na itch.io",
    itchButton: "Zobrazit na itch.io",
    "desc-duopix": "Pixel art editor zaměřený na herní sprity a bezešvé dlaždice.",
    "desc-coins": "7 low-poly tvarů mincí, 21 PBR variant a odpovídající normálové mapy. Včetně GLB, FBX, OBJ a zdrojového souboru pro Blender.",
    "desc-gems": "12 stylizovaných low-poly 3D drahokamů – diamanty, rubíny, krystaly a další do tvé hry.",
    "desc-fruits": "7 ručně kreslených pixel art spritů ovoce 128×128 s průhledným pozadím.",
  }
};

function detectLanguage() {
  const stored = localStorage.getItem('lang');
  if (stored === 'cs' || stored === 'en') return stored;
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return browserLang.startsWith('cs') ? 'cs' : 'en';
}

function applyLanguage(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('lang', lang);
  if (typeof gtag !== 'undefined') {
    gtag('event', 'language_change', { language: lang });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { applyLanguage(btn.dataset.lang); });
  });
  applyLanguage(detectLanguage());
});
