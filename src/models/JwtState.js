var JwtDecoder = require('./JwtDecoder');

var JwtState = {
  encodedJwt: null,
  decodedJwt: function () {
    return JwtDecoder.decode(JwtState.encodedJwt);
  },

  setEncodedJwt: function (value) {
    JwtState.encodedJwt = value;
  }
}

module.exports = JwtState;
