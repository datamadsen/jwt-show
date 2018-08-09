var m = require('mithril');
var hljs = require('highlight.js');
var JwtState = require('../models/JwtState');

/* The decoded jwt is a `pre` with highllighted json. */
var DecodedOutputComponent = {
  view: function () {
    var decoded = JwtState.decodedJwt();
    var highlighted = hljs.highlight('json', decoded);
    return m("pre", [
        m.trust(highlighted.value)
    ]);
  },
}

module.exports = DecodedOutputComponent;
