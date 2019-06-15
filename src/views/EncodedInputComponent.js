import m from "mithril"
import { JwtState } from "../models/JwtState"

export const EncodedInputComponent = {
  view: function () {
    return m("input.w-100.ba.outline-0.f5", {
      type: "text",
      placeholder: "paste jwt",
      autofocus: true,
      autocomplete: "off",
      value: JwtState.encodedJwt,
      onclick: () => JwtState.setEncodedJwt(''),
      oninput: m.withAttr("value", JwtState.setEncodedJwt),
      onpaste: (event) => {
        JwtState.setEncodedJwt(event.target.value)
        window.setTimeout(() => {
            event.target.setSelectionRange(0, 0)
            event.target.blur()
        }, 0)
      },
      onblur: m.withAttr("value", JwtState.restorePreviousIfBlank)
    })
  }
}
