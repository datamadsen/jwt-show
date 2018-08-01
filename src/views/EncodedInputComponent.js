var m = require('mithril');
var JwtState = require('../models/JwtState');

var EncodedInputComponent = {
  view: function () {
    return m("input", { 
      type: "text",
      placeholder: "paste jwt",
      autofocus: true,
      autocomplete: "off",
      value: JwtState.encodedJwt,
      onclick: function () { JwtState.setEncodedJwt('') },
      oninput: m.withAttr("value", JwtState.setEncodedJwt)
    })
  }
}

module.exports = EncodedInputComponent;
