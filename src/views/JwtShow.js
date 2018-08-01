import m from "mithril"
import { EncodedInputComponent } from "./EncodedInputComponent"
import { DecodedOutputComponent } from "./DecodedOutputComponent"
import { ExpirationComponent } from "./ExpirationComponent"
import { DarkmodeComponent } from "./DarkmodeComponent"
import { DarkmodePreferenceComponent } from "./DarkmodePreferenceComponent"
import { CopyJwtToClipboardComponent } from "./CopyJwtToClipboardComponent"
import { AboutComponent } from "./AboutComponent"
import { FooterComponent } from "./FooterComponent"

export const JwtShow = {
  view: function () {
    return m(DarkmodeComponent, [
      m(EncodedInputComponent),
      m("div", [
        m("div.dib", [
          m(DarkmodePreferenceComponent),
        ]),
        m("div.dib.ml2", [
          m(CopyJwtToClipboardComponent),
        ])
      ]),
      m(DecodedOutputComponent),
      m(ExpirationComponent),
      m(AboutComponent),
      m(FooterComponent)
    ])
  }
}
