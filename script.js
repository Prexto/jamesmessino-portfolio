document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const modeToggle = document.getElementById('mode-toggle');
    const sunIcon = modeToggle.querySelector('.fa-sun');
    const moonIcon = modeToggle.querySelector('.fa-moon');

    // --- 1. Dark/Light Mode Toggle ---
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'inline-block';
        } else {
            body.classList.remove('dark-mode');
            moonIcon.style.display = 'inline-block';
            sunIcon.style.display = 'none';
        }
    };

    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        currentTheme = prefersDark ? 'dark' : 'light';
    }
    applyTheme(currentTheme);

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            applyTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            applyTheme('light');
        }
    });

    // --- 2. Smooth Scrolling for Nav Links ---
    const navLinks = document.querySelectorAll('#main-header nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = document.getElementById('main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

// --- 3. Active Nav Link on Scroll ---
const sections = document.querySelectorAll('main section[id]');
const headerHeight = document.getElementById('main-header').offsetHeight;
const navLinksForActive = document.querySelectorAll('#main-header nav a'); // Usar esta variable para la clase active

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 75; // Ajusta este buffer si es necesario (era 100)
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // Special handling for the last section (Contact) if scrolled to the bottom
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        // Check if the bottom of the viewport is at or past the bottom of the contact section
        // or if we are very close to the bottom of the page
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;
        
        // If scrolled to the very bottom of the page, and contact is the last section
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 50) { // 50px buffer from bottom
             // Check if 'contact' is indeed the last section iterated
            if (sections[sections.length - 1].getAttribute('id') === 'contact') {
                 currentSectionId = 'contact';
            }
        }
    }


    navLinksForActive.forEach(link => {
        link.classList.remove('active');
        // Extraer el ID del href (ej: "#contact" -> "contact")
        const linkHrefId = link.getAttribute('href').substring(1);
        if (linkHrefId === currentSectionId) {
            link.classList.add('active');
        }
    });
});

    // --- 4. ScrollReveal ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal();

        // Animación específica para los textos del Hero con delay personalizado
        document.querySelectorAll('.reveal-hero-text').forEach((el) => {
            const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
            sr.reveal(el, {
                delay: delay,
                duration: 700,
                distance: '30px',
                origin: 'bottom',
                easing: 'cubic-bezier(0.5, 0, 0, 1)', // Un easing más suave
                afterReveal: function (revealedEl) {
                    revealedEl.classList.add('is-visible');
                }
            });
        });

        // Animación general para otros elementos .reveal
        sr.reveal('.reveal', {
            delay: 200,
            duration: 800,
            distance: '40px', // Un poco más de distancia
            origin: 'bottom',
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            interval: 150, // Stagger para elementos en grillas, etc.
            reset: false,
            viewFactor: 0.2,
            // No es necesario afterReveal si solo usamos la clase .is-visible para CSS
        });

    } else {
        console.warn('ScrollReveal library not found. Animations will not work.');
        document.querySelectorAll('.reveal, .reveal-hero-text').forEach(el => el.classList.add('is-visible')); // Fallback
    }

    // --- 5. Update Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});