import type { Schema, Struct } from '@strapi/strapi';

export interface PastillePastille extends Struct.ComponentSchema {
  collectionName: 'components_pastille_pastilles';
  info: {
    displayName: 'Pastille';
  };
  attributes: {
    color1: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    color2: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'pastille.pastille': PastillePastille;
    }
  }
}
