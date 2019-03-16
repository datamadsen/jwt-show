import m from "mithril"
import { Clipboard } from "../models/Clipboard"

export const ShareMessageComponent = {
  view: function (vnode) {
    return m("div.mt2", [
      m("div", [
        m("span", [
          m("span.mr2.pr1", m.trust("Be interesting on social media ;-)&nbsp;")),
          m("button", { onclick: next }, "next"),
          m("button", { onclick: copy }, "copy"),
          m("span.ph2.pv1.ml2.o-0", { onupdate: displayCopiedMessage }, "copied :-)")
        ]),
        m("div.mt2.i", messages[messageIndex])
      ]),
    ])
  }
}

const messages = [
  "I don't always jwt. But when I do it's on jwt.show",
  "ey? J0! jwt.show",
  "I don't even see the base64. All I see is iss, aud, exp. jwt.show",
  "Come with me if you want to jwt -- jwt.show"
]

let messageIndex = 0

function next () {
   messageIndex = (messageIndex + 1) % messages.length
}

function copy () {
  Clipboard.setClipboard(messages[messageIndex])
  lastCopy = new Date()
}

var lastCopy = null
function displayCopiedMessage (vnode) {
  const now = new Date().getTime()
  if (lastCopy && now - lastCopy.getTime() < 10) {
    vnode.dom.classList.remove('fade-out')
    window.setTimeout(() => vnode.dom.classList.add("fade-out"), 0)
  }
}
