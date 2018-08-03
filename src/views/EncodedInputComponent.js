var m = require('mithril');
var JwtState = require('../models/JwtState');

var EncodedInputComponent = {
  view: function () {
    return m("input.code.w-100.ba.outline-0", { 
      type: "text",
      placeholder: "paste jwt",
      autofocus: true,
      autocomplete: "off",
      value: JwtState.encodedJwt,
      onclick: function () { JwtState.setEncodedJwt('') },
      oninput: m.withAttr("value", JwtState.setEncodedJwt),
      onblur: m.withAttr("value", JwtState.restorePreviousIfBlank)
    })
  }
}

module.exports = EncodedInputComponent;
