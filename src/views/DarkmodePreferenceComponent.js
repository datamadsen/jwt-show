import m from "mithril"
import { Darkmode } from "../models/Darkmode"

export const DarkmodePreferenceComponent = {
  view: function (vnode) {
    const states = ["dark", "auto", "light"]
    const currentPref = Darkmode.currentPreference()
    return m("div", [
      m("span", "color: "),
      states.map((state, idx) => {
        return m(`button${currentPref === state ? ".active":""}`,
          { 
            value: state,
            onclick: m.withAttr("value", DarkmodePreferenceComponent.setDarkmodePreference)
          }, 
          state)
      })
    ])
  },

  setDarkmodePreference: async function (preference) {
    await Darkmode.setDarkmodePreference(preference)
    m.redraw()
  }
}
