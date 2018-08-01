/* JwtDecoder has the ability to decode a jwt:
 * - If the input has a falsy value, the decoded jwt is the empty string.
 * - If the input is not a jwt, we return a string that reflects this.
 */
var JwtDecoder = {
  decode: function (jwt) {
    if (!jwt)
      return "";

    try {
      var urlEncodedPayload = jwt.split('.')[1];
      var base64Payload = urlEncodedPayload.replace('-', '+').replace('_', '/');
      var payloadString = decodeURIComponent(escape(atob(base64Payload)));
      var payload = JSON.parse(payloadString);

      return JSON.stringify(payload, null, 2);
    } 
    catch {
      return "invalid jwt";
    }
  }
}

module.exports = JwtDecoder;
