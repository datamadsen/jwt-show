import m from "mithril"
import hljs from "highlight.js"
import { JwtState } from "../models/JwtState.js"

export const DecodedOutputComponent = {
  view: function () {
    if (!JwtState.decodedJwt)
      return

    var decoded = JSON.stringify(JwtState.decodedJwt, null, 2)
    var highlighted = hljs.highlight('json', decoded)

    return m("pre.f5", [
      m.trust(highlighted.value)
    ])
  },
}
