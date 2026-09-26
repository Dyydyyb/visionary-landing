// Visionary - Landing Page Logic
document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header scroll effect
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Scroll Reveal Animations via IntersectionObserver
  const fadeElements = document.querySelectorAll('.fade-up-element');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    fadeElements.forEach(el => el.classList.add('revealed'));
  }

  // 4. Contact Form to WhatsApp Redirection
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name')?.value.trim() || '';
      const company = document.getElementById('form-company')?.value.trim() || '';
      const phone = document.getElementById('form-phone')?.value.trim() || '';
      const need = document.getElementById('form-need')?.value.trim() || '';
      const message = document.getElementById('form-message')?.value.trim() || '';

      const targetPhone = '5493518504421'; // +54 9 351 850-4421

      let waMessage = `*Consulta Web - Visionary Soluciones Empresariales*\n\n`;
      waMessage += `*Nombre:* ${name}\n`;
      if (company) waMessage += `*Empresa / Rubro:* ${company}\n`;
      if (phone) waMessage += `*Teléfono:* ${phone}\n`;
      if (need) waMessage += `*Área de interés:* ${need}\n`;
      if (message) waMessage += `*Mensaje / Detalle:* ${message}\n\n`;
      waMessage += `Hola, quiero coordinar una asesoría inicial para mi empresa.`;

      const encodedMessage = encodeURIComponent(waMessage);
      const waUrl = `https://wa.me/${targetPhone}?text=${encodedMessage}`;

      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  }

  // 5. Active Link Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  }, { passive: true });
});
