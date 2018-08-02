var JwtDecoder = require('./JwtDecoder');

var JwtState = {
  encodedJwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMwNzQxNDUsImV4cCI6MTU2NDYxMDE0NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.kVtrsnIG5AURdllTFaki3z3KZ5X8B7Fp1tvgCnGp3RQ",
  previousEncodedJwt: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMwNzQxNDUsImV4cCI6MTU2NDYxMDE0NSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.kVtrsnIG5AURdllTFaki3z3KZ5X8B7Fp1tvgCnGp3RQ",
  decodedJwt: function () {
    return JwtDecoder.decode(JwtState.encodedJwt);
  },

  setEncodedJwt: function (value) {
    JwtState.previousEncodedJwt = JwtState.encodedJwt;
    JwtState.encodedJwt = value;
  },

  restorePreviousIfBlank: function (value) {
    if (!value) {
      JwtState.encodedJwt = JwtState.previousEncodedJwt;
    }
  }
}

module.exports = JwtState;
