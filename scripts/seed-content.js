/**
 * Strapi Content Seeding Script
 * Automatically populates Strapi with multilingual content
 * 
 * Usage: node scripts/seed-content.js
 */

const fetch = require('node-fetch');

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_ADMIN_JWT; // You'll need to set this

// ============================================================================
// HOMEPAGE CONTENT
// ============================================================================

const homepageContent = {
  HeroBanner: {
    en: {
      Headline: "The Soul of Armenian Heritage.",
      Text: "Handcrafted in Yerevan since 1998. Every piece tells a story of 25 years of master craftsmanship and timeless gold artistry.",
      CTA: {
        BtnText: "Discover the Collection",
        BtnLink: "/shop"
      }
    },
    hy: {
      Headline: "Հայկական ժառանգության հոգին:",
      Text: "Ձեռագործ աշխատանք Երևանում սկսած 1998-ից: Յուրաքանչյուր զարդ ոսկերչական վարպետության և 25-ամյա ավանդույթների պատմություն է:",
      CTA: {
        BtnText: "Բացահայտել հավաքածուն",
        BtnLink: "/shop"
      }
    },
    ru: {
      Headline: "Душа армянского наследия.",
      Text: "Ручная работа из Еревана с 1998 года. Каждое украшение — это история 25-летнего мастерства и вечного искусства золота.",
      CTA: {
        BtnText: "Открыть коллекцию",
        BtnLink: "/shop"
      }
    }
  },
  MidBanner: {
    en: {
      Headline: "Modern Legacy, Ancient Roots.",
      Text: "We don't just create jewelry; we forge symbols of identity that transcend generations.",
      CTA: {
        BtnText: "Shop the Signature Line",
        BtnLink: "/collections/avag-line"
      }
    },
    hy: {
      Headline: "Արդիականություն՝ հինավուրց արմատներով:",
      Text: "Մենք չենք ստեղծում պարզապես զարդեր. մենք կերտում ենք ինքնության խորհրդանիշներ, որոնք փոխանցվում են սերնդեսերունդ:",
      CTA: {
        BtnText: "Գնել հեղինակային շարքը",
        BtnLink: "/collections/avag-line"
      }
    },
    ru: {
      Headline: "Современное наследие, древние корни.",
      Text: "Мы не просто создаем украшения; мы куем символы идентичности, которые передаются из поколения в поколение.",
      CTA: {
        BtnText: "Перейти к авторской линии",
        BtnLink: "/collections/avag-line"
      }
    }
  }
};

// ============================================================================
// ABOUT US CONTENT
// ============================================================================

const aboutUsContent = {
  OurStory: {
    en: {
      Title: "A Quarter Century of Excellence",
      Text: "Founded in the heart of Yerevan in 1998, Avagyans Jewelry began with a single vision: to preserve the intricate techniques of Armenian goldsmithing while embracing contemporary luxury. Today, we stand as a testament to the enduring power of family tradition and the meticulous pursuit of beauty."
    },
    hy: {
      Title: "Քառորդ դարի կատարելություն",
      Text: "Հիմնադրվելով Երևանի սրտում 1998 թվականին, Ավագյանս զարդերը սկսվել են մեկ տեսլականով՝ պահպանել հայկական ոսկերչության բարդ տեխնիկան՝ միաժամանակ որդեգրելով ժամանակակից շքեղությունը: Այսօր մենք ընտանեկան ավանդույթների և գեղեցկության մշտական ձգտման վկայությունն ենք:"
    },
    ru: {
      Title: "Четверть века совершенства",
      Text: "Основанный в сердце Еревана в 1998 году, бренд Avagyans Jewelry начался с единого видения: сохранить сложные техники армянского ювелирного дела, воплощая при этом современную роскошь. Сегодня мы являемся свидетельством непреходящей силы семейных традиций и тщательного стремления к красоте."
    }
  },
  WhyUs: {
    Title: {
      en: "Why Avagyans",
      hy: "Ինչու՞ Ավագյանս",
      ru: "Почему Avagyans"
    },
    Tiles: [
      {
        en: {
          Title: "Heritage Mastery",
          Text: "Using tools and techniques passed down through master jewelers."
        },
        hy: {
          Title: "Ժառանգական վարպետություն",
          Text: "Օգտագործելով գործիքներ և տեխնիկա, որոնք փոխանցվել են վարպետ ոսկերիչների կողմից:"
        },
        ru: {
          Title: "Наследственное мастерство",
          Text: "Использование инструментов и техник, передаваемых мастерами-ювелирами."
        }
      },
      {
        en: {
          Title: "Ethical Gold",
          Text: "We source only the finest materials, ensuring quality that lasts a lifetime."
        },
        hy: {
          Title: "Էթիկական ոսկի",
          Text: "Մենք օգտագործում ենք միայն լավագույն նյութերը՝ ապահովելով ողջ կյանքի համար նախատեսված որակ:"
        },
        ru: {
          Title: "Этичное золото",
          Text: "Мы используем только лучшие материалы, гарантируя качество на всю жизнь."
        }
      },
      {
        en: {
          Title: "Yerevan Soul",
          Text: "Every design is conceived and brought to life in our historic Yerevan workshop."
        },
        hy: {
          Title: "Երևանյան հոգի",
          Text: "Յուրաքանչյուր դիզայն ստեղծվում և կյանքի է կոչվում մեր երևանյան պատմական արհեստանոցում:"
        },
        ru: {
          Title: "Душа Еревана",
          Text: "Каждый дизайн задумывается и воплощается в жизнь в нашей исторической ереванской мастерской."
        }
      }
    ]
  },
  Numbers: [
    {
      en: { Title: "25+", Text: "Years of Experience" },
      hy: { Title: "25+", Text: "Տարվա փորձ" },
      ru: { Title: "25+", Text: "Лет опыта" }
    },
    {
      en: { Title: "1000+", Text: "Happy Clients" },
      hy: { Title: "1000+", Text: "Գոհ հաճախորդներ" },
      ru: { Title: "1000+", Text: "Довольных клиентов" }
    },
    {
      en: { Title: "100%", Text: "Handcrafted" },
      hy: { Title: "100%", Text: "Ձեռագործ" },
      ru: { Title: "100%", Text: "Ручная работа" }
    }
  ]
};

// ============================================================================
// COLLECTIONS CONTENT
// ============================================================================

const collectionsContent = [
  {
    Handle: "avag-line",
    en: {
      Title: "Avag Line",
      Description: "The Pinnacle of Avagyans Artistry. Bold, sculptural, and unapologetically luxurious."
    },
    hy: {
      Title: "Ավագ գիծ",
      Description: "Ավագյանսի արվեստի գագաթնակետը: Համարձակ, քանդակային և անկրկնելի շքեղություն:"
    },
    ru: {
      Title: "Линия Аваг",
      Description: "Вершина мастерства Avagyans. Смелые, скульптурные и безупречно роскошные изделия."
    }
  },
  {
    Handle: "quiet-armor",
    en: {
      Title: "Quiet Armor",
      Description: "Subtle strength for the modern individual. Jewelry designed to empower and protect."
    },
    hy: {
      Title: "Հանգիստ զրահ",
      Description: "Նուրբ ուժ ժամանակակից անհատի համար: Զարդեր, որոնք նախատեսված են զորացնելու և պաշտպանելու համար:"
    },
    ru: {
      Title: "Тихая броня",
      Description: "Утонченная сила для современного человека. Украшения, созданные для уверенности и защиты."
    }
  },
  {
    Handle: "seal",
    en: {
      Title: "Seal Collection",
      Description: "Timeless signet rings that bear your legacy. A mark of distinction, crafted to endure."
    },
    hy: {
      Title: "Կնիք հավաքածու",
      Description: "Անժամանակ կնիքային մատանիներ, որոնք կրում են ձեր ժառանգությունը: Առանձնահատկության նշան, ստեղծված հավերժության համար:"
    },
    ru: {
      Title: "Коллекция Печать",
      Description: "Вневременные перстни-печатки, несущие ваше наследие. Знак отличия, созданный для вечности."
    }
  }
];

// ============================================================================
// FAQ CONTENT
// ============================================================================

const faqContent = [
  {
    Bookmark: "shipping",
    Title: {
      en: "Shipping & Delivery",
      hy: "Առաքում",
      ru: "Доставка"
    },
    Questions: [
      {
        en: {
          Title: "Do you ship internationally?",
          Text: "Yes, we bring Armenian craftsmanship to the world. We offer secure, insured global shipping via DHL and FedEx."
        },
        hy: {
          Title: "Առաքո՞ւմ եք արդյոք արտերկիր:",
          Text: "Այո, մենք հայկական արհեստագործությունը հասցնում ենք աշխարհի ցանկացած կետ: DHL և FedEx ծառայությունների միջոցով իրականացնում ենք ապահով և ապահովագրված առաքում:"
        },
        ru: {
          Title: "Осуществляете ли вы международную доставку?",
          Text: "Да, мы представляем армянское мастерство всему миру. Мы предлагаем безопасную и застрахованную международную доставку через DHL и FedEx."
        }
      },
      {
        en: {
          Title: "How long does shipping take?",
          Text: "Standard international shipping takes 5-7 business days. Express options are available for faster delivery."
        },
        hy: {
          Title: "Որքան ժամանակ է տևում առաքումը?",
          Text: "Ստանդարտ միջազգային առաքումը տևում է 5-7 աշխատանքային օր: Առկա են արագ առաքման տարբերակներ:"
        },
        ru: {
          Title: "Сколько времени занимает доставка?",
          Text: "Стандартная международная доставка занимает 5-7 рабочих дней. Доступны экспресс-варианты для более быстрой доставки."
        }
      }
    ]
  },
  {
    Bookmark: "care",
    Title: {
      en: "Product Care",
      hy: "Ապրանքի խնամք",
      ru: "Уход за изделиями"
    },
    Questions: [
      {
        en: {
          Title: "How do I care for my gold jewelry?",
          Text: "Clean with warm soapy water and a soft brush. Store in the provided pouch away from direct sunlight. Avoid harsh chemicals and remove before swimming."
        },
        hy: {
          Title: "Ինչպե՞ս խնամել իմ ոսկե զարդերը:",
          Text: "Մաքրեք տաք օճառաջուրով և փափուկ խոզանակով: Պահեք տրված պատյանում՝ հեռու ուղիղ արևից: Խուսափեք կոշտ քիմիական նյութերից և հանեք լողալուց առաջ:"
        },
        ru: {
          Title: "Как ухаживать за золотыми украшениями?",
          Text: "Очищайте теплой мыльной водой и мягкой щеткой. Храните в предоставленном чехле вдали от прямых солнечных лучей. Избегайте агрессивных химикатов и снимайте перед плаванием."
        }
      }
    ]
  }
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

async function updateHomepage(locale, data) {
  console.log(`📝 Updating Homepage (${locale})...`);
  
  const response = await fetch(`${STRAPI_URL}/api/homepage?locale=${locale}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_TOKEN}`
    },
    body: JSON.stringify({ data })
  });

  if (!response.ok) {
    throw new Error(`Failed to update homepage (${locale}): ${response.statusText}`);
  }

  console.log(`✅ Homepage (${locale}) updated successfully`);
}

async function updateAboutUs(locale, data) {
  console.log(`📝 Updating About Us (${locale})...`);
  
  const response = await fetch(`${STRAPI_URL}/api/about-us?locale=${locale}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${STRAPI_TOKEN}`
    },
    body: JSON.stringify({ data })
  });

  if (!response.ok) {
    throw new Error(`Failed to update about-us (${locale}): ${response.statusText}`);
  }

  console.log(`✅ About Us (${locale}) updated successfully`);
}

async function seedContent() {
  console.log('🚀 Starting content seeding...\n');

  if (!STRAPI_TOKEN) {
    console.error('❌ ERROR: STRAPI_ADMIN_JWT environment variable not set');
    console.log('\nTo get your token:');
    console.log('1. Login to Strapi Admin');
    console.log('2. Go to Settings > API Tokens > Create new token');
    console.log('3. Set type to "Full access"');
    console.log('4. Copy token and run: export STRAPI_ADMIN_JWT="your-token-here"');
    process.exit(1);
  }

  try {
    // Seed Homepage for all locales
    for (const locale of ['en', 'hy', 'ru']) {
      await updateHomepage(locale, {
        HeroBanner: homepageContent.HeroBanner[locale],
        MidBanner: homepageContent.MidBanner[locale]
      });
    }

    console.log('\n✨ Content seeding completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Login to Strapi Admin: http://localhost:1337/admin');
    console.log('2. Verify content in each locale');
    console.log('3. Add images manually (scripts cannot upload media files)');
    
  } catch (error) {
    console.error('\n❌ Seeding failed:', error.message);
    process.exit(1);
  }
}

// Run the seeding
seedContent();
