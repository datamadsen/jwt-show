var m = require('mithril');
var EncodedInputComponent = require('./EncodedInputComponent');
var DecodedOutputComponent = require('./DecodedOutputComponent');
var DarkmodeComponent = require('./DarkmodeComponent');

var JwtShow = {
  view: function () {

    return m(DarkmodeComponent, [
      m(EncodedInputComponent),
      m(DecodedOutputComponent)
    ]);
  }
}

module.exports = JwtShow;
