
"use strict";

const C = CONTENT;

const pages = [
  ["home", "Home", "index.html"],
  ["services", "Services", "services.html"],
  ["team", "Team", "team.html"],
  ["gallery", "Gallery", "gallery.html"],
  ["involved", "Get Involved", "get-involved.html"]
];

const currentPage = document.body.dataset.page || "home";

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

const e = escapeHTML;

function photo(key, label, className = "") {
  const src = IMAGES[key] || key || "";
  return `
    <div class="photo ${className}">
      <span class="photo-fallback">${e(label)}</span>
      <img src="${e(src)}" alt="${e(label)}" loading="lazy">
    </div>
  `;
}

function header() {
  const navigation = pages.map(([id, label, href]) => `
    <a href="${href}"
       class="${currentPage === id ? "active" : ""}"
       ${currentPage === id ? 'aria-current="page"' : ""}>
      ${label}
    </a>
  `).join("");

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="Lyon Motorsport Home">
          <span class="brand-symbol">LM<span class="brand-dot">.</span></span>
          <span class="brand-words">
            <strong>${e(C.brand.name)}</strong>
            <small>${e(C.brand.tagline)}</small>
          </span>
        </a>

        <button class="menu-toggle" type="button"
          aria-expanded="false" aria-controls="primary-nav"
          aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>

        <nav class="nav-links" id="primary-nav" aria-label="Main navigation">
          ${navigation}
        </nav>
      </div>
    </header>
  `;
}


function footer() {
  return `
    <footer class="site-footer">
      <div class="container">

        <div class="footer-grid">

          <div class="footer-info">
            <a class="footer-brand" href="index.html">
              Lyon Motorsport
            </a>

            <p>
              Helping children facing medical challenges
              embrace adventure and live life to the fullest.
            </p>
          </div>

          <nav class="footer-links" aria-label="Footer navigation">
            <a href="index.html">Home</a>
            <a href="services.html">Services</a>
            <a href="team.html">Team</a>
            <a href="gallery.html">Gallery</a>
            <a href="get-involved.html#message">Contact</a>
          </nav>

        </div>

        <div class="footer-bottom">
          <span>
            Copyright © <span id="year"></span>
            Lyon Motorsport - All Rights Reserved.
          </span>
        </div>

      </div>
    </footer>
  `;
}


function pageHero(title, subtitle) {
  return `
    <section class="page-hero">
      <div class="container">
        <h1>${e(title)}</h1>
        <p>${e(subtitle)}</p>
      </div>
    </section>
  `;
}

function sectionIntro(eyebrow, title, description) {
  return `
    <div class="section-intro">
      ${eyebrow ? `<span class="eyebrow">${e(eyebrow)}</span>` : ""}
      <h2>${e(title)}</h2>
      ${description ? `<p>${e(description)}</p>` : ""}
    </div>
  `;
}

function contactDetails() {
  return `
    <div class="contact-details">
      <h3>Let's Connect</h3>
      <p>We would love to hear from you.</p>

      <div class="detail-item">
        <div class="detail-icon">✉</div>
        <div>
          <strong>Email Us</strong>
          <a href="mailto:${e(C.contact.email)}">${e(C.contact.email)}</a>
        </div>
      </div>

      <div class="detail-item">
        <div class="detail-icon">☎</div>
        <div>
          <strong>Call Us</strong>
          <a href="tel:${C.contact.phone.replace(/[^+\d]/g, "")}">
            ${e(C.contact.phone)}
          </a>
        </div>
      </div>

      <div class="detail-item">
        <div class="detail-icon">◷</div>
        <div>
          <strong>Hours</strong>
          <span>${e(C.contact.hours)}</span>
        </div>
      </div>
    </div>
  `;
}

function contactForm() {
  return `
    <form class="contact-form" data-contact-form>
      <div class="form-row">
        <label>
          Your Name
          <input type="text" name="name" placeholder="Your name" required>
        </label>
        <label>
          Email Address
          <input type="email" name="email" placeholder="Your email" required>
        </label>
      </div>

      <label>
        Your Message
        <textarea name="message" rows="6"
          placeholder="Tell us how we can help..." required></textarea>
      </label>

      <label class="check-row">
        <input type="checkbox" name="updates">
        <span>I'd like to receive email updates from Lyon Motorsport.</span>
      </label>

      <button type="submit" class="btn btn-orange btn-wide">
        Send Message <span aria-hidden="true">→</span>
      </button>

      <p class="form-note">
        This form currently opens your email application to send the message.
      </p>
    </form>
  `;
}

function homePage() {
  const d = C.home;

  return `
    <section class="home-hero">
      ${photo("hero", "Motorsport racing experience", "hero-photo")}

      <div class="container hero-content">
        <span class="hero-eyebrow">${e(d.hero.eyebrow)}</span>
        <h1>${e(d.hero.title)}</h1>
        <p>${e(d.hero.description)}</p>

        <div class="button-group">
          <a class="btn btn-orange" href="get-involved.html">
            ${e(d.hero.primaryButton)} →
          </a>
          <a class="btn btn-outline-white" href="services.html">
            ${e(d.hero.secondaryButton)}
          </a>
        </div>
      </div>
    </section>

    <section class="purple-feature">
      <div class="container split-grid">
        <div class="quote-content">
          <span class="big-heart" aria-hidden="true">♥</span>
          <span class="eyebrow light">PURPOSE AND PASSION</span>
          <blockquote>“${e(d.quote.text)}”</blockquote>
          <p class="quote-author">— ${e(d.quote.author)}</p>
        </div>
        ${photo("corvette", "Sports car at a motorsport event", "feature-photo")}
      </div>
    </section>

    <section class="section">
      <div class="container split-grid why-grid">
        ${photo("family", "Family sharing a meaningful experience", "why-photo")}
        <div class="split-copy">
          <span class="eyebrow">${e(d.why.eyebrow)}</span>
          <h2>${e(d.why.title)}</h2>
          <p>${e(d.why.description)}</p>
          <a class="btn btn-orange" href="get-involved.html">
            ${e(d.why.button)} →
          </a>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        ${sectionIntro(
          d.testimonials.eyebrow,
          d.testimonials.title,
          d.testimonials.description
        )}

        
<div class="testimonial-grid">
  ${d.testimonials.quotes.map(quote => `
    <article class="testimonial-card">
      <p>
        <span class="quote-mark quote-open">“</span>
        <span class="quote-text">${e(quote)}</span>
        <span class="quote-mark quote-close">”</span>
      </p>
    </article>
  `).join("")}
</div>

      </div>
    </section>

    <section class="section" id="contact">
      <div class="container">
        ${sectionIntro("", d.contactHeading, d.contactDescription)}

        <div class="contact-layout">
          <div class="form-card">
            <h3>Send Us a Message</h3>
            ${contactForm()}
          </div>
        </div>
      </div>
    </section>
  `;
}

function servicesPage() {
  const d = C.services;

  return `
    ${pageHero(d.title, d.subtitle)}

    <section class="section">
      <div class="container">
        ${sectionIntro(d.eyebrow, d.heading, d.description)}

        <div class="card-grid services-grid">
          ${d.cards.map(card => `
            <article class="service-card">
              ${photo(card.image, card.title, "service-photo")}
              <div class="service-copy">
                <h3>${e(card.title)}</h3>
                <p>${e(card.description)}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section section-soft centered-cta">
      <div class="container">
        <h2>${e(d.ctaTitle)}</h2>
        <p>${e(d.ctaDescription)}</p>
        <a class="btn btn-orange" href="get-involved.html#message">
          ${e(d.ctaButton)} →
        </a>
      </div>
    </section>
  `;
}

function teamPage() {
  const d = C.team;

  return `
    ${pageHero(d.title, d.subtitle)}

    <section class="section">
      <div class="container">
        ${sectionIntro(d.eyebrow, d.heading, d.description)}

        <div class="card-grid team-grid">
          ${d.members.map(member => `
            <article class="team-card">
              ${photo(member.image, member.name, "team-photo")}
              <div class="team-copy">
                <h3>${e(member.name)}</h3>
                <span class="team-role">${e(member.role)}</span>
                <p>${e(member.description)}</p>
                <div class="team-tags">
                  ${member.tags.map(tag => `<span>${e(tag)}</span>`).join("")}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="stats-band">
      <div class="container stats-grid">
        ${d.stats.map(stat => `
          <div class="stat">
            <strong>${e(stat.value)}</strong>
            <span>${e(stat.label)}</span>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function galleryPage() {
  const d = C.gallery;

  return `
    ${pageHero(d.title, d.subtitle)}

    <section class="section">
      <div class="container">
        ${sectionIntro("", d.heading, d.description)}

        <div class="gallery-filters" role="group" aria-label="Filter gallery">
          ${d.categories.map((category, index) => `
            <button type="button"
              class="filter-btn ${index === 0 ? "selected" : ""}"
              data-filter="${e(category)}"
              aria-pressed="${index === 0}">
              ${e(category)}
            </button>
          `).join("")}
        </div>

        <div class="gallery-grid">
          ${d.items.map(item => {
            const src = IMAGES[item.image] || item.image;

            return `
              <button type="button" class="gallery-item"
                data-category="${e(item.category)}"
                data-photo-src="${e(src)}"
                data-photo-title="${e(item.title)}"
                aria-label="View ${e(item.title)}">
                ${photo(item.image, item.title, "gallery-photo")}
                <span class="gallery-caption">
                  <strong>${e(item.title)}</strong>
                  <small>${e(item.category)}</small>
                </span>
              </button>
            `;
          }).join("")}
        </div>

        <p class="gallery-empty" hidden>No photos in this category yet.</p>
      </div>
    </section>

    <section class="section section-soft centered-cta">
      <div class="container">
        <h2>${e(d.ctaTitle)}</h2>
        <p>${e(d.ctaDescription)}</p>
        <a class="btn btn-orange" href="get-involved.html#message">
          ${e(d.ctaButton)} →
        </a>
      </div>
    </section>

    <dialog class="photo-dialog" aria-label="Enlarged gallery photograph">
      <button type="button" class="dialog-close" aria-label="Close image">×</button>
      <img alt="">
      <p></p>
    </dialog>
  `;
}

function involvedPage() {
  const d = C.involved;

  return `
    ${pageHero(d.title, d.subtitle)}

    <section class="section">
      <div class="container">
        <div class="involved-tabs" role="tablist" aria-label="Get involved options">
          <button type="button" id="tab-help"
            role="tab" aria-controls="panel-help"
            data-tab="help" aria-selected="true">
            Get Involved
          </button>
          <button type="button" id="tab-message"
            role="tab" aria-controls="panel-message"
            data-tab="message" aria-selected="false">
            Send a Message
          </button>
        </div>

        <div id="panel-help" role="tabpanel" aria-labelledby="tab-help">
          ${sectionIntro("", d.heading, d.description)}

          <div class="card-grid opportunity-grid">
            ${d.opportunities.map(item => `
              <article class="opportunity-card">
                <div class="opportunity-icon">${e(item.icon)}</div>
                <h3>${e(item.title)}</h3>
                <p>${e(item.description)}</p>
              </article>
            `).join("")}
          </div>

          <div class="involved-bottom">
            <p>Interested in joining our mission?</p>
            <a class="btn btn-orange" href="#message" data-open-message>
              Send a Message →
            </a>
          </div>
        </div>

        <div id="panel-message" role="tabpanel"
          aria-labelledby="tab-message" hidden>
          ${sectionIntro("", d.messageTitle, d.messageDescription)}

          <div class="contact-layout">
            <div>
              ${contactDetails()}
              <div class="contact-callout">${e(d.callout)}</div>
            </div>
            <div class="form-card">
              <h3>We'd Love to Hear From You</h3>
              ${contactForm()}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

const renderers = {
  home: homePage,
  services: servicesPage,
  team: teamPage,
  gallery: galleryPage,
  involved: involvedPage
};

const renderPage = renderers[currentPage] || homePage;

document.querySelector("#app").innerHTML = `
  ${header()}
  <main id="main-content">${renderPage()}</main>
  ${footer()}
`;

document.querySelector("#year").textContent = new Date().getFullYear();

// Mobile menu
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const opened = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(opened));
});

// Hide photographs that fail to load so their placeholders appear.
document.querySelectorAll(".photo img").forEach(img => {
  img.addEventListener("error", () => {
    img.style.display = "none";
  });

  if (img.complete && img.naturalWidth === 0) {
    img.style.display = "none";
  }
});

// Gallery category filters
document.querySelectorAll("[data-filter]").forEach(button => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    let visibleCount = 0;

    document.querySelectorAll("[data-filter]").forEach(filter => {
      const active = filter === button;
      filter.classList.toggle("selected", active);
      filter.setAttribute("aria-pressed", String(active));
    });

    document.querySelectorAll(".gallery-item").forEach(item => {
      const show =
        selected === "All Photos" ||
        item.dataset.category === selected;

      item.hidden = !show;
      if (show) visibleCount++;
    });

    const empty = document.querySelector(".gallery-empty");
    if (empty) empty.hidden = visibleCount !== 0;
  });
});

// Gallery full-screen image viewer
const dialog = document.querySelector(".photo-dialog");

if (dialog) {
  const dialogImage = dialog.querySelector("img");
  const dialogTitle = dialog.querySelector("p");

  document.querySelectorAll("[data-photo-src]").forEach(item => {
    item.addEventListener("click", () => {
      dialogImage.src = item.dataset.photoSrc;
      dialogImage.alt = item.dataset.photoTitle;
      dialogTitle.textContent = item.dataset.photoTitle;
      dialog.showModal();
    });
  });

  dialog.querySelector(".dialog-close").addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
}

// Get Involved page tabs
function activateTab(tabName) {
  const help = document.querySelector("#panel-help");
  const message = document.querySelector("#panel-message");

  if (!help || !message) return;

  const showMessage = tabName === "message";

  help.hidden = showMessage;
  message.hidden = !showMessage;

  document.querySelectorAll("[data-tab]").forEach(button => {
    const active = button.dataset.tab === tabName;
    button.setAttribute("aria-selected", String(active));
  });
}

document.querySelectorAll("[data-tab]").forEach(button => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tab);
  });
});

document.querySelectorAll("[data-open-message]").forEach(button => {
  button.addEventListener("click", () => activateTab("message"));
});

function syncTabFromHash() {
  if (currentPage === "involved") {
    activateTab(location.hash === "#message" ? "message" : "help");
  }
}

syncTabFromHash();
window.addEventListener("hashchange", syncTabFromHash);

// Contact form: opens the visitor's email application.
// No backend or API credentials are needed for this initial version.
document.querySelectorAll("[data-contact-form]").forEach(form => {
  form.addEventListener("submit", event => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const updates = data.has("updates") ? "Yes" : "No";

    const subject = "Lyon Motorsport Website Inquiry";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
      "",
      `Interested in updates: ${updates}`
    ].join("\n");

    const address =
      `mailto:${C.contact.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = address;
  });
});
