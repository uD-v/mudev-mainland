/* ============================================
   μDev — Internationalization (i18n)
   Ukrainian (uk) & English (en)
   ============================================ */

const translations = {
    uk: {
        // Meta
        "meta.title": "μDev — Студія веб-розробки",
        "meta.description": "μDev — студія розробки веб-додатків, лендингів та Telegram ботів. Сучасні цифрові рішення для вашого бізнесу.",

        // Nav
        "nav.services": "Послуги",
        "nav.portfolio": "Портфоліо",
        "nav.process": "Процес",
        "nav.about": "Про нас",
        "nav.contact": "Зв'язатися",

        // Theme toggle
        "theme.toggle.label": "Переключити тему",

        // Hero
        "hero.badge": '<span class="hero__badge-dot"></span> Приймаємо нові проєкти',
        "hero.title": 'Створюємо<br><span class="hero__title-accent">цифрові</span> продукти,<br>що <span class="hero__title-outline">працюють</span>',
        "hero.description": "Веб-додатки, лендинги та Telegram боти — від ідеї до запуску. Ми перетворюємо ваші бізнес-задачі на елегантні технологічні рішення.",
        "hero.cta.primary": 'Обговорити проєкт <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>',
        "hero.cta.secondary": "Наші роботи",
        "hero.stat.projects": "Проєктів",
        "hero.stat.clients": "Клієнтів",
        "hero.stat.years": "Роки досвіду",
        "hero.scroll": "Скрольте вниз",

        // Services
        "services.tag": "01 / Послуги",
        "services.title": 'Що ми <span class="text-accent">робимо</span>',
        "services.subtitle": "Повний спектр послуг для вашої цифрової присутності",
        "services.webapp.title": "Веб-додатки",
        "services.webapp.text": "Складні веб-застосунки з інтуїтивним інтерфейсом, потужним бекендом та масштабованою архітектурою. CRM, SaaS, панелі адміністратора та інше.",
        "services.landing.title": "Лендинги",
        "services.landing.text": "Висококонверсійні посадкові сторінки з продуманим UX та приголомшливим дизайном. Кожна деталь працює на результат — ваші продажі.",
        "services.landing.tag1": "UI/UX Дизайн",
        "services.landing.tag2": "Адаптив",
        "services.landing.tag3": "SEO",
        "services.landing.tag4": "Анімації",
        "services.bot.title": "Telegram-боти",
        "services.bot.text": "Розумні боти для автоматизації бізнес-процесів, підтримки клієнтів, прийому замовлень та платежів. Інтеграція з будь-якими системами.",
        "services.bot.tag3": "Платежі",

        // Portfolio
        "portfolio.tag": "02 / Портфоліо",
        "portfolio.title": 'Наші <span class="text-accent">проєкти</span>',
        "portfolio.subtitle": "Реальні рішення, що приносять результат",
        "portfolio.card1.category": "Веб-додаток",
        "portfolio.card1.desc": "Це масштабна освітня екосистема в Telegram, що поєднує модульне навчання з покроковим доступом та інтелектуальну підтримку учнів через AI-помічника. Платформа інтегрує аналітику від TradingView для генерації сигналів у реальному часі, а також повністю автоматизує прийом платежів та керування доступами до закритого ком'юніті.",
        "portfolio.card1.cta": "Переглянути →",
        "portfolio.card2.category": "Telegram-бот",
        "portfolio.card2.desc": "Це масштабна P2P-платформа в Telegram для торгівлі цифровими товарами з рольовою моделлю продавця та покупця. В основі лежить механізм безпечної угоди з холдуванням коштів до підтвердження отримання товару та інтегрована оплата через Crypto Bot. Система включає кабінети користувачів, рейтинг на основі фідбеку та керований вивід коштів через адмін-панель для захисту від шахрайства.",
        "portfolio.card3.category": "Telegram-бот",
        "portfolio.card3.desc": "Користувацький інструмент для миттєвого теханалізу. Бот у реальному часі парсить дані з TradingView за обраною парою та таймфреймом, генерує торговий сигнал та надсилає актуальний графік прямо в чат.",
        "portfolio.card4.category": "Telegram-бот",
        "portfolio.card4.desc": "Персональний асистент для масових розсилок у Telegram. Бот автоматизує рутинну відправку контенту (текст, медіа, Video Notes, Voice) у вибрані групи чатів, зберігаючи персоналізований підхід та економлячи час користувача.",
        "portfolio.card5.category": "Веб-додаток",
        "portfolio.card5.title": "Ваш проєкт?",
        "portfolio.card5.desc": "Маєте ідею? Ми допоможемо реалізувати її від концепції до запуску",
        "portfolio.card5.cta": "Обговорити →",

        // Process
        "process.tag": "03 / Процес",
        "process.title": 'Як ми <span class="text-accent">працюємо</span>',
        "process.subtitle": "Прозорий процес від першого дзвінка до запуску",
        "process.step1.title": "Знайомство",
        "process.step1.text": "Дізнаємося про ваш бізнес, цілі та очікування. Визначаємо обсяг робіт та формуємо технічне завдання.",
        "process.step2.title": "Дизайн",
        "process.step2.text": "Створюємо прототипи та дизайн-макети. Кожен екран погоджується з вами до початку розробки.",
        "process.step3.title": "Розробка",
        "process.step3.text": "Пишемо чистий, масштабований код. Регулярні демонстрації прогресу та прозора комунікація.",
        "process.step4.title": "Запуск",
        "process.step4.text": "Тестування, оптимізація та деплой. Забезпечуємо підтримку після запуску та допомагаємо з розвитком продукту.",

        // About
        "about.tag": "04 / Про нас",
        "about.title": 'Чому <span class="text-accent">μDev</span>',
        "about.speed.title": "Швидкість",
        "about.speed.text": "Дотримуємося дедлайнів. MVP за 2-4 тижні, складні проєкти — за узгодженим графіком.",
        "about.quality.title": "Якість",
        "about.quality.text": "Чистий код, сучасні технології та увага до деталей. Кожен проєкт — наша репутація.",
        "about.communication.title": "Комунікація",
        "about.communication.text": "Завжди на зв'язку. Прозорий процес, регулярні звіти та жодних сюрпризів.",
        "about.support.title": "Підтримка",
        "about.support.text": "Не залишаємо після запуску. Технічна підтримка, оновлення та масштабування продукту.",

        // Contact
        "contact.tag": "05 / Контакти",
        "contact.title": 'Давайте створимо<br>щось <span class="text-accent">особливе</span>',
        "contact.description": "Маєте ідею або проєкт? Напишіть нам — обговоримо деталі та знайдемо найкраще рішення для вашого бізнесу.",
        "contact.form.name": "Ваше ім'я",
        "contact.form.email": "Email",
        "contact.form.service.placeholder": "Оберіть послугу",
        "contact.form.service.webapp": "Веб-додаток",
        "contact.form.service.landing": "Лендинг",
        "contact.form.service.bot": "Telegram-бот",
        "contact.form.service.other": "Інше",
        "contact.form.message": "Розкажіть про проєкт",
        "contact.form.submit": 'Надіслати запит <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>',

        // Form states
        "form.sending": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Відправка...',
        "form.success": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Надіслано!',
        "form.error": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Помилка!',

        // Footer
        "footer.tagline": "Цифрові рішення для амбітних бізнесів",
        "footer.services": "Послуги",
        "footer.portfolio": "Портфоліо",
        "footer.process": "Процес",
        "footer.about": "Про нас",
        "footer.contact": "Контакти",
        "footer.copy": "© 2026 μDev. Усі права захищені.",
    },

    en: {
        // Meta
        "meta.title": "μDev — Web Development Studio",
        "meta.description": "μDev — a studio for building web applications, landing pages, and Telegram bots. Modern digital solutions for your business.",

        // Nav
        "nav.services": "Services",
        "nav.portfolio": "Portfolio",
        "nav.process": "Process",
        "nav.about": "About",
        "nav.contact": "Get in Touch",

        // Theme toggle
        "theme.toggle.label": "Toggle theme",

        // Hero
        "hero.badge": '<span class="hero__badge-dot"></span> Accepting new projects',
        "hero.title": 'We build<br><span class="hero__title-accent">digital</span> products<br>that <span class="hero__title-outline">work</span>',
        "hero.description": "Web apps, landing pages, and Telegram bots — from idea to launch. We turn your business challenges into elegant tech solutions.",
        "hero.cta.primary": 'Discuss a project <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>',
        "hero.cta.secondary": "Our work",
        "hero.stat.projects": "Projects",
        "hero.stat.clients": "Clients",
        "hero.stat.years": "Years of experience",
        "hero.scroll": "Scroll down",

        // Services
        "services.tag": "01 / Services",
        "services.title": 'What we <span class="text-accent">do</span>',
        "services.subtitle": "A full range of services for your digital presence",
        "services.webapp.title": "Web Applications",
        "services.webapp.text": "Complex web applications with an intuitive interface, powerful backend, and scalable architecture. CRM, SaaS, admin panels, and more.",
        "services.landing.title": "Landing Pages",
        "services.landing.text": "High-conversion landing pages with thoughtful UX and stunning design. Every detail drives results — your sales.",
        "services.landing.tag1": "UI/UX Design",
        "services.landing.tag2": "Responsive",
        "services.landing.tag3": "SEO",
        "services.landing.tag4": "Animations",
        "services.bot.title": "Telegram Bots",
        "services.bot.text": "Smart bots for business automation, customer support, order processing, and payments. Integration with any system.",
        "services.bot.tag3": "Payments",

        // Portfolio
        "portfolio.tag": "02 / Portfolio",
        "portfolio.title": 'Our <span class="text-accent">projects</span>',
        "portfolio.subtitle": "Real solutions that deliver results",
        "portfolio.card1.category": "Web App",
        "portfolio.card1.desc": "A large-scale educational ecosystem in Telegram that combines modular learning with step-by-step access and AI-powered student support. The platform integrates TradingView analytics for real-time signal generation and fully automates payment processing and access management for a private community.",
        "portfolio.card1.cta": "View →",
        "portfolio.card2.category": "Telegram Bot",
        "portfolio.card2.desc": "A large-scale P2P platform in Telegram for trading digital goods with seller and buyer roles. It features a secure deal mechanism with fund holding until delivery confirmation and integrated Crypto Bot payments. The system includes user dashboards, feedback-based ratings, and admin-controlled withdrawals for fraud protection.",
        "portfolio.card3.category": "Telegram Bot",
        "portfolio.card3.desc": "A user tool for instant technical analysis. The bot parses TradingView data in real time for a selected pair and timeframe, generates a trading signal, and sends an up-to-date chart directly to the chat.",
        "portfolio.card4.category": "Telegram Bot",
        "portfolio.card4.desc": "A personal assistant for mass messaging in Telegram. The bot automates routine content delivery (text, media, Video Notes, Voice) to selected group chats while maintaining a personalized approach and saving user time.",
        "portfolio.card5.category": "Web App",
        "portfolio.card5.title": "Your project?",
        "portfolio.card5.desc": "Have an idea? We'll help bring it to life from concept to launch",
        "portfolio.card5.cta": "Discuss →",

        // Process
        "process.tag": "03 / Process",
        "process.title": 'How we <span class="text-accent">work</span>',
        "process.subtitle": "A transparent process from first call to launch",
        "process.step1.title": "Discovery",
        "process.step1.text": "We learn about your business, goals, and expectations. We define the scope of work and create a technical specification.",
        "process.step2.title": "Design",
        "process.step2.text": "We create prototypes and design mockups. Every screen is approved by you before development begins.",
        "process.step3.title": "Development",
        "process.step3.text": "We write clean, scalable code. Regular progress demos and transparent communication.",
        "process.step4.title": "Launch",
        "process.step4.text": "Testing, optimization, and deployment. We provide post-launch support and help grow your product.",

        // About
        "about.tag": "04 / About Us",
        "about.title": 'Why <span class="text-accent">μDev</span>',
        "about.speed.title": "Speed",
        "about.speed.text": "We meet deadlines. MVP in 2–4 weeks, complex projects — on an agreed schedule.",
        "about.quality.title": "Quality",
        "about.quality.text": "Clean code, modern technologies, and attention to detail. Every project is our reputation.",
        "about.communication.title": "Communication",
        "about.communication.text": "Always in touch. Transparent process, regular reports, and no surprises.",
        "about.support.title": "Support",
        "about.support.text": "We don't leave after launch. Technical support, updates, and product scaling.",

        // Contact
        "contact.tag": "05 / Contact",
        "contact.title": 'Let\'s create<br>something <span class="text-accent">special</span>',
        "contact.description": "Have an idea or a project? Write to us — we'll discuss the details and find the best solution for your business.",
        "contact.form.name": "Your name",
        "contact.form.email": "Email",
        "contact.form.service.placeholder": "Choose a service",
        "contact.form.service.webapp": "Web Application",
        "contact.form.service.landing": "Landing Page",
        "contact.form.service.bot": "Telegram Bot",
        "contact.form.service.other": "Other",
        "contact.form.message": "Tell us about your project",
        "contact.form.submit": 'Send request <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>',

        // Form states
        "form.sending": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Sending...',
        "form.success": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Sent!',
        "form.error": '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Error!',

        // Footer
        "footer.tagline": "Digital solutions for ambitious businesses",
        "footer.services": "Services",
        "footer.portfolio": "Portfolio",
        "footer.process": "Process",
        "footer.about": "About",
        "footer.contact": "Contact",
        "footer.copy": "© 2026 μDev. All rights reserved.",
    }
};

// ---------- i18n Engine ----------

let currentLang = localStorage.getItem('mudev-lang') || 'uk';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('mudev-lang', lang);

    const dict = translations[lang];
    if (!dict) return;

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Update meta
    document.title = dict['meta.title'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict['meta.description']);

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // Update select options with data-i18n
    document.querySelectorAll('option[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // Update lang toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        const label = langToggle.querySelector('.lang-toggle__label');
        if (label) {
            label.textContent = lang === 'uk' ? 'EN' : 'UA';
        }
    }

    // Update theme toggle aria-label
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-label', dict['theme.toggle.label']);
        themeToggle.setAttribute('title', dict['theme.toggle.label']);
    }
}

// ---------- Init on DOM ready ----------

document.addEventListener('DOMContentLoaded', () => {
    // Language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'uk' ? 'en' : 'uk';
            setLanguage(newLang);
        });
    }

    // Apply saved language (or default uk)
    setLanguage(currentLang);
});

// Expose for use in script.js (form states)
window.mudevI18n = { translations, getCurrentLang: () => currentLang };
