// ============================================================
// MOSTAFA SHAABAN — PORTFOLIO SCRIPTS
// ============================================================

// ── State ──
let currentLang = 'en';
let currentTheme = localStorage.getItem('theme') || 'dark';
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let qualActiveTab = 'exp';

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  renderAll(currentLang);
  initParticles();
  initScrollSpy();
  initScrollReveal();
  initNavbar();
  initHamburger();
  setTimeout(startTyping, 1200);
});

// ============================================================
// THEME
// ============================================================
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// ============================================================
// LANGUAGE
// ============================================================
function toggleLang() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  const html = document.documentElement;
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  document.body.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = currentLang === 'en' ? 'AR' : 'EN';
  renderAll(currentLang);
  // Restart typing for new language
  clearTimeout(window.typingTimeout);
  typingIndex = 0; charIndex = 0; isDeleting = false;
  const roleEl = document.getElementById('hero-role');
  if (roleEl) roleEl.textContent = '';
  setTimeout(startTyping, 400);
}

// ============================================================
// RENDER ENGINE
// ============================================================
function renderAll(lang) {
  const d = DATA[lang];
  renderNav(d.nav);
  renderHero(d.hero);
  renderAbout(d.about);
  renderSkills(d.skills);
  renderProjects(DATA[lang].projects, lang);
  renderQualification(d.qualification);
  renderCertifications(d.certifications);
  renderContact(d.contact);
  renderFooter(d.footer, d.nav);
}

// ── Navbar ──
function renderNav(nav) {
  const ul = document.getElementById('nav-links');
  if (!ul) return;
  ul.innerHTML = nav.links.map((link, i) => `
    <li><a href="#${nav.anchors[i]}" class="nav-link">${link}</a></li>
  `).join('');

  const mob = document.getElementById('mobile-menu');
  if (mob) {
    mob.innerHTML = nav.links.map((link, i) => `
      <a href="#${nav.anchors[i]}" onclick="closeMobileMenu()">${link}</a>
    `).join('');
  }
  attachNavLinks();
}

// ── Hero ──
function renderHero(hero) {
  setText('hero-badge-text', hero.badge);
  setText('hero-greeting', hero.greeting);
  setText('hero-name', hero.name);
  setText('hero-tagline', hero.tagline);
  setText('hero-brief', hero.brief);
  setText('hero-cta-primary', hero.cta_primary);
  setText('hero-cta-secondary', hero.cta_secondary);
  window._heroRoles = hero.roles;
}

// ── About ──
function renderAbout(about) {
  setText('about-section-label', about.section_label);
  setText('about-title', about.title);
  const bioEl = document.getElementById('about-bio');
  if (bioEl) bioEl.textContent = about.bio;

  const infoEl = document.getElementById('about-info');
  if (infoEl) {
    infoEl.innerHTML = about.info.map(item => `
      <div class="about-info-item">
        <span>${item.icon}</span>
        ${item.href
          ? `<a href="${item.href}">${item.label}</a>`
          : `<span>${item.label}</span>`}
      </div>
    `).join('');
  }

  const statsEl = document.getElementById('about-stats');
  if (statsEl) {
    statsEl.innerHTML = about.stats.map(s => `
      <div class="stat-card glass-card">
        <span class="stat-value mono">${s.value}</span>
        <span class="stat-label">${s.label}</span>
      </div>
    `).join('');
  }
}

// ── Skills ──
function renderSkills(skills) {
  setText('skills-section-label', skills.section_label);
  setText('skills-title', skills.title);
  setText('skills-subtitle', skills.subtitle);

  const el = document.getElementById('skills-categories');
  if (!el) return;
  el.innerHTML = skills.categories.map(cat => `
    <div class="reveal">
      <div class="skill-category-title">
        <span>${cat.icon}</span> ${cat.name}
      </div>
      <div class="skill-tags">
        ${cat.items.map(item => `<span class="tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
  initScrollReveal();
}

// ── Projects ──
function renderProjects(projects, lang) {
  setText('projects-section-label', projects.section_label);
  setText('projects-title', projects.title);
  setText('projects-subtitle', projects.subtitle);

  const el = document.getElementById('projects-grid');
  if (!el) return;
  el.innerHTML = projects.items.map(p => `
    <div class="project-card glass-card reveal">
      <div class="project-preview">
        <img src="${p.image}" alt="${p.title}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="project-preview-placeholder project-placeholder-${i+1}" style="display:none">
          <span class="placeholder-icon">${['📊','🛒','🥑'][i]}</span>
          <span class="placeholder-label">${p.tags.join(' · ')}</span>
        </div>
        <div class="project-overlay">🔗 ${lang === 'ar' ? 'عرض مباشر' : 'View Live'}</div>
      </div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <span class="project-impact mono">${p.impact}</span>
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${p.live || '#'}"
            class="project-link live ${!p.live ? 'disabled' : ''}"
            ${p.live ? 'target="_blank"' : ''}>
            ↗ ${lang === 'ar' ? 'Dashboard مباشر' : 'Live Dashboard'}
          </a>
          <a href="${p.github}" target="_blank" class="project-link source">
            &lt;/&gt; ${lang === 'ar' ? 'الكود' : 'Source Code'}
          </a>
        </div>
      </div>
    </div>
  `).join('');
  initScrollReveal();
}

// ── Qualification ──
function renderQualification(qual) {
  setText('qual-section-label', qual.section_label);
  setText('qual-title', qual.title);
  setText('qual-subtitle', qual.subtitle);

  const expBtn = document.getElementById('tab-exp');
  const eduBtn = document.getElementById('tab-edu');
  if (expBtn) expBtn.textContent = qual.tab_exp;
  if (eduBtn) eduBtn.textContent = qual.tab_edu;

  // Experience
  const expEl = document.getElementById('qual-experience');
  if (expEl) {
    expEl.innerHTML = qual.experience.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card glass-card">
          <div class="timeline-header">
            <span class="timeline-role">${item.role}</span>
            <span class="timeline-period">${item.period}</span>
          </div>
          <div class="timeline-company">${item.company} · ${item.location}</div>
          <ul class="timeline-points">
            ${item.points.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');
  }

  // Education
  const eduEl = document.getElementById('qual-education');
  if (eduEl) {
    eduEl.innerHTML = qual.education.map(item => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card glass-card">
          <div class="timeline-header">
            <span class="timeline-role">${item.degree}</span>
            <span class="timeline-period">${item.period}</span>
          </div>
          <div class="timeline-company">${item.institution} · ${item.location}</div>
          ${item.note ? `<p class="timeline-note">${item.note}</p>` : ''}
          ${item.points ? `<ul class="timeline-points">${item.points.map(p => `<li>${p}</li>`).join('')}</ul>` : ''}
        </div>
      </div>
    `).join('');
  }

  switchQualTab(qualActiveTab);
}

function switchQualTab(tab) {
  qualActiveTab = tab;
  document.querySelectorAll('.qual-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.qual-panel').forEach(p => p.classList.remove('active'));
  const btn = document.getElementById(`tab-${tab}`);
  const panel = document.getElementById(`panel-${tab}`);
  if (btn) btn.classList.add('active');
  if (panel) {
    panel.classList.add('active');
    panel.querySelectorAll('.timeline-item').forEach((item, i) => {
      setTimeout(() => item.classList.add('revealed'), i * 100);
    });
  }
}

// ── Certifications ──
function renderCertifications(certs) {
  setText('certs-section-label', certs.section_label);
  setText('certs-title', certs.title);
  setText('certs-subtitle', certs.subtitle);

  const el = document.getElementById('certs-content');
  if (!el) return;
  el.innerHTML = certs.categories.map(cat => `
    <div class="cert-group reveal">
      <div class="cert-section-title">${cat.icon} ${cat.name}</div>
      <div class="cert-grid">
        ${cat.items.map(item => `
          <div class="cert-card glass-card">
            <div class="cert-name">${item.name}</div>
            <div class="cert-meta">${item.issuer}</div>
            <span class="cert-year">${item.year}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
  initScrollReveal();
}

// ── Contact ──
function renderContact(contact) {
  setText('contact-section-label', contact.section_label);
  setText('contact-title', contact.title);
  setText('contact-subtitle', contact.subtitle);
  setText('contact-submit', contact.form.submit);

  const nameInput = document.getElementById('form-name');
  const emailInput = document.getElementById('form-email');
  const msgInput = document.getElementById('form-message');
  if (nameInput) nameInput.placeholder = contact.form.name_placeholder;
  if (emailInput) emailInput.placeholder = contact.form.email_placeholder;
  if (msgInput) msgInput.placeholder = contact.form.message_placeholder;

  const infoEl = document.getElementById('contact-info-list');
  if (infoEl) {
    infoEl.innerHTML = contact.info.map(item => `
      <div class="contact-info-item">
        <span>${item.icon}</span>
        ${item.href
          ? `<a href="${item.href}">${item.label}</a>`
          : `<span>${item.label}</span>`}
      </div>
    `).join('');
  }
}

// ── Footer ──
function renderFooter(footer, nav) {
  setText('footer-name', 'Mostafa Shaaban');
  setText('footer-tagline', footer.tagline);
  setText('footer-copy', footer.copy);

  const linksEl = document.getElementById('footer-links');
  if (linksEl) {
    linksEl.innerHTML = nav.links.map((link, i) => `
      <a href="#${nav.anchors[i]}">${link}</a>
    `).join('');
  }
}

// ── Helper ──
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// ============================================================
// TYPING EFFECT
// ============================================================
function startTyping() {
  const roles = window._heroRoles || DATA.en.hero.roles;
  const el = document.getElementById('hero-role');
  if (!el) return;

  const currentRole = roles[typingIndex];
  const speed = isDeleting ? 60 : 110;

  if (!isDeleting) {
    el.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      window.typingTimeout = setTimeout(startTyping, 2000);
      return;
    }
  } else {
    el.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % roles.length;
    }
  }
  window.typingTimeout = setTimeout(startTyping, speed);
}

// ============================================================
// PARTICLES
// ============================================================
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = currentTheme === 'dark';
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = isDark
        ? `rgba(139,92,246,${p.opacity})`
        : `rgba(37,99,235,${p.opacity * 0.6})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(draw);
  }

  draw();
}

// ============================================================
// SCROLL SPY
// ============================================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-link').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.3 });
  sections.forEach(s => observer.observe(s));
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el));
}

// ============================================================
// NAVBAR SCROLL
// ============================================================
function initNavbar() {
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 20);
  });
}

function attachNavLinks() {
  document.querySelectorAll('.nav-link, .mobile-menu a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ============================================================
// HAMBURGER
// ============================================================
function initHamburger() {
  const btn = document.getElementById('hamburger');
  if (btn) btn.addEventListener('click', toggleMobileMenu);
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu?.classList.toggle('open');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu?.classList.remove('open');
}

// ============================================================
// CONTACT FORM
// ============================================================
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('contact-submit');
  if (btn) {
    btn.textContent = '✓ Sent!';
    btn.style.background = '#22C55E';
    setTimeout(() => {
      btn.textContent = DATA[currentLang].contact.form.submit;
      btn.style.background = '';
      e.target.reset();
    }, 3000);
  }
}
