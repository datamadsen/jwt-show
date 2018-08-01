var m = require('mithril');
var EncodedInputComponent = require('./EncodedInputComponent');
var DecodedOutputComponent = require('./DecodedOutputComponent');

var JwtShow = {
  view: function () {
    return m('', [
      m(EncodedInputComponent),
      m(DecodedOutputComponent)
    ])
  }
}

module.exports = JwtShow;
