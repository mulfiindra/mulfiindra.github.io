const projectsData = [
  // 1. Mobile Tax (Software Testing) - PRIMARY
  {
    id: "tax-mobile",
    category: "software-testing",
    images: ["assets/mobile.jpg"],
    title: {
      id: "Aplikasi Layanan Pajak Daerah Mobile",
      en: "Mobile Regional Tax Service Application"
    },
    role: {
      id: "Technical Support / Software Tester",
      en: "Technical Support / Software Tester"
    },
    platform: "Mobile / Android",
    tags: ["Manual Testing", "Functional Testing", "Integration Testing", "SIT/UAT", "Test Case", "Bug Reporting", "Retesting"],
    projectType: {
      id: "Pengujian Perangkat Lunak",
      en: "Software Testing"
    },
    description: {
      id: "Pengujian manual untuk aplikasi mobile layanan pajak daerah. Menyusun skenario dan test case berdasarkan kebutuhan pengguna, melakukan eksekusi pengujian, dokumentasi bug, retesting, serta UAT.",
      en: "Manual testing of a mobile application supporting regional tax services. Prepared test scenarios and test cases based on requirements, executed testing, documented bugs, performed retesting and UAT."
    },
    testCaseUrl: "https://docs.google.com/spreadsheets/d/1RNslZzbZqwzVAgyEzpGWqtjTLoBFLGVmm9leTxj06us/edit?usp=sharing"
  },
  // 2. API Documentation
  {
    id: "api-documentation",
    category: "software-testing",
    images: ["assets/doc.jpg"],
    title: {
      id: "Dokumentasi API",
      en: "API Documentation"
    },
    role: {
      id: "Technical Support / Software Tester",
      en: "Technical Support / Software Tester"
    },
    platform: "Web / API Integration",
    tags: ["API Docs", "Systems Analysis", "Functional Req.", "Postman", "Microsoft Office"],
    projectType: {
      id: "Dokumentasi API",
      en: "API Documentation"
    },
    description: {
      id: "Menyusun dokumen teknis API dan melakukan analisis sistem berdasarkan kebutuhan fungsional (Functional Requirements). Melakukan pengujian dan simulasi endpoint menggunakan Postman, serta membuat panduan integrasi yang terstruktur menggunakan Microsoft Office.",
      en: "Compiled technical API documents and conducted systems analysis based on functional requirements. Performed endpoint testing and simulation using Postman, and created structured integration guidelines using Microsoft Office."
    },
    testCaseUrl: "assets/webservice-sample.pdf",
    testCaseTextId: "Lihat Contoh Dokumen API",
    testCaseTextEn: "View API Documentation Example"
  },
  // 3. Tax Web (Software Testing)
  {
    id: "tax-web",
    category: "software-testing",
    images: ["assets/web.jpg"],
    title: {
      id: "Aplikasi Web Layanan Pajak Daerah",
      en: "Regional Tax Web Application"
    },
    role: {
      id: "Technical Support / Software Tester",
      en: "Technical Support / Software Tester"
    },
    platform: "Web",
    tags: ["Manual Testing", "Functional Testing", "System Testing", "Integration Testing", "End-to-End Testing", "SIT/UAT", "Postman", "MySQL/PostgreSQL", "SQL"],
    projectType: {
      id: "Pengujian Perangkat Lunak",
      en: "Software Testing"
    },
    description: {
      id: "Pengujian aplikasi web layanan pajak daerah secara manual yang mencakup validasi fungsional, integrasi, dan end-to-end. Fokus pada reproduksi masalah, dokumentasi bug, validasi database, serta koordinasi teknis bersama tim pengembang.",
      en: "Manual testing of a regional tax web application covering functional, integration, and end-to-end validation. Focused on issue reproduction, bug documentation, database validation, and technical coordination with developers."
    }
  },
  // 4. BANDROS (Web Development)
  {
    id: "bandros",
    category: "web-development",
    images: ["assets/bandros-app/bandros-1.png", "assets/bandros-app/bandros-2.png", "assets/bandros-app/bandros-3.png", "assets/bandros-app/bandros-4.png", "assets/bandros-app/bandros-5.png"],
    title: {
      id: "BANDROS - Bandung Road Observation System",
      en: "BANDROS - Bandung Road Observation System"
    },
    role: {
      id: "Fullstack Developer & Project Manager",
      en: "Fullstack Developer & Project Manager"
    },
    platform: "Web",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "PostgreSQL"],
    projectType: {
      id: "Proyek Akademik (Jul 2026 - Sekarang)",
      en: "Academic Project (Jul 2026 - Present)"
    },
    description: {
      id: "Merancang dan membangun BANDROS (Bandung Road Observation System), sebuah platform Web GIS crowdsourcing infrastruktur. Mengintegrasikan pemetaan spasial untuk pelaporan warga, sistem upvote, dan logika kategorisasi kewenangan jalan otomatis untuk efisiensi tindak lanjut admin.",
      en: "Designed and developed BANDROS (Bandung Road Observation System), an infrastructure crowdsourcing Web GIS platform. Integrated spatial mapping for citizen reporting, an upvote system, and automated road authority categorization logic for efficient admin escalation."
    },
    buttons: [
      { textId: "GitHub Repository", textEn: "GitHub Repository", url: "https://github.com/mulfiindra/bandros-app", class: "btn-primary", width: "w-50 mr-2" },
      { textId: "Demo Website", textEn: "Demo Website", url: "https://mulfiindra.github.io/bandros-app-demo/", class: "btn-primary", width: "w-50 ml-2" }
    ]
  },
  // 5. siPAUD
  {
    id: "sipaud",
    category: "web-development",
    images: ["assets/sipaud-app/sipaud2.png", "assets/sipaud-app/sipaud.jpeg", "assets/sipaud-app/sipaud3.png", "assets/sipaud-app/sipaud4.png", "assets/sipaud-app/sipaud5.png", "assets/sipaud-app/sipaud6.png"],
    title: {
      id: "siPAUD Web Application",
      en: "siPAUD Web Application"
    },
    role: {
      id: "Frontend Web Developer & Project Coordinator",
      en: "Frontend Web Developer & Project Coordinator"
    },
    platform: "Web",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
    projectType: {
      id: "Proyek Akademik (Jun 2024 - Jul 2024)",
      en: "Academic Project (Jun 2024 - Jul 2024)"
    },
    description: {
      id: "Mengembangkan sistem manajemen Pendidikan Anak Usia Dini (PAUD) berbasis web. Membangun UI yang responsif dan mengimplementasikan fitur CRUD untuk guru, siswa, orang tua, dan manajemen kelas.",
      en: "Developed a web-based Early Childhood Education (PAUD) management system. Built a responsive UI and implemented CRUD features for teachers, students, parents, and class management."
    },
    buttons: [
      { textId: "Dokumen SRS", textEn: "SRS Document", url: "assets/sipaud-app/LAPORAN%20SRS_siPAUD.pdf", class: "btn-info" },
      { textId: "User Guide", textEn: "User Guide", url: "assets/sipaud-app/guidebook_siPAUD.pdf", class: "btn-info" },
      { textId: "GitHub Repository", textEn: "GitHub Repository", url: "https://github.com/21mulfi/paud-app", class: "btn-primary w-100" },
      { textId: "Demo Website", textEn: "Demo Website", url: "https://mulfiindra.github.io/paud-app-demo/", class: "btn-primary w-100" }
    ]
  },
  // 6. BISA AI
  {
    id: "bisaai",
    category: "web-development",
    images: ["assets/bisaai/academy.png", "assets/bisaai/ss2.png", "assets/bisaai/ss3.png", "assets/bisaai/ss4.png", "assets/bisaai/ss5.png"],
    title: {
      id: "BISA AI Academy",
      en: "BISA AI Academy"
    },
    role: {
      id: "Frontend Web Developer",
      en: "Frontend Web Developer"
    },
    platform: "Web",
    tags: ["HTML", "CSS", "PHP", "JavaScript"],
    projectType: {
      id: "Proyek Perusahaan (Agu 2020 - Okt 2020)",
      en: "Company Project (Aug 2020 - Oct 2020)"
    },
    description: {
      id: "Berkontribusi dalam pengembangan awal profil situs web produk resmi dengan membangun halaman frontend yang responsif.",
      en: "Contributed to the early development of the official product website profile by building a responsive frontend."
    },
    buttons: [
      { textEn: "Visit Website", textId: "Kunjungi Web", url: "https://bisa.ai", class: "btn-primary", width: "btn-block" }
    ]
  },
  // 7. Tellhealth
  {
    id: "tellhealth",
    category: "web-development",
    images: ["assets/tellhealth.png"],
    title: {
      id: "Tellhealth Website",
      en: "Tellhealth Website"
    },
    role: {
      id: "Frontend Web Developer",
      en: "Frontend Web Developer"
    },
    platform: "Web",
    tags: ["PHP", "HTML", "CSS", "JavaScript"],
    projectType: {
      id: "Proyek Perusahaan (Okt 2020 - Nov 2020)",
      en: "Company Project (Oct 2020 - Nov 2020)"
    },
    description: {
      id: "Mendukung rilis awal proyek website resmi dengan merancang dan mengimplementasikan halaman frontend.",
      en: "Supported the initial release of the official website project by designing and implementing frontend pages."
    },
    buttons: [
      { textId: "Shutdown in 2021", textEn: "Shutdown in 2021", url: "#", class: "btn-danger disabled", width: "btn-block" }
    ]
  },
  // 8. UX Research - GalonGo
  {
    id: "ux-research-galongo",
    category: "ux-design",
    imageFit: "contain",
    imageBg: "#ffffff",
    images: ["assets/galongo/galon0.png", "assets/galongo/galon1.png", "assets/galongo/galon2.png", "assets/galongo/galon3.png", "assets/galongo/galon4.png", "assets/galongo/galon5.png", "assets/galongo/galon6.png"],
    title: {
      id: "GalonGo - Aplikasi Mobile Pemesanan Air Galon",
      en: "GalonGo - Water Gallon Ordering Mobile Application"
    },
    role: {
      id: "Project Coordinator, UX Researcher & UI Designer (Halaman Terpilih)",
      en: "Project Coordinator, UX Researcher & UI Designer (Selected Screens)"
    },
    platform: "Mobile Application (Conceptual)",
    tags: ["Figma", "Maze", "Google Forms", "User Research", "Usability Testing", "Wireframing", "Prototyping", "UX Design"],
    projectType: {
      id: "Proyek Akademik — UX Design (Mei - Jun 2026)",
      en: "Academic Project - UX Design (May - Jun 2026)"
    },
    description: {
      id: "Merancang prototype aplikasi mobile GalonGo untuk mempermudah proses pemesanan air galon yang sebelumnya dilakukan melalui WhatsApp atau telepon. Aplikasi dirancang dengan fitur pemesanan, repeat order, tracking pesanan, estimasi pengiriman, pembayaran QRIS, dan riwayat pesanan.",
      en: "Designed a mobile application prototype GalonGo to simplify the process of ordering gallon water, which was previously done via WhatsApp or phone. The application is designed with features for ordering, repeat orders, order tracking, delivery estimation, QRIS payments, and order history."
    },
    buttons: [
      { textId: "Lihat Hasil Usability Testing", textEn: "View Usability Testing Results", url: "https://docs.google.com/spreadsheets/d/1c3WYSsINgGnVe8GWhQDPGnQj1bO-6E1TDrDCQKypuhs/edit?usp=sharing", class: "btn-primary", width: "w-50 mr-2" },
      { textId: "Lihat Prototype", textEn: "View Prototype", url: "https://www.figma.com/proto/qzmW41TEuVDcz5WTeUINLc/GalonGo-Project?node-id=0-1&t=UEMswiuVduLX1E3a-1", class: "btn-primary", width: "w-50 ml-2" }
    ]
  }
];

function renderProjects(category) {
  const container = document.getElementById('projects-container');
  const emptyState = document.getElementById('projects-empty-state');

  // Clear existing
  container.innerHTML = '';

  const filteredProjects = projectsData.filter(p => p.category === category);

  if (filteredProjects.length === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';

    filteredProjects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'col-12 col-md-6 col-lg-4 p-3 mb-4';
      card.innerHTML = `
                <div class="card shadow-sm border h-100">
                    <img src="${project.images[0]}" class="card-img-top border-bottom" style="height:200px; object-fit:${project.imageFit || 'contain'}; background-color: ${project.imageBg || '#ffffff'};" alt="${project.title.id}" loading="lazy">
                    <div class="card-body text-center d-flex flex-column">
                        <h5 class="card-title font-weight-bold lang-tr" data-id="${project.title.id}" data-en="${project.title.en}">${project.title.id}</h5>
                        <p class="text-muted small mb-2 lang-tr" data-id="${project.role.id}" data-en="${project.role.en}">${project.role.id}</p>
                        
                        <div class="mt-2 mb-3">
                            ${project.tags.slice(0, 3).map(tag => `<span class="badge badge-light border shadow-sm m-1 p-2">${tag}</span>`).join('')}
                            ${project.tags.length > 3 ? `<span class="badge badge-light border shadow-sm m-1 p-2">...</span>` : ''}
                        </div>

                        <button class="btn btn-primary mt-auto" onclick="openProjectModal('${project.id}')">
                            <span class="lang-tr" data-id="Lihat Detail" data-en="View Details">Lihat Detail</span>
                        </button>
                    </div>
                </div>
            `;
      container.appendChild(card);
    });
  }

  // Apply translation to newly rendered items
  if (typeof applyLanguage === 'function' && typeof currentLang !== 'undefined') {
    applyLanguage(currentLang);
  } else {
    const savedLang = localStorage.getItem('lang') || 'id';
    document.querySelectorAll('#projects-container .lang-tr').forEach(el => {
      el.innerHTML = el.getAttribute('data-' + savedLang) || el.innerHTML;
    });
  }
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  // Set Title
  const modalTitle = document.getElementById('modal-project-title');
  modalTitle.setAttribute('data-id', project.title.id);
  modalTitle.setAttribute('data-en', project.title.en);

  // Set Images Carousel
  const carouselIndicators = document.getElementById('modal-carousel-indicators');
  const carouselInner = document.getElementById('modal-carousel-inner');

  carouselIndicators.innerHTML = '';
  carouselInner.innerHTML = '';

  if (project.images.length > 1) {
    document.getElementById('modal-carousel-controls').style.display = 'block';
  } else {
    document.getElementById('modal-carousel-controls').style.display = 'none';
  }

  project.images.forEach((img, idx) => {
    // Indicator
    const li = document.createElement('li');
    li.setAttribute('data-target', '#dynamicProjectCarousel');
    li.setAttribute('data-slide-to', idx);
    if (idx === 0) li.className = 'active';
    carouselIndicators.appendChild(li);

    // Image
    const item = document.createElement('div');
    item.className = 'carousel-item ' + (idx === 0 ? 'active' : '');
    item.innerHTML = `<img class="d-block w-100 rounded" style="max-height: 250px; object-fit: contain;" src="${img}" loading="lazy">`;
    // Setup lightbox click
    item.querySelector('img').onclick = function () {
      document.getElementById('lightbox-img').src = this.src;
      $('#custom-lightbox').fadeIn(200);
    };
    carouselInner.appendChild(item);
  });

  // Set Details
  document.getElementById('modal-project-type').setAttribute('data-id', project.projectType ? project.projectType.id : (project.platform || ""));
  document.getElementById('modal-project-type').setAttribute('data-en', project.projectType ? project.projectType.en : (project.platform || ""));

  document.getElementById('modal-project-role').setAttribute('data-id', project.role.id);
  document.getElementById('modal-project-role').setAttribute('data-en', project.role.en);

  document.getElementById('modal-project-tech').innerText = project.tags.join(', ');

  document.getElementById('modal-project-desc').setAttribute('data-id', project.description.id);
  document.getElementById('modal-project-desc').setAttribute('data-en', project.description.en);

  // Set Footer Buttons
  const footer = document.getElementById('modal-project-footer');
  footer.innerHTML = '';

  if (project.testCaseUrl) {
    const textId = project.testCaseTextId || "Lihat Contoh Test Case";
    const textEn = project.testCaseTextEn || "View Test Case Example";
    footer.innerHTML += `<a href="${project.testCaseUrl}" target="_blank" class="btn btn-info w-100 mb-2 lang-tr" data-id="${textId}" data-en="${textEn}">${textId}</a>`;
  }

  if (project.buttons) {
    let btnHtml = '<div class="d-flex w-100 justify-content-between flex-wrap">';
    project.buttons.forEach(btn => {
      btnHtml += `<a href="${btn.url}" target="_blank" class="btn ${btn.class} flex-fill m-1 lang-tr" data-id="${btn.textId || btn.text}" data-en="${btn.textEn || btn.text}">${btn.textId || btn.text}</a>`;
    });
    btnHtml += '</div>';
    footer.innerHTML += btnHtml;
  }

  // Translate modal
  const savedLang = localStorage.getItem('lang') || 'id';
  document.querySelectorAll('#projectDetailModal .lang-tr').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + savedLang) || el.innerHTML;
  });

  // Show modal
  $('#projectDetailModal').modal('show');
}

// Setup Filters
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.project-filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active from all
      filterBtns.forEach(b => b.classList.remove('active', 'btn-primary'));
      filterBtns.forEach(b => b.classList.add('btn-outline-primary'));

      // Add active to clicked
      e.target.classList.remove('btn-outline-primary');
      e.target.classList.add('active', 'btn-primary');

      // Render
      const category = e.target.getAttribute('data-filter');
      renderProjects(category);
    });
  });

  // Initial render
  renderProjects('software-testing');
});
