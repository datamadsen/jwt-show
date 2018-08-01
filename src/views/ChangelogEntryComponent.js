import m from "mithril"
import moment from "moment"
import marked from "marked"
import linkify from "linkifyjs"
import linkifyHtml from "linkifyjs/html"

export const ChangelogEntryComponent = {
  view: function (vnode) {
    let body = vnode.attrs.body
    body = marked(body)
    body = linkifyHtml(body)
    return m("article.center.ma2.pa2.shadow-1.measure-wide", [
      m("h1.fw1.f6.code.pb0.mb0", [
        m(`a[href=https://github.com/tmadsen/jwt-show/commit/${vnode.attrs.abbreviated_commit}].no-underline.black`, vnode.attrs.subject),
      ]),
      m("div.fw1.f7.code", [
        vnode.attrs.body !== "" ?
          m("div.code.gray", m.trust(body)) :
          m("div.code.gray.i", "No commit body")
      ]),
      m("div.code.f7.tr.fw1.gray", [
        m("span", new moment(vnode.attrs.author.date).format("h:mmA, MMMM Do 'YY"))
      ])
    ])
  }
}
