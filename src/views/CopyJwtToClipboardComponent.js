import m from "mithril"
import { Clipboard } from "../models/Clipboard"
import { JwtState } from "../models/JwtState"

export const CopyJwtToClipboardComponent = {
  view: function (vnode) {
    return m("div.mt2", [
      m("span", "copy: "),
      m("button", { onclick: copyJwt }, "jwt"),
      m("button", { onclick: copyJwtLink }, "link"),
      m("span.ph2.pv1.ml2.o-0", { onupdate: displayCopiedMessage }, "copied :-)")
    ])
  }
}

function copyJwt () {
  Clipboard.setClipboard(JwtState.encodedJwt)
  lastCopy = new Date()
}

function copyJwtLink () {
  const baseUrl = window.location.protocol + "//" + window.location.host + "#"
  Clipboard.setClipboard(baseUrl + JwtState.encodedJwt)
  lastCopy = new Date()
}

var lastCopy = null
function displayCopiedMessage (vnode) {
  const now = new Date().getTime()
  if (lastCopy && now - lastCopy.getTime() < 2) {
    // show the message by making sure the fade-out class is not present
    // on the element and then add it again when the browser has removed
    // it in the first place.
    vnode.dom.classList.remove('fade-out')
    window.setTimeout(() => vnode.dom.classList.add("fade-out"), 2)
  }
}
