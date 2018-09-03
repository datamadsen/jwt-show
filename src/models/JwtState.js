import { JwtDecoder } from './JwtDecoder'

export let JwtState = {
  encodedJwt: "",
  previousEncodedJwt: "",
  decodedJwt: null,

  setEncodedJwt: function (value) {
    JwtState.previousEncodedJwt = JwtState.encodedJwt
    JwtState.encodedJwt = value
    JwtState.decodedJwt = JwtDecoder.decode(value)
  },

  restorePreviousIfBlank: function (value) {
    if (!value)
      JwtState.setEncodedJwt(JwtState.previousEncodedJwt)
  }
}
