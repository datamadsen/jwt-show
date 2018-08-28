export const JwtDecoder = {
  decode: function (jwt) {
    if (!jwt)
      return ""

    try {
      const urlEncodedPayload = jwt.split('.')[1]
      const base64Payload = urlEncodedPayload.replace('-', '+').replace('_', '/')
      const decodedPayload = base64DecodeUnicode(base64Payload)
      return JSON.parse(decodedPayload)
    }
    catch(e) {
      return "invalid jwt"
    }
  }
}

/*
 * Lifted verbatim from: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
 */
function base64DecodeUnicode (str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
}
