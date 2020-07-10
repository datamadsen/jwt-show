import { JwtDecoder } from './JwtDecoder'

export let JwtState = {
  encodedJwt: "",
  previousEncodedJwt: "",
  decodedJwt: null,

  setEncodedJwt: function (value) {
    JwtState.previousEncodedJwt = JwtState.encodedJwt
    JwtState.encodedJwt = value

    // If some json is pasted, and it contains an accessToken property
    // then we use that property's value instead of the whole string.
    try {
      const json = JSON.parse(value);
      if (json.accessToken) {
        JwtState.encodedJwt = json.accessToken;
      }
    } catch (e) { }

    JwtState.decodedJwt = JwtDecoder.decode(JwtState.encodedJwt)
  },

  restorePreviousIfBlank: function (value) {
    if (!value)
      JwtState.setEncodedJwt(JwtState.previousEncodedJwt)
  }
}
