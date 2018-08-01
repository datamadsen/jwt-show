export const JwtDecoder = {
  decode: function (jwt) {
    if (!jwt)
      return ""

    try {
      var urlEncodedPayload = jwt.split('.')[1]
      var base64Payload = urlEncodedPayload.replace('-', '+').replace('_', '/')
      var payloadString = decodeURIComponent(escape(atob(base64Payload)))
      return JSON.parse(payloadString)
    }
    catch(e) {
      return "invalid jwt"
    }
  }
}
