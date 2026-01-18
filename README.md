# Avagyans Jewelry - Strapi CMS

> **Headless CMS** for Avagyans website content management powered by [Strapi v5.0.1](https://strapi.io/)

---

## Overview

Strapi CMS manages all editorial content for the Avagyans Jewelry website:

- ✅ Homepage banners (Hero, Mid-banner)
- ✅ Collection descriptions
- ✅ About page content
- ✅ Media library (images, videos)
- ✅ Multi-language support (EN, HY, RU)

---

## Technology Stack

| Component       | Technology | Version |
| --------------- | ---------- | ------- |
| CMS             | Strapi     | 5.0.1   |
| Database        | PostgreSQL | 14+     |
| Node            | Node.js    | 18-20   |
| Package Manager | Yarn       | 4.1.0   |

---

## Quick Start

### Prerequisites

```bash
# Required
- PostgreSQL 14+
- Node.js 18-20
- Yarn 4.1.0
```

### Installation

```bash
# Install dependencies
yarn install

# Set up environment variables
cp .env.example .env

# Configure database
DATABASE_URL=postgresql://user:password@localhost:5432/avagyans_strapi
```

### Development

```bash
# Start dev server
yarn develop

# Strapi admin available at
# → http://localhost:1337/admin

# Create admin user on first run
```

---

## Environment Variables

### Database

```bash
# PostgreSQL (Production)
DATABASE_URL=postgresql://user:password@localhost:5432/avagyans_strapi

# OR SQLite (Development)
# DATABASE_CLIENT=sqlite
# DATABASE_FILENAME=.tmp/data.db
```

### Security

```bash
# Generated on first run
APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...
```

### Server

```bash
HOST=0.0.0.0
PORT=1337
```

---

## Content Types

### 1. Homepage

**Collection Type**: `homepage` (Single Type)

| Field      | Type      | Description      |
| ---------- | --------- | ---------------- |
| HeroBanner | Component | Main hero banner |
| MidBanner  | Component | Secondary banner |
| locale     | String    | EN, HY, RU       |

**HeroBanner/MidBanner Component**:

```
- Headline (Text)
- Text (Rich Text)
- CTA (Component)
  - BtnText (String)
  - BtnLink (String)
- Image (Media)
- Video (Media) [Optional]
```

### 2. Collections

**Collection Type**: `collection`

| Field         | Type      | Description                             |
| ------------- | --------- | --------------------------------------- |
| title         | String    | Collection name                         |
| description   | Rich Text | Collection story                        |
| handle        | String    | URL slug (avag-line, quiet-armor, seal) |
| featuredImage | Media     | Collection hero image                   |
| locale        | String    | Language                                |

### 3. Pages

**Collection Type**: `page`

Generic page content type for About, Trust, etc.

| Field   | Type      | Description  |
| ------- | --------- | ------------ |
| title   | String    | Page title   |
| slug    | String    | URL path     |
| content | Rich Text | Page content |
| seo     | Component | SEO metadata |

---

## Media Management

### File Storage

- **Development**: Local filesystem (`public/uploads/`)
- **Production**: Local filesystem (configurable to S3/DO Spaces)

### Image Optimization

Strapi automatically generates 5 sizes:

- **xlarge**: 1920px
- **large**: 1000px
- **medium**: 750px
- **small**: 500px
- **xsmall**: 64px (thumbnail)

### Video Support

- **Max Size**: 100MB
- **Formats**: MP4, WebM, OGG
- **Usage**: Hero banners, mid-banners

Access media at: `http://localhost:1337/uploads/filename.jpg`

---

## Webhook Integration

### Next.js Revalidation

Configure webhook to trigger ISR revalidation on content updates:

**URL**: `{NEXT_URL}/api/strapi-revalidate?secret={SECRET}`

**Example**: `http://localhost:8000/api/strapi-revalidate?secret=abc123`

**Events**:

- `entry.create`
- `entry.update`
- `entry.delete`
- `entry.publish`
- `entry.unpublish`

**Setup in Strapi Admin**:

1. Settings → Webhooks → Create new webhook
2. Name: "Next.js Revalidation"
3. URL: See above
4. Events: Select all entry events
5. Headers: (none required)

---

## Multilingual Support

### i18n Configuration

Strapi supports 3 locales for Avagyans:

| Locale | Name     | Display Name      |
| ------ | -------- | ----------------- |
| `en`   | English  | English (Default) |
| `hy`   | Armenian | Հայերեն           |
| `ru`   | Russian  | Русский           |

### Content Translation Workflow

1. Create content in **English** (default locale)
2. Save and publish
3. Click "Translate" button
4. Select locale (HY or RU)
5. Edit translated content
6. Save and publish translation

---

## API Usage

### REST API

```bash
# Get homepage (default locale)
GET http://localhost:1337/api/homepage?populate=deep

# Get homepage (specific locale)
GET http://localhost:1337/api/homepage?populate=deep&locale=hy

# Get all collections
GET http://localhost:1337/api/collections?populate=*

# Get single collection
GET http://localhost:1337/api/collections/1?populate=*
```

### Authentication

For protected endpoints:

```bash
# Create API token in Strapi Admin
# Settings → API Tokens → Create new token

# Use in requests
curl -H "Authorization: Bearer YOUR_TOKEN" \
  http://localhost:1337/api/homepage?populate=deep
```

---

## Content Management Workflow

### 1. Homepage Banners

**To update Hero Banner**:

1. Go to Content Manager → Homepage
2. Select locale (EN/HY/RU)
3. Edit HeroBanner component:
   - Update Headline
   - Update Text
   - Change Image/Video
   - Update CTA button
4. Save and Publish
5. Webhook auto-revalidates Next.js

**To add Video Banner**:

1. Upload video to Media Library
2. In HeroBanner, select Video field
3. Choose uploaded video
4. (Optional) Check "Prefer Over Image"
5. Save and Publish

### 2. Collection Descriptions

1. Content Manager → Collections
2. Create new or edit existing
3. Set handle (must match Medusa collection handle)
4. Add title, description, image
5. Translate to HY/RU if needed
6. Publish

### 3. Media Library

1. Media Library → Upload
2. Drag & drop images/videos
3. Add alternative text (for accessibility)
4. Organize in folders (optional)
5. Use in content via component fields

---

## Project Structure

```
src/
├── api/                    # Custom API routes
│   └── (custom endpoints)
├── components/             # Reusable components
│   └── (CTA, SEO, etc.)
├── extensions/             # Strapi extensions
├── index.ts               # Bootstrap file
└── (content types auto-generated)

config/
├── database.ts            # Database config
├── middlewares.ts         # Security, CORS
├── server.ts              # Server settings
└── upload.ts              # File upload config

public/
└── uploads/               # Media storage
```

---

## Development Commands

```bash
# Development
yarn develop               # Start with auto-reload
yarn start                # Start without auto-reload
yarn build                # Build admin panel

# Database
yarn strapi export         # Export content
yarn strapi import         # Import content

# Generate
yarn strapi generate       # Generate API/controller/service
```

---

## Security Configuration

### CSP (Content Security Policy)

Configured in `config/middlewares.ts`:

```typescript
'Content-Security-Policy': {
  'img-src': ["'self'", 'data:', 'blob:', 'localhost:*'],
  'media-src': ["'self'", 'data:', 'blob:', 'localhost:*'],
}
```

### CORS

Allows requests from Next.js storefront:

```typescript
cors: {
  enabled: true,
  origin: ['http://localhost:8000', 'https://avagyans.com'],
}
```

---

## Deployment

### Production Checklist

- [ ] Set strong secrets (APP_KEYS, JWT_SECRET, etc.)
- [ ] Configure PostgreSQL database
- [ ] Set up file storage (local or S3)
- [ ] Configure CORS for production domain
- [ ] Create admin user
- [ ] Generate API token for Next.js
- [ ] Set up webhook for revalidation
- [ ] Configure CSP for production domains

### Build for Production

```bash
# Build admin panel
yarn build

# Start production server
yarn start
```

---

## Backup & Restore

### Export Content

```bash
# Export all content types
yarn strapi export --no-encrypt --file backup.tar.gz

# Export specific content type
yarn strapi export --only homepage --file homepage-backup.tar.gz
```

### Import Content

```bash
# Import from backup
yarn strapi import --file backup.tar.gz

# Import specific content
yarn strapi import --file homepage-backup.tar.gz
```

---

## Troubleshooting

### Admin Panel Not Loading

```bash
# Rebuild admin UI
yarn build
```

### Database Connection Errors

```bash
# Check DATABASE_URL format
postgresql://user:password@host:port/database

# Test connection
psql $DATABASE_URL
```

### Media Upload Errors

```bash
# Check upload limits in config/upload.ts
# Check public/uploads/ directory permissions
chmod 755 public/uploads
```

---

## Documentation

- **Brand Context**: `.cursor/rules/avagyans-brand.mdc`
- **Strapi Config**: `.cursor/rules/strapi-cms.mdc`
- **Architecture**: `.cursor/rules/architecture.mdc`

---

## Support

- **Strapi v5 Docs**: https://docs.strapi.io/dev-docs/intro
- **Strapi User Guide**: https://docs.strapi.io/user-docs/intro
- **Community Discord**: https://discord.strapi.io

---

## License

Proprietary - Avagyans Jewelry © 2026
