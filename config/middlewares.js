module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            '711-strapi.s3.ap-southeast-1.amazonaws.com',
            's3.ap-southeast-1.amazonaws.com',
            'bucket.vpce-0d352959a3c11c0a4-p7a11fsj.s3.ap-southeast-1.vpce.amazonaws.com',
            'cms-images.7-eleven.vn',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            '711-strapi.s3.ap-southeast-1.amazonaws.com',
            's3.ap-southeast-1.amazonaws.com',
            'bucket.vpce-0d352959a3c11c0a4-p7a11fsj.s3.ap-southeast-1.vpce.amazonaws.com',
            'cms-images.7-eleven.vn',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
