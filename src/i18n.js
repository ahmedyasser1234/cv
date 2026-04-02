import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      navbar: {
        home: 'الرئيسية',
        about: 'من أنا',
        skills: 'مهاراتي',
        projects: 'أعمالي',
        contact: 'تواصل معي',
      },
      hero: {
        title: 'متخصص في بناء تطبيقات الويب',
        name: 'أحمد ياسر صالح علي',
        summary: 'خبير في بناء تطبيقات الويب المتقدمة وتطوير الواجهات، مع خبرة واسعة في برامج التصميم والأوفيس واستغلال أدوات الذكاء الاصطناعي لتقديم حلول متكاملة.',
        cta_contact: 'تواصل معي',
        cta_cv: 'تحميل السيرة الذاتية',
        portfolio: 'معرض الأعمال',
      },
      about: {
        title: 'من أنا',
        bio: 'أنا مطور برمجيات متخصص في بناء تطبيقات الويب (Frontend/Backend). بخلفية أكاديمية من جامعة المنصورة، أجمع بين مهارات البرمجة والقدرة على التعامل الاحترافي مع برامج التصميم والأوفيس بخبرة كبيرة، مما يتيح لي تقديم منتجات برمجية شاملة ومنظمة.',
        highlights: {
          fullstack: 'بناء تطبيقات الويب',
          backend: 'البرمجة والكودينج',
          ai: 'برامج التصميم والأوفيس',
          problem_solving: 'حل المشكلات التقنية',
        }
      },
      skills: {
        title: 'المهارات التقنية',
        dev: 'البرمجة والتطوير',
        design: 'برامج التصميم',
        office: 'برامج الأوفيس (خبرة كبيرة)',
        ai: 'أدوات الذكاء الاصطناعي',
      },
      experience: {
        title: 'المسار المهني والتعليمي',
        academic_subtitle: 'المسار الأكاديمي والتعليمي',
        professional_subtitle: 'الخبرة المهنية والميدانية',
        status_present: 'يعمل حالياً',
        status_completed: 'تم الإنجاز',
        university_title: 'بكالوريوس الحاسبات والمعلومات',
        university_place: 'جامعة المنصورة',
        university_desc: 'دراسة متعمقة في علوم الحاسب، الخوارزميات، وهندسة البرمجيات مع التركيز على حل المشكلات التقنية المعقدة.',
        php_title: 'دبلوم PHP Full Stack',
        php_place: 'Creativeo Training Center',
        php_desc: 'تدريب مكثف على تطوير تطبيقات الويب باستخدام PHP وLaravel، مع بناء مشاريع حقيقية متكاملة.',
        node_title: 'دبلوم Node.js Backend',
        node_place: 'تطوير ذاتي ومشاريع متكاملة',
        node_desc: 'إتقان بناء الأنظمة الخلفية المتقدمة باستخدام NestJS وExpress، مع إدارة قواعد البيانات (MongoDB, PostgreSQL, MySQL) وتطوير APIs آمنة وقابلة للتوسع.',
        erp_title: 'تصميم وتحليل أنظمة ERP',
        erp_place: 'شركة الأندلس للتقسيط - الإسكندرية',
        erp_desc: 'تصميم وتحليل منطق الأعمال (Business Logic) لنظام تقسيط متكامل يشمل إدارة العملاء والمدفوعات لفرع سيدي بشر.',
        surveyor_title: 'مساح طرق متخصص',
        surveyor_place: 'مشروع تطوير طريق وادي فيران - سانت كاترين',
        surveyor_desc: 'المشاركة في مشروع قومي لتطوير وتوسعة طريق سانت كاترين الدولي، مع تنفيذ الحسابات والقياسات الأرضية بدقة عالية.',
        tech_office_title: 'أخصائي مكتب فني (تقارير وبيانات)',
        tech_office_place: 'كتيبة 73 مشروعات الطرق',
        tech_office_desc: 'إدارة وتوثيق البيانات الفنية للمشروعات باستخدام Excel Automation، وتصميم البروشورات والعروض التقديمية الاحترافية لتوثيق سير العمل.',
        freelance_web_title: 'مطور ويب مستقل (Freelance)',
        freelance_web_place: 'مشاريع حرة ومتنوعة',
        freelance_web_desc: 'تقديم حلول برمجية متكاملة لعملاء مختلفين، تشمل بناء المواقع التعريفية وتطبيقات الويب المخصصة بأعلى معايير الأداء والاحترافية.',
        freelance_cms_title: 'خبير WordPress & Shopify',
        freelance_cms_place: 'متاجر إلكترونية ومنصات CMS',
        freelance_cms_desc: 'تصميم وبناء المتاجر الإلكترونية المتكاملة وتخصيص قوالب ورد بريس وشوبفاى بما يتناسب مع هوية العلامة التجارية للعملاء.',
        freelance_design_title: 'مصمم عروض تقديمية وبروشورات',
        freelance_design_place: 'خدمات إبداعية مستقلة',
        freelance_design_desc: 'ابتكار تصاميم إبداعية للعروض التقديمية الاحترافية (Pitch Decks) والبروشورات الإعلانية المطبوعة والرقمية بلمسة فنية جذابة.',
        aqrablik_title: 'متخصص موشن جرافيك وتطوير ويب',
        aqrablik_place: 'شركة أقربلك ميديا للدعاية والتصميم',
        aqrablik_desc: 'يعمل حالياً لدى شركة أقربلك لإدارة وتقديم حلول رقمية إبداعية تشمل الموشن جرافيك، التصميمات الدعائية، وتطوير واجهات الويب المتقدمة.',
      },
      languages: {
        title: 'اللغات',
        arabic: 'العربية',
        arabic_level: 'اللغة الأم',
        english: 'الإنجليزية',
        english_level: 'جيد',
      },
      projects: {
        title: 'أبرز المشاريع',
        view_project: 'عرض المشروع',
        items: {
          galaxy: {
            title: 'جالاكسي ريبير (Galaxy Repair UAE)',
            desc: 'المنصة الرائدة لخدمات إصلاح الأجهزة الذكية في الإمارات، تتميز بواجهة مستخدم سلسة ونظام حجز متكامل.',
          },
          sharik: {
            title: 'منصة شريك (Sharke1)',
            desc: 'منصة تفاعلية متميزة تهدف لتعزيز التعاون وتقديم الخدمات الرقمية بأسلوب عصري ومبتكر.',
          },
          fustan: {
            title: 'منصة فستان (FUSTAN)',
            desc: 'متجر إلكتروني فاخر متخصص في أزياء المناسبات، يجمع بين التصميم الأنيق وتجربة التسوق الرقمية الفريدة.',
          },
          shelter: {
            title: 'شيلتر هاوس (House of Cheese)',
            desc: 'واجهة رقمية جذابة لاستعراض المنتجات الغذائية الفاخرة، مع التركيز على الهوية البصرية المبهرة.',
          },
          eldoksh: {
            title: 'الدكش موتورز (Eldoksh Motors)',
            desc: 'منصة متكاملة لبيع وشراء السيارات، تتيح للمستخدمين تصفح وعرض السيارات بكل سهولة وبواجهة عرض مميزة.',
          }
        }
      },
      contact: {
        title: 'تواصل معي',
        form: {
          name: 'الاسم',
          email: 'البريد الإلكتروني',
          message: 'رسالتك',
          send: 'إرسال الرسالة',
        },
        info: {
          email: 'البريد الإلكتروني',
          phone: 'رقم الهاتف',
        }
      }
    }
  },
  en: {
    translation: {
      navbar: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      hero: {
        title: 'Web Applications Specialist',
        name: 'Ahmed Yasser Saleh Ali',
        summary: 'Expert in building advanced web applications and UI development, with deep expertise in design software, MS Office, and leveraging AI tools to deliver complete solutions.',
        cta_contact: 'Contact Me',
        cta_cv: 'Download CV',
        portfolio: 'PORTFOLIO',
      },
      about: {
        title: 'About Me',
        bio: 'I am a software developer specialized in building web applications (Frontend/Backend). With a background from Mansoura University, I combine coding skills with professional expertise in Design and Office software, allowing me to deliver comprehensive and well-structured software products.',
        highlights: {
          fullstack: 'Web App Development',
          backend: 'Coding & Programming',
          ai: 'Design & Office Software',
          problem_solving: 'Problem Solving',
        }
      },
      skills: {
        title: 'Technical Skills',
        dev: 'Coding & Development',
        design: 'Design Software',
        office: 'MS Office (Expert)',
        ai: 'AI Productivity Tools',
      },
      experience: {
        title: 'Professional Journey',
        academic_subtitle: 'Academic & Educational Path',
        professional_subtitle: 'Professional & Field Experience',
        status_present: 'PRESENT',
        status_completed: 'COMPLETED',
        university_title: 'B.Sc. in Computers & Information',
        university_place: 'Mansoura University',
        university_desc: 'In-depth study of computer science, algorithms, and software engineering with a focus on problem-solving.',
        php_title: 'PHP Full Stack Diploma',
        php_place: 'Creativeo Training Center',
        php_desc: 'Intensive training on full-stack web development using PHP and Laravel frameworks.',
        node_title: 'Node.js Backend Diploma',
        node_place: 'Self-Development & Production Projects',
        node_desc: 'Mastering advanced backend systems using NestJS and Express, with database management (MongoDB, PostgreSQL, MySQL) and developing secure, scalable APIs.',
        erp_title: 'ERP System Design & Analysis',
        erp_place: 'Al-Andalus Installment Co. - Alex',
        erp_desc: 'Designed business logic for a comprehensive installment system including customer management and payments.',
        surveyor_title: 'Road Surveyor Specialist',
        surveyor_place: 'Wadi Feiran - St. Catherine Road Project',
        surveyor_desc: 'Participation in a national project for developing international roads, executing precise surveying measurements.',
        tech_office_title: 'Technical Office Specialist (Data & Reporting)',
        tech_office_place: '73rd Road Construction Battalion',
        tech_office_desc: 'Managing technical project data via Excel automation, and designing professional brochures and presentations for workflow documentation.',
        freelance_web_title: 'Freelance Web Developer',
        freelance_web_place: 'Various Professional Projects',
        freelance_web_desc: 'Delivering comprehensive software solutions for various clients, including corporate websites and custom web applications.',
        freelance_cms_title: 'WordPress & Shopify Expert',
        freelance_cms_place: 'E-commerce & CMS Platforms',
        freelance_cms_desc: 'Designing and building integrated e-commerce stores and customizing WordPress/Shopify themes to align with client branding.',
        freelance_design_title: 'Presentation & Brochure Designer',
        freelance_design_place: 'Creative Independent Services',
        freelance_design_desc: 'Creating innovative designs for professional pitch decks and printed/digital advertising brochures with a modern artistic touch.',
        aqrablik_title: 'Motion Graphics & Web Specialist',
        aqrablik_place: 'Aqrablik Media for Advertising & Design',
        aqrablik_desc: 'Currently working at Aqrablik Media, managing and delivering creative digital solutions including motion graphics, advertising designs, and advanced web development.',
      },
      languages: {
        title: 'Languages',
        arabic: 'Arabic',
        arabic_level: 'Mother Tongue',
        english: 'English',
        english_level: 'Good',
      },
      projects: {
        title: 'Featured Projects',
        view_project: 'View Project',
        items: {
          galaxy: {
            title: 'Galaxy Repair UAE',
            desc: 'The leading device repair platform in UAE, featuring a seamless UI and integrated booking system.',
          },
          sharik: {
            title: 'Sharke1 (Sharik)',
            desc: 'A premium interactive platform aimed at fostering collaboration and delivering digital services innovatively.',
          },
          fustan: {
            title: 'FUSTAN Cloud',
            desc: 'A luxury e-commerce platform for occasion wear, combining elegant design with a unique shopping experience.',
          },
          shelter: {
            title: 'Shelter House of Cheese',
            desc: 'An attractive digital interface for luxury food products, focusing on stunning visual brand identity.',
          },
          eldoksh: {
            title: 'Eldoksh Motors',
            desc: 'An integrated platform for buying and selling cars, allowing users to browse and list vehicles easily with a premium interface.',
          }
        }
      },
      contact: {
        title: 'Contact Me',
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Your Message',
          send: 'Send Message',
        },
        info: {
          email: 'Email',
          phone: 'Phone',
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    }
  });

export default i18n;
