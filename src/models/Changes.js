export const Changes = { commits: [
{
  "abbreviated_commit": "e0c8a59",
  "subject": "Replace node-sass dependency",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Wed, 13 Apr 2022 10:07:05 +0200"
  }
},
{
  "abbreviated_commit": "f001420",
  "subject": "Make some changes to build and deploy",
  "body": "Restore changelog generation and add nginx.conf to make sure Mithril handles routing.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Sun, 28 Mar 2021 22:38:50 +0200"
  }
},
{
  "abbreviated_commit": "ff0f6d4",
  "subject": "Create publish package workflow",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:51:45 +0100"
  }
},
{
  "abbreviated_commit": "d698c4f",
  "subject": "Ready for k8s (#37)",
  "body": "Co-authored-by: Tim M. Madsen <tim@madsen.fm>\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:51:45 +0100"
  }
},
{
  "abbreviated_commit": "6444aea",
  "subject": "Bump safer-eval from 1.3.3 to 1.3.5 (#22)",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:51:45 +0100"
  }
},
{
  "abbreviated_commit": "7810c65",
  "subject": "Bump acorn from 5.7.3 to 5.7.4 (#23)",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:51:45 +0100"
  }
},
{
  "abbreviated_commit": "289f425",
  "subject": "Bump jquery from 3.4.1 to 3.5.0 (#24)",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:51:36 +0100"
  }
},
{
  "abbreviated_commit": "62a7c2e",
  "subject": "Bump mixin-deep from 1.3.1 to 1.3.2 (#25)",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:51:27 +0100"
  }
},
{
  "abbreviated_commit": "89fb0ac",
  "subject": "Bump marked from 0.5.2 to 0.7.0 (#30)",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:51:20 +0100"
  }
},
{
  "abbreviated_commit": "4383231",
  "subject": "Bump dot-prop from 4.2.0 to 4.2.1 (#36)",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:51:12 +0100"
  }
},
{
  "abbreviated_commit": "89782ec",
  "subject": "Bump elliptic from 6.4.1 to 6.5.3 (#29)",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:51:03 +0100"
  }
},
{
  "abbreviated_commit": "e556e8a",
  "subject": "Bump mithril from 1.1.6 to 1.1.7 (#31)",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:50:56 +0100"
  }
},
{
  "abbreviated_commit": "af7087f",
  "subject": "Bump node-sass from 4.12.0 to 4.13.1 (#32)",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:50:49 +0100"
  }
},
{
  "abbreviated_commit": "81bd07d",
  "subject": "Bump highlight.js from 9.15.6 to 10.4.1 (#34)",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:50:39 +0100"
  }
},
{
  "abbreviated_commit": "f13fdfb",
  "subject": "Bump ini from 1.3.5 to 1.3.7 (#35)",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@madsen.fm",
    "date": "Fri, 26 Mar 2021 23:50:20 +0100"
  }
},
{
  "abbreviated_commit": "8baec4d",
  "subject": "Add support for pasting json",
  "body": "If a json string is pasted and it turns out it has an accessToken\nproperty, then we extract that property and put it into the input field\nso when \"copy\" is clicked, we will copy that accessToken.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 11 Jul 2020 00:02:10 +0200"
  }
},
{
  "abbreviated_commit": "9dc986a",
  "subject": "Make jwt.show work a little better in firefox",
  "body": "Darkmode now works as intended in firefox who would like us to be\nexplicit about the body's height (100%).\n\nCopying jwt/links in firefox also works a bit better due to some\ntweaking wrt. animation timings.\n\nPasting a jwt in firefox also shows the beginning of the input field\ninstead of the end so you'll be relieved when you see that classic\n`eyJ0...` and hum along to\n[this classic jwt.show tribute by red hot chili peppers](https://www.youtube.com/watch?v=KvlqclaxyP4&feature=youtu.be&t=37).\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 15 Jun 2019 09:38:09 +0200"
  }
},
{
  "abbreviated_commit": "179fe43",
  "subject": "Adhere to the system's darkmode preference",
  "body": "With this update, jwt.show will look at whether or not the visitor has\nenabled darkmode on an os-level and take that preference into account\nwhen choosing a color theme when the color setting is set to \"auto\".\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Thu, 13 Jun 2019 08:36:18 +0200"
  }
},
{
  "abbreviated_commit": "7afbfec",
  "subject": "Add dockerfile",
  "body": "Prepare jwt-show to be served in a docker container on an environment\nwhere nginx-proxy and the letsencrypt companion are running. A default\nconfiguration for nginx is added with the purpose of hitting the\nmithril router in jwt-show if the requested uri does not match a file on\nthe server.\n\nWe also regenerate yarn.lock and add license to package.json since\nGithub found a vulnerability in yarn.lock regarding jquery. Here's to\nhoping it's fixed in the new yarn.lock.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 26 May 2019 15:18:41 +0200"
  }
},
{
  "abbreviated_commit": "3ecb140",
  "subject": "Fix babel stuff",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 16 Mar 2019 14:52:40 +0100"
  }
},
{
  "abbreviated_commit": "bace9a7",
  "subject": "Remove share message component",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 16 Mar 2019 14:24:29 +0100"
  }
},
{
  "abbreviated_commit": "628367f",
  "subject": "Upgrade packages",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 16 Mar 2019 14:23:40 +0100"
  }
},
{
  "abbreviated_commit": "170b857",
  "subject": "Stop storing lat/lng in local storage",
  "body": "It was a little buggy and not necessary.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 16 Sep 2018 09:19:02 +0200"
  }
},
{
  "abbreviated_commit": "9ba3510",
  "subject": "Use the method for setting encoded jwt",
  "body": "We used to be able to set `encodedJwt` directly, but we shouldn't do that\nanymore. We still did in one place and that caused a bug which is fixed by this\nupdate.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 3 Sep 2018 04:53:38 +0000"
  }
},
{
  "abbreviated_commit": "16535de",
  "subject": "Specify border colors for active button explicitly",
  "body": "If we don't specify the border colors explicitly, IE will (contrary to\nother browsers) assume that we think the borders should have the same\ncolor as the text. That is not the case for active buttons on jwt.show\nand this update fixes the problem\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 2 Sep 2018 17:29:56 +0200"
  }
},
{
  "abbreviated_commit": "2bb803a",
  "subject": "Only add a hover color if hover is supported",
  "body": "For instance on iOS devices, hover is not really supported but will be\ntriggered on a tap. That behavior makes the buttons behave in an\nunintended way when it comes to background color.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 2 Sep 2018 17:08:29 +0200"
  }
},
{
  "abbreviated_commit": "bbded58",
  "subject": "Wider copy support",
  "body": "Previously, copy did not work on mobile safari or IE. This commit makes\nsure that it does.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 2 Sep 2018 16:01:23 +0200"
  }
},
{
  "abbreviated_commit": "5961e8e",
  "subject": "Make direct links decode again",
  "body": "A bug had sneaked in during the refactor of `decodedJwt` going from a\nmethod to a property. Now we can't set `encodedJwt` directly and trust\nit'll work. Instead we have to call `setEncodedJwt`.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 2 Sep 2018 15:58:56 +0200"
  }
},
{
  "abbreviated_commit": "bc7d4a3",
  "subject": "Make the site more mobile friendly",
  "body": "It's not often that we need to decode jwts on mobile devices, but the\nsite might as well look good on there nonetheless. This commit tries to\nachieve that by setting the width of the viewport that the site is\nrendered in ([Read more][1]) and by making small adjustments to line\nlengths, how certain lines break, and to margins.\n\n[1]: https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 1 Sep 2018 21:01:06 +0200"
  }
},
{
  "abbreviated_commit": "8ef7674",
  "subject": "Add transparent favicon and 1500 other icons",
  "body": "Mainly so the favicon won't look like shit on a grey background sported\nby many browser tabs, but also to freshen it up a little :-)\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 31 Aug 2018 20:35:56 +0200"
  }
},
{
  "abbreviated_commit": "59e3f19",
  "subject": "Escape double quotes in commit subject",
  "body": "Since the changelog is generated json with the git commit log as its\nbasis it's necessary to escape double quotes. Recently the first commit\nmessage with double quotes was added which caused build time issues.\nThis commit makes sure that we escape double quotes in the subject as\nwell as in the body.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Tue, 28 Aug 2018 22:11:58 +0200"
  }
},
{
  "abbreviated_commit": "8984dc5",
  "subject": "Simplify the \"tool chain\"",
  "body": "Since we began using parcel for bundling it hasn't really been necessary\nto use browsersync and friends. Now we remove that dependency and change\nsome of the serve commands in package.json.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Tue, 28 Aug 2018 22:10:00 +0200"
  }
},
{
  "abbreviated_commit": "d5e6576",
  "subject": "Stop using the deprecated escape function",
  "body": "Previously we used the `escape` function to make sure that special\ncharacters in the jwt was decoded correctly. The function is deprecated\nand now we use the alternative suggested by MDN. We also make the\ndecoded jwt a property rather than a function in `JwtState` to avoid the\nfunction being constantly evaluated.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Tue, 28 Aug 2018 21:48:44 +0200"
  }
},
{
  "abbreviated_commit": "7384b79",
  "subject": "Auto is the default darkmode preference",
  "body": "If you haven't yet set a darkmode preference, we will default to auto\nand show that in the UI.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Tue, 28 Aug 2018 18:09:35 +0200"
  }
},
{
  "abbreviated_commit": "c9bad33",
  "subject": "Housecleaning: move/delete a couple of files",
  "body": "The src folder now contains all the site files. The tools folder now\nholds all the tools. I don't really use ctags for this project, so the\ntags file is removed. So is a test file that I used for expirements with\ngenerating the changelog with escaped newlines and quotes.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Tue, 28 Aug 2018 18:02:06 +0200"
  }
},
{
  "abbreviated_commit": "dfe6f0f",
  "subject": "Mithril edition of jwt.show",
  "body": "The initial version of jwt.show was thrown together very quickly and uses some\nolder techniques for manipulating the DOM in order to achieve showing a decoded\njwt, counting down, copying to clipboard, etc.\n\nIt certainly works, but I wondered what was on the other side of the\nfence, both in ES6 and virtual DOM land. This commit takes the first\nversion of jwt.show and implements it in ES8 (async/await) with\n[mithril][1] as the framework.\n\nThere's undoubtedly still room for improvement but it feels much nicer\nthan the old code base and I hope it will be easier to build new\nfeatures on top of it in the future :-)\n\n[1]: http://mithril.js.org\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 26 Aug 2018 19:22:36 +0200"
  }
},
{
  "abbreviated_commit": "dbd4175",
  "subject": "Replace query string sharing with hash and add copy",
  "body": "Previously it was possible to share jwts with a value for a `jwt` query\nstring parameter. This is no longer possible because it showed up in\nnginx logs and I'm not interested in anything like that. The hash part\nof a url is not logged which is a better option for jwt.show.\n\nWe also add a \"Copy share link to clipboard\" and create a bit of room\nbetween the buttons and the `#encoded` field.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 16 Jul 2018 22:44:27 +0200"
  }
},
{
  "abbreviated_commit": "3dcf8e0",
  "subject": "Add todo.md",
  "body": "The todo with inspiration for future development is added.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 18 Jun 2018 14:37:22 +0200"
  }
},
{
  "abbreviated_commit": "dc0db90",
  "subject": "Add donation link",
  "body": "A donation link is added so people who'd like to support jwt.show can.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 18 Jun 2018 14:32:58 +0200"
  }
},
{
  "abbreviated_commit": "9d22d3d",
  "subject": "Add copy token to clipboard",
  "body": "We add a button so people don't use a clipboard manager can copy a token\nthat they have previsouly pasted. A nice clipboard manager on windows is\nclipx (https://bluemars.org/clipx/) and a nice one for mac is pastebot\n(https://tapbots.com/pastebot/).\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 23 Apr 2018 10:28:51 +0200"
  }
},
{
  "abbreviated_commit": "388b35c",
  "subject": "Add `hreflang` to please search engines",
  "body": "The more people who find jwt.show when looking to decode jwt tokens\nonline, the happier the world will be.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 4 Sep 2017 05:00:08 +0000"
  }
},
{
  "abbreviated_commit": "f1f5d37",
  "subject": "Ignore changelog/index.html",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 4 Sep 2017 05:00:08 +0000"
  }
},
{
  "abbreviated_commit": "ef31ae0",
  "subject": "Bring darkmode to /changelog",
  "body": "Because why not?\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 4 Sep 2017 05:00:08 +0000"
  }
},
{
  "abbreviated_commit": "69ca4aa",
  "subject": "Move around a bunch of files",
  "body": "Trying to establish a bit of order.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 4 Sep 2017 05:00:08 +0000"
  }
},
{
  "abbreviated_commit": "d2b496d",
  "subject": "Add a changelog",
  "body": "This commit adds a script that will generate a changelog based on the\ncommit history on each deploy. The output of the script is run through\nthe markdown parser and the output of that is  used to replace a\n`{CHANGELOG}` placeholder in a `template.html` file.\n\nThe html is styled with a markdown stylesheet heavily inspired (read\ncopied, then modified) from https://github.com/mrcoles/markdown-css so\nit looks like markdown again. Lastly, all links are found and made into\nanchor tags with linkify because I don't want to write markdown-style\nlinks in commit messages (https://github.com/SoapBox/linkifyjs/).\n\nCrazy stuff.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 4 Sep 2017 05:00:08 +0000"
  }
},
{
  "abbreviated_commit": "5ba8831",
  "subject": "Stop scorching retinas after midnight",
  "body": "An unfortunate oversigt disabled automatic darkmode after midnight\nbecause by then, the sun hasn't set yet. Now we check if the time is\nbefore sunrise to avoid that.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 4 Sep 2017 05:00:02 +0000"
  }
},
{
  "abbreviated_commit": "d6d9daa",
  "subject": "Use `fetch` polyfill so IE users stop whining",
  "body": "This patch introduces a `fetch` polyfill from github:\nhttps://github.com/github/fetch. This will make one user in\nparticular very happy because otherwise IE would break when preferring\ndarkmode and the setting wouldn't be stored.\n\nNow go make an issue on SubtitleEdit:\nhttps://github.com/SubtitleEdit/subtitleedit\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 4 Sep 2017 04:59:55 +0000"
  }
},
{
  "abbreviated_commit": "98dbe57",
  "subject": "Remove a bunch of unused code",
  "body": "From a time where darkmode (tm) was still in development.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 1 Sep 2017 19:03:16 +0200"
  }
},
{
  "abbreviated_commit": "763ad4a",
  "subject": "Use `DOMContentLoaded` instead of `window.onload`",
  "body": "When overwriting `window.onload` function more than once the last\noverwrite wins :>\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 1 Sep 2017 18:59:35 +0200"
  }
},
{
  "abbreviated_commit": "16398a9",
  "subject": "Use class based way of changing color scheme",
  "body": "Previously we disabled a stylesheet to enable darkmode. That required\nstylesheets to be included in a special order in `index.html`. Ugh.\n\nThis patch gives `<body>` either a `light` or `dark` value for the class\nattribute instead. Removes the need for special inclusion order and\nmakes the code to switch simpler. Yay \o/\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 1 Sep 2017 18:52:13 +0200"
  }
},
{
  "abbreviated_commit": "b6a8f60",
  "subject": "Add a bit of statistics",
  "body": "My curiosity got the best of me and this patch adds this functionality:\n\n* When jwt.show decodes a token it requests `/stats/decode.html`.\n* When a user indicates darkmode preference a request is made to either\n`/stats/prefer-darkmode-true.html` or `/stats/prefer-darkmode-false.html`.\n\nThis enables me - and you - to see how many decodes jwt.show and what\npeople prefer, darkmode-wise. Have a look here: https://jwt.show/hygge.html\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 26 Aug 2017 23:26:54 +0200"
  }
},
{
  "abbreviated_commit": "228d4a3",
  "subject": "Add highlighting and darkmode",
  "body": "Due to popular demand the decoded jwt payload is now syntax highlighted\nwith help from https://highlightjs.org.\n\nA new dark mode will kick in by sunset to be easier on the retinas out\nthere. It works by getting the client's location through\nhttp://ipinfo.io/json, then the lat- and longitude is fed to `suncalc`\n(https://github.com/mourner/suncalc) to get the time for when the sunset\nbegins at the client's location. If the sun has begun to set, the\ndarkmode is activated.\n\nIt's also possible to always use the darkmode by checking the \"Prefer\ndarkmode\" box in the bottom of the screen. The preference is saved in\nthe browser's `localStorage`.\n\nClear your caches ppl.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 26 Aug 2017 23:26:45 +0200"
  }
},
{
  "abbreviated_commit": "2f30166",
  "subject": "Make time-remaining string prettier",
  "body": "Previously, the expiration string could look like this \"1:1\" for one\nhour and one minute. How ugly is that? This patch makes it look like\n\"01:01\" instead. Killer.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 26 Aug 2017 20:33:01 +0200"
  }
},
{
  "abbreviated_commit": "551a8de",
  "subject": "Add meta tags",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 9 Aug 2017 11:12:14 +0000"
  }
},
{
  "abbreviated_commit": "d6b6192",
  "subject": "Make expiration info easier on the eyes",
  "body": "Make the information more glancable by removing text and parenthesis.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Tue, 8 Aug 2017 07:54:08 +0000"
  }
},
{
  "abbreviated_commit": "93becae",
  "subject": "Add more info about the site and jwt in general",
  "body": "Know more: decoding is done entirely client side and a list of\nregistered claim names and their meaning is shown on the page.\n\nRead less: green text for not-yet expired tokens and red text for\nexpired tokens.\n\nEasier on the eyes: visited links are now blue to add more uniformity to the way the\npage looks and the text is never wider than 80 characters.\n\nThrew a jab at jwt.io in there for good measure.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 7 Aug 2017 23:03:08 +0200"
  }
},
{
  "abbreviated_commit": "2160e14",
  "subject": "Treat the empty string as a special case",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 17:59:21 +0200"
  }
},
{
  "abbreviated_commit": "410c02b",
  "subject": "Add link to the jwt rfc",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 17:56:01 +0200"
  }
},
{
  "abbreviated_commit": "5c786de",
  "subject": "Turn off autocomplete",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 17:52:47 +0200"
  }
},
{
  "abbreviated_commit": "27f6d89",
  "subject": "Listen on keydown",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 17:51:01 +0200"
  }
},
{
  "abbreviated_commit": "2e33095",
  "subject": "Add favicon",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 17:47:44 +0200"
  }
},
{
  "abbreviated_commit": "2bdb014",
  "subject": "Clear countdown from previous jwt",
  "body": "When pasting an invalid jwt or a jwt without \"exp\", we would still display the\ncountdown from the previous jwt. This patch fixes that.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 06:56:10 +0000"
  }
},
{
  "abbreviated_commit": "5b6563f",
  "subject": "Make deploy script include js and css files",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 7 Jul 2017 21:43:08 +0000"
  }
},
{
  "abbreviated_commit": "ba0ff72",
  "subject": "Add countdown to expiration",
  "body": "This patch introduces a countdown to the time where the token expires\n(according to \"exp\" in the token, if it exists).\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 7 Jul 2017 23:37:41 +0200"
  }
},
{
  "abbreviated_commit": "81ac44e",
  "subject": "Separate html, css, and js to their own files",
  "body": "\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 7 Jul 2017 23:13:09 +0200"
  }
},
{
  "abbreviated_commit": "2bcb7f6",
  "subject": "Add deploy script",
  "body": "Add a simple deploy script to make it a bit simpler to update the site.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 5 Jul 2017 22:42:36 +0200"
  }
},
{
  "abbreviated_commit": "99615e1",
  "subject": "Add support for passing jwt in the query string",
  "body": "With this patch we take a look in the url, if there's a query string\nparameter called `jwt`, we decode its value immediately, eliminating the\nneed for pasting the token.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 5 Jul 2017 22:31:05 +0200"
  }
},
{
  "abbreviated_commit": "023c24f",
  "subject": "Add README.md link",
  "body": "Add a link to the readme file on github so folks can file issues and\ngenerally have their curiosity satisfied.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 5 Jul 2017 22:08:59 +0200"
  }
},
{
  "abbreviated_commit": "7624d63",
  "subject": "Merge pull request #6 from tmadsen/feature/utf8",
  "body": "Properly decode utf-8 characters\n",
  "author": {
    "name": "GitHub",
    "email": "noreply@github.com",
    "date": "Wed, 5 Jul 2017 21:56:43 +0200"
  }
},
{
  "abbreviated_commit": "fab424c",
  "subject": "Properly decode utf-8 characters",
  "body": "This patch provides support for utf-8 characters in strings through a\ncombination of `decodeUriComponent` and `escape`. The method is\ndescribed [here][1] and further detailed [here][2].\n\n[1]: http://ecmanaut.blogspot.dk/2006/07/encoding-decoding-utf8-in-javascript.html\n[2]: http://monsur.hossa.in/2012/07/20/utf-8-in-javascript.html\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 5 Jul 2017 21:53:11 +0200"
  }
},
{
  "abbreviated_commit": "09e55ba",
  "subject": "The simplest page for showing a jwt payload",
  "body": "Paste a jwt into the input field and see the payload below it. All decoding is\ndone client side.\n",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Tue, 4 Jul 2017 11:19:43 +0000"
  }
},
]}
