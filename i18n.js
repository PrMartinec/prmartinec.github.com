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
