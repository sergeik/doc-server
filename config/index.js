'use strict';

var _ = require('lodash');

module.exports = _.extend(
    require('./default'),
    require('./custom') || {}
);
