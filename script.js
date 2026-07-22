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
// تبديل الوضع الليلي / النهاري
const themeToggle = document.getElementById('themeToggle');
let darkMode = localStorage.getItem('darkMode') === 'true';

function setTheme(isDark) {
  darkMode = isDark;
  document.body.classList.toggle('dark-mode', isDark);
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('darkMode', isDark);
}

themeToggle.addEventListener('click', () => setTheme(!darkMode));

document.addEventListener('DOMContentLoaded', () => setTheme(darkMode));





// التنقل السلس بدون إضافة # إلى الرابط
document.querySelectorAll(".navmenu a[data-target]").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.getElementById(this.dataset.target);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

