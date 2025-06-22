const translations = {
  id: {
    about: "Tentang",
    experience: "Pengalaman",
    education: "Pendidikan",
    skills: "Keahlian",
    awards: "Penghargaan",
    chooseLang: "Pilih Bahasa",
  },
  en: {
    about: "About",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    awards: "Awards",
    chooseLang: "Choose Language",
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
