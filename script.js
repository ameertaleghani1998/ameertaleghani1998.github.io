// Language switcher (Arabic / English)

const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('lang') || 'ar';

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('.i18n').forEach(function (el) {
    const text = el.getAttribute('data-' + lang);
    if (text !== null) {
      el.textContent = text;
    }
  });

  langToggle.textContent = lang === 'ar' ? 'English' : 'العربية';
  localStorage.setItem('lang', lang);
}

langToggle.addEventListener('click', function () {
  setLanguage(currentLang === 'ar' ? 'en' : 'ar');
});

document.addEventListener('DOMContentLoaded', function () {
  setLanguage(currentLang);
});
