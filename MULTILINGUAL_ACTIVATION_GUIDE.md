# 🚀 Activate Your Multilingual Content - Final Steps

**Status**: All code is ready. Just 3 manual steps to activate.

---

## What's Already Done ✅

- ✅ All Strapi schemas support i18n
- ✅ All components support localization
- ✅ Bootstrap seeding script ready
- ✅ Professional copywriting written
- ✅ Storefront fetches locale-specific content
- ✅ All 5 locale URLs work (`/us/en`, `/am/hy`, `/am/en`, `/ru/ru`, `/ru/en`)

---

## Step 1: Add Locales in Strapi (2 minutes)

### 1.1 Start Strapi
```bash
cd solace-medusa-starter-strapi
yarn develop
```

### 1.2 Login to Admin
Open: `http://localhost:1337/admin`

### 1.3 Add Armenian Locale
1. Click **Settings** (⚙️ icon in left sidebar)
2. Under "Global Settings", click **Internationalization**
3. Click **"Add new locale"** button
4. From dropdown, select: **Armenian (hy)**
5. Display name will auto-fill as: `Armenian (hy)`
6. Click **Save**

### 1.4 Add Russian Locale
1. Click **"Add new locale"** button again
2. From dropdown, select: **Russian (ru)**
3. Display name will auto-fill as: `Russian (ru)`
4. Click **Save**

### 1.5 Verify
You should now see **3 locales**:
- ✅ English (en) - Default
- ✅ Armenian (hy)
- ✅ Russian (ru)

---

## Step 2: Restart Strapi to Trigger Seeding (30 seconds)

### 2.1 Stop Strapi
In your terminal running Strapi, press: `Ctrl + C`

### 2.2 Restart Strapi
```bash
yarn develop
```

### 2.3 Watch for Success Messages
You should see in the console:
```
🌍 Checking multilingual content...
  ✓ Updated Homepage (en)
  ✓ Updated Homepage (hy)
  ✓ Updated Homepage (ru)
  ✓ Updated About Us (en)
  ✓ Updated About Us (hy)
  ✓ Updated About Us (ru)
  ✓ Updated Collection avag-line (en)
  ✓ Updated Collection avag-line (hy)
  ✓ Updated Collection avag-line (ru)
  ... etc
✅ Multilingual content seeding completed!
```

**If you see**: `⚠️ Missing locales. Please add hy and ru...`
→ Go back to Step 1 and add the locales

---

## Step 3: Verify Content in Strapi Admin (2 minutes)

### 3.1 Check Homepage
1. Go to **Content Manager > Single Types > Homepage**
2. At the top, you'll see language dropdown showing: **English (en)**
3. Click dropdown → Switch to **Armenian (hy)**
4. You should see:
   - Headline: "Հայկական ժառանգության հոգին:"
   - Text: "Ձեռագործ աշխատանք Երևանում..."
   - CTA BtnText: "Բացահայտել հավաքածուն"
5. Switch to **Russian (ru)**
6. You should see:
   - Headline: "Душа армянского наследия."
   - Text: "Ручная работа из Еревана..."
   - CTA BtnText: "Открыть коллекцию"

### 3.2 Check About Us
1. Go to **Content Manager > Single Types > About Us**
2. Switch between locales (en, hy, ru)
3. Verify each has translated content

### 3.3 Check Collections
1. Go to **Content Manager > Collection Types > Collections**
2. Open "Avag Line" collection
3. Switch between locales
4. Verify translations exist

### 3.4 Check FAQ
1. Go to **Content Manager > Single Types > FAQ**
2. Switch between locales
3. You should see 4 FAQ sections with 10 questions total

---

## Step 4: Test on Storefront (1 minute)

### 4.1 Start Storefront (if not running)
```bash
cd solace-medusa-starter
yarn dev
```

### 4.2 Test URLs

**English (US):**
- URL: `http://localhost:8000/us/en/`
- Expected: "The Soul of Armenian Heritage."

**Armenian:**
- URL: `http://localhost:8000/am/hy/`
- Expected: "Հայկական ժառանգության հոգին:"

**Russian:**
- URL: `http://localhost:8000/ru/ru/`
- Expected: "Душа армянского наследия."

**English (Armenia):**
- URL: `http://localhost:8000/am/en/`
- Expected: English content with AMD currency

**English (Russia):**
- URL: `http://localhost:8000/ru/en/`
- Expected: English content with RUB currency

---

## What Content Was Added

### 📄 Homepage
- Hero Banner (headline, text, CTA)
- Mid Banner (headline, text, CTA)

### 📄 About Us
- Our Story section
- Why Avagyans (3 tiles: Heritage Mastery, Ethical Gold, Yerevan Soul)
- Our Craftsmanship section
- Statistics (3 numbers: 25+ years, 1000+ clients, 100% handcrafted)

### 📄 Collections
- **Avag Line**: "The Pinnacle of Avagyans Artistry..."
- **Quiet Armor**: "Subtle strength for the modern individual..."
- **Seal Collection**: "Timeless signet rings..."

### 📄 FAQ
- **Shipping**: 3 questions (international, timing, free shipping)
- **Returns**: 2 questions (policy, how to return)
- **Product Care**: 2 questions (gold care, resizing)
- **Custom Orders**: 2 questions (custom work, timeline)

---

## Troubleshooting

### Content Didn't Seed
**Check console logs when Strapi starts:**
- ✅ `✅ Multilingual content seeding completed!` → Success
- ⚠️ `⚠️ Missing locales...` → Add locales in Settings > i18n
- ❌ Error messages → Share the error for debugging

### Content Shows in Wrong Language
- Check URL format: `/am/hy/` (not `/hy/am/`)
- Clear browser cache: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Check Strapi locale dropdown is set correctly

### Still Seeing Empty Fields
1. Make sure you restarted Strapi **after** adding locales
2. Check terminal for seeding success messages
3. Manually verify in Strapi Admin by switching locales

---

## Next Steps (Optional)

### Add More Content
The seeding script only added core content. You can manually add:
- More FAQ questions
- Blog posts
- Product localizations
- Privacy Policy full text
- Terms & Conditions full text

### Translate Product Descriptions
1. Go to **Content Manager > Collection Types > Product Localization**
2. Click **"Create new entry"**
3. Set `handle` to match Medusa product (e.g., "gold-ring-avag")
4. Add translations for all 3 locales
5. Save and publish

---

## Summary

**What you need to do:**
1. ✅ Add locales (hy, ru) in Settings > Internationalization
2. ✅ Restart Strapi (Ctrl+C then `yarn develop`)
3. ✅ Verify content in Admin
4. ✅ Test on storefront

**Total time: ~5 minutes**

After this, your site will be **fully multilingual** with professional copywriting in English, Armenian, and Russian!
