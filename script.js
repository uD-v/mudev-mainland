/* ============================================
   μDev — Landing Page Scripts
   ============================================ */

// ---------- Theme: restore before paint to prevent flash ----------
(function () {
    const saved = localStorage.getItem('mudev-theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
})();

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Theme Toggle ----------
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Sync button state on load
        if (document.documentElement.getAttribute('data-theme') === 'light') {
            themeToggle.classList.add('active');
        }

        themeToggle.addEventListener('click', () => {
            const isLight = document.documentElement.getAttribute('data-theme') === 'light';
            const newTheme = isLight ? 'dark' : 'light';

            // Create wave effect from button position
            const rect = themeToggle.getBoundingClientRect();
            const wave = document.createElement('div');
            wave.className = 'theme-wave';
            wave.style.left = rect.left + rect.width / 2 + 'px';
            wave.style.top = rect.top + rect.height / 2 + 'px';
            wave.style.background = isLight
                ? 'radial-gradient(circle, #000 0%, #000 40%, transparent 70%)'
                : 'radial-gradient(circle, #fff 0%, #fff 40%, transparent 70%)';
            document.body.appendChild(wave);

            // Trigger wave animation
            requestAnimationFrame(() => {
                wave.classList.add('theme-wave--expand');
            });

            // Apply theme mid-wave
            setTimeout(() => {
                document.documentElement.setAttribute('data-theme', newTheme);
                themeToggle.classList.toggle('active');
                localStorage.setItem('mudev-theme', newTheme);
            }, 200);

            // Clean up wave element
            wave.addEventListener('animationend', () => wave.remove());
        });
    }

    // ---------- Cursor Glow ----------
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    // ---------- Header Scroll ----------
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    }, { passive: true });

    // ---------- Mobile Nav Toggle ----------
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        navMenu.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ---------- Scroll Animations (Intersection Observer) ----------
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));

    // ---------- Counter Animation ----------
    const counters = document.querySelectorAll('[data-count]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const duration = 2000;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Ease-out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    const current = Math.round(eased * target);

                    el.textContent = current;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }

                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));

    // ---------- Smooth Scroll for Anchors ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---------- Contact Form ----------
    const form = document.getElementById('contactForm');
    if (form) {
        const API_URL = 'https://script.google.com/macros/s/AKfycbyO05i63UczuLC4UMKZfd6MR_FYcpHN-zFluqAymQGVydMp9VajKUIObcdtFBcXsnCjaw/exec';

        // Helper to get i18n string
        function t(key) {
            if (window.mudevI18n) {
                const lang = window.mudevI18n.getCurrentLang();
                return window.mudevI18n.translations[lang]?.[key] || key;
            }
            return key;
        }

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = form.querySelector('.btn');
            const originalText = btn.innerHTML;

            const data = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value,
            };

            btn.disabled = true;
            btn.innerHTML = t('form.sending');

            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });

                btn.innerHTML = t('form.success');
                btn.style.background = '#4ade80';
                btn.style.color = '#000';
                form.reset();
            } catch (err) {
                btn.innerHTML = t('form.error');
                btn.style.background = '#ef4444';
                btn.style.color = '#fff';
                console.error(err);
            }

            setTimeout(() => {
                btn.innerHTML = t('contact.form.submit');
                btn.style.background = '';
                btn.style.color = '';
                btn.disabled = false;
            }, 3000);
        });
    }

    // ---------- Portfolio Carousel ----------
    const track = document.getElementById('portfolioTrack');
    const prevBtn = document.getElementById('portfolioPrev');
    const nextBtn = document.getElementById('portfolioNext');
    const dotsContainer = document.getElementById('portfolioDots');

    if (track && prevBtn && nextBtn && dotsContainer) {
        const slides = track.querySelectorAll('.portfolio-slide');
        let currentIndex = 0;
        const slideWidth = 380 + 24; // slide width + gap

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('portfolio__dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        function updateDots() {
            dotsContainer.querySelectorAll('.portfolio__dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = Math.max(0, Math.min(index, slides.length - 1));
            track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            updateDots();
        }

        prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

        // Drag support
        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;

        track.addEventListener('mousedown', (e) => {
            // Don't start drag if clicking on a link
            if (e.target.closest('a')) return;
            isDragging = true;
            startX = e.pageX;
            scrollLeft = currentIndex * slideWidth;
            track.style.transition = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const x = e.pageX;
            const walk = startX - x;
            track.style.transform = `translateX(-${scrollLeft + walk}px)`;
        });

        document.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            track.style.transition = '';
            const walk = startX - e.pageX;
            if (Math.abs(walk) > 80) {
                goToSlide(currentIndex + (walk > 0 ? 1 : -1));
            } else {
                goToSlide(currentIndex);
            }
        });

        // Touch support
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
            scrollLeft = currentIndex * slideWidth;
            track.style.transition = 'none';
        }, { passive: true });

        track.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX;
            const walk = startX - x;
            track.style.transform = `translateX(-${scrollLeft + walk}px)`;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            track.style.transition = '';
            const walk = startX - e.changedTouches[0].pageX;
            if (Math.abs(walk) > 50) {
                goToSlide(currentIndex + (walk > 0 ? 1 : -1));
            } else {
                goToSlide(currentIndex);
            }
        });
    }

    // ---------- Parallax particles (subtle) ----------
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer && window.innerWidth > 768) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 2 + 1}px;
                height: ${Math.random() * 2 + 1}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.15 + 0.03});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particle-float ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * -20}s;
            `;
            particlesContainer.appendChild(particle);
        }

        // Add particle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particle-float {
                0% { transform: translate(0, 0) scale(1); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100 + 50}px, -${Math.random() * 200 + 100}px) scale(0); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
});
