// const platformCore = require('@folio/platform-core/stripes.config.js');
// const platformERM = require('@folio/platform-erm/stripes.config.js');
// const { merge } = require('lodash');

module.exports = {
  okapi: { 'url':'https://folio-snapshot-okapi.dev.folio.org', 'tenant':'diku' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    maxUnpagedResourceCount: 2000,
    showPerms: false,
    languages: ['en']
  },

  modules: {
    '@folio/checkin' : {},
    '@folio/checkout' : {},
    '@folio/circulation' : {},
    '@folio/circulation-log' : {},
    '@folio/data-import' : {},
    '@folio/data-export' : {},
    '@folio/developer' : {},
    '@folio/export-manager': {},
    '@folio/inventory' : {},
    '@folio/local-kb-admin': {},
    '@folio/notes' : {},
    '@folio/plugin-create-inventory-records' : {},
    '@folio/plugin-find-authority' : {},
    '@folio/plugin-find-import-profile' : {},
    '@folio/plugin-find-instance' : {},
    '@folio/plugin-find-user' : {},
    '@folio/plugin-query-builder' : {},
    '@folio/quick-marc' : {},
    '@folio/marc-authorities': {},
    '@folio/remote-storage' : {},
    '@folio/requests' : {},
    '@folio/servicepoints' : {},
    '@folio/stripes-authority-components' : {},
    '@folio/stripes-erm-components' : {},
    '@folio/tags' : {},
    '@folio/tenant-settings' : {},
    '@folio/users' : {}
  },

  branding: {
    logo: {
      src: './tenant-assets/opentown-libraries-logo.png',
      alt: 'Opentown Libraries',
    },
    favicon: {
      src: './tenant-assets/folio-favicon.png',
    },
  },
};

// module.exports = merge({}, platformCore, platformERM, platformComplete);
