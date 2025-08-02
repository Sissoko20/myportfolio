
    // Animation slide-in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });
    document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));

    // Show/Hide dynamic content
    function showSection(id) {
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active-section');
      });
      document.getElementById(id).classList.add('active-section');
    }

 let currentLang = 'en';

  const translations = {
    en: {
      'skills-title': '💡 My Skills',
      'skill1': 'HTML + CSS + JS',
      'skill2': 'React, Vue, Svelte',
      'skill3': 'Node.js, Express, MongoDB',
      'skill4': 'Figma, Git, TailwindCSS',
      'experience-title': '🧠 Experience',
      'contact-title': '📬 Contact Me',
      'name-placeholder': 'Your name',
      'email-placeholder': 'Your email',
      'message-placeholder': 'Your message',
      'send-button': 'Send',
          "nav-skills": "Skills",
    "nav-experience": "Experiences",
    "nav-contact": "Contact",
    "stat1": "Projects from Scratch",
    "stat2": "Years of Experience",
    "stat3": "Positive Feedback",
    "stat4": "People Team Lead",
    "intro-hello": "Hey, I’m",
    "intro-role": "A mobile developer optimizing digital solutions",
    "intro-dev": "i develop tools for dashboards",
    "intro-hire": "Hire Me",
    "intro-resume": "Download Resume",
    "footer-rights": "© 2025 Modibo Sissoko. All rights reserved.",
    },
    fr: {
      'skills-title': '💡 Mes Compétences',
      'skill1': 'HTML + CSS + JS',
      'skill2': 'React, Vue, Svelte',
      'skill3': 'Node.js, Express, MongoDB',
      'skill4': 'Figma, Git, TailwindCSS',
      'experience-title': '🧠 Expérience',
      'contact-title': '📬 Me Contacter',
      'name-placeholder': 'Votre nom',
      'email-placeholder': 'Votre email',
      'message-placeholder': 'Votre message',
      'send-button': 'Envoyer',
         "nav-skills": "Compétences",
    "nav-experience": "Expériences",
    "nav-contact": "Contact",
    "stat1": "Projets créés de zéro",
    "stat2": "Années d'expérience",
    "stat3": "Avis positifs",
    "stat4": "Personnes dirigées",
    "intro-hello": "Je m'appelle",
    "intro-role": "Un développeur mobile qui optimise les solutions digitales",
    "intro-dev": "je développe des outils pour des tableaux de bord",
    "intro-hire": "Embauchez-moi",
    "intro-resume": "Télécharger le CV",
    "footer-rights": "© 2025 Modibo Sissoko. Tous droits réservés.",
    }
  };

  function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : 'en';
    document.getElementById("lang-toggle").textContent = currentLang === 'en' ? "🇬🇧 EN" : "🇫🇷 FR";

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[currentLang][key];
      } else {
        el.textContent = translations[currentLang][key];
      }
    });
  }



  function typeEffect(element, text, delay = 30, random = true, callback) {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        const variation = random ? Math.floor(Math.random() * 80) : 0;
        setTimeout(type, delay + variation);
      } else if (callback) {
        callback();
      }
    }
    element.textContent = '';
    type();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".typewriter");
    let index = 0;

    function animateNext() {
      if (index < elements.length) {
        const el = elements[index];
        const fullText = el.getAttribute("data-i18n") ? el.textContent : el.textContent;
        typeEffect(el, fullText, 35, true, animateNext);
        index++;
      }
    }

    animateNext(); // Démarre la boucle
  });


function showSection(id) {
  // Masquer toutes les sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active-section');
  });

  // Trouver la section ciblée
  const section = document.getElementById(id);

  if (section) {
    // Ajouter la classe active pour l'afficher
    section.classList.add('active-section');

    // Scroller vers la section
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  } else {
    console.warn("Section non trouvée :", id);
  }
}
