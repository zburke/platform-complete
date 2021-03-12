// const platformCore = require('@folio/platform-core/stripes.config.js');
// const platformERM = require('@folio/platform-erm/stripes.config.js');
// const { merge } = require('lodash');

module.exports = {
    okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
    config: {
        logCategories: 'core,path,action,xhr',
        logPrefix: '--',
        showPerms: false
    },

    modules: {
        '@folio/calendar' : {},
        '@folio/checkin' : {},
        '@folio/checkout' : {},
        '@folio/circulation' : {},
        '@folio/inventory' : {},
        '@folio/plugin-find-user' : {},
        '@folio/plugin-find-instance' : {},
        '@folio/requests' : {},
        '@folio/servicepoints' : {},
        '@folio/users' : {},
        '@folio/tenant-settings': {}
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
