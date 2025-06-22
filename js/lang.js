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
    FTTH: "FTTH (Fiber To The Home) (Serat Ke Rumah)",
    FTTH2: "Magang Teknisi",
    FTTH3: "Menginstal dan memelihara jaringan Fiber to the Home (FTTH), mengkonfigurasi perangkat ONU, menyambungkan kabel serat, dan menangani pemecahan masalah dasar, Memberikan dukungan teknis selama operasi lapangan.",
    Cloud: "Instalasi Komputasi Awan",
    Cloud2: "Menggunakan AWS dan WordPress",
    Cloud3: "Menerapkan layanan berbasis cloud menggunakan Amazon Web Services (AWS), Menginstal dan mengonfigurasi WordPress di infrastruktur cloud, Pengaturan hosting terkelola, penautan domain, dan manajemen sumber daya cloud dasar.",
    Attack: "Menyerang dan Mempertahankan Server Linux",
    Attack2: "Menyerang Linux Ubuntu Server, Mengkonfigurasi untuk melindungi server, Mengkonfigurasi Jaringan.",
    TKJ: "TKJ (Teknik Komputer dan Jaringan)",
    HardSkill: "Ketrampilan Teknis",
    Mikrotik: "Konfogurasi Mikrotik",
    Cyber: "Keamanan Siber",
    Fiber: "Pemasangan Serat Optik",
    Word: "Instalasi Komputasi Awan menggunakan AWS dan WordPress",
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
    FTTH: "FTTH (Fiber To The Home)",
    FTTH2: "Technician Internship",
    FTTH3: "Installed and maintained Fiber to the Home (FTTH) networks, Configured ONU devices, spliced fiber cables, and handled basic troubleshooting, Provided technical support during field operations.",
    Cloud: "Cloud Computing Installation",
    Cloud2: "Using AWS and WordPress",
    Cloud3: "Deployed cloud-based services using Amazon Web Services (AWS), Installed and configured WordPress on cloud infrastructure, Managed hosting setup, domain linking, and basic cloud resource management.",
    Attack: "Attack and Defend Linux Server",
    Attack2: "Attacking Linux Ubuntu Server, Configuring to protect the server, Configuring the Network.",
    TKJ: "Network Engineering and Computing",
    HardSkill: "HardSkill",
    Miktrotik: "Configuration Mikrotik",
    Cyber: "Cyber Security",
    Fiber: "Installation Fiber Optic",
    Word: "Cloud Computing Installation using AWS and WordPress",
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
