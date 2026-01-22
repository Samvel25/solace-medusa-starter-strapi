/**
 * Strapi Bootstrap
 * 
 * IMPORTANT: Content seeding is DISABLED to prevent data corruption.
 * Create content manually through the Admin UI for best results.
 * 
 * Previous seeding caused component corruption issues because:
 * 1. Strapi v5 Document Service doesn't support updating components by ID
 * 2. Draft & Publish creates separate component instances
 * 3. Repeatable components get new IDs on each save
 */

import type { Core } from '@strapi/strapi';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * Bootstrap function
   * Content seeding disabled - use Admin UI instead
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    console.log('🚀 Strapi bootstrap completed');
    console.log('📝 Create content manually via Admin UI at http://localhost:1337/admin');
    
    // Seeding is disabled to prevent component corruption
    // If you need to seed content, use the scripts/seed-content.js script manually
  },
};
