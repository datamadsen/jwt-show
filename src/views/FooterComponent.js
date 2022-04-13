import m from "mithril"
import { ShareMessageComponent } from "./ShareMessageComponent"

export const FooterComponent = {
  view: function () {
    return m("div", [
      m("div.mt2", m.trust(`Do you have a request or an issue? <a class="dib" href="https://github.com/tmadsen/jwt-show">Head over to github</a>`)),
      m("div.mt2", m.trust(`Is jwt.show making your life better? <a class="dib" href="https://donorbox.org/support-jwt-show">Show your support</a>`)),
      // m("div.mt2", m.trust(`Are you curious about jwt.show history?&nbsp;&nbsp;<a class="dib" href="/changelog">See changelog</a>`)),
      m("div.mt3.mb6", m.trust(`Made by <a href="https://datamadsen.dk">datamadsen.dk</a>`))
    ])
  }
}
