import m from "mithril"
import { ShareMessageComponent } from "./ShareMessageComponent"

export const FooterComponent = {
  view: function () {
    return m("div", [
      m("h2", "You won't believe what happens next!"),
      m("div.mt2", m.trust(`Do you have a request or an issue? <a href="https://github.com/tmadsen/jwt-show">Head over to github</a>`)),
      m("div.mt2", m.trust(`Is jwt.show making your life better? <a href="https://donorbox.org/support-jwt-show">Show your support</a>`)),
      m("div.mt2", m.trust(`Are you curious about jwt.show history?&nbsp;&nbsp;<a href="/changelog">See changelog</a>`)),
      m(ShareMessageComponent),
      m("div.mt3", m.trust(`Made by <a href="https://datamadsen.dk">datamadsen.dk</a>`))
    ])
  }
}
