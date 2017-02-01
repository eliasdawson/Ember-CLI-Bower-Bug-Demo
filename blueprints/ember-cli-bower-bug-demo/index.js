/*jshint node:true*/

const RSVP = require('rsvp');

module.exports = {
  description: 'Sample addon to demonstrate reported ember-cli bug',

  afterInstall: function(options) {
    return RSVP.all([
      this.addBowerPackageToProject('lodash'),
      this.addBowerPackageToProject('moment')
    ]);
  }
};
