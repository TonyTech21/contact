// Particle animation
function createParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    const numberOfParticles = 50;

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2 and 6 pixels
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Animation
        particle.style.animation = `
            float ${Math.random() * 10 + 5}s linear infinite,
            pulse ${Math.random() * 2 + 1}s ease-in-out infinite
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Typing animation
const phrases = [
    'Digital Innovation',
    'Creative Solutions',
    'Tech Excellence'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const typingElement = document.querySelector('.typing-text');
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        charIndex--;
        typingSpeed = 50;
    } else {
        charIndex++;
        typingSpeed = 100;
    }
    
    typingElement.textContent = currentPhrase.substring(0, charIndex);
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Custom cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Scale effect on clickable elements
    const target = e.target;
    if (target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' ||
        target.classList.contains('video-placeholder')) {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    }
});

// Smooth scroll
function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const background = document.querySelector('.hero-background');
    background.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    console.log('Form submitted:', formData);
    e.target.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Video placeholder click handler
// document.querySelector('.video-placeholder').addEventListener('click', function() {
//     alert('Video player would start here');
// });

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    typeText();
});

// Add keyframes for particle animations
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
        }
        100% {
            transform: translate(0, 0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 0.2;
        }
        50% {
            opacity: 0.8;
        }
    }
`;
document.head.appendChild(style);