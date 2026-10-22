import { teamMembers, advisor } from './team-data.js';

// Elementos do DOM
const teamGrid = document.getElementById('teamGrid');
const advisorContainer = document.getElementById('advisorContainer');
const navbar = document.getElementById('navbar');
const modalOverlay = document.getElementById('memberModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const toastNotice = document.getElementById('toastNotice');
const toastMessage = document.getElementById('toastMessage');

/**
 * Ícones SVG Inline
 */
const ICONS = {
  linkedin: `<svg viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.78v8.37H6.46v-8.37M7.85 6.25a1.62 1.62 0 0 0-1.63 1.62 1.62 1.62 0 0 0 1.63 1.63 1.62 1.62 0 0 0 1.63-1.63c0-.9-.73-1.62-1.63-1.62Z"/></svg>`,
  github: `<svg viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" style="width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
};

/**
 * Renderiza o card de destaque da Orientadora
 */
function renderAdvisorCard() {
  if (!advisorContainer || !advisor) return;

  const skillsHtml = advisor.skills
    .map(skill => `<span class="advisor-skill-pill">${skill}</span>`)
    .join('');

  advisorContainer.innerHTML = `
    <article class="advisor-showcase-card">
      <div class="advisor-photo-container">
        <div class="advisor-photo-ring"></div>
        <div class="advisor-photo-wrapper">
          <img 
            src="${advisor.photo}" 
            alt="Foto da Professora ${advisor.name}" 
            class="advisor-photo-img"
            loading="lazy"
          />
        </div>
      </div>

      <div class="advisor-details">
        <h3 class="advisor-name-heading">${advisor.name}</h3>
        <p class="advisor-role-text">${advisor.tagline}</p>
        <p class="advisor-bio-text">${advisor.bio}</p>

        <div class="advisor-skills-row">
          ${skillsHtml}
        </div>

        <div>
          <a 
            href="${advisor.linkedin}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-btn social-btn-linkedin"
            style="width: fit-content; padding: 0.65rem 1.4rem; display: inline-flex;"
          >
            ${ICONS.linkedin}
            <span>Conectar no LinkedIn</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

/**
 * Renderiza os cards dos 4 integrantes
 */
function renderTeamCards() {
  if (!teamGrid) return;

  teamGrid.innerHTML = teamMembers.map((member, index) => {
    const skillsHtml = member.skills
      .map(skill => `<span class="skill-tag">${skill}</span>`)
      .join('');

    return `
      <article class="member-card" data-id="${member.id}" style="animation-delay: ${index * 120}ms">
        <div class="avatar-container">
          <div class="avatar-ring"></div>
          <div class="avatar-img-wrapper">
            <img 
              src="${member.photo}" 
              alt="Foto de ${member.fullName || member.name}" 
              class="avatar-img"
              loading="lazy"
              onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0d9488&color=ffffff&size=200';"
            />
          </div>
        </div>

        <h3 class="member-name">${member.fullName || member.name}</h3>
        <p class="member-tagline">${member.tagline}</p>
        <p class="member-bio">${member.bio}</p>

        <div class="member-skills">
          ${skillsHtml}
        </div>

        <div class="member-socials">
          ${member.linkedin ? `
          <a 
            href="${member.linkedin}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-btn social-btn-linkedin"
            title="Acessar perfil de ${member.name} no LinkedIn"
          >
            ${ICONS.linkedin}
            <span>LinkedIn</span>
          </a>
          ` : ''}

          ${member.github ? `
          <a 
            href="${member.github}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="social-btn social-btn-github"
            title="Acessar perfil de ${member.name} no GitHub"
          >
            ${ICONS.github}
            <span>GitHub</span>
          </a>
          ` : ''}
        </div>

        <div class="action-card-footer">
          <button class="btn-detail-modal" data-member-id="${member.id}">
            <span>Ver perfil detalhado</span>
            ${ICONS.externalLink}
          </button>
        </div>
      </article>
    `;
  }).join('');

  attachCardEvents();
}

/**
 * Eventos dos cards (abrir modal)
 */
function attachCardEvents() {
  const cards = document.querySelectorAll('.member-card');
  cards.forEach(card => {
    const detailBtn = card.querySelector('.btn-detail-modal');
    if (detailBtn) {
      detailBtn.addEventListener('click', () => {
        const memberId = detailBtn.getAttribute('data-member-id');
        openMemberModal(memberId);
      });
    }
  });
}

/**
 * Abre o Modal com informações detalhadas
 */
function openMemberModal(memberId) {
  const member = memberId === 'andressa' ? advisor : teamMembers.find(m => m.id === memberId);
  if (!member) return;

  const modalBody = document.getElementById('modalDynamicContent');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-header-content">
      <img 
        src="${member.photo}" 
        alt="${member.fullName || member.name}" 
        class="modal-avatar-lg"
        onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0d9488&color=ffffff&size=200';"
      />
      <div class="modal-header-text">
        <h3>${member.fullName || member.name}</h3>
        ${member.role || member.tagline ? `<p>${member.role || member.tagline}</p>` : ''}
      </div>
    </div>

    <div class="modal-body-section">
      <h4>Sobre</h4>
      <p>${member.bio}</p>
    </div>

    <div class="modal-body-section">
      <h4>Competências & Tecnologias</h4>
      <div class="member-skills" style="justify-content: flex-start;">
        ${member.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>

    ${member.email ? `
      <div class="modal-body-section">
        <h4>Contato Direto</h4>
        <button class="btn btn-secondary" id="btnCopyEmail" data-email="${member.email}" style="padding: 0.5rem 1rem; font-size: 0.85rem;">
          📧 Copiar E-mail (${member.email})
        </button>
      </div>
    ` : ''}

    <div class="modal-socials-grid">
      <a href="${member.linkedin}" target="_blank" rel="noopener noreferrer" class="social-btn social-btn-linkedin">
        ${ICONS.linkedin}
        <span>Acessar LinkedIn</span>
      </a>
      ${member.github ? `
        <a href="${member.github}" target="_blank" rel="noopener noreferrer" class="social-btn social-btn-github">
          ${ICONS.github}
          <span>Acessar GitHub</span>
        </a>
      ` : ''}
    </div>
  `;

  const btnCopyEmail = document.getElementById('btnCopyEmail');
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      const email = btnCopyEmail.getAttribute('data-email');
      navigator.clipboard.writeText(email).then(() => {
        showToast(`E-mail ${email} copiado com sucesso!`);
      });
    });
  }

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Fecha o Modal
 */
function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * Toast flutuante
 */
function showToast(message) {
  if (!toastNotice || !toastMessage) return;
  toastMessage.textContent = message;
  toastNotice.classList.add('show');
  setTimeout(() => {
    toastNotice.classList.remove('show');
  }, 3500);
}

/**
 * Event Listeners globais
 */
function setupGlobalEvents() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  const setMenuOpen = (open) => {
    navbar.classList.toggle('menu-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      setMenuOpen(!navbar.classList.contains('menu-open'));
    });
    navMenu.addEventListener('click', (e) => {
      if (e.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) setMenuOpen(false);
    });
    window.matchMedia('(min-width: 993px)').addEventListener('change', () => setMenuOpen(false));
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      if (navToggle) setMenuOpen(false);
    }
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderAdvisorCard();
  renderTeamCards();
  setupGlobalEvents();

  const modelViewer = document.getElementById('mauauModel');
  const modelError = document.getElementById('modelViewerError');
  if (modelViewer && modelError) {
    const card = modelViewer.parentElement;
    modelViewer.addEventListener('error', () => {
      modelError.hidden = false;
    });
    modelViewer.addEventListener('progress', (e) => {
      if (e.detail.totalProgress >= 1) card.classList.add('is-loaded');
    });
    modelViewer.addEventListener('load', () => {
      modelError.hidden = true;
      card.classList.add('is-loaded');
    });
  }
});
