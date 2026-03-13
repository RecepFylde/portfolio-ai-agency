const translations = {
  en: {
    "nav-home": "HOME",
    "nav-references": "REFERENCES",
    "nav-contact": "CONTACT",
    "hire-me": "// HIRE ME",
    "desc-title": "// I'M RECEP &mdash; AI SOLUTIONS ENGINEER & APP DESIGNER",
    "desc-sub": "HELPING STARTUPS AND BUSINESSES BUILD <br> CLEAN, INTUITIVE DIGITAL PRODUCTS <br> ACCELERATED BY AI.",
    "desc-right": "// DESIGN THAT<br>SPEEDS UP YOUR BRAND",
    "lang-btn": "TR"
  },
  tr: {
    "nav-home": "ANA SAYFA",
    "nav-references": "REFERANSLAR",
    "nav-contact": "İLETİŞİM",
    "hire-me": "// BENİ İŞE AL",
    "desc-title": "// BEN RECEP &mdash; YAPAY ZEKA ÇÖZÜMLERİ MÜHENDİSİ & MOBİL UYGULAMA TASARIMCISI",
    "desc-sub": "STARTUP VE İŞLETMELER İÇİN <br> YAPAY ZEKA İLE HIZLANDIRILMIŞ <br> TEMİZ, SEZGİSEL DİJİTAL ÜRÜNLER TASARLIYORUM.",
    "desc-right": "// MARKANIZI<br>HIZLANDIRAN TASARIM",
    "lang-btn": "EN"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  console.log('Recep Haylu Labs - Portfolio is loaded');
  
  let currentLang = 'en';
  const langBtn = document.getElementById('lang-btn');
  const i18nElements = document.querySelectorAll('[data-i18n]');

  const updateLanguage = () => {
    i18nElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });
    if (langBtn) {
      langBtn.innerHTML = translations[currentLang]['lang-btn'];
    }
  };

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'tr' : 'en';
      updateLanguage();
    });
  }

  // Set initial language texts
  updateLanguage();

  // Example for handling spline events later
  const viewer = document.querySelector('spline-viewer');
  if (viewer) {
    // viewer.addEventListener('load', () => { ... });
  }
});
