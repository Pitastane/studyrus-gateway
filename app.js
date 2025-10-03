// Language translations object
const translations = {
    en: {
        'site-title': 'StudyRus Gateway',
        'nav-why': 'Why Russia?',
        'nav-process': 'Application',
        'nav-life': 'Student Life',
        'nav-contact': 'Contact',
        'intro-title': 'Welcome, Mauritania Students! 🎓',
        'intro-text': "We're thrilled to have you here! This portal is your friendly guide to pursuing higher education in Russia. Whether you're dreaming of studying engineering, medicine, or the arts, we're here to support you every step of the way. Discover opportunities, connect with fellow students, and start your journey toward an exciting future!",
        'why-title': 'Why Study in Russia?',
        'why-1': 'High-quality education and global recognition',
        'why-2': 'Affordable tuition fees and living costs',
        'why-3': 'Rich cultural experience',
        'why-4': 'Vibrant student community',
        'process-title': 'Application Process',
        'process-1': 'Research Russian universities and select programs.',
        'process-2': 'Gather necessary documents: passport, diploma, transcripts.',
        'process-3': 'Apply online and submit documents.',
        'process-4': 'Await offer letter and apply for a student visa.',
        'life-title': 'Student Life',
        'life-text': 'Enjoy diverse campus activities, explore Russian cities, and connect with fellow international students.',
        'tips-button': 'Get Student Tips',
        'tip-1': 'Learn basic Russian phrases before arrival.',
        'tip-2': 'Join student organizations for support.',
        'tip-3': 'Budget wisely for living expenses.',
        'contact-title': 'Contact & Support',
        'whatsapp-button': 'Chat on WhatsApp',
        'form-name': 'Your Name:',
        'form-email': 'Email:',
        'form-message': 'Message:',
        'form-submit': 'Send',
        'form-success': 'Your message has been sent!',
        'footer-text': '© 2025 StudyRus Gateway. Designed for Mauritania students.'
    },
    fr: {
        'site-title': 'Portail StudyRus',
        'nav-why': 'Pourquoi la Russie?',
        'nav-process': 'Candidature',
        'nav-life': 'Vie Étudiante',
        'nav-contact': 'Contact',
        'intro-title': 'Bienvenue, Étudiants Mauritaniens! 🎓',
        'intro-text': "Nous sommes ravis de vous accueillir! Ce portail est votre guide convivial pour poursuivre des études supérieures en Russie. Que vous rêviez d'étudier l'ingénierie, la médecine ou les arts, nous sommes là pour vous soutenir à chaque étape. Découvrez des opportunités, connectez-vous avec d'autres étudiants et commencez votre voyage vers un avenir passionnant!",
        'why-title': 'Pourquoi Étudier en Russie?',
        'why-1': 'Éducation de haute qualité et reconnaissance mondiale',
        'why-2': 'Frais de scolarité et coût de la vie abordables',
        'why-3': 'Expérience culturelle riche',
        'why-4': 'Communauté étudiante dynamique',
        'process-title': 'Processus de Candidature',
        'process-1': 'Recherchez les universités russes et sélectionnez des programmes.',
        'process-2': 'Rassemblez les documents nécessaires: passeport, diplôme, relevés de notes.',
        'process-3': 'Postulez en ligne et soumettez les documents.',
        'process-4': 'Attendez la lettre d\'offre et demandez un visa étudiant.',
        'life-title': 'Vie Étudiante',
        'life-text': 'Profitez d\'activités diverses sur le campus, explorez les villes russes et connectez-vous avec des étudiants internationaux.',
        'tips-button': 'Obtenir des Conseils Étudiants',
        'tip-1': 'Apprenez des phrases de base en russe avant l\'arrivée.',
        'tip-2': 'Rejoignez des organisations étudiantes pour obtenir du soutien.',
        'tip-3': 'Gérez votre budget judicieusement pour les dépenses de vie.',
        'contact-title': 'Contact & Support',
        'whatsapp-button': 'Discuter sur WhatsApp',
        'form-name': 'Votre Nom:',
        'form-email': 'Email:',
        'form-message': 'Message:',
        'form-submit': 'Envoyer',
        'form-success': 'Votre message a été envoyé!',
        'footer-text': '© 2025 Portail StudyRus. Conçu pour les étudiants mauritaniens.'
    },
    ar: {
        'site-title': 'بوابة الدراسة في روسيا',
        'nav-why': 'لماذا روسيا؟',
        'nav-process': 'التقديم',
        'nav-life': 'الحياة الطلابية',
        'nav-contact': 'اتصل',
        'intro-title': 'مرحباً بطلاب موريتانيا! 🎓',
        'intro-text': 'نحن سعداء بوجودك هنا! هذا البوابة هو دليلك الودود لمتابعة التعليم العالي في روسيا. سواء كنت تحلم بدراسة الهندسة أو الطب أو الفنون، نحن هنا لدعمك في كل خطوة. اكتشف الفرص، تواصل مع زملاء الدراسة، وابدأ رحلتك نحو مستقبل مثير!',
        'why-title': 'لماذا الدراسة في روسيا؟',
        'why-1': 'تعليم عالي الجودة واعتراف عالمي',
        'why-2': 'رسوم دراسية معقولة وتكاليف معيشة منخفضة',
        'why-3': 'تجربة ثقافية غنية',
        'why-4': 'مجتمع طلابي نابض بالحياة',
        'process-title': 'عملية التقديم',
        'process-1': 'ابحث عن الجامعات الروسية واختر البرامج.',
        'process-2': 'اجمع المستندات المطلوبة: جواز السفر، الشهادة، السجلات الأكاديمية.',
        'process-3': 'قدم طلبك عبر الإنترنت وأرسل المستندات.',
        'process-4': 'انتظر خطاب القبول وتقدم بطلب للحصول على تأشيرة طالب.',
        'life-title': 'الحياة الطلابية',
        'life-text': 'استمتع بأنشطة الحرم الجامعي المتنوعة، واستكشف المدن الروسية، وتواصل مع الطلاب الدوليين.',
        'tips-button': 'احصل على نصائح للطلاب',
        'tip-1': 'تعلم العبارات الروسية الأساسية قبل الوصول.',
        'tip-2': 'انضم إلى المنظمات الطلابية للحصول على الدعم.',
        'tip-3': 'خطط لميزانيتك بحكمة لنفقات المعيشة.',
        'contact-title': 'التواصل والدعم',
        'whatsapp-button': 'الدردشة عبر واتساب',
        'form-name': 'اسمك:',
        'form-email': 'البريد الإلكتروني:',
        'form-message': 'الرسالة:',
        'form-submit': 'إرسال',
        'form-success': 'تم إرسال رسالتك!',
        'footer-text': '© 2025 بوابة الدراسة في روسيا. مصمم لطلاب موريتانيا.'
    }
};

// Current language (default: English)
let currentLang = 'en';

// Function to switch language
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active button
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('lang-' + lang).classList.add('active');
    
    // Update document direction for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
}

// Make switchLanguage available globally
window.switchLanguage = switchLanguage;

// Show student tips when button is clicked
document.getElementById('studentTipsBtn').onclick = function() {
    var tips = document.getElementById('studentTips');
    tips.style.display = tips.style.display === 'none' ? 'block' : 'none';
};

// Simple form handler (demo only)
document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('contactForm').reset();
    setTimeout(function() {
        document.getElementById('formSuccess').style.display = 'none';
    }, 4000);
};

// WhatsApp functionality is handled directly by the links in HTML
// The floating button and inline button both use href="https://wa.me/79269540909"
