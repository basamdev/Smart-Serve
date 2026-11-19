/* =====================================================================
   portfolio-i18n.js — Kurdish / Arabic / English text for cv.html
   (the developer portfolio, also published as basam-ali-info.vercel.app)
   ---------------------------------------------------------------------
   • data-i18n="key"        → innerHTML
     data-i18n-ph="key"     → placeholder
     data-i18n-title="key"  → title
   • t('key') in JS; setLang('ku'|'ar'|'en') switches language + direction
   • Language is stored in localStorage['landing_lang'] (shared with the menu page)
   ===================================================================== */
(function () {
    const STR = {
        lnd_chat_wa: { ku: "قسە لەگەڵمان بکە لە واتساپ", ar: "تحدث معنا على واتساب", en: "Chat on WhatsApp" },
        lnd_cust_live: { ku: "ڕاستەوخۆ", ar: "مباشر", en: "LIVE" },
        lnd_follow_us: { ku: "فۆڵۆمان بکەن", ar: "تابعنا", en: "Follow us" },
        lnd_hub_back: { ku: "گەڕانەوە", ar: "رجوع", en: "Back to Hub" },
        lnd_nav_menu: { ku: "مێنیو", ar: "القائمة", en: "Menu" },
        lnd_nav_menu_close: { ku: "داخستنی مێنیو", ar: "إغلاق القائمة", en: "Close menu" },
        lnd_rights: { ku: "هەموو مافەکان پارێزراون.", ar: "جميع الحقوق محفوظة.", en: "All rights reserved." },
        lnd_skip: { ku: "بڕۆ بۆ ناوەڕۆک", ar: "انتقل إلى المحتوى", en: "Skip to content" },
        pf_about_eb: { ku: "دەربارەی من", ar: "عني", en: "About me" },
        pf_about_h: { ku: "گۆڕینی بیرۆکەکان بۆ <span class='g'>چارەسەری دیجیتاڵی</span> مۆدێرن", ar: "تحويل الأفكار إلى <span class='g'>حلول رقمية</span> حديثة", en: "Transforming ideas into modern <span class='g'>digital solutions</span>" },
        pf_about_p1: { ku: "من دەرچووی بەشی زانستی کۆمپیوتەرم و وەک پەرەپێدەری وێب و ئەپ کار دەکەم. ئەزموونم هەیە لە دروستکردنی ماڵپەڕ و سیستەمی مۆدێرن، مێنیوی دیجیتاڵی، سیستەمی فرۆشتن (POS)، ئەپەکانی مۆبایل و چارەسەرە نەرمەکاڵاییە پەیوەندیدارەکان بە بنکەدراوە.", ar: "أنا خريج علوم الحاسوب وأعمل كمطور ويب وتطبيقات. لدي خبرة في إنشاء المواقع والأنظمة الحديثة، والقوائم الرقمية، وأنظمة المبيعات (POS)، وتطبيقات الهاتف المحمول، والبرامج المرتبطة بقواعد البيانات.", en: "I am a Computer Science graduate working as a Web and App Developer. I have experience in creating websites and modern systems, digital menus, sales systems (POS), mobile applications, and database-connected software." },
        pf_about_p2: { ku: "حەزم لە گۆڕینی بیرۆکە و پێویستییەکان بۆ بەرهەم و چارەسەری دیجیتاڵی پاک، کارا و ئاسان بۆ بەکارهێنانە. سەرنجم لەسەر دروستکردنی دیزاینێکی پیشەیی، ڕووکاری جوان و وەڵامدەر، ئەزموونی بەکارهێنەری باش و کارکردنی بەهێزی سیستەمەکانە.", ar: "أستمتع بتحويل الأفكار والاحتياجات إلى منتجات وحلول رقمية نظيفة وفعالة وسهلة الاستخدام. تركيزي على إنشاء تصميم احترافي، وواجهات جميلة ومتجاوبة، وتجربة مستخدم جيدة، وأداء قوي للأنظمة.", en: "I enjoy transforming ideas and needs into clean, efficient, and easy-to-use digital products and solutions. My focus is on creating professional design, beautiful and responsive interfaces, good user experience, and strong system performance." },
        pf_avail: { ku: "ئامادەم بۆ پرۆژەی نوێ", ar: "متاح لمشاريع جديدة", en: "Open to new projects" },
        pf_bs_d: { ku: "بەکالۆریۆسم لە زانستی کۆمپیوتەر تەواو کردووە، و لە ماوەی خوێندندا شارەزایی لە پەرەپێدانی نەرمەکاڵا، پەرەپێدانی وێب، بنکەدراوەکان (Databases) و دروستکردنی سیستەمە مۆدێرنەکانی کۆمپیوتەر بەدەست هێناوە.", ar: "أكملت بكالوريوس علوم الحاسوب، وخلال دراستي اكتسبت خبرة في تطوير البرمجيات، تطوير الويب، قواعد البيانات وإنشاء أنظمة الكمبيوتر الحديثة.", en: "I completed my Bachelor's in Computer Science, and during my studies gained expertise in software development, web development, databases, and creating modern computer systems." },
        pf_bs_date: { ku: "٢٠٢١ – ٢٠٢٥", ar: "٢٠٢١ – ٢٠٢٥", en: "2021 – 2025" },
        pf_bs_t: { ku: "بەکالۆریۆس لە زانستی کۆمپیوتەر", ar: "بكالوريوس علوم الحاسوب", en: "Bachelor of Science in Computer Science" },
        pf_c_email: { ku: "ئیمەیڵ", ar: "البريد الإلكتروني", en: "Email" },
        pf_c_loc: { ku: "شوێن", ar: "الموقع", en: "Location" },
        pf_c_loc_v: { ku: "باحرکە، هەولێر، عێراق", ar: "باحركة، أربيل، العراق", en: "Bahirka, Erbil, Iraq" },
        pf_c_phone: { ku: "تەلەفۆن", ar: "الهاتف", en: "Phone" },
        pf_chip_city: { ku: "هەولێر، کوردستان", ar: "أربيل، كوردستان", en: "Erbil, Kurdistan" },
        pf_chip_degree: { ku: "بەکالۆریۆس لە زانستی کۆمپیوتەر", ar: "بكالوريوس علوم الحاسوب", en: "B.Sc. Computer Science" },
        pf_contact_eb: { ku: "پەیوەندی", ar: "تواصل معي", en: "Get in touch" },
        pf_contact_h: { ku: "با <span class='g'>قسە بکەین</span>", ar: "<span class='g'>لنتحدث</span>", en: "Let's <span class='g'>talk</span>" },
        pf_cta_line: { ku: "بیرۆکەکانت بگۆڕە بۆ سیستەمێکی زیرەک، خێرا و پیشەیی.", ar: "حول أفكارك إلى نظام ذكي وسريع واحترافي.", en: "Turn your ideas into a smart, fast and professional system." },
        pf_cv_view: { ku: "بینینی بە قەبارەی تەواو", ar: "عرض بالحجم الكامل", en: "View full size" },
        pf_db_d: { ku: "Firebase Firestore، SQLite و بەڕێوەبردنی داتا", ar: "Firebase Firestore و SQLite وإدارة البيانات", en: "Firebase Firestore, SQLite and data management" },
        pf_db_t: { ku: "داتابەیس", ar: "قواعد البيانات", en: "Database" },
        pf_dev_d: { ku: "وێب، ئەپی مۆبایل و سیستەمە بازرگانییەکان", ar: "الويب والموبايل والأنظمة التجارية", en: "Web, mobile and business systems" },
        pf_dev_t: { ku: "پەرەسەندن", ar: "التطوير", en: "Development" },
        pf_download: { ku: "داگرتنی CV", ar: "تحميل السيرة الذاتية", en: "Download CV" },
        pf_edu_eb: { ku: "خوێندن و ئەزموون", ar: "التعليم والخبرة", en: "Education & experience" },
        pf_edu_h: { ku: "گەشتی <span class='g'>پیشەیی</span> من", ar: "رحلتي <span class='g'>المهنية</span>", en: "My professional <span class='g'>journey</span>" },
        pf_featured: { ku: "تایبەت", ar: "مميز", en: "Featured" },
        pf_footer_tag: { ku: "پەرەپێدەری وێب و سیستەمە دیجیتاڵییەکان — هەولێر", ar: "مطور الويب والأنظمة الرقمية — أربيل", en: "Web & digital systems developer — Erbil" },
        pf_hello: { ku: "سڵاو، من", ar: "مرحباً، أنا", en: "Hello, I'm" },
        pf_hero_p: { ku: "بیرۆکەکان دەگۆڕم بۆ ماڵپەڕ، ئەپی مۆبایل، مێنیوی دیجیتاڵی و سیستەمی POS ـی مۆدێرن؛ بە دیزاینێکی پیشەیی و چارەسەرێکی کارا و ئاسان بۆ بەکارهێنان.", ar: "أحول الأفكار إلى مواقع وتطبيقات الهاتف المحمول والقوائم الرقمية وأنظمة POS الحديثة بتصميم احترافي وحلول فعالة وسهلة الاستخدام.", en: "I transform ideas into websites, mobile apps, digital menus and modern POS systems with professional design and efficient, easy-to-use solutions." },
        pf_intern_d: { ku: "لە ماوەی ڕاهێنانەکەدا ئەزموونی پراکتیکیم لە پشتگیری تەکنیکی (IT Support)، بەڕێوەبردنی تۆڕ، چارەسەرکردنی کێشەکانی کۆمپیوتەر، دامەزراندن و پاراستنی سیستەمەکان، و یارمەتیدانی بەکارهێنەران بەدەست هێنا.", ar: "خلال التدريب، حصلت على خبرة عملية في دعم تقنية المعلومات، إدارة الشبكات، استكشاف أخطاء الكمبيوتر، تثبيت وصيانة الأنظمة، ومساعدة المستخدمين.", en: "During the training, I gained practical experience in IT support, network management, computer troubleshooting, system installation and maintenance, and assisting users." },
        pf_intern_date: { ku: "٢٠٢٣ – ٢٠٢٤", ar: "٢٠٢٣ – ٢٠٢٤", en: "2023 – 2024" },
        pf_intern_t: { ku: "ڕاهێنانی پیشەیی لە IT", ar: "تدريب احترافي في تقنية المعلومات", en: "Professional IT training" },
        pf_lang_ar: { ku: "عەرەبی", ar: "العربية", en: "Arabic" },
        pf_lang_en: { ku: "ئینگلیزی", ar: "الإنجليزية", en: "English" },
        pf_lang_h: { ku: "زمانەکان", ar: "اللغات", en: "Languages" },
        pf_lang_ku: { ku: "کوردی (سۆرانی-بادینی)", ar: "الكردية (السوراني)", en: "Kurdish (Sorani)" },
        pf_live_menus: { ku: "مێنیوە ڕاستەوخۆکان", ar: "قوائم العملاء المباشرة", en: "Live client menus" },
        pf_menu_d: { ku: "دروستکردنی مێنیوی مۆدێرن و سیستەمی فرۆشتن", ar: "إنشاء قوائم حديثة وأنظمة المبيعات", en: "Creating modern menus and sales systems" },
        pf_menu_t: { ku: "مێنیوی دیجیتاڵی و POS", ar: "القائمة الرقمية و POS", en: "Digital menu & POS" },
        pf_menus_d: { ku: "مێنیوی QR بۆ کافێ و ڕێستورانت بە کوردی، عەرەبی و ئینگلیزی — نوێکردنەوەی ڕاستەوخۆ، داواکاری بە واتساپ و کارتی QR ی چاپکراو بۆ مێز.", ar: "قوائم QR للمقاهي والمطاعم بالكردية والعربية والإنجليزية — تحديث فوري، طلب عبر واتساب وبطاقات QR مطبوعة للطاولات.", en: "QR menus for cafés and restaurants in Kurdish, Arabic and English — live updates, WhatsApp ordering and printed table QR cards." },
        pf_menus_t: { ku: "مێنیوە دیجیتاڵییەکانی SmartServe", ar: "قوائم SmartServe الرقمية", en: "SmartServe Digital Menus" },
        pf_motto: { ku: "خەونی گەورە ببینە، <span class='g'>باشتر دروست بکە.</span>", ar: "احلم بشكل كبير، <span class='g'>وابنِ بشكل أفضل.</span>", en: "Dream big, <span class='g'>build better.</span>" },
        pf_mpos_d: { ku: "سیستەمی فرۆشتنی دێسکتۆپ بۆ مارکێت و فرۆشگا بە Node.js و SQLite — بەڕێوەبردنی بەرهەم و بەش، ڕاپۆرتی فرۆشتن و شاشەی کڕیار.", ar: "نظام نقاط بيع لسطح المكتب للمتاجر والأسواق باستخدام Node.js و SQLite — إدارة المنتجات والأقسام، تقارير المبيعات وشاشة العميل.", en: "A desktop point of sale for markets and retail, built with Node.js and SQLite — product and category management, sales reports and a customer display." },
        pf_mpos_t: { ku: "سیستەمی POS ی مارکێت", ar: "نظام POS للأسواق", en: "Market POS System" },
        pf_name: { ku: "بەسام <span class='g'>علی</span>", ar: "بسام <span class='g'>علي</span>", en: "Basam <span class='g'>Ali</span>" },
        pf_name_plain: { ku: "بەسام علی", ar: "بسام علي", en: "Basam Ali" },
        pf_native: { ku: "زمانی دایک", ar: "اللغة الأم", en: "Native" },
        pf_nav_about: { ku: "دەربارەی من", ar: "عني", en: "About" },
        pf_nav_contact: { ku: "پەیوەندی", ar: "تواصل معي", en: "Contact" },
        pf_nav_journey: { ku: "خوێندن", ar: "التعليم", en: "Journey" },
        pf_nav_projects: { ku: "پرۆژەکان", ar: "المشاريع", en: "Projects" },
        pf_nav_skills: { ku: "شارەزاییەکان", ar: "المهارات", en: "Skills" },
        pf_now: { ku: "ئێستا", ar: "الآن", en: "Now" },
        pf_now_d: { ku: "مێنیوی دیجیتاڵی، سیستەمی POS و ماڵپەڕ بۆ کافێ، ڕێستورانت و فرۆشگاکان.", ar: "قوائم رقمية وأنظمة POS ومواقع للمقاهي والمطاعم والمتاجر.", en: "Digital menus, POS systems and websites for cafés, restaurants and shops." },
        pf_now_t: { ku: "دروستکردنی SmartServe", ar: "تطوير SmartServe", en: "Building SmartServe" },
        pf_pos_d: { ku: "سیستەمێکی مۆدێرن بۆ بەڕێوەبردنی چێشتخانە و کافێ، کە سیستەمی POS، ئامرازی کاشیر، بەڕێوەبردنی بەرهەم، خەرجی، ڕاپۆرتی فرۆشتن و مێنیوی دیجیتاڵی تێدایە.", ar: "نظام حديث لإدارة المطاعم والمقاهي، يتضمن نظام POS، أدوات الكاشير، إدارة المنتجات، المصاريف، تقارير المبيعات والقائمة الرقمية.", en: "A modern system for restaurant and café management, featuring POS, cashier tools, product management, expenses, sales reports and digital menu." },
        pf_pos_t: { ku: "SmartServe POS ی ڕێستورانت", ar: "SmartServe POS للمطاعم", en: "SmartServe Restaurant POS" },
        pf_proj_eb: { ku: "پرۆژە هەڵبژێردراوەکان", ar: "المشاريع المميزة", en: "Featured projects" },
        pf_proj_h: { ku: "کار و <span class='g'>بەرهەمە دیجیتاڵییەکانم</span>", ar: "أعمالي ومنتجاتي <span class='g'>الرقمية</span>", en: "My work and <span class='g'>digital products</span>" },
        pf_ps_d: { ku: "دۆزینەوەی چارەسەری پراکتیک، کارا و مۆدێرن", ar: "إيجاد حلول عملية وفعالة وحديثة", en: "Finding practical, efficient and modern solutions" },
        pf_ps_t: { ku: "چارەسەرکردنی کێشە", ar: "حل المشكلات", en: "Problem solving" },
        pf_resp: { ku: "دیزاینی وەڵامدەر", ar: "تصميم متجاوب", en: "Responsive design" },
        pf_role: { ku: "پەرەپێدەری وێب و سیستەمە دیجیتاڵییەکان", ar: "مطور الويب والأنظمة الرقمية", en: "Web & Digital Systems Developer" },
        pf_s1_d: { ku: "وێبسایتی Responsive بۆ کۆمپانیا و کاروبارەکان", ar: "مواقع متجاوبة للشركات والأعمال", en: "Responsive websites for companies and businesses" },
        pf_s1_t: { ku: "وێبسایتی مۆدێرن", ar: "مواقع ويب حديثة", en: "Modern websites" },
        pf_s2_d: { ku: "ئەپی مۆبایل بۆ Android و iOS", ar: "تطبيقات لنظامي Android و iOS", en: "Android and iOS applications" },
        pf_s2_t: { ku: "ئەپی مۆبایل", ar: "تطبيقات الجوال", en: "Mobile apps" },
        pf_s3_d: { ku: "بۆ فرۆشگا، مارکێت، دەرمانخانە، کافێ", ar: "للمتاجر والأسواق والصيدليات والمقاهي", en: "For shops, markets, pharmacies, cafés" },
        pf_s3_t: { ku: "سیستەمی POS", ar: "أنظمة نقاط البيع", en: "POS systems" },
        pf_s4_d: { ku: "مێنیوی دیجیتاڵی بۆ ڕێستۆرانت و کافێ", ar: "قوائم رقمية للمطاعم والمقاهي", en: "Digital menus for restaurants and cafés" },
        pf_s4_t: { ku: "مێنیوی QR", ar: "قوائم رقمية QR", en: "QR menus" },
        pf_s5_d: { ku: "داشبۆردی تایبەت بۆ فرۆشتن و زانیاری", ar: "لوحات تحكم مخصصة للمبيعات والتحليلات", en: "Custom dashboards for sales and analytics" },
        pf_s5_t: { ku: "بەڕێوەبردنی کاروبار", ar: "إدارة الأعمال", en: "Business management" },
        pf_s6_d: { ku: "چارەسەری تایبەت بەپێی پێداویستییەکان", ar: "حلول مخصصة حسب احتياجاتك", en: "Tailored solutions for your needs" },
        pf_s6_t: { ku: "نەرمەکاڵای تایبەت", ar: "برمجيات مخصصة", en: "Custom software" },
        pf_sk_apps: { ku: "ئەپی دێسکتۆپ و مۆبایل", ar: "تطبيقات سطح المكتب والجوال", en: "Desktop & mobile apps" },
        pf_sk_back: { ku: "باکئێند و داتا", ar: "الخلفية والبيانات", en: "Backend & data" },
        pf_sk_front: { ku: "ڕووکار و وێب", ar: "الواجهات والويب", en: "Frontend & web" },
        pf_sk_lang: { ku: "زمانی پرۆگرامسازی و ئامراز", ar: "لغات البرمجة والأدوات", en: "Languages & tools" },
        pf_sk_soft: { ku: "شارەزایی کەسی", ar: "المهارات الشخصية", en: "Soft skills" },
        pf_skills_eb: { ku: "شارەزاییەکانم", ar: "مهاراتي", en: "My skills" },
        pf_skills_h: { ku: "تەکنەلۆژیا و ئامرازەکان <span class='g'>کە پێیان کار دەکەم</span>", ar: "التقنيات والأدوات <span class='g'>التي أعمل بها</span>", en: "Technologies and tools <span class='g'>I work with</span>" },
        pf_soft_1: { ku: "چارەسەرکردنی کێشە", ar: "حل المشكلات", en: "Problem-solving" },
        pf_soft_2: { ku: "بیرکردنەوەی ڕەخنەیی", ar: "التفكير النقدي", en: "Critical thinking" },
        pf_soft_3: { ku: "کاری تیمی", ar: "العمل الجماعي", en: "Teamwork" },
        pf_soft_4: { ku: "بەڕێوەبردنی کات", ar: "إدارة الوقت", en: "Time management" },
        pf_soft_5: { ku: "خۆگونجاندن", ar: "القدرة على التكيف", en: "Adaptability" },
        pf_srv_eb: { ku: "خزمەتگوزارییەکان", ar: "الخدمات", en: "Services" },
        pf_srv_h: { ku: "ئایا <span class='g'>پرۆژەیەکت</span> هەیە؟", ar: "هل لديك <span class='g'>مشروع</span>؟", en: "Have a project <span class='g'>in mind?</span>" },
        pf_srv_p: { ku: "ئامادەم بۆ دروستکردنی چارەسەری دیجیتاڵی مۆدێرن و پیشەیی بۆ کاروبارە جیاوازەکان.", ar: "أنا مستعد لإنشاء حلول رقمية حديثة واحترافية لمختلف الأعمال.", en: "I am ready to create modern and professional digital solutions for various businesses." },
        pf_stat_menus: { ku: "مێنیوی دیجیتاڵی ڕاستەوخۆ", ar: "قوائم رقمية تعمل الآن", en: "live digital menus" },
        pf_stat_pos: { ku: "سیستەمی POS", ar: "أنظمة POS", en: "POS systems built" },
        pf_stat_years: { ku: "ساڵی خوێندن و پەرەسەندن", ar: "سنوات من التعلم والتطوير", en: "years of learning & development" },
        pf_type_biz: { ku: "سیستەمی بازرگانی", ar: "نظام تجاري", en: "Business system" },
        pf_type_desk: { ku: "ئەپی دێسکتۆپ", ar: "تطبيق سطح مكتب", en: "Desktop app" },
        pf_type_web: { ku: "پلاتفۆرمی وێب", ar: "منصة ويب", en: "Web platform" },
        pf_uni: { ku: "زانکۆی جیهان – هەولێر", ar: "جامعة جيهان – أربيل", en: "Cihan University – Erbil" },
        pf_view_project: { ku: "پرۆژەکە ببینە", ar: "عرض المشروع", en: "View project" },
        pf_view_projects: { ku: "پرۆژەکانی من ببینە", ar: "عرض مشاريعي", en: "View my projects" },
        theme_dark: { ku: "تاریک", ar: "داكن", en: "Dark" },
        theme_light: { ku: "ڕووناک", ar: "فاتح", en: "Light" },
    };

    let LANG = (function () { try { return localStorage.getItem('landing_lang') || 'ku'; } catch (e) { return 'ku'; } })();
    if (!['ku', 'ar', 'en'].includes(LANG)) LANG = 'ku';

    function t(key) {
        const e = STR[key];
        return e ? (e[LANG] != null ? e[LANG] : (e.ku != null ? e.ku : key)) : key;
    }

    function apply(root) {
        const r = root || document;
        r.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n')); });
        r.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
        r.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.getAttribute('data-i18n-title')); });
        r.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('on', b.dataset.l === LANG));
    }

    function setLang(l) {
        if (!['ku', 'ar', 'en'].includes(l)) l = 'ku';
        LANG = l;
        try { localStorage.setItem('landing_lang', l); } catch (e) { }
        const h = document.documentElement;
        h.lang = l;
        h.dir = (l === 'en') ? 'ltr' : 'rtl';
        apply();
        document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
    }

    window.I18N = { t: t, setLang: setLang, apply: apply, getLang: function () { return LANG; }, STR: STR };
    window.t = t;
    window.setLang = setLang;
    document.addEventListener('DOMContentLoaded', function () { apply(); });
})();
