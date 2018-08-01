import { JwtDecoder } from './JwtDecoder'

export let JwtState = {
  encodedJwt: "",
  previousEncodedJwt: "",

  decodedJwt: function () {
    return JwtDecoder.decode(JwtState.encodedJwt)
  },

  setEncodedJwt: function (value) {
    JwtState.previousEncodedJwt = JwtState.encodedJwt
    JwtState.encodedJwt = value
  },

  restorePreviousIfBlank: function (value) {
    if (!value)
      JwtState.encodedJwt = JwtState.previousEncodedJwt
  }
}
