var m = require('mithril');
var hljs = require('highlight.js');
var Darkmode = require('../models/Darkmode');

var DarkmodeComponent = {
  darkmodeEnabled: null,
  view: function (vnode) {
    if (DarkmodeComponent.darkmodeEnabled !== null) {
      return m(
        ".h-100.pa2.code" + (DarkmodeComponent.darkmodeEnabled ? ".dark" : ".light"),
        vnode.children
      );
    } else {
      DarkmodeComponent.setDarkmodeEnabled();
      return;
    }
  },

  setDarkmodeEnabled: async function () {
    const darkmode = await Darkmode.enableDarkmode();
    DarkmodeComponent.darkmodeEnabled = darkmode;
    m.redraw();
  }
}

module.exports = DarkmodeComponent;
