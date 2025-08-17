// Initialize EmailJS
(function() {
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
    id: 5,
    title: "News App",
    description: "A comprehensive news application delivering the latest updates, trending stories, and job opportunities in one place.",
    image: "assets/business-man-using-his-mobile-phone.jpg",
    category: "news",
    techStack: ["Flutter", "REST API", "Firebase"],
    github: "https://github.com/saurabhkumar-sk/news-app",
    playStore: "https://play.google.com/store/apps/details?id=com.naukri.naukripoint",
    appStore: "https://apps.apple.com/us/app/naukri-point/id6749142761"
},
    {
    id: 9,
    title: "E-commerce Application",
    description: "A comprehensive e-commerce platform with product browsing, cart management, secure payments, order tracking, and wishlist features for seamless shopping.",
    image: "assets/ecommerce.jpg",
    category: "ecommerce",
    techStack: ["Flutter", "Firebase", "Paystack","Google Maps"],
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
    id: 3,
    title: "Doctor & Patient Application",
    description: "A digital healthcare solution offering appointment scheduling, medical records management, and secure audio/video consultations.",
    image: "assets/creative-collage-telehealth-consultation.jpg",
    category: "healthcare",
    techStack: ["Flutter", "Firebase", "WebRTC"],
    github: "https://github.com/saurabhkumar-sk/healthcare-app",
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
    id: 7,
    title: "Real Estate App",
    description: "A property marketplace for buying, selling, and renting homes with advanced search, maps, and agent contact features.",
    image: "assets/side-view-man-working-as-real-estate-agent_23-2151065013.jpg",
    category: "real-estate",
    techStack: ["Flutter", "Firebase", "Google Maps"],
    github: "https://github.com/saurabhkumar-sk/real-estate-app",
    liveDemo: "#"
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
