document.addEventListener("DOMContentLoaded", () => {

  /* ===== PRELOADER ===== */
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hide");
      document.body.classList.add("loaded");
      setTimeout(() => preloader.classList.add("done"), 1800);
    }, 300);
  });

  // Fallback in case 'load' already fired
  if (document.readyState === "complete") {
    setTimeout(() => {
      preloader.classList.add("hide");
      document.body.classList.add("loaded");
      setTimeout(() => preloader.classList.add("done"), 1800);
    }, 300);
  }

  /* ===== TYPING ROLE TEXT ===== */
  const roles = [
    "UI/UX Designer",
    "Creative Developer",
    "Front-End Enthusiast",
    "Pixel-perfect Builder"
  ];
  const typedEl = document.getElementById("typedRole");
  let roleIndex = 0, charIndex = 0, deleting = false;

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      typedEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 45 : 85);
  }
  setTimeout(typeLoop, 2200);

  /* ===== NAVBAR SCROLL STATE ===== */
  const nav = document.getElementById("mainNav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    document.getElementById("backToTop").classList.toggle("show", window.scrollY > 500);
  });

  // collapse mobile menu on link click
  document.querySelectorAll("#navMenu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navMenu");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  /* ===== SCROLL REVEAL FOR SECTIONS ===== */
  const revealTargets = document.querySelectorAll(
    ".section-label, .section-heading, .about-heading, .skill-card, .project-card, .blog-card, .contact-list, .contact-form, .about-avatar-frame"
  );
  revealTargets.forEach(el => el.classList.add("scroll-reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealTargets.forEach(el => observer.observe(el));

  /* ===== BACK TO TOP ===== */
  document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ===== CONTACT FORM (front-end only demo) ===== */
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("d-none");
    success.classList.remove("d-none");
    form.reset();
  });



});