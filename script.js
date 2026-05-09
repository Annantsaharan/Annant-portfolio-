// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Ensure profile image displays correctly
window.addEventListener('load', () => {
    const profileImage = document.getElementById('profile-image');
    const imagePlaceholder = document.getElementById('image-placeholder');
    
    if (profileImage) {
        // Check if image loaded successfully
        if (profileImage.complete && profileImage.naturalHeight !== 0) {
            // Image loaded successfully
            if (imagePlaceholder) {
                imagePlaceholder.style.display = 'none';
            }
            profileImage.style.display = 'block';
        } else {
            // Image failed to load
            profileImage.addEventListener('error', () => {
                if (imagePlaceholder) {
                    imagePlaceholder.style.display = 'flex';
                }
                profileImage.style.display = 'none';
            });
            
            // If image hasn't loaded after 2 seconds, show placeholder
            setTimeout(() => {
                if (!profileImage.complete || profileImage.naturalHeight === 0) {
                    if (imagePlaceholder) {
                        imagePlaceholder.style.display = 'flex';
                    }
                    profileImage.style.display = 'none';
                }
            }, 2000);
        }
    }
});

// Theme persistence
const getStoredTheme = () => localStorage.getItem('theme') || 'dark';
const setStoredTheme = (theme) => localStorage.setItem('theme', theme);

// Apply stored theme on load
const storedTheme = getStoredTheme();
if (storedTheme === 'light') {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
} else {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
}

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
    }
});

// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if exists
            const nav = document.querySelector('nav ul');
            if (nav && window.innerWidth < 768) {
                nav.style.display = 'none';
            }
        }
    });
});

// Dark/Light mode toggle with persistence
const toggleButton = document.getElementById('theme-toggle');

if (toggleButton) {
    const themeIcon = toggleButton.querySelector('i');
    
    // Function to update icon based on theme
    const updateThemeIcon = () => {
        if (document.body.classList.contains('dark')) {
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        } else {
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
    };
    
    // Set initial icon based on current theme
    updateThemeIcon();

toggleButton.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark');
        if (isDark) {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            setStoredTheme('light');
        } else {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            setStoredTheme('dark');
        }
        updateThemeIcon();
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Animate skill progress bars
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.getAttribute('data-width');
            if (width) {
                setTimeout(() => {
                    progressBar.style.width = width + '%';
                }, 200);
            }
            skillObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-progress').forEach(bar => {
    skillObserver.observe(bar);
});

// Animate statistics
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const target = parseInt(statNumber.getAttribute('data-target'));
            if (!isNaN(target)) {
                animateCounter(statNumber, target);
            }
            statObserver.unobserve(statNumber);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statObserver.observe(stat);
});

// Typing animation for hero text
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent.trim();
    typingText.textContent = '';
    typingText.style.borderRight = '2px solid var(--accent)';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        } else {
            setTimeout(() => {
                typingText.style.borderRight = 'none';
            }, 500);
        }
    };
    
    setTimeout(typeWriter, 300);
}

// Form submission with Formspree
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');
const submitBtn = document.getElementById('submit-btn');

if (contactForm && formMessage && submitBtn) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate form
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            formMessage.className = 'form-message error';
            formMessage.textContent = '✗ Please fill in all fields.';
            formMessage.style.display = 'block';
            return;
        }
        
        // Capture current date and time
        const now = new Date();
        const submissionDate = now.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short'
        });
        
        // Set the date field value
        const dateField = document.getElementById('submission_date');
        if (dateField) {
            dateField.value = submissionDate;
        }
        
        // Disable submit button
        submitBtn.disabled = true;
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        // Show loading message
        formMessage.className = 'form-message loading';
        formMessage.textContent = 'Sending your message...';
        formMessage.style.display = 'block';
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Check if Formspree ID is set
        const formAction = contactForm.action;
        if (formAction.includes('YOUR_FORM_ID')) {
            // Formspree not configured - show helpful message
            setTimeout(() => {
                formMessage.className = 'form-message error';
                formMessage.innerHTML = '✗ Formspree not configured. Please set up your Formspree form ID in index.html (line 346).<br><small>For now, you can email directly at: <a href="mailto:annantsaharan@gmail.com" style="color: inherit; text-decoration: underline;">annantsaharan@gmail.com</a></small>';
                formMessage.style.display = 'block';
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHTML;
            }, 1000);
            return;
        }
        
        // Get form data
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(formAction, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Success
                formMessage.className = 'form-message success';
                formMessage.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
                formMessage.style.display = 'block';
                contactForm.reset();
                
                // Reset labels
                contactForm.querySelectorAll('input, textarea').forEach(input => {
                    input.classList.remove('has-value');
                });
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            } else {
                // Error from Formspree
                let errorMessage = 'Failed to send message.';
                try {
                    const data = await response.json();
                    errorMessage = data.error || errorMessage;
                } catch (e) {
                    errorMessage = `Server error (${response.status}). Please try again.`;
                }
                throw new Error(errorMessage);
            }
        } catch (error) {
            // Network or other error
            formMessage.className = 'form-message error';
            formMessage.innerHTML = `✗ ${error.message || 'Failed to send message. Please try again or email me directly at: <a href="mailto:annantsaharan@gmail.com" style="color: inherit; text-decoration: underline;">annantsaharan@gmail.com</a>'}`;
            formMessage.style.display = 'block';
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalHTML;
        }
    });
    
    // Update label position on input
    contactForm.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', function() {
            if (this.value) {
                this.classList.add('has-value');
            } else {
                this.classList.remove('has-value');
            }
        });
        
        // Check on load if field has value
        if (input.value) {
            input.classList.add('has-value');
        }
    });
}

// Add active state to navigation links on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth reveal animation for skill cards
const skillCards = document.querySelectorAll('.skill-card');
const skillCardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
            skillCardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

skillCards.forEach(element => {
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    skillCardObserver.observe(element);
});

// Enhanced reveal animation for project cards with staggered entrance
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            projectObserver.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

projectCards.forEach(card => {
    projectObserver.observe(card);
});

// Experience and Education items animation
const experienceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
            experienceObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.experience-item, .education-item').forEach(element => {
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    experienceObserver.observe(element);
});

// Certifications animation
const certObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, index * 50);
            certObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('#certifications ul li').forEach(element => {
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    certObserver.observe(element);
});

// Contact items animation
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            contactObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.contact-item').forEach(element => {
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    contactObserver.observe(element);
});

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    if (window.innerWidth < 768) {
        const nav = document.querySelector('nav ul');
        const logo = document.querySelector('.logo');
        
        if (nav && !document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            menuToggle.setAttribute('aria-label', 'Toggle menu');
            
            menuToggle.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                menuToggle.innerHTML = nav.style.display === 'flex' 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
            
            logo.parentNode.insertBefore(menuToggle, logo.nextSibling);
        }
    }
};

// Initialize mobile menu on load and resize
window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Error handling for missing elements
window.addEventListener('error', (e) => {
    console.warn('Portfolio: Non-critical error occurred', e);
});

// Performance: Lazy load images if any are added in future
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
}
