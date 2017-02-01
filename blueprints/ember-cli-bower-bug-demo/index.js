/*jshint node:true*/

const RSVP = require('rsvp');

module.exports = {
  description: 'Sample addon to demonstrate reported ember-cli bug',

  normalizeEntityName: function() {
    // allows us to run ember -g ember-cli-bootswatch and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function(options) {
    return RSVP.all([
      this.addBowerPackageToProject('lodash'),
      this.addBowerPackageToProject('moment')
    ]);
  }
};
