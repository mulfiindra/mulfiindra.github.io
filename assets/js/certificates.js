const certificatesData = [
  {
    id: "fundamental-assist-web",
    title: {
      id: "Fundamental of Assistant Web Developer",
      en: "Fundamental of Assistant Web Developer"
    },
    issuer: "Digital Talent Scholarship Komdigi",
    issued: "September 2026",
    image: [
      "assets/certificates/fundamental-assist-web-mulfiindra-1.jpg",
      "assets/certificates/fundamental-assist-web-mulfiindra-2.jpg"
    ],
    link: "assets/certificates/fundamental-assist-web-mulfiindra-1.jpg",
    color: "#054ada"
  },
  {
    id: "intermediate-assist-web",
    title: {
      id: "Intermediate Assistant Web Developer",
      en: "Intermediate Assistant Web Developer"
    },
    issuer: "Digital Talent Scholarship Komdigi",
    issued: "September 2026",
    image: [
      "assets/certificates/intermediate-assist-web-mulfiindra-1.jpg",
      "assets/certificates/intermediate-assist-web-mulfiindra-2.jpg"
    ],
    link: "assets/certificates/intermediate-assist-web-mulfiindra-1.jpg",
    color: "#054ada"
  },
  {
    id: "ibm-ai",
    title: {
      id: "Build an AI Agent",
      en: "Build an AI Agent"
    },
    issuer: "IBM",
    issued: "Agustus 2026",
    image: "assets/certificates/ibm-certificates-mulfiindra.png",
    link: "assets/certificates/ibm-certificates-mulfiindra.png",
    color: "#054ada"
  },
  {
    id: "ept-toefl",
    title: {
      id: "Sertifikat EPT",
      en: "EPT Certificate"
    },
    issuer: "Lembaga Bahasa - Universitas Widyatama",
    issued: "Jun 2026",
    image: "assets/certificates/toefl-mulfiindra.jpg",
    link: "assets/certificates/toefl-mulfiindra.jpg",
    color: "#2a9d8f"
  },
  {
    id: "cisco-iot",
    title: {
      id: "Introduction to IoT",
      en: "Introduction to IoT"
    },
    issuer: "Cisco",
    issued: "Jan 2026",
    image: "assets/certificates/cisco-iot-mulfiindra.jpg",
    link: "https://www.credly.com/badges/2e2d4302-3d60-40c6-91d3-977ca45ad387/linked_in_profile",
    color: "#00bceb"
  },
  {
    id: "webinar-css",
    title: {
      id: 'Speaker in Webinar',
      en: 'Speaker in Webinar'
    },
    issuer: "TAMPIL (PT BISA ARTIFISIAL INDONESIA)",
    issued: "Sep 2020",
    image: "assets/certificates/webinar-speaker-mulfiindra.jpg",
    link: "https://drive.google.com/file/d/1RnUCpGf4FzIj_5LJpmx85fDuQoJ4Jo-O/view",
    color: "#e63946"
  },
  {
    id: "skillacademy-html",
    title: {
      id: "Belajar Konsep HTML untuk Programming",
      en: "Learn HTML Concepts for Programming"
    },
    issuer: "Skill Academy by Ruangguru",
    issued: "Apr 2020",
    image: "assets/certificates/skillacademy-mulfiindra.jpg",
    link: "https://img-certificate.ruangguru.com/MULFI99IHFWAY7UM/CERT-SH2OUVMK.jpg",
    color: "#ffb703"
  },
  {
    id: "ujikom-smk",
    title: {
      id: "Sertifikat Uji Kompetensi SMK",
      en: "Vocational High School Competency Certificate"
    },
    issuer: "PT. Cakrawala Global Yaksa",
    issued: "Mei 2019",
    image: "assets/certificates/Sertifikat Uji Kompetensi SMK.jpg",
    link: "https://drive.google.com/file/d/1rfWa4vClkBwj-WS8HaIcmeHFT8y0Txcn/view?usp=sharing",
    color: "#457b9d"
  }
];

function renderCertificates() {
  const container = document.getElementById('certificates-container');
  if (!container) return;

  const currentLang = localStorage.getItem('lang') || 'id';
  container.innerHTML = '';

  certificatesData.forEach((cert, index) => {
    const card = document.createElement('div');
    card.className = 'col-lg-3 col-md-4 col-sm-6 col-12 mb-4 project-card-animate';
    card.style.animationDelay = `${index * 0.1}s`;

    // Check if image is array for the thumbnail
    const thumbImg = Array.isArray(cert.image) ? cert.image[0] : cert.image;

    // Safely pass the index to the onclick handler instead of the string
    card.innerHTML = `
        <div class="card cert-card h-100 shadow-sm border-0">
          <div class="cert-img-container" style="border-top-color: ${cert.color}; cursor: zoom-in;" onclick="openCertLightbox(${index})">
             <img src="${thumbImg}" class="img-fluid cert-preview" alt="${cert.title.id}" loading="lazy">
          </div>
          <div class="card-body d-flex flex-column p-3">
             <h6 class="cert-title lang-tr text-dark font-weight-bold mb-1 text-truncate" title='${cert.title.id}' data-id='${cert.title.id}' data-en='${cert.title.en}'>${cert.title[currentLang] || cert.title.id}</h6>
             <small class="cert-issuer text-muted mt-2 mb-3">${cert.issuer}</small>
             <small class="cert-issued text-muted mt-auto mb-0"><i class="far fa-calendar-alt mr-1"></i>${cert.issued}</small>
          </div>
        </div>
    `;
    container.appendChild(card);
  });
}

let currentCertImages = [];
let currentCertIndex = 0;

function openCertLightbox(certIndex) {
  const cert = certificatesData[certIndex];

  if (Array.isArray(cert.image)) {
    currentCertImages = cert.image;
  } else {
    currentCertImages = [cert.image];
  }

  currentCertIndex = 0;
  updateCertLightbox();
  $('#custom-lightbox').fadeIn(200);
}

function updateCertLightbox() {
  document.getElementById('lightbox-img').src = currentCertImages[currentCertIndex];

  if (currentCertImages.length > 1) {
    $('.lightbox-nav').show();
  } else {
    $('.lightbox-nav').hide();
  }
}

// Add navigation logic to the window object so inline onclick handlers can reach them
window.lightboxPrev = function () {
  if (currentCertImages.length <= 1) return;
  currentCertIndex = (currentCertIndex === 0) ? currentCertImages.length - 1 : currentCertIndex - 1;
  updateCertLightbox();
}

window.lightboxNext = function () {
  if (currentCertImages.length <= 1) return;
  currentCertIndex = (currentCertIndex === currentCertImages.length - 1) ? 0 : currentCertIndex + 1;
  updateCertLightbox();
}

// Attach event listeners to the nav buttons in DOM if they exist
document.addEventListener('DOMContentLoaded', () => {
  renderCertificates();

  const prevBtn = document.querySelector('.lightbox-prev');
  if (prevBtn) prevBtn.addEventListener('click', window.lightboxPrev);

  const nextBtn = document.querySelector('.lightbox-next');
  if (nextBtn) nextBtn.addEventListener('click', window.lightboxNext);
});
