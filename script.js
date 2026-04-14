// Portfolio Interactivity Script

// Fun console message
console.log('%c✨ Welcome to Pawan Kunwar\'s Portfolio! ✨', 'color: #4a6cf7; font-size: 16px; font-weight: bold;');
console.log('%c👨‍💻 Full-Stack Developer | ICT Student in Finland 🇫🇮', 'color: #333; font-size: 14px;');
console.log('🚀 Built with HTML, CSS & JavaScript');

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    // ... rest of your existing code ...
});

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // 1. Add smooth fade-in animation to sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Trigger animation after a short delay
    setTimeout(() => {
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 200); // Stagger the animations
        });
    }, 300);
    
    // 2. Enhance social icon hover effects
    const socialIcons = document.querySelectorAll('.social-icons a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
            this.style.boxShadow = '0 10px 20px rgba(74, 108, 247, 0.3)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 3. Add click event to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('click', function() {
            // Toggle highlight effect
            this.classList.toggle('skill-highlight');
            
            // Reset other categories after 1 second
            setTimeout(() => {
                this.classList.remove('skill-highlight');
            }, 1000);
        });
    });
    
    // 4. Update copyright year automatically
    const currentYear = new Date().getFullYear();
    console.log(`© ${currentYear} Pawan Kunwar Portfolio`);
});
    // 5. Update footer year automatically
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // 6. Simple newsletter form handler
    const newsletterButton = document.querySelector('.newsletter-form button');
    if (newsletterButton) {
        newsletterButton.addEventListener('click', function() {
            const emailInput = document.querySelector('.newsletter-form input');
            if (emailInput.value && emailInput.value.includes('@')) {
                alert('Thank you for subscribing! You\'ll hear from me soon. 📧');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // 7. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
        // 8. Projects Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || filter === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 9. Project card hover animations
    projectCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
        
        card.addEventListener('mouseenter', () => {
            const overlay = card.querySelector('.project-overlay');
            if (overlay) overlay.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            const overlay = card.querySelector('.project-overlay');
            if (overlay) overlay.style.opacity = '0';
        });
    });

    // 10. GitHub link update
    const githubBtn = document.querySelector('.projects-cta .btn');
    if (githubBtn) {
        
        githubBtn.href = 'https://github.com/';
    }