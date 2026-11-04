// قاموس الترجمة
const translations = {
    ar: {
        nav_home: "الرئيسية",
        nav_skills: "مهاراتي",
        nav_contact: "تواصل معي",
        hero_title: "مرحباً، أنا <span>طالب علوم إعلامية ومطور</span>",
        hero_desc: "أنا طالب جامعي أدرس علوم الإعلامية في المعهد العالي للرياضيات التطبيقية والإعلامية بالقيروان تونس (ISMAI K). أجمع بين المنطق البرمجي واللمسة الفنية لتطوير حلول برمجية وإنتاج محتوى مرئي جذاب.",
        btn_contact: "تواصل معي",
        btn_skills: "اكتشف مهاراتي",
        skills_title: "ماذا <span>أُقدم</span>",
        skills_desc: "خبراتي تتنوع بين البرمجة، تصميم الويب، المونتاج وإدارة المشاريع",
        skill1_title: "البرمجة (Python & C)",
        skill1_desc: "تطوير خوارزميات وبرامج قوية باستخدام لغات البرمجة الأساسية. بناء سكربتات بـ Python وتطوير أنظمة سريعة بـ C.",
        skill2_title: "تصميم وتطوير الويب",
        skill2_desc: "بناء واجهات مستخدم تفاعلية، متجاوبة مع جميع الشاشات، وذات تجربة مستخدم ممتازة.",
        skill3_title: "المونتاج وتحرير الفيديو",
        skill3_desc: "صناعة وتحرير الفيديوهات باحترافية، تصحيح الألوان، وإخراج محتوى مرئي يروي قصة.",
        skill4_title: "العمل باستخدام Git",
        skill4_desc: "سلاسة التعامل مع أنظمة التحكم في الإصدارات (Git/GitHub) لإدارة الأكواد والعمل الجماعي بفعالية.",
        contact_title: "لنبقَ على <span>تواصل</span>",
        contact_desc: "راسلني عبر البريد الإلكتروني أو تواصل معي عبر منصات التواصل الاجتماعي:",
        footer_text: "© 2026 تم التصميم والبرمجة بشغف."
    },
    en: {
        nav_home: "Home",
        nav_skills: "Skills",
        nav_contact: "Contact",
        hero_title: "Hello, I'm a <span>CS Student & Developer</span>",
        hero_desc: "I am a Computer Science student at the Higher Institute of Applied Mathematics and Computer Science in Kairouan, Tunisia (ISMAI K). I combine programming logic with an artistic touch to develop software solutions and engaging visual content.",
        btn_contact: "Contact Me",
        btn_skills: "Discover Skills",
        skills_title: "What I <span>Offer</span>",
        skills_desc: "My expertise ranges from programming and web design to video editing.",
        skill1_title: "Programming (Python & C)",
        skill1_desc: "Developing algorithms and robust programs using core languages. Building Python scripts and fast systems in C.",
        skill2_title: "Web Design & Dev",
        skill2_desc: "Building interactive, responsive user interfaces with an excellent user experience.",
        skill3_title: "Video Editing",
        skill3_desc: "Professional video editing, color grading, and producing visual content that tells a story.",
        skill4_title: "Version Control (Git)",
        skill4_desc: "Smooth workflow with version control systems (Git/GitHub) for code management and teamwork.",
        contact_title: "Let's Stay In <span>Touch</span>",
        contact_desc: "Email me or connect with me on social media:",
        footer_text: "© 2026 Designed and coded with passion."
    },
    fr: {
        nav_home: "Accueil",
        nav_skills: "Compétences",
        nav_contact: "Contact",
        hero_title: "Bonjour, je suis <span>Étudiant en Info & Développeur</span>",
        hero_desc: "Je suis étudiant en Informatique à l'Institut Supérieur des Mathématiques Appliquées et de l'Informatique de Kairouan, Tunisie (ISMAI K). Je combine logique de programmation et créativité pour développer des solutions logicielles et du contenu visuel.",
        btn_contact: "Contactez-moi",
        btn_skills: "Mes Compétences",
        skills_title: "Ce que je <span>Propose</span>",
        skills_desc: "Mon expertise va de la programmation et du web design au montage vidéo.",
        skill1_title: "Programmation (Python & C)",
        skill1_desc: "Développement d'algorithmes et de programmes robustes. Création de scripts Python et de systèmes rapides en C.",
        skill2_title: "Conception Web",
        skill2_desc: "Création d'interfaces utilisateur interactives, réactives et offrant une excellente expérience utilisateur.",
        skill3_title: "Montage Vidéo",
        skill3_desc: "Montage vidéo professionnel, étalonnage des couleurs et production de contenu visuel captivant.",
        skill4_title: "Gestion de Versions (Git)",
        skill4_desc: "Maîtrise des systèmes de contrôle de version (Git/GitHub) pour la gestion du code et le travail d'équipe.",
        contact_title: "Restons en <span>Contact</span>",
        contact_desc: "Envoyez-moi un email ou rejoignez-moi sur les réseaux sociaux :",
        footer_text: "© 2026 Conçu et programmé avec passion."
    }
};

// تغيير اللغة
function changeLanguage(lang) {
    const htmlTag = document.getElementById('html-tag');

    // تغيير اتجاه الصفحة بناءً على اللغة
    if (lang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
        document.body.className = 'lang-ar';
    } else {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', lang);
        document.body.className = `lang-${lang}`;
    }

    // تحديث النصوص
    document.querySelectorAll('[data-tr]').forEach(el => {
        const key = el.getAttribute('data-tr');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // تحديث أزرار اللغات
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        }
    });
}

// تأثير الظهور عند التمرير
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));