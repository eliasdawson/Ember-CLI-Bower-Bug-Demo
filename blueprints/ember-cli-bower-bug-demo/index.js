/*jshint node:true*/

import Ember from 'ember';

module.exports = {
  description: 'Sample addon to demonstrate reported ember-cli bug',

  afterInstall: function(options) {
    return Ember.RSVP.all([
      this.addBowerPackageToProject('lodash'),
      this.addBowerPackageToProject('moment')
    ]);
  }
};
