document.addEventListener('DOMContentLoaded', function() {
    // Bouton de lecture en direct
    const playButton = document.querySelector('.play-btn');
    if (playButton) {
        playButton.addEventListener('click', function() {
            // Simuler un état de lecture
            if (this.classList.contains('playing')) {
                this.innerHTML = '<i class="fas fa-play"></i> Écouter en direct';
                this.classList.remove('playing');
            } else {
                this.innerHTML = '<i class="fas fa-pause"></i> En cours d\'écoute';
                this.classList.add('playing');
            }
        });
    }

    // Animation du menu de navigation pour les appareils mobiles
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Supprimer la classe active de tous les liens
            menuItems.forEach(i => i.classList.remove('active'));
            // Ajouter la classe active au lien cliqué
            this.classList.add('active');
            
            // Si c'est un lien d'ancrage, faire défiler en douceur
            if (this.getAttribute('href').startsWith('#') && this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
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

    // Afficher la date actuelle dans les articles
    const datePlaceholders = document.querySelectorAll('.news-date');
    if (datePlaceholders.length > 0) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const today = new Date().toLocaleDateString('fr-FR', options);
        
        datePlaceholders.forEach(datePlaceholder => {
            // Conserver l'icône de calendrier
            const icon = datePlaceholder.querySelector('i');
            if (icon) {
                datePlaceholder.innerHTML = '';
                datePlaceholder.appendChild(icon);
                datePlaceholder.innerHTML += ' ' + today;
            }
        });
    }

    // Animation au défilement
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in');
            }
        });
    };

    // Ajouter une classe CSS aux sections pour l'animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-section');
    });

    // Déclencher l'animation au chargement et au défilement
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Formulaire de newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value.trim() !== '') {
                // Simuler l'envoi du formulaire
                const submitButton = this.querySelector('button');
                const originalText = submitButton.textContent;
                
                submitButton.textContent = 'Inscription en cours...';
                submitButton.disabled = true;
                
                // Simuler une requête réseau
                setTimeout(() => {
                    submitButton.textContent = 'Inscrit !';
                    emailInput.value = '';
                    
                    // Réinitialiser le bouton après un certain temps
                    setTimeout(() => {
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                    }, 2000);
                }, 1500);
            }
        });
    }

    // Ajout de fonctionnalité aux boutons de podcast
    const podcastPlayButtons = document.querySelectorAll('.podcast-play');
    podcastPlayButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Simuler la lecture d'un podcast
            alert('La lecture du podcast commencerait ici dans une application réelle');
        });
    });
});

// Ajouter du CSS pour l'animation au défilement
const style = document.createElement('style');
style.textContent = `
    .animate-section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .animate-section.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style); 