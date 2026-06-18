// ============================================================
// MOSTAFA SHAABAN — PORTFOLIO DATA
// To update: edit this file only. No need to touch HTML/CSS.
// ============================================================

const DATA = {
  en: {
    nav: {
      links: ["About", "Skills", "Projects", "Qualification", "Certifications", "Contact"],
      anchors: ["about", "skills", "projects", "qualification", "certifications", "contact"]
    },
    hero: {
      badge: "Available for work",
      greeting: "Hi, I'm",
      name: "Mostafa Shaaban",
      roles: ["Data Analyst", "Freelance Analytics Coach", "Power BI Developer", "Financial Data Analyst"],
      tagline: "We Turn Numbers into Decisions.",
      brief: "Data Analyst with a financial background in Accounting, hands-on experience in Power BI, SQL & Python. Coached 300+ freelancers and reviewed 3,000+ proposals.",
      cta_primary: "Get in Touch",
      cta_secondary: "Download CV",
    },
    about: {
      section_label: "About",
      title: "Who I am",
      bio: `I'm Mostafa Shaaban, a Data Analyst based in Cairo, Egypt, with a unique blend of financial knowledge and data expertise. My Accounting background at Capital University gives me a distinct edge — I don't just analyze data, I understand the business and financial context behind it.

From there, I expanded into Power BI, SQL, Python, and Advanced Excel — building dashboards and pipelines that connect financial insights to real business decisions. Beyond analysis, I've had the privilege of coaching 300+ freelancers through ITIDA's Gigs Program and Career 180, reviewing 3,000+ proposals and helping professionals break into Egypt's growing digital economy.

I believe data isn't just numbers — it's the language of better decisions.`,
      info: [
        { icon: "📍", label: "Cairo, Egypt" },
        { icon: "📧", label: "m0stafa.m.sh3ban@gmail.com", href: "mailto:m0stafa.m.sh3ban@gmail.com" },
        { icon: "📱", label: "+20 111 600 9820", href: "tel:+201116009820" },
        { icon: "🎓", label: "B.Com Accounting — Capital University (2027)" }
      ],
      stats: [
        { value: "300+", label: "Mentees Coached" },
        { value: "3,000+", label: "Proposals Reviewed" },
        { value: "25%", label: "Efficiency Boost" },
        { value: "2-in-1", label: "Accounting + Data" }
      ]
    },
    skills: {
      section_label: "Skills",
      title: "What I work with",
      subtitle: "Technologies and tools I use to bring ideas to life",
      categories: [
        {
          icon: "⚡",
          name: "Data & BI Tools",
          items: ["Power BI", "Tableau", "Google Sheets", "Advanced Excel"]
        },
        {
          icon: "🛢️",
          name: "Data Engineering",
          items: ["SQL Server", "MySQL", "ETL Pipelines", "Power Query"]
        },
        {
          icon: "🐍",
          name: "Programming",
          items: ["Python", "DAX", "Data Automation", "EDA / Scripting"]
        },
        {
          icon: "📊",
          name: "Analysis & Design",
          items: ["Data Modeling", "KPI Dashboard Design", "Data Validation", "Trend Analysis", "Data Cleaning"]
        },
        {
          icon: "🎯",
          name: "Coaching & Soft Skills",
          items: ["Mentoring", "Proposal Review", "Workshop Facilitation", "Personal Branding", "Client Communication"]
        }
      ]
    },
    projects: {
      section_label: "Projects",
      title: "My Work",
      subtitle: "A selection of things I've built",
      items: [
        {
          title: "Sales Performance Dashboard",
          description: "An end-to-end sales analytics solution built with Power BI and SQL, tracking KPIs across product categories, regions, and time periods. Delivered actionable insights that improved reporting efficiency by 25% and reduced report turnaround time by 20%.",
          impact: "25% Efficiency ↑",
          tags: ["SQL", "Power BI", "Advanced Excel"],
          live: "",
          github: "https://github.com/MostafaShaban74",
          image: "assets/images/project1.png"
        },
        {
          title: "E-commerce Analytics Dashboard",
          description: "A comprehensive e-commerce performance dashboard analyzing customer behavior, sales trends, and product performance across multiple channels. Enabled data-driven decisions for inventory management and marketing spend optimization.",
          impact: "Multi-Channel Insights",
          tags: ["SQL", "Power BI", "Advanced Excel"],
          live: "",
          github: "https://github.com/MostafaShaban74",
          image: "assets/images/project2.png"
        },
        {
          title: "Avocado Sales Analysis",
          description: "A market analysis dashboard exploring avocado sales trends, regional pricing patterns, and seasonal demand fluctuations across U.S. markets. Demonstrated advanced Power Query transformations and DAX measures for dynamic time intelligence.",
          impact: "DAX Time Intelligence",
          tags: ["Power BI", "Power Query", "DAX", "Excel"],
          live: "",
          github: "https://github.com/MostafaShaban74",
          image: "assets/images/project3.png"
        }
      ]
    },
    qualification: {
      section_label: "Qualification",
      title: "My Journey",
      subtitle: "My professional and academic background",
      tab_exp: "Experience",
      tab_edu: "Education",
      experience: [
        {
          role: "Freelancing & Technical Coach",
          company: "Career 180 (Freelance Yard)",
          period: "Apr 2026 – Present",
          location: "Remote",
          points: [
            "Led a participant cohort to 100% registration and 93% task completion rate",
            "Conduct coaching sessions on freelancing fundamentals, proposal writing, and market best practices",
            "Guide participants in building client-facing profiles on top freelancing platforms",
            "Provide mentoring on personal branding, pricing strategy, and payment security"
          ]
        },
        {
          role: "Freelance Data Analytics Coach & Program Analyst",
          company: "ITIDA Gigs Program (via EYOUTH)",
          period: "Sep 2025 – Jan 2026",
          location: "Remote",
          points: [
            "Mentored 300+ participants in a structured freelancing program toward digital opportunities",
            "Reviewed and evaluated 3,000+ freelance proposals with structured feedback",
            "Performed EDA on trainee engagement data; delivered data-backed recommendations to leadership",
            "Conducted workshops on pricing strategy, project scoping, personal branding, and portfolio development"
          ]
        }
      ],
      education: [
        {
          degree: "B.Com. in Accounting (English Section)",
          institution: "Capital University",
          period: "2023 – 2027 (Expected)",
          location: "Cairo, Egypt",
          note: "Developing strong analytical and financial foundations to complement data-driven business analysis skills."
        },
        {
          degree: "Data Analyst Specialist — Power BI Track (Round 4)",
          institution: "DEPI Initiative · Ministry of Communications",
          period: "Nov 2025 – May 2026",
          location: "Cairo, Egypt",
          points: [
            "Designed dashboards that improved reporting efficiency by 25% and reduced turnaround time by 20%",
            "Automated data pipelines using Python, cutting manual entry time by 30%",
            "Developed KPI tracking reports using Power BI, DAX, Power Query, and Data Modeling"
          ]
        },
        {
          degree: "Junior Data Analyst Track (Round 2)",
          institution: "DEPI Initiative · Ministry of Communications",
          period: "Oct 2024 – May 2025",
          location: "Cairo, Egypt",
          points: [
            "Built skills in data cleaning and advanced Excel functions (VLOOKUP, XLOOKUP, INDEX & MATCH)",
            "Practiced SQL fundamentals (SELECT, WHERE, JOIN, GROUP BY)",
            "Designed introductory Power BI dashboards"
          ]
        }
      ]
    },
    certifications: {
      section_label: "Certifications",
      title: "Credentials",
      subtitle: "Courses, exams, and credentials I've earned along the way",
      categories: [
        {
          icon: "🎓",
          name: "Certifications",
          items: [
            { name: "ALX AI Career Essentials (AICE)", issuer: "ALX Africa", year: "2024" },
            { name: "IBM SkillsBuild — Data & Digital Skills", issuer: "IBM", year: "2025" },
            { name: "Youth Empowerment for Freelance Work", issuer: "MCIT", year: "2021" }
          ]
        },
        {
          icon: "🏆",
          name: "Training Programs",
          items: [
            { name: "HIVER Leadership Development Program", issuer: "HIVER Alumni Network", year: "2025" },
            { name: "Mint Ambassador Program", issuer: "EG Bank", year: "2024" },
            { name: "Youth to Youth — Financial Literacy", issuer: "Banque Misr", year: "2025" }
          ]
        },
        {
          icon: "🎤",
          name: "Events",
          items: [
            { name: "Egypt Career Summit", issuer: "British University in Egypt (BUE)", year: "2026" }
          ]
        }
      ]
    },
    contact: {
      section_label: "Contact",
      title: "Get in touch",
      subtitle: "I'm open to new opportunities in Data Analytics. Feel free to reach out!",
      info: [
        { icon: "📧", label: "m0stafa.m.sh3ban@gmail.com", href: "mailto:m0stafa.m.sh3ban@gmail.com" },
        { icon: "📱", label: "+20 111 600 9820", href: "tel:+201116009820" },
        { icon: "📍", label: "Cairo, Egypt" }
      ],
      form: {
        name_placeholder: "Your Name",
        email_placeholder: "Your Email",
        message_placeholder: "Tell me about your project...",
        submit: "Send Message"
      }
    },
    footer: {
      tagline: "Data Analyst",
      copy: "© 2026 Mostafa Shaaban. All rights reserved."
    }
  },

  ar: {
    nav: {
      links: ["من أنا", "المهارات", "المشاريع", "المسيرة", "الشهادات", "تواصل معي"],
      anchors: ["about", "skills", "projects", "qualification", "certifications", "contact"]
    },
    hero: {
      badge: "متاح للعمل",
      greeting: "أهلاً، أنا",
      name: "مصطفى شعبان",
      roles: ["Data Analyst", "Freelance Analytics Coach", "Power BI Developer", "Financial Data Analyst"],
      tagline: "نحوّل الأرقام إلى قرارات.",
      brief: "محلل بيانات بخلفية محاسبية، خبرة في Power BI و SQL و Python. درّبت +300 فريلانسر وراجعت +3,000 Proposal.",
      cta_primary: "تواصل معي",
      cta_secondary: "تحميل CV",
    },
    about: {
      section_label: "من أنا",
      title: "من أنا",
      bio: `أنا مصطفى شعبان، محلل بيانات مقيم في القاهرة، مصر، بمزيج فريد من المعرفة المالية وخبرة Data Analytics. خلفيتي في المحاسبة من Capital University تمنحني ميزة تنافسية — لا أحلل البيانات فحسب، بل أفهم السياق المالي والتجاري ورائها.

من هناك، توسعت في Power BI و SQL و Python و Advanced Excel — لبناء Dashboards و Pipelines تربط الـ Financial Insights بالقرارات الفعلية. درّبت +300 فريلانسر عبر ITIDA Gigs Program و Career 180، وراجعت +3,000 Proposal.

أؤمن أن البيانات ليست مجرد أرقام — إنها لغة القرارات الأفضل.`,
      info: [
        { icon: "📍", label: "القاهرة، مصر" },
        { icon: "📧", label: "m0stafa.m.sh3ban@gmail.com", href: "mailto:m0stafa.m.sh3ban@gmail.com" },
        { icon: "📱", label: "+20 111 600 9820", href: "tel:+201116009820" },
        { icon: "🎓", label: "بكالوريوس محاسبة — Capital University (2027)" }
      ],
      stats: [
        { value: "+300", label: "متدرب تم تدريبه" },
        { value: "+3,000", label: "Proposal تمت مراجعته" },
        { value: "25%", label: "تحسين في الكفاءة" },
        { value: "2-in-1", label: "محاسبة + داتا" }
      ]
    },
    skills: {
      section_label: "المهارات",
      title: "ما أعمل به",
      subtitle: "التقنيات والأدوات التي أستخدمها لتحويل البيانات إلى قرارات",
      categories: [
        { icon: "⚡", name: "Data & BI Tools", items: ["Power BI", "Tableau", "Google Sheets", "Advanced Excel"] },
        { icon: "🛢️", name: "Data Engineering", items: ["SQL Server", "MySQL", "ETL Pipelines", "Power Query"] },
        { icon: "🐍", name: "Programming", items: ["Python", "DAX", "Data Automation", "EDA / Scripting"] },
        { icon: "📊", name: "Analysis & Design", items: ["Data Modeling", "KPI Dashboard Design", "Data Validation", "Trend Analysis", "Data Cleaning"] },
        { icon: "🎯", name: "Coaching & Soft Skills", items: ["Mentoring", "Proposal Review", "Workshop Facilitation", "Personal Branding", "Client Communication"] }
      ]
    },
    projects: {
      section_label: "المشاريع",
      title: "أعمالي",
      subtitle: "مجموعة من المشاريع التي بنيتها",
      items: [
        {
          title: "Sales Performance Dashboard",
          description: "حل تحليلي متكامل للمبيعات باستخدام Power BI و SQL، يتتبع KPIs عبر فئات المنتجات والمناطق والفترات الزمنية. حقق تحسيناً بنسبة 25% في كفاءة التقارير وتقليل وقت الإنجاز بنسبة 20%.",
          impact: "25% تحسين في الكفاءة ↑",
          tags: ["SQL", "Power BI", "Advanced Excel"],
          live: "",
          github: "https://github.com/MostafaShaban74",
          image: "assets/images/project1.png"
        },
        {
          title: "E-commerce Analytics Dashboard",
          description: "Dashboard شامل لأداء التجارة الإلكترونية يحلل سلوك العملاء واتجاهات المبيعات وأداء المنتجات عبر قنوات متعددة. مكّن من اتخاذ قرارات مبنية على البيانات لإدارة المخزون.",
          impact: "رؤى متعددة القنوات",
          tags: ["SQL", "Power BI", "Advanced Excel"],
          live: "",
          github: "https://github.com/MostafaShaban74",
          image: "assets/images/project2.png"
        },
        {
          title: "Avocado Sales Analysis",
          description: "Dashboard لتحليل سوق الأفوكادو يستعرض اتجاهات المبيعات وأنماط التسعير الإقليمية وتقلبات الطلب الموسمية عبر الأسواق الأمريكية. يوضح تحويلات Power Query المتقدمة ومقاييس DAX.",
          impact: "DAX Time Intelligence",
          tags: ["Power BI", "Power Query", "DAX", "Excel"],
          live: "",
          github: "https://github.com/MostafaShaban74",
          image: "assets/images/project3.png"
        }
      ]
    },
    qualification: {
      section_label: "المسيرة",
      title: "مسيرتي",
      subtitle: "خلفيتي المهنية والأكاديمية",
      tab_exp: "الخبرة",
      tab_edu: "التعليم",
      experience: [
        {
          role: "مدرب فريلانس تقني",
          company: "Career 180 (Freelance Yard)",
          period: "أبريل 2026 – حتى الآن",
          location: "عن بُعد",
          points: [
            "قاد مجموعة مشاركين لتحقيق 100% تسجيل و93% معدل إتمام المهام",
            "إجراء جلسات تدريبية على أساسيات الفريلانس وكتابة Proposals وأفضل ممارسات السوق",
            "توجيه المشاركين في بناء ملفات تعريفية احترافية على منصات الفريلانس",
            "تقديم إرشادات في Personal Branding واستراتيجية التسعير وأمان الدفع"
          ]
        },
        {
          role: "مدرب Data Analytics ومحلل برنامج",
          company: "ITIDA Gigs Program (عبر EYOUTH)",
          period: "سبتمبر 2025 – يناير 2026",
          location: "عن بُعد",
          points: [
            "تدريب +300 مشارك في برنامج فريلانس منظم نحو الفرص الرقمية",
            "مراجعة وتقييم +3,000 Proposal فريلانس مع ملاحظات منظمة",
            "إجراء EDA على بيانات تفاعل المتدربين وتقديم توصيات مبنية على البيانات للقيادة",
            "إجراء ورش عمل حول التسعير وتحديد نطاق المشاريع و Personal Branding"
          ]
        }
      ],
      education: [
        {
          degree: "بكالوريوس تجارة — محاسبة (القسم الإنجليزي)",
          institution: "Capital University",
          period: "2023 – 2027 (متوقع)",
          location: "القاهرة، مصر",
          note: "بناء أسس تحليلية ومالية قوية تكمّل مهارات تحليل الأعمال المبني على البيانات."
        },
        {
          degree: "متخصص Data Analyst — مسار Power BI (الدفعة الرابعة)",
          institution: "مبادرة DEPI · وزارة الاتصالات",
          period: "نوفمبر 2025 – مايو 2026",
          location: "القاهرة، مصر",
          points: [
            "تصميم Dashboards حققت تحسيناً بنسبة 25% في كفاءة التقارير",
            "أتمتة Data Pipelines باستخدام Python بتقليل وقت الإدخال اليدوي بنسبة 30%",
            "تطوير تقارير KPI باستخدام Power BI و DAX و Power Query"
          ]
        },
        {
          degree: "مسار Junior Data Analyst (الدفعة الثانية)",
          institution: "مبادرة DEPI · وزارة الاتصالات",
          period: "أكتوبر 2024 – مايو 2025",
          location: "القاهرة، مصر",
          points: [
            "بناء مهارات في Data Cleaning ووظائف Excel المتقدمة (VLOOKUP, XLOOKUP, INDEX & MATCH)",
            "تطبيق أساسيات SQL (SELECT, WHERE, JOIN, GROUP BY)",
            "تصميم Dashboards تمهيدية في Power BI"
          ]
        }
      ]
    },
    certifications: {
      section_label: "الشهادات",
      title: "الشهادات والمؤهلات",
      subtitle: "الدورات والاختبارات والاعتمادات التي حصلت عليها",
      categories: [
        {
          icon: "🎓",
          name: "الشهادات",
          items: [
            { name: "ALX AI Career Essentials (AICE)", issuer: "ALX Africa", year: "2024" },
            { name: "IBM SkillsBuild — Data & Digital Skills", issuer: "IBM", year: "2025" },
            { name: "Youth Empowerment for Freelance Work", issuer: "MCIT", year: "2021" }
          ]
        },
        {
          icon: "🏆",
          name: "البرامج التدريبية",
          items: [
            { name: "HIVER Leadership Development Program", issuer: "HIVER Alumni Network", year: "2025" },
            { name: "Mint Ambassador Program", issuer: "EG Bank", year: "2024" },
            { name: "Youth to Youth — Financial Literacy", issuer: "Banque Misr", year: "2025" }
          ]
        },
        {
          icon: "🎤",
          name: "الفعاليات",
          items: [
            { name: "Egypt Career Summit", issuer: "الجامعة البريطانية في مصر (BUE)", year: "2026" }
          ]
        }
      ]
    },
    contact: {
      section_label: "تواصل معي",
      title: "تواصل معي",
      subtitle: "أنا منفتح على فرص Data Analyst الجديدة. لا تتردد في التواصل!",
      info: [
        { icon: "📧", label: "m0stafa.m.sh3ban@gmail.com", href: "mailto:m0stafa.m.sh3ban@gmail.com" },
        { icon: "📱", label: "+20 111 600 9820", href: "tel:+201116009820" },
        { icon: "📍", label: "القاهرة، مصر" }
      ],
      form: {
        name_placeholder: "اسمك",
        email_placeholder: "بريدك الإلكتروني",
        message_placeholder: "أخبرني عن مشروعك...",
        submit: "إرسال الرسالة"
      }
    },
    footer: {
      tagline: "محلل بيانات",
      copy: "© 2026 مصطفى شعبان. جميع الحقوق محفوظة."
    }
  },

  social: {
    github: "https://github.com/MostafaShaban74",
    linkedin: "https://linkedin.com/in/mostafa-m-shaban",
    email: "mailto:m0stafa.m.sh3ban@gmail.com",
    cv: "#"
  },

  photo: "assets/images/photo.jpg"
};
