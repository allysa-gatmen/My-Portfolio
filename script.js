// Expand navigation line based on visible section
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navi');

    function updateNav() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            const navItemText = item.textContent.trim().toLowerCase().replace('-', '').replace(' ', '');
            if (navItemText === currentSection) {
                item.classList.add('active');
            }
        });
    }

    function checkScreenWidth() {
        if (window.innerWidth <= 1023) {
            navItems.forEach(item => {
                item.style.display = 'none';
            });
        } else {
            navItems.forEach(item => {
                item.style.display = 'flex'; // Or 'block'
            });
        }
    }

    window.addEventListener('scroll', updateNav);
    window.addEventListener('resize', checkScreenWidth);
    checkScreenWidth(); // Initial check on load
    updateNav(); // Initial update on load
});

// Mush dance
document.querySelector('.mush').addEventListener('mouseover', function () {
    document.querySelector('.icon').classList.add('dance');
});

document.querySelector('.mush').addEventListener('mouseout', function () {
    document.querySelector('.icon').classList.remove('dance');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interactive hover effects for cards
document.querySelectorAll('.project-card, .experience-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'var(--color-accent)';
        card.style.backgroundColor = 'rgba(241, 210, 241, 0.122)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'var(--color-tag)';
        card.style.backgroundColor = 'transparent';
    });
});

// Dynamic tag color change
document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.backgroundColor = 'var(--color-accent)';
        tag.style.color = 'var(--color-background)';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.backgroundColor = 'var(--color-tag)';
        tag.style.color = 'var(--color-accent)';
    });
});

// Interactive hover effects for project images
document.querySelectorAll('.project-image-container').forEach(imageContainer => {
    imageContainer.addEventListener('mouseenter', () => {
        imageContainer.style.transform = 'scale(1.01)';
        imageContainer.style.transition = 'transform 0.3s ease';
    });
    imageContainer.addEventListener('mouseleave', () => {
        imageContainer.style.transform = 'scale(1)';
    });
});

// Parallax effect for background images
document.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(el => {
        const speed = el.getAttribute('data-speed');
        const offset = window.pageYOffset * speed;
        el.style.backgroundPositionY = `${offset}px`;
    });
});

// Clickable card
document.querySelectorAll('.project-card, .experience-card').forEach(card => {
    card.addEventListener('click', () => {
        const link = card.querySelector('.anchor-text');
        if (link) {
            window.open(link.href, '_blank');
        }
    });
});
