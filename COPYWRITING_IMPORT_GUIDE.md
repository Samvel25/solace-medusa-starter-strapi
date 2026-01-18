# How to Import Professional Copywriting into Strapi

**You have 3 options:**

---

## Option 1: Automated Script (FASTEST) ⚡

### Step 1: Get Your Strapi Admin Token
1. Start Strapi: `cd solace-medusa-starter-strapi && yarn develop`
2. Login to Admin: `http://localhost:1337/admin`
3. Go to **Settings > API Tokens**
4. Click **"Create new API Token"**
5. Set:
   - Name: `Content Seeding`
   - Token type: **Full access**
   - Token duration: **Unlimited**
6. Click **Save**
7. **Copy the token** (you'll only see it once!)

### Step 2: Run the Import Script
```bash
cd solace-medusa-starter-strapi

# Set your token
export STRAPI_ADMIN_JWT="paste-your-token-here"

# Install dependencies
npm install node-fetch

# Run the script
node scripts/seed-content.js
```

### ✅ Done!
All content will be automatically imported for English, Armenian, and Russian.

---

## Option 2: Copy-Paste (Manual but Simple) 📋

### Homepage

#### Go to: Content Manager > Single Types > Homepage

**English (en):**
1. Select language: **English**
2. HeroBanner:
   - Headline: `The Soul of Armenian Heritage.`
   - Text: `Handcrafted in Yerevan since 1998. Every piece tells a story of 25 years of master craftsmanship and timeless gold artistry.`
   - CTA > BtnText: `Discover the Collection`
   - CTA > BtnLink: `/shop`

**Armenian (hy):**
1. Switch language dropdown to **Armenian (hy)**
2. HeroBanner:
   - Headline: `Հայկական ժառանգության հոգին:`
   - Text: `Ձեռագործ աշխատանք Երևանում սկսած 1998-ից: Յուրաքանչյուր զարդ ոսկերչական վարպետության և 25-ամյա ավանդույթների պատմություն է:`
   - CTA > BtnText: `Բացահայտել հավաքածուն`
   - CTA > BtnLink: `/shop`

**Russian (ru):**
1. Switch language dropdown to **Russian (ru)**
2. HeroBanner:
   - Headline: `Душа армянского наследия.`
   - Text: `Ручная работа из Еревана с 1998 года. Каждое украшение — это история 25-летнего мастерства и вечного искусства золота.`
   - CTA > BtnText: `Открыть коллекцию`
   - CTA > BtnLink: `/shop`

---

### About Us

#### Go to: Content Manager > Single Types > About Us

**English (en) - OurStory:**
- Title: `A Quarter Century of Excellence`
- Text: `Founded in the heart of Yerevan in 1998, Avagyans Jewelry began with a single vision: to preserve the intricate techniques of Armenian goldsmithing while embracing contemporary luxury. Today, we stand as a testament to the enduring power of family tradition and the meticulous pursuit of beauty.`

**Armenian (hy) - OurStory:**
- Title: `Քառորդ դարի կատարելություն`
- Text: `Հիմնադրվելով Երևանի սրտում 1998 թվականին, Ավագյանս զարդերը սկսվել են մեկ տեսլականով՝ պահպանել հայկական ոսկերչության բարդ տեխնիկան՝ միաժամանակ որդեգրելով ժամանակակից շքեղությունը: Այսօր մենք ընտանեկան ավանդույթների և գեղեցկության մշտական ձգտման վկայությունն ենք:`

**Russian (ru) - OurStory:**
- Title: `Четверть века совершенства`
- Text: `Основанный в сердце Еревана в 1998 году, бренд Avagyans Jewelry начался с единого видения: сохранить сложные техники армянского ювелирного дела, воплощая при этом современную роскошь. Сегодня мы являемся свидетельством непреходящей силы семейных традиций и тщательного стремления к красоте.`

**WhyUs Tiles** (repeat for each language):

**Tile 1:**
- EN: Title: `Heritage Mastery` / Text: `Using tools and techniques passed down through master jewelers.`
- HY: Title: `Ժառանգական վարպետություն` / Text: `Օգտագործելով գործիքներ և տեխնիկա, որոնք փոխանցվել են վարպետ ոսկերիչների կողմից:`
- RU: Title: `Наследственное мастерство` / Text: `Использование инструментов и техник, передаваемых мастерами-ювелирами.`

**Tile 2:**
- EN: Title: `Ethical Gold` / Text: `We source only the finest materials, ensuring quality that lasts a lifetime.`
- HY: Title: `Էթիկական ոսկի` / Text: `Մենք օգտագործում ենք միայն լավագույն նյութերը՝ ապահովելով ողջ կյանքի համար նախատեսված որակ:`
- RU: Title: `Этичное золото` / Text: `Мы используем только лучшие материалы, гарантируя качество на всю жизнь.`

**Tile 3:**
- EN: Title: `Yerevan Soul` / Text: `Every design is conceived and brought to life in our historic Yerevan workshop.`
- HY: Title: `Երևանյան հոգի` / Text: `Յուրաքանչյուր դիզայն ստեղծվում և կյանքի է կոչվում մեր երևանյան պատմական արհեստանոցում:`
- RU: Title: `Душа Еревана` / Text: `Каждый дизайн задумывается и воплощается в жизнь в нашей исторической ереванской мастерской.`

**Numbers Section:**

**Number 1:**
- EN: Title: `25+` / Text: `Years of Experience`
- HY: Title: `25+` / Text: `Տարվա փորձ`
- RU: Title: `25+` / Text: `Лет опыта`

**Number 2:**
- EN: Title: `1000+` / Text: `Happy Clients`
- HY: Title: `1000+` / Text: `Գոհ հաճախորդներ`
- RU: Title: `1000+` / Text: `Довольных клиентов`

**Number 3:**
- EN: Title: `100%` / Text: `Handcrafted`
- HY: Title: `100%` / Text: `Ձեռագործ`
- RU: Title: `100%` / Text: `Ручная работа`

---

### Collections

#### Go to: Content Manager > Collection Types > Collections

**Find collection with Handle: `avag-line`**

**English (en):**
- Title: `Avag Line`
- Description: `The Pinnacle of Avagyans Artistry. Bold, sculptural, and unapologetically luxurious.`

**Armenian (hy):**
- Title: `Ավագ գիծ`
- Description: `Ավագյանսի արվեստի գագաթնակետը: Համարձակ, քանդակային և անկրկնելի շքեղություն:`

**Russian (ru):**
- Title: `Линия Аваг`
- Description: `Вершина мастерства Avagyans. Смелые, скульптурные и безупречно роскошные изделия.`

**Find collection with Handle: `quiet-armor`**

**English (en):**
- Title: `Quiet Armor`
- Description: `Subtle strength for the modern individual. Jewelry designed to empower and protect.`

**Armenian (hy):**
- Title: `Հանգիստ զրահ`
- Description: `Նուրբ ուժ ժամանակակից անհատի համար: Զարդեր, որոնք նախատեսված են զորացնելու և պաշտպանելու համար:`

**Russian (ru):**
- Title: `Тихая броня`
- Description: `Утонченная сила для современного человека. Украшения, созданные для уверенности и защиты.`

**Find collection with Handle: `seal`**

**English (en):**
- Title: `Seal Collection`
- Description: `Timeless signet rings that bear your legacy. A mark of distinction, crafted to endure.`

**Armenian (hy):**
- Title: `Կնիք հավաքածու`
- Description: `Անժամանակ կնիքային մատանիներ, որոնք կրում են ձեր ժառանգությունը: Առանձնահատկության նշան, ստեղծված հավերժության համար:`

**Russian (ru):**
- Title: `Коллекция Печать`
- Description: `Вневременные перстни-печатки, несущие ваше наследие. Знак отличия, созданный для вечности.`

---

### FAQ

#### Go to: Content Manager > Single Types > FAQ

**Section 1: Shipping**
- Bookmark: `shipping`
- Title EN: `Shipping & Delivery`
- Title HY: `Առաքում`
- Title RU: `Доставка`

**Question 1:**
- EN Title: `Do you ship internationally?`
- EN Text: `Yes, we bring Armenian craftsmanship to the world. We offer secure, insured global shipping via DHL and FedEx.`
- HY Title: `Առաքո՞ւմ եք արդյոք արտերկիր:`
- HY Text: `Այո, մենք հայկական արհեստագործությունը հասցնում ենք աշխարհի ցանկացած կետ: DHL և FedEx ծառայությունների միջոցով իրականացնում ենք ապահով և ապահովագրված առաքում:`
- RU Title: `Осуществляете ли вы международную доставку?`
- RU Text: `Да, мы представляем армянское мастерство всему миру. Мы предлагаем безопасную и застрахованную международную доставку через DHL и FedEx.`

---

## Option 3: JSON Export/Import 📦

I can provide a JSON file that you can import via Strapi's import/export plugin (if installed).

Would you like me to create that format as well?

---

## ✅ After Import - Test Your Content

Visit these URLs to see your translations:

| URL | Language | Expected Content |
|-----|----------|------------------|
| `http://localhost:8000/us/en/` | English (US) | "The Soul of Armenian Heritage" |
| `http://localhost:8000/am/hy/` | Armenian | "Հայկական ժառանգության հոգին" |
| `http://localhost:8000/ru/ru/` | Russian | "Душа армянского наследия" |

---

**Which option do you prefer?**
