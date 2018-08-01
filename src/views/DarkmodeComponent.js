import m from "mithril"
import { Darkmode } from "../models/Darkmode"

export const DarkmodeComponent = {
  oninit: async function () {
    await Darkmode.init()
    m.redraw()
  },

  view: function (vnode) {
    return m(`div.h-auto.min-h-100.pa2${Darkmode.darkmodeIsEnabled ? ".dark" : ".light"}`, vnode.children)
  }
}
