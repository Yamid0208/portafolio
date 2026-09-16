/**
 * Gridx Portfolio - Main Interactions
 * Mouse glow, mobile drawer, copy actions, project filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  initPageTransitions();
  initCardGlowEffect();
  initMobileNav();
  initCopyButtons();
  initProjectFilters();
  initContactForm();
});

/**
 * 0. Page Transitions Controller
 */
function initPageTransitions() {
  // Handle back/forward cache navigation restore
  window.addEventListener('pageshow', (event) => {
    document.body.classList.remove('page-exiting');
    document.body.classList.remove('page-entering');
  });

  // Intercept internal page navigation for smooth transition
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Skip external links, hash anchors, new tabs, downloads, email or tel
    if (
      link.target === '_blank' ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:') ||
      href.endsWith('.pdf') ||
      link.hasAttribute('download') ||
      href.startsWith('http://') ||
      href.startsWith('https://')
    ) {
      return;
    }

    // Check if the link points to an internal HTML page
    if (href.endsWith('.html') || href === '/' || href.includes('.html#')) {
      // If native View Transitions are enabled and active, let the browser handle it
      if ('startViewTransition' in document && window.matchMedia('(prefers-reduced-motion: no-preference)').matches && window.location.protocol.startsWith('http')) {
        return;
      }

      // Smooth exit transition fallback
      e.preventDefault();
      document.body.classList.add('page-exiting');
      setTimeout(() => {
        window.location.href = href;
      }, 220);
    }
  });
}

/**
 * 1. Interactive Mouse Radial Glow on Bento Cards
 */
function initCardGlowEffect() {
  const cards = document.querySelectorAll('.bento-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/**
 * 2. Responsive Mobile Drawer Navigation
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  // Create overlay backdrop if not exists
  let backdrop = document.querySelector('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }

  const openIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  const closeIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

  function toggleMenu(forceClose = false) {
    const isCurrentlyOpen = navMenu.classList.contains('open');
    const shouldOpen = forceClose ? false : !isCurrentlyOpen;

    if (shouldOpen) {
      navMenu.classList.add('open');
      backdrop.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = closeIcon;
      document.body.style.overflow = 'hidden';
    } else {
      navMenu.classList.remove('open');
      backdrop.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = openIcon;
      document.body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });

  backdrop.addEventListener('click', () => {
    toggleMenu(true);
  });

  // Close when clicking on any nav link
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(true);
    });
  });

  // Prevent clicks inside nav menu from closing it
  navMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      toggleMenu(true);
    }
  });
}

/**
 * 3. Quick Copy to Clipboard with Toast Feedback
 */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`¡Copiado al portapapeles: ${textToCopy}!`);
        }).catch(() => {
          showToast('No se pudo copiar automáticamente.');
        });
      }
    });
  });
}

/**
 * 4. Project Filtering in works.html
 */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 5. Contact Form Simulation with Clean Validation
 */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !email || !message) {
      showToast('Por favor completa todos los campos requeridos.');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    // Simulate sending email / webhook
    setTimeout(() => {
      showToast(`¡Gracias ${name}! Tu mensaje ha sido enviado exitosamente.`);
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1000);
  });
}

/**
 * Helper: Floating Toast Notification
 */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
