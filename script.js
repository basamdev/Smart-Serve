// Smart Serve Hub - JavaScript
// Core Multilingual & Luxury Theme Engine

const FLAGS = {
    kurdistan: `<svg class="flag-svg" viewBox="0 0 640 480" width="20" height="14" aria-hidden="true">
        <rect width="640" height="160" fill="#ED1B24"/>
        <rect y="160" width="640" height="160" fill="#FFFFFF"/>
        <rect y="320" width="640" height="160" fill="#278E43"/>
        <g transform="translate(320, 240)">
            <circle r="44" fill="#FFC80B"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(0)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(17.14)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(34.28)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(51.42)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(68.57)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(85.71)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(102.85)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(120)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(137.14)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(154.28)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(171.42)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(188.57)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(205.71)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(222.85)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(240)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(257.14)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(274.28)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(291.42)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(308.57)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(325.71)"/>
            <path d="M0,-74 L6,-44 L-6,-44 Z" fill="#FFC80B" transform="rotate(342.85)"/>
        </g>
    </svg>`,
    saudi: `<svg class="flag-svg" viewBox="0 0 640 480" width="20" height="14" aria-hidden="true">
        <rect width="640" height="480" fill="#006C35"/>
        <g fill="#FFFFFF">
            <path d="M210 325 h220 v9 h-220 z"/>
            <path d="M430 320 l18 9 l-18 9 z"/>
            <path d="M210 315 v29 h-10 v-29 z"/>
            <path d="M190 325 h30 v9 h-30 z"/>
            <text x="320" y="275" font-family="'Vazirmatn', 'Arial', sans-serif" font-size="64" font-weight="900" text-anchor="middle" fill="#FFFFFF" letter-spacing="2">لا إله إلا الله</text>
        </g>
    </svg>`,
    uk: `<svg class="flag-svg" viewBox="0 0 640 480" width="20" height="14" aria-hidden="true">
        <clipPath id="uk-clip-slot"><rect width="640" height="480" rx="2"/></clipPath>
        <g clip-path="url(#uk-clip-slot)">
            <path fill="#012169" d="M0 0h640v480H0z"/>
            <path fill="#FFF" d="M0 0l640 480m0-480L0 480" stroke="#FFF" stroke-width="64"/>
            <path fill="#C8102E" d="M0 0l640 480m0-480L0 480" stroke="#C8102E" stroke-width="22"/>
            <path fill="#FFF" d="M320 0v480M0 240h640" stroke="#FFF" stroke-width="106"/>
            <path fill="#C8102E" d="M320 0v480M0 240h640" stroke="#C8102E" stroke-width="64"/>
        </g>
    </svg>`
};

const HUB_TRANSLATIONS = {
    ckb: {
        dir: 'rtl',
        langCode: 'ku',
        flagKey: 'kurdistan',
        displayName: 'کوردی (سۆرانی)',
        title: 'Smart Serve - چارەسەری دیجیتاڵی بۆ بزنسەکەت',
        meta_desc: 'سمارت سێرڤ باشترین چارەسەرە دیجیتاڵییەکان پێشکەش دەکات وەک مێنیوی QR، سیستەمی POS، پۆرتفۆلیۆی گەشەپێدەر و سۆشیاڵ میدیا.',
        brand_sub: 'چارەسەری دیجیتاڵی بۆ بزنسەکەت',
        menu_title: 'مێنیوی دیجیتاڵ',
        menu_desc: 'مێنیوی مۆدێرنی خواردنگە و کافێ بە کۆدی QR',
        menu_btn: 'کردنەوەی مێنیو',
        pos_title: 'سیستەمی POS',
        pos_desc: 'سیستەمی پێشکەوتووی بەڕێوەبردنی چێشتخانە و فرۆش',
        pos_btn: 'کردنەوەی POS',
        cv_title: 'پۆرتفۆلیۆی گەشەپێدەر',
        cv_desc: 'بینینی پڕۆژەکان، لێهاتوویی و کارە زیندووەکان',
        cv_btn: 'بینینی پۆرتفۆلیۆ',
        social_title: 'سۆشیاڵ میدیا',
        social_desc: 'براندینگی دا‌هێنەرانە و دیزاینی تۆڕە کۆمەڵایەتییەکان',
        footer_text: '© ٢٠٢٦ سمارت سێرڤ. هەموو مافەکان پارێزراون.',
        select_lang: 'زمان هەڵبژێرە'
    },
    bad: {
        dir: 'rtl',
        langCode: 'ku',
        flagKey: 'kurdistan',
        displayName: 'کوردی (بادینی)',
        title: 'Smart Serve - چارەسەریێن دیجیتالی بۆ بزنسێ تە',
        meta_desc: 'سمارت سێرڤ باشترین چارەسەریێن دیجیتالی پێشکێش دکەت مینا مێنیویا QR، سیستەمێ POS، پۆرتفۆلیۆیێ گەشەپێدەری و سوشیال میدیا.',
        brand_sub: 'چارەسەریێن دیجیتالی بۆ پێشڤەبرنا بزنسێ تە',
        menu_title: 'مێنیویا دیجیتالی',
        menu_desc: 'مێنیویا مۆدێرن بۆ رێستورانت و کافەیان ب رێکا QR',
        menu_btn: 'ڤەکرنا مێنیویێ',
        pos_title: 'سیستەمێ POS',
        pos_desc: 'سیستەمێ تەمام یێ برێڤەبرنا رێستورانت و فرۆشتنێ',
        pos_btn: 'ڤەکرنا POS',
        cv_title: 'پۆرتفۆلیۆیێ گەشەپێدەری',
        cv_desc: 'دیتنا پرۆژان، کارامەیی و کارێن ڕاستەقینە',
        cv_btn: 'دیتنا پۆرتفۆلیۆیێ',
        social_title: 'تۆرێن جڤاکی',
        social_desc: 'براندینگا داهێنەرانە و دیزاینێ سوشیال میدیایێ',
        footer_text: '© ٢٠٢٦ سمارت سێرڤ. هەمی ماف پاراستینە.',
        select_lang: 'زمانێ خۆ هەلبژێره'
    },
    kmr: {
        dir: 'ltr',
        langCode: 'ku',
        flagKey: 'kurdistan',
        displayName: 'Kurdî (Kurmancî)',
        title: 'Smart Serve - Çareseriyên Dîjîtal Ji Bo Karsaziya We',
        meta_desc: 'Smart Serve çareseriyên dîjîtal ên پێشکêş dike wek Menûya QR, Pergala POS, Portfolyoya Pêşvebir û Medyaya Civakî.',
        brand_sub: 'Çareseriyên Dîjîtal Ji Bo Karsaziya We',
        menu_title: 'Menûya Dîjîtal',
        menu_desc: 'Menûya Nûjen a Xwaringeh û Qehwexaneyan bi Koda QR',
        menu_btn: 'Menûyê Veke',
        pos_title: 'Pergala POS',
        pos_desc: 'Pergala Pêşketî ya Birêvebirina Xwaringeh û Firotinê',
        pos_btn: 'POS Veke',
        cv_title: 'Portfolyoya Pêşvebir',
        cv_desc: 'Projeyên Min, Şarezayî û Nimûneyên Zindî',
        cv_btn: 'Portfolyoyê Bibîne',
        social_title: 'Medyaya Civakî',
        social_desc: 'Brandinga Afirîner û Sêwirana Medyaya Civakî',
        footer_text: '© 2026 Smart Serve. Hemû maf parastî ne.',
        select_lang: 'Ziman Hilbijêre'
    },
    ar: {
        dir: 'rtl',
        langCode: 'ar',
        flagKey: 'saudi',
        displayName: 'العربية',
        title: 'سمارت سيرف - حلول رقمية مبتكرة لأعمالك',
        meta_desc: 'يقدم سمارت سيرف أرقى الحلول الرقمية بما في ذلك قوائم المطاعم الذكية QR، أنظمة نقاط البيع والكاشير POS، ملف المطور وخدمات التواصل الاجتماعي.',
        brand_sub: 'حلول رقمية مبتكرة لتطوير أعمالك',
        menu_title: 'القائمة الرقمية',
        menu_desc: 'منيو مطاعم وكافيهات إلكتروني ذكي عبر كود QR',
        menu_btn: 'فتح القائمة',
        pos_title: 'نظام كاشير POS',
        pos_desc: 'نظام متكامل واحترافي لإدارة المطاعم ونقاط البيع',
        pos_btn: 'فتح الكاشير',
        cv_title: 'ملف المطور',
        cv_desc: 'استكشف المشاريع، الخبرات والأعمال المباشرة',
        cv_btn: 'عرض الملف',
        social_title: 'التواصل الاجتماعي',
        social_desc: 'الهوية البصرية الإبداعية وتصاميم السوشيال ميديا',
        footer_text: '© ٢٠٢٦ سمارت سيرف. جميع الحقوق محفوظة.',
        select_lang: 'اختر اللغة'
    },
    en: {
        dir: 'ltr',
        langCode: 'en',
        flagKey: 'uk',
        displayName: 'English',
        title: 'Smart Serve - Digital Solutions for Your Business',
        meta_desc: 'Smart Serve provides premium digital solutions including QR restaurant menus, POS systems, developer portfolio, and creative design services.',
        brand_sub: 'Digital Solutions for Your Business',
        menu_title: 'Digital Menu',
        menu_desc: 'Modern QR Code Restaurant Menu',
        menu_btn: 'Open Menu',
        pos_title: 'POS System',
        pos_desc: 'Complete Restaurant Management System',
        pos_btn: 'Open POS',
        cv_title: 'Developer Portfolio',
        cv_desc: 'Explore Projects, Skills & Live Work',
        cv_btn: 'View Portfolio',
        social_title: 'Social Media',
        social_desc: 'Creative Branding & Social Media Design',
        footer_text: '© 2026 Smart Serve. All rights reserved.',
        select_lang: 'Select Language'
    }
};

// Global language switcher function
window.setLanguage = function(langKey) {
    if (!HUB_TRANSLATIONS[langKey]) langKey = 'en';
    const data = HUB_TRANSLATIONS[langKey];
    
    // Persist language
    localStorage.setItem('smartserve_lang', langKey);

    // Apply document direction and language attributes
    document.documentElement.setAttribute('lang', data.langCode);
    document.documentElement.setAttribute('dir', data.dir);

    // Update active flag & name in trigger
    const activeFlagIcon = document.getElementById('activeFlagIcon');
    const activeLangText = document.getElementById('activeLangText');
    if (activeFlagIcon && FLAGS[data.flagKey]) {
        activeFlagIcon.innerHTML = FLAGS[data.flagKey];
    }
    if (activeLangText) {
        activeLangText.textContent = data.displayName;
    }

    // Update checkmark state in dropdown
    document.querySelectorAll('.lang-item').forEach(item => {
        if (item.getAttribute('data-lang') === langKey) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });

    // Update text content with smooth transition
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            el.textContent = data[key];
        }
    });

    // Update page title and meta description
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = data.title;

    const pageMetaDesc = document.getElementById('pageMetaDesc');
    if (pageMetaDesc) pageMetaDesc.setAttribute('content', data.meta_desc);

    // Close dropdown panel
    const langPicker = document.getElementById('langPicker');
    if (langPicker) {
        langPicker.classList.remove('active');
        const langPickerBtn = document.getElementById('langPickerBtn');
        if (langPickerBtn) langPickerBtn.setAttribute('aria-expanded', 'false');
    }
};

// Global theme toggler function
window.toggleTheme = function() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('smartserve_theme', newTheme);

    const themeMeta = document.getElementById('themeColorMeta');
    if (themeMeta) {
        themeMeta.setAttribute('content', newTheme === 'dark' ? '#0B1026' : '#EEF2FF');
    }
};

// Initialize Language Dropdown & Theme Listeners
function initNavControls() {
    const langPicker = document.getElementById('langPicker');
    const langPickerBtn = document.getElementById('langPickerBtn');

    if (langPickerBtn && langPicker) {
        langPickerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = langPicker.classList.toggle('active');
            langPickerBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });

        // Close on click outside
        document.addEventListener('click', function(e) {
            if (!langPicker.contains(e.target)) {
                langPicker.classList.remove('active');
                langPickerBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && langPicker.classList.contains('active')) {
                langPicker.classList.remove('active');
                langPickerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Set initial language from storage or default
    const savedLang = localStorage.getItem('smartserve_lang') || 'en';
    setLanguage(savedLang);
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initNavControls();
    initScrollAnimations();
    initButtonEffects();
    initCardAnimations();
    initParallaxEffects();
    initParticleEffects();
    initModal();
});

// Open social apps/sites reliably (new tab; mobile opens the app when installed)
window.openSocial = function(url) {
    if (!url) return true;
    var win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win) {
        // Popup blocked — fall back to normal link navigation
        window.location.href = url;
    }
    return false;
};

// Modal functionality
function initModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalIframe = document.getElementById('modalIframe');
    const modalTitle = document.getElementById('modalTitle');

    // Open modal function
    window.openModal = function(url, title) {
        modalIframe.src = url;
        modalTitle.textContent = title;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Close modal function
    window.closeModal = function() {
        modalOverlay.classList.remove('active');
        modalIframe.src = '';
        document.body.style.overflow = '';
    };

    // Close button click
    modalClose.addEventListener('click', closeModal);

    // Close on overlay click
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe cards for scroll animation
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationPlayState = 'paused';
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });
}

// Button ripple effect
function initButtonEffects() {
    const buttons = document.querySelectorAll('.card-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });

        // Enhanced hover effect
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add ripple animation to stylesheet
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Card hover animations
function initCardAnimations() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // Enhanced hover effect
        card.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });

        card.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });

        // 3D tilt effect on mouse move
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 25;
            const rotateY = (centerX - x) / 25;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.03)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
    });
}

// Parallax effect for background elements
function initParallaxEffects() {
    const glows = document.querySelectorAll('.glow');
    
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        glows.forEach((glow, index) => {
            const speed = (index + 1) * 25;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            glow.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Floating particle effects
function initParticleEffects() {
    const particlesContainer = document.querySelector('.particles');
    if (!particlesContainer) return;

    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }

    // Add particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.3;
            }
            25% {
                transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1.2);
                opacity: 0.6;
            }
            50% {
                transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1);
                opacity: 0.4;
            }
            75% {
                transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) scale(1.1);
                opacity: 0.5;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add visible class animation for scroll reveal
function addScrollRevealStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
    `;
    document.head.appendChild(style);
}

// Initialize scroll reveal styles
addScrollRevealStyles();

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll to top on page load
window.addEventListener('load', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Console welcome message
console.log('%c Smart Serve Landing Page ', 'background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899); color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold;');
console.log('%c Premium Digital Solutions ', 'color: #6366f1; font-size: 12px;');
