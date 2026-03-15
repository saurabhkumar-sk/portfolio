// Initialize EmailJS
(function () {
    emailjs.init("wN5_Pi6myJY9hIg9w"); // Your EmailJS public key
})();

// DOM Elements
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectsGrid = document.querySelector('.projects-grid');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const yearSpan = document.getElementById('year');
const heroContent = document.querySelector('.hero-content');

// Draggable hero card
(function initDraggableCard() {
    let isDragging = false;
    let startX, startY, currentX = 0, currentY = 0;

    heroContent.style.cursor = 'grab';
    heroContent.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    function onStart(e) {
        isDragging = true;
        const point = e.touches ? e.touches[0] : e;
        startX = point.clientX - currentX;
        startY = point.clientY - currentY;
        heroContent.style.cursor = 'grabbing';
        heroContent.style.transition = 'none';
        heroContent.style.userSelect = 'none';
    }

    function onMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        const point = e.touches ? e.touches[0] : e;
        currentX = point.clientX - startX;
        currentY = point.clientY - startY;
        heroContent.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentX * 0.02}deg)`;
    }

    function onEnd() {
        if (!isDragging) return;
        isDragging = false;
        currentX = 0;
        currentY = 0;
        heroContent.style.cursor = 'grab';
        heroContent.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        heroContent.style.transform = 'translate(0, 0) rotate(0deg)';
        heroContent.style.userSelect = '';
    }

    // Mouse events
    heroContent.addEventListener('mousedown', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);

    // Touch events
    heroContent.addEventListener('touchstart', onStart, { passive: false });
    document.addEventListener('touchmove', onMove, { passive: false });
    document.addEventListener('touchend', onEnd);
})();

// Add scroll effect to navbar and handle active states
window.addEventListener('scroll', () => {
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Set current year in footer
yearSpan.textContent = new Date().getFullYear();

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Project data
const projects = [
    {
        id: 11,
        title: "Job Applied App",
        description: "A job search and application tracking platform that helps users discover opportunities, apply to jobs, and monitor application status with real-time updates and notifications.",
        image: "https://play-lh.googleusercontent.com/fPx__sGxDqqes7AAgA3eDGGpd1de9_wZpbbeOdM70R99vmKAqYFyoAQEVi3_lvrxKUcNXjwBfq6q6R3kjQ0iGg=w832-h470-rw",
        category: "job",
        techStack: ["Flutter", "REST API", "Firebase", "Google Maps"],
        github: "https://github.com/saurabhkumar-sk/news-app",
        playStore: "https://play.google.com/store/apps/details?id=com.talentoin.app",
        appStore: "https://apps.apple.com/in/app/talentoindia/id6736382768"
    },
    {
        id: 12,
        title: "Vendor App",
        description: "A comprehensive vendor management application that helps businesses manage orders, track products, and stay updated with real-time notifications for seamless operations.",
        image: "https://play-lh.googleusercontent.com/4cawrv7QzDe9D513qcR6lqr9TOA54pG9eMuWn2_Yj5opQTyh-4zq8YdZpEzCNc7DDI7ZylXKrpG3fq0x1e-e=w5120-h2880-rw",
        category: "vendor",
        techStack: ["Flutter", "REST API", "Firebase", "MapBox"],
        github: "https://github.com/saurabhkumar-sk/news-app",
        playStore: "https://play.google.com/store/apps/details?id=com.cloudBites.cloudBitesVendor",
        appStore: "https://apps.apple.com/in/app/cb-vendor/id6749038036"
    },
    {
        id: 13,
        title: "Customer App",
        description: "A user-friendly customer application for browsing products, placing orders, tracking deliveries in real-time, and managing preferences for a seamless shopping experience.",
        image: "https://play-lh.googleusercontent.com/4cawrv7QzDe9D513qcR6lqr9TOA54pG9eMuWn2_Yj5opQTyh-4zq8YdZpEzCNc7DDI7ZylXKrpG3fq0x1e-e=w5120-h2880-rw",
        category: "vendor",
        techStack: ["Flutter", "REST API", "Firebase"],
        github: "https://github.com/saurabhkumar-sk/news-app",
        playStore: "https://play.google.com/store/apps/details?id=com.cloudBites.user",
        appStore: "https://apps.apple.com/in/app/cb-vendor/id6749038036"
    },
    {
        id: 14,
        title: "Dating App",
        description: "A feature-rich dating platform with profile matching, real-time chat, and in-app purchases, helping users connect and build meaningful relationships.",
        image: "https://play-lh.googleusercontent.com/Xfe2TMzATqbPAJ62gQm2ebPlVRO4HBR4omkdedRv9H2_YDIIYDkVCOWVz9wno-w_fH0H=w1052-h592-rw",
        category: "dating",
        techStack: ["Flutter", "REST API", "Firebase", "In-App Purchase"],
        github: "https://github.com/saurabhkumar-sk/news-app",
        playStore: "https://play.google.com/store/apps/details?id=com.dillkebaat.nauman",
        appStore: "https://apps.apple.com/in/app/dilkebaat/id6464308996"
    },
    {
        id: 15,
        title: "News App",
        description: "A comprehensive news application delivering the latest updates, trending stories, and job opportunities in one place.",
        image: "https://play-lh.googleusercontent.com/7DI4JhZRxUnhdeFp-W7-frUiiH30NeYradUh6p7McHK_lXrKaM-luWibX-swBcFcMcaHBr1LOd3NrMKYVIER=w1052-h592-rw",
        category: "news",
        techStack: ["Flutter", "REST API", "Firebase"],
        github: "https://github.com/saurabhkumar-sk/news-app",
        playStore: "https://play.google.com/store/apps/details?id=com.naukri.naukripoint",
        appStore: "https://apps.apple.com/in/app/naukri-point-job-alerts/id6749142761"
    },
    {
        id: 16,
        title: "Real Estate App",
        description: "A property marketplace for buying, selling, and renting homes with advanced search filters, interactive maps, and direct agent contact features.",
        image: "https://play-lh.googleusercontent.com/8V15L3RArB3TSWJoxcyrIbUVL14HqHqdXkPdwb1D9uZ4G62C8cz8rYoRByzCNCeGhgZT6RX_ZHdrVX46ebieBA=w1052-h592-rw",
        category: "real-estate",
        techStack: ["Flutter", "REST API", "Firebase", "Google Maps"],
        github: "https://github.com/saurabhkumar-sk/news-app",
        playStore: "https://play.google.com/store/apps/details?id=com.realstate.app&hl=en_IN",
        appStore: "https://apps.apple.com/ph/app/turks-and-caicos-real-estate/id6749747585"
    },
    {
        id: 3,
        title: "Doctor & Patient Application",
        description: "A digital healthcare solution offering appointment scheduling, medical records management, and secure audio/video consultations.",
        image: "https://play-lh.googleusercontent.com/cT6-WlHUCYR1P8sq27WLrWNYTR9EIRuz5cEqXJbPDxSD7brjTZBh9Q6Z-ig5hWlASGnU7FUpojP2ohaxAjKRtA=w1052-h592-rw",
        category: "healthcare",
        techStack: ["Flutter", "Firebase", "WebRTC"],
        playStore: "https://play.google.com/store/apps/details?id=com.doctor_doctocon",
        github: "https://github.com/saurabhkumar-sk/healthcare-app",
        liveDemo: "#"
    },
    {
        id: 9,
        title: "E-commerce Application",
        description: "A comprehensive e-commerce platform with product browsing, cart management, secure payments, order tracking, and wishlist features for seamless shopping.",
        image: "assets/ecommerce.jpg",
        category: "ecommerce",
        techStack: ["Flutter", "Firebase", "Paystack", "Google Maps"],
        github: "https://github.com/saurabhkumar-sk/ecommerce-app",
        liveDemo: "#"
    }
    ,
    {
        id: 1,
        title: "School Management Application",
        description: "A comprehensive school management platform with attendance tracking, grade management, and communication tools for teachers, students, and parents.",
        image: "assets/school_management.jpg",
        category: "education",
        techStack: ["Flutter", "Firebase", "REST API"],
        github: "https://github.com/saurabhkumar-sk/school-management",
        liveDemo: "#"
    },
    {
        id: 2,
        title: "Translator App",
        description: "A real-time translation app supporting multiple languages with text and voice translation for seamless global communication.",
        image: "assets/voic_translator.jpg",
        category: "utility",
        techStack: ["Flutter", "Translation API", "Speech Recognition"],
        github: "https://github.com/saurabhkumar-sk/translator-app",
        liveDemo: "#"
    },

    {
        id: 4,
        title: "On-Demand Service App",
        description: "A versatile multi-service platform connecting users with trusted providers for home and professional needs such as electricians, plumbers, carpenters, and cleaners.",
        image: "assets/builder-makes-note-notepad_222185-122.jpg",
        category: "service",
        techStack: ["Flutter", "Firebase", "Google Maps"],
        github: "https://github.com/saurabhkumar-sk/service-app",
        liveDemo: "#"
    },

    {
        id: 6,
        title: "Weather Forecast App",
        description: "A real-time weather application providing live updates, detailed forecasts, and severe weather alerts.",
        image: "assets/hand-holding-smartphone-home_23-2150652839.jpg",
        category: "weather",
        techStack: ["Flutter", "OpenWeather API"],
        github: "https://github.com/saurabhkumar-sk/weather_application",
        liveDemo: "https://github.com/saurabhkumar-sk/weather_application?tab=readme-ov-file#application-images"
    },
    {
        id: 8,
        title: "Grocery Delivery App",
        description: "An online grocery shopping platform with product browsing, cart management, and real-time delivery tracking.",
        image: "assets/man-delivering-groceries-customers_23-2149950071.avif",
        category: "grocery",
        techStack: ["Flutter", "Firebase"],
        github: "https://github.com/saurabhkumar-sk/grocery-delivery-app",
        liveDemo: "#"
    }
];

// Filter projects
function filterProjects(category) {
    const filteredProjects = category === 'all'
        ? projects
        : projects.filter(project => project.category === category);

    displayProjects(filteredProjects);
}

// Display projects
function displayProjects(projectsToShow) {
    projectsGrid.innerHTML = projectsToShow.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="btn primary">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    ${project.playStore ? `
                        <a href="${project.playStore}" target="_blank" class="btn secondary">
                            <i class="fab fa-google-play"></i> Play Store
                        </a>
                    ` : ''}
                    ${project.appStore ? `
                        <a href="${project.appStore}" target="_blank" class="btn secondary">
                            <i class="fab fa-app-store-ios"></i> App Store
                        </a>
                    ` : ''}
                    ${(!project.playStore && !project.appStore && project.liveDemo) ? `
                        <a href="${project.liveDemo}" target="_blank" class="btn secondary">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Add click event to filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Filter projects
        filterProjects(btn.dataset.category);
    });
});

// Handle form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Prevent multiple submissions
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn.disabled) return;

    // Store the current scroll position
    const scrollPos = window.scrollY;

    // Store original button content
    const originalBtnText = submitBtn.innerHTML;

    // Show sending state with paper plane icon
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Sending...';
    submitBtn.disabled = true;

    // Get form data
    const formData = {
        from_name: contactForm.querySelector('#name').value,
        from_email: contactForm.querySelector('#email').value,
        reply_to: contactForm.querySelector('#email').value,
        message: contactForm.querySelector('#message').value
    };

    try {
        await emailjs.send(
            'service_5obxcj1',
            'template_eaztska',
            formData
        );

        // Restore scroll position
        window.scrollTo(0, scrollPos);

        // Show success state with check icon
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
        submitBtn.classList.add('send-success');

        // Show success message with animation
        formMessage.textContent = '✓ Message sent successfully!';
        formMessage.className = 'form-message success';

        // Reset form
        contactForm.reset();

        // Reset button after delay
        setTimeout(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.classList.remove('send-success');
        }, 2000);

        // Clear success message after delay
        setTimeout(() => {
            formMessage.style.opacity = '0';
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
                formMessage.style.opacity = '1';
            }, 300);
        }, 5000);

    } catch (error) {
        // Show error message
        formMessage.textContent = '✕ Failed to send message. Please try again.';
        formMessage.className = 'form-message error';
    } finally {
        // Reset button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Initial project display
displayProjects(projects);
