const translations = {
  id: {
    title: "Selamat Datang",
    desc: "Ini adalah contoh website multibahasa.",
    button: "Klik Saya"
  },
  en: {
    title: "Welcome",
    desc: "This is a multi-language website example.",
    button: "Click Me"
  }
};

const languageSelector = document.getElementById("language");
const elements = document.querySelectorAll("[data-lang]");

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-lang");
    el.textContent = translations[lang][key];
  });
}

// Ganti bahasa saat dropdown dipilih
languageSelector.addEventListener("change", (e) => {
  const selectedLang = e.target.value;
  setLanguage(selectedLang);
});

// Atur default ke bahasa Indonesia
setLanguage("id");
