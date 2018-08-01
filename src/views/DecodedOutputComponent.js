var m = require('mithril');
var JwtState = require('../models/JwtState');

var DecodedOutputComponent = {
  view: function () {
    return m("pre", JwtState.decodedJwt())
  }
}

module.exports = DecodedOutputComponent;
