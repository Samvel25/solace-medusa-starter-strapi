/**
 * Strapi Bootstrap with Multilingual Content Seeding
 * Automatically populates content when Strapi starts
 */

import type { Core } from '@strapi/strapi';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * Bootstrap function - seeds multilingual content on startup
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    console.log('🌍 Starting multilingual content seeding...');

    try {
      await seedHomepageContent(strapi);
      await seedAboutUsContent(strapi);
      await seedCollectionsContent(strapi);
      await seedFAQContent(strapi);
      
      console.log('✅ Content seeding completed successfully!');
    } catch (error) {
      console.error('❌ Content seeding failed:', error);
    }
  },
};

// ============================================================================
// HOMEPAGE SEEDING
// ============================================================================

async function seedHomepageContent(strapi: Core.Strapi) {
  console.log('📝 Seeding Homepage...');

  const homepageData = {
    en: {
      HeroBanner: {
        Headline: "The Soul of Armenian Heritage.",
        Text: "Handcrafted in Yerevan since 1998. Every piece tells a story of 25 years of master craftsmanship and timeless gold artistry.",
        CTA: {
          BtnText: "Discover the Collection",
          BtnLink: "/shop"
        }
      },
      MidBanner: {
        Headline: "Modern Legacy, Ancient Roots.",
        Text: "We don't just create jewelry; we forge symbols of identity that transcend generations.",
        CTA: {
          BtnText: "Shop the Signature Line",
          BtnLink: "/collections/avag-line"
        }
      }
    },
    hy: {
      HeroBanner: {
        Headline: "Հայկական ժառանգության հոգին:",
        Text: "Ձեռագործ աշխատանք Երևանում սկսած 1998-ից: Յուրաքանչյուր զարդ ոսկերչական վարպետության և 25-ամյա ավանդույթների պատմություն է:",
        CTA: {
          BtnText: "Բացահայտել հավաքածուն",
          BtnLink: "/shop"
        }
      },
      MidBanner: {
        Headline: "Արդիականություն՝ հինավուրց արմատներով:",
        Text: "Մենք չենք ստեղծում պարզապես զարդեր. մենք կերտում ենք ինքնության խորհրդանիշներ, որոնք փոխանցվում են սերնդեսերունդ:",
        CTA: {
          BtnText: "Գնել հեղինակային շարքը",
          BtnLink: "/collections/avag-line"
        }
      }
    },
    ru: {
      HeroBanner: {
        Headline: "Душа армянского наследия.",
        Text: "Ручная работа из Еревана с 1998 года. Каждое украшение — это история 25-летнего мастерства и вечного искусства золота.",
        CTA: {
          BtnText: "Открыть коллекцию",
          BtnLink: "/shop"
        }
      },
      MidBanner: {
        Headline: "Современное наследие, древние корни.",
        Text: "Мы не просто создаем украшения; мы куем символы идентичности, которые передаются из поколения в поколение.",
        CTA: {
          BtnText: "Перейти к авторской линии",
          BtnLink: "/collections/avag-line"
        }
      }
    }
  };

  for (const locale of ['en', 'hy', 'ru']) {
    const existing = await strapi.documents('api::homepage.homepage').findFirst({
      locale,
    });

    const data = homepageData[locale];

    if (existing) {
      await strapi.documents('api::homepage.homepage').update({
        documentId: existing.documentId,
        locale,
        data,
      });
      console.log(`  ✓ Updated Homepage (${locale})`);
    } else {
      await strapi.documents('api::homepage.homepage').create({
        locale,
        data,
      });
      console.log(`  ✓ Created Homepage (${locale})`);
    }
  }
}

// ============================================================================
// ABOUT US SEEDING
// ============================================================================

async function seedAboutUsContent(strapi: Core.Strapi) {
  console.log('📝 Seeding About Us...');

  const aboutUsData = {
    en: {
      OurStory: {
        Title: "A Quarter Century of Excellence",
        Text: "Founded in the heart of Yerevan in 1998, Avagyans Jewelry began with a single vision: to preserve the intricate techniques of Armenian goldsmithing while embracing contemporary luxury. Today, we stand as a testament to the enduring power of family tradition and the meticulous pursuit of beauty."
      },
      WhyUs: {
        Title: "Why Avagyans",
        Tile: [
          {
            Title: "Heritage Mastery",
            Text: "Using tools and techniques passed down through master jewelers."
          },
          {
            Title: "Ethical Gold",
            Text: "We source only the finest materials, ensuring quality that lasts a lifetime."
          },
          {
            Title: "Yerevan Soul",
            Text: "Every design is conceived and brought to life in our historic Yerevan workshop."
          }
        ]
      },
      Numbers: [
        { Title: "25+", Text: "Years of Experience" },
        { Title: "1000+", Text: "Happy Clients" },
        { Title: "100%", Text: "Handcrafted" }
      ]
    },
    hy: {
      OurStory: {
        Title: "Քառորդ դարի կատարելություն",
        Text: "Հիմնադրվելով Երևանի սրտում 1998 թվականին, Ավագյանս զարդերը սկսվել են մեկ տեսլականով՝ պահպանել հայկական ոսկերչության բարդ տեխնիկան՝ միաժամանակ որդեգրելով ժամանակակից շքեղությունը: Այսօր մենք ընտանեկան ավանդույթների և գեղեցկության մշտական ձգտման վկայությունն ենք:"
      },
      WhyUs: {
        Title: "Ինչու՞ Ավագյանս",
        Tile: [
          {
            Title: "Ժառանգական վարպետություն",
            Text: "Օգտագործելով գործիքներ և տեխնիկա, որոնք փոխանցվել են վարպետ ոսկերիչների կողմից:"
          },
          {
            Title: "Էթիկական ոսկի",
            Text: "Մենք օգտագործում ենք միայն լավագույն նյութերը՝ ապահովելով ողջ կյանքի համար նախատեսված որակ:"
          },
          {
            Title: "Երևանյան հոգի",
            Text: "Յուրաքանչյուր դիզայն ստեղծվում և կյանքի է կոչվում մեր երևանյան պատմական արհեստանոցում:"
          }
        ]
      },
      Numbers: [
        { Title: "25+", Text: "Տարվա փորձ" },
        { Title: "1000+", Text: "Գոհ հաճախորդներ" },
        { Title: "100%", Text: "Ձեռագործ" }
      ]
    },
    ru: {
      OurStory: {
        Title: "Четверть века совершенства",
        Text: "Основанный в сердце Еревана в 1998 году, бренд Avagyans Jewelry начался с единого видения: сохранить сложные техники армянского ювелирного дела, воплощая при этом современную роскошь. Сегодня мы являемся свидетельством непреходящей силы семейных традиций и тщательного стремления к красоте."
      },
      WhyUs: {
        Title: "Почему Avagyans",
        Tile: [
          {
            Title: "Наследственное мастерство",
            Text: "Использование инструментов и техник, передаваемых мастерами-ювелирами."
          },
          {
            Title: "Этичное золото",
            Text: "Мы используем только лучшие материалы, гарантируя качество на всю жизнь."
          },
          {
            Title: "Душа Еревана",
            Text: "Каждый дизайн задумывается и воплощается в жизнь в нашей исторической ереванской мастерской."
          }
        ]
      },
      Numbers: [
        { Title: "25+", Text: "Лет опыта" },
        { Title: "1000+", Text: "Довольных клиентов" },
        { Title: "100%", Text: "Ручная работа" }
      ]
    }
  };

  for (const locale of ['en', 'hy', 'ru']) {
    const existing = await strapi.documents('api::about-us.about-us').findFirst({
      locale,
    });

    const data = aboutUsData[locale];

    if (existing) {
      await strapi.documents('api::about-us.about-us').update({
        documentId: existing.documentId,
        locale,
        data,
      });
      console.log(`  ✓ Updated About Us (${locale})`);
    } else {
      await strapi.documents('api::about-us.about-us').create({
        locale,
        data,
      });
      console.log(`  ✓ Created About Us (${locale})`);
    }
  }
}

// ============================================================================
// COLLECTIONS SEEDING
// ============================================================================

async function seedCollectionsContent(strapi: Core.Strapi) {
  console.log('📝 Seeding Collections...');

  const collectionsData = [
    {
      Handle: "avag-line",
      locales: {
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
      }
    },
    {
      Handle: "quiet-armor",
      locales: {
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
      }
    },
    {
      Handle: "seal",
      locales: {
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
    }
  ];

  for (const collectionData of collectionsData) {
    // Find collection by Handle
    const existing = await strapi.db.query('api::collection.collection').findOne({
      where: { Handle: collectionData.Handle }
    });

    for (const locale of ['en', 'hy', 'ru']) {
      const localeData = {
        Handle: collectionData.Handle,
        ...collectionData.locales[locale]
      };

      if (existing) {
        await strapi.documents('api::collection.collection').update({
          documentId: existing.documentId,
          locale,
          data: localeData,
        });
        console.log(`  ✓ Updated Collection ${collectionData.Handle} (${locale})`);
      } else {
        // Create for first locale (en), then update for others
        if (locale === 'en') {
          await strapi.documents('api::collection.collection').create({
            locale,
            data: localeData,
          });
          console.log(`  ✓ Created Collection ${collectionData.Handle} (${locale})`);
        }
      }
    }
  }
}

// ============================================================================
// FAQ SEEDING
// ============================================================================

async function seedFAQContent(strapi: Core.Strapi) {
  console.log('📝 Seeding FAQ...');

  const faqData = {
    en: {
      FAQSection: [
        {
          Bookmark: "shipping",
          Title: "Shipping & Delivery",
          Question: [
            {
              Title: "Do you ship internationally?",
              Text: "Yes, we bring Armenian craftsmanship to the world. We offer secure, insured global shipping via DHL and FedEx."
            },
            {
              Title: "How long does shipping take?",
              Text: "Standard international shipping takes 5-7 business days. Express options are available for faster delivery."
            }
          ]
        },
        {
          Bookmark: "care",
          Title: "Product Care",
          Question: [
            {
              Title: "How do I care for my gold jewelry?",
              Text: "Clean with warm soapy water and a soft brush. Store in the provided pouch away from direct sunlight. Avoid harsh chemicals and remove before swimming."
            }
          ]
        }
      ]
    },
    hy: {
      FAQSection: [
        {
          Bookmark: "shipping",
          Title: "Առաքում",
          Question: [
            {
              Title: "Առաքո՞ւմ եք արդյոք արտերկիր:",
              Text: "Այո, մենք հայկական արհեստագործությունը հասցնում ենք աշխարհի ցանկացած կետ: DHL և FedEx ծառայությունների միջոցով իրականացնում ենք ապահով և ապահովագրված առաքում:"
            },
            {
              Title: "Որքան ժամանակ է տևում առաքումը?",
              Text: "Ստանդարտ միջազգային առաքումը տևում է 5-7 աշխատանքային օր: Առկա են արագ առաքման տարբերակներ:"
            }
          ]
        },
        {
          Bookmark: "care",
          Title: "Ապրանքի խնամք",
          Question: [
            {
              Title: "Ինչպե՞ս խնամել իմ ոսկե զարդերը:",
              Text: "Մաքրեք տաք օճառաջուրով և փափուկ խոզանակով: Պահեք տրված պատյանում՝ հեռու ուղիղ արևից: Խուսափեք կոշտ քիմիական նյութերից և հանեք լողալուց առաջ:"
            }
          ]
        }
      ]
    },
    ru: {
      FAQSection: [
        {
          Bookmark: "shipping",
          Title: "Доставка",
          Question: [
            {
              Title: "Осуществляете ли вы международную доставку?",
              Text: "Да, мы представляем армянское мастерство всему миру. Мы предлагаем безопасную и застрахованную международную доставку через DHL и FedEx."
            },
            {
              Title: "Сколько времени занимает доставка?",
              Text: "Стандартная международная доставка занимает 5-7 рабочих дней. Доступны экспресс-варианты для более быстрой доставки."
            }
          ]
        },
        {
          Bookmark: "care",
          Title: "Уход за изделиями",
          Question: [
            {
              Title: "Как ухаживать за золотыми украшениями?",
              Text: "Очищайте теплой мыльной водой и мягкой щеткой. Храните в предоставленном чехле вдали от прямых солнечных лучей. Избегайте агрессивных химикатов и снимайте перед плаванием."
            }
          ]
        }
      ]
    }
  };

  for (const locale of ['en', 'hy', 'ru']) {
    const existing = await strapi.documents('api::faq.faq').findFirst({
      locale,
    });

    const data = faqData[locale];

    if (existing) {
      await strapi.documents('api::faq.faq').update({
        documentId: existing.documentId,
        locale,
        data,
      });
      console.log(`  ✓ Updated FAQ (${locale})`);
    } else {
      await strapi.documents('api::faq.faq').create({
        locale,
        data,
      });
      console.log(`  ✓ Created FAQ (${locale})`);
    }
  }
}
