import m from "mithril"

export const AboutComponent = {
  view: function () {
    return m("div.measure-wide", [
      m("h1", "About jwt.show"),
      m("p", `This page is the most user-friendly json web token (jwt) decoder
        around! All decoding is done client side so your info never touches a
        server.`),
      m("p", `Paste a jwt in the input field and the payload will be decoded
        into claim names and their values.`),
      m("p", m.trust(`Some folks have asked: "Why not just use <a href='https://jwt.io'>jwt.io</a>?" Because it's
        slow to load and annoying to use. That's just, like, my opinion, man.`)),
      m("h2", "Registered claim names"),
      m("p", "RFC 7519 defines the following reserved claim names:"),
      m("ul.pl3", [
        m("li", m.trust(`<a href="https://tools.ietf.org/html/rfc7519#section-4.1.1">iss</a> for issuer.`)),
        m("li", m.trust(`<a href="https://tools.ietf.org/html/rfc7519#section-4.1.2">sub</a> for an id of the subject the token is issued to.`)),
        m("li", m.trust(`<a href="https://tools.ietf.org/html/rfc7519#section-4.1.3">aud</a> for audience.`)),
        m("li", m.trust(`<a href="https://tools.ietf.org/html/rfc7519#section-4.1.4">exp</a> for expiration time.`)),
        m("li", m.trust(`<a href="https://tools.ietf.org/html/rfc7519#section-4.1.5">nbf</a> for not before, ie. from when is the token valid.`)),
        m("li", m.trust(`<a href="https://tools.ietf.org/html/rfc7519#section-4.1.6">iat</a> for when the token was issued.`)),
        m("li", m.trust(`<a href="https://tools.ietf.org/html/rfc7519#section-4.1.7">jti</a> for a unique token id.`)),
      ]),
      m("p", "All time-related claim values are expressed as seconds since Epoch."),
      m("p", m.trust(`It is up to the application to decide which registered claim
        names are required. Read <a href="https://tools.ietf.org/html/rfc7519">
        RFC 7519</a> to learn more about the jwt technology, it's short and to
        the point &#8212; just like jwts.`))
    ])
  }
}
