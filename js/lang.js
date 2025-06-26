const translations = {
  id: {
    about: "Tentang",
    experience: "Pengalaman",
    education: "Pendidikan",
    skills: "Keahlian",
    awards: "Penghargaan",
    chooseLang: "Pilih Bahasa",
    rumah: "Perumahan Candirenggo Asri Blok H-1 · Kabupaten Singosari · (62) 81330960798 ·",
    iam: "Saya merupakan seorang semi-profesional dengan latar belakang pendidikan di bidang Teknik Komputer dan Jaringan, serta memiliki keahlian khusus dalam Keamanan Siber. Selain itu, saya memiliki rekam jejak yang baik dalam bidang Teknik Jaringan, Administrasi Sistem, dan Manajemen Infrastruktur Teknologi Informasi. Saya dikenal sebagai individu yang memiliki tingkat komitmen tinggi, mampu bekerja secara mandiri maupun dalam tim, serta berorientasi pada hasil. Di samping itu, saya memiliki kemampuan pemrograman tingkat semi-profesional dalam beberapa bahasa, termasuk HTML, Python, dan PHP. Saya juga berpengalaman dalam pengelolaan dan pengembangan situs web berbasis WordPress, baik untuk keperluan profesional maupun pribadi.",
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
    Certiport: "Sertifikat Keamanan Siber Certiport",
    Standesk: "Sertifikat Standesk",
    Ansible: "Sertifikat Mengotomatiskan penerapan aplikasi menggunakan Ansible",
    Toiec: "Sertifikat Toeic",
    Awareness: "Sertifikat Kesadaran Keamanan Siber",
    Tahfidzul: "Sertifikat Tahfidzul",
    SD: "SD Islam Bani Hasyim",
    SMP: "SMP Islam Terpadu Insan Permata Malang",
    Website: "Proyek pribadi Situs web html dan css",
    Website2: "Saya telah mengembangkan sebuah proyek pribadi berupa website portofolio yang sepenuhnya dibangun menggunakan HTML dan CSS, sebagai media untuk menampilkan keahlian, pengalaman, dan karya-karya saya di bidang teknologi dan pengembangan web.",
    klik: "Klik untuk detail",
  },
  en: {
    about: "About",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    awards: "Awards",
    chooseLang: "Choose Language",
    rumah: "Candirenggo Asri Housing Block H-1 · Singosari Regency · (62) 81330960798 ·",
    iam: "I am a semi-professional with an educational background in Computer and Network Engineering, and specialized in Cyber Security. In addition, I have a good track record in Network Engineering, System Administration, and Information Technology Infrastructure Management. I am known as an individual who has a high level of commitment, able to work independently and in teams, and results-oriented. In addition, I have semi-professional level programming skills in several languages, including HTML, Python, and PHP. I am also experienced in managing and developing WordPress-based websites, both for professional and personal use.",
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
    Certiport: "Certificate CyberSecurity Certiport",
    Standesk: "Cetificate Standesk",
    Ansible: "Certificate Automating the deployment of applications using Ansible",
    Toiec: "Certificate Toeic",
    Awareness: "Certificate Cyber Security Awareness",
    Tahfidzul: "Certificate Tahfidzul",
    SD: "Bani Hasyim Islamic Elementary School",
    SMP: "Integrated Islamic Junior High School INSAN PERMATA MALANG",
    Website: "Personal project Website html and css",
    Website2: "I have developed a personal project of a portfolio website built entirely using HTML and CSS, as a medium to showcase my expertise, experience, and works in the field of web technology and development.",
    klik: "Click To Details",
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
