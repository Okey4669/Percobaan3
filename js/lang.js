const translations = {
  id: {
    about: "Tentang",
    experience: "Pengalaman",
    education: "Pendidikan",
    skills: "Keahlian",
    awards: "Penghargaan",
    chooseLang: "Pilih Bahasa",
    rumah: "Perumahan Candirenggo Asri Blok H-1 · Kabupaten Singosari · (62) 81330960798 ·",
    iam: " Saya adalah seorang semi-profesional jurusan Teknik Komputer dan Jaringan dengan keahlian di bidang keamanan Cyber dan juga berprestasi di bidang Teknik Jaringan, Administrasi Sistem, dan Manajemen Infrastruktur TI dengan Tingkat Komitmen Tinggi.",
  },
  en: {
    about: "About",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    awards: "Awards",
    chooseLang: "Choose Language",
    rumah: "Candirenggo Asri Housing Block H-1 · Singosari Regency · (62) 81330960798 ·",
    iam: "I am a semi-professional majoring in Computer and Network Engineering with expertise in Cyber ​​security and also accomplished in Network Engineering, System Administration, and IT Infrastructure Management with High Commitment Level.",
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
setLanguage("en");
