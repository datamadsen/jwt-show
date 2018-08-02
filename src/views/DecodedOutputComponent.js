var m = require('mithril');
var hljs = require('highlight.js');
var JwtState = require('../models/JwtState');

var DecodedOutputComponent = {
  oninit: function(vnode) {
      console.log("initialized")
  },
  oncreate: function(vnode) {
      console.log("DOM created")
      console.log(vnode);
      hljs.highlightBlock(vnode.dom);
  },
  onbeforeupdate: function(vnode, old) {
      return true
  },
  onupdate: function(vnode) {
      console.log("DOM updated")
  },
  onbeforeremove: function(vnode) {
      console.log("exit animation can start")
      return new Promise(function(resolve) {
          // call after animation completes
          resolve()
      })
  },
  onremove: function(vnode) {
      console.log("removing DOM element")
  },
  view: function () {
    console.log('view');
    console.log(hljs);
    return m("pre", JwtState.decodedJwt())
  },
}

module.exports = DecodedOutputComponent;
