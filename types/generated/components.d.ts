import type { Struct, Schema } from '@strapi/strapi';

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'Video';
    icon: 'video-camera';
  };
  attributes: {
    VideoFile: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    Title: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    Poster: Schema.Attribute.Media<'images'>;
  };
}

export interface FaqFaq extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Question: Schema.Attribute.Component<'faq.faq-question', true>;
    Bookmark: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
  };
}

export interface FaqFaqQuestion extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_questions';
  info: {
    displayName: 'FaqQuestion';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface HomepageHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_banners';
  info: {
    displayName: 'HeroBanner';
    icon: '';
  };
  attributes: {
    Headline: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    CTA: Schema.Attribute.Component<'homepage.cta', false>;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Video: Schema.Attribute.Media<'videos'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
  };
}

export interface HomepageCta extends Struct.ComponentSchema {
  collectionName: 'components_homepage_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    BtnText: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    BtnLink: Schema.Attribute.String;
  };
}

export interface ColorImageColorImage extends Struct.ComponentSchema {
  collectionName: 'components_color_image_color_images';
  info: {
    displayName: 'ColorImage';
    icon: 'picture';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface ColorHexColorHex extends Struct.ComponentSchema {
  collectionName: 'components_color_hex_color_hexes';
  info: {
    displayName: 'ColorHex';
    icon: 'brush';
  };
  attributes: {
    Color: Schema.Attribute.String;
  };
}

export interface AboutUsWhyUs extends Struct.ComponentSchema {
  collectionName: 'components_about_us_whyuses';
  info: {
    displayName: 'FramedTextContentSection';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Tile: Schema.Attribute.Component<'about-us.tile', true>;
  };
}

export interface AboutUsTile extends Struct.ComponentSchema {
  collectionName: 'components_about_us_tiles';
  info: {
    displayName: 'Tile';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface AboutUsNumericalContent extends Struct.ComponentSchema {
  collectionName: 'components_about_us_numerical_contents';
  info: {
    displayName: 'NumericalContentSection';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Text: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
  };
}

export interface AboutUsContentSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_content_sections';
  info: {
    displayName: 'ImageTextContentSection';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Text: Schema.Attribute.Text &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    Image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.video': SharedVideo;
      'faq.faq': FaqFaq;
      'faq.faq-question': FaqFaqQuestion;
      'homepage.hero-banner': HomepageHeroBanner;
      'homepage.cta': HomepageCta;
      'color-image.color-image': ColorImageColorImage;
      'color-hex.color-hex': ColorHexColorHex;
      'about-us.why-us': AboutUsWhyUs;
      'about-us.tile': AboutUsTile;
      'about-us.numerical-content': AboutUsNumericalContent;
      'about-us.content-section': AboutUsContentSection;
    }
  }
}
