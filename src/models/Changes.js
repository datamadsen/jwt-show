export const Changes = { commits: [
{
  "abbreviated_commit": "537f912",
  "subject": "Bash, not sh",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 26 Aug 2018 17:09:02 +0200"
  }
},
{
  "abbreviated_commit": "f456c51",
  "subject": "rename",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 26 Aug 2018 17:05:47 +0200"
  }
},
{
  "abbreviated_commit": "a55ad33",
  "subject": "changes to deploy script",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 26 Aug 2018 17:05:02 +0200"
  }
},
{
  "abbreviated_commit": "3f319cd",
  "subject": "changes to deploy script",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 26 Aug 2018 17:01:54 +0200"
  }
},
{
  "abbreviated_commit": "4cd6a6f",
  "subject": "Add x flag to deploy.sh",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sun, 26 Aug 2018 16:59:53 +0200"
  }
},
{
  "abbreviated_commit": "c1818c3",
  "subject": "Mithril edition of jwt.show",
  "body": "The initial version of jwt.show was thrown together very quickly and uses some older techniques for manipulating the DOM in order to achieve showing a decoded jwt, counting down, copying to clipboard, etc. It certainly works, but I wondered what was on the other side of the fence, both in ES6 and virtual DOM land. This commit takes the first version of jwt.show and implements it in ES6 with [mithril][1] as the framework. There's undoubtedly still room for improvement but it feels much nicer than the old code base and I hope it will be easier to build new features on top of it in the future :-) [1]: http://mithril.js.org",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 1 Aug 2018 22:40:35 +0200"
  }
},
{
  "abbreviated_commit": "dbd4175",
  "subject": "Replace query string sharing with hash and add copy",
  "body": "Previously it was possible to share jwts with a value for a `jwt` query string parameter. This is no longer possible because it showed up in nginx logs and I'm not interested in anything like that. The hash part of a url is not logged which is a better option for jwt.show. We also add a \"Copy share link to clipboard\" and create a bit of room between the buttons and the `#encoded` field.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 16 Jul 2018 17:57:20 +0200"
  }
},
{
  "abbreviated_commit": "3dcf8e0",
  "subject": "Add todo.md",
  "body": "The todo with inspiration for future development is added.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 18 Jun 2018 14:37:22 +0200"
  }
},
{
  "abbreviated_commit": "dc0db90",
  "subject": "Add donation link",
  "body": "A donation link is added so people who'd like to support jwt.show can.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 18 Jun 2018 14:32:58 +0200"
  }
},
{
  "abbreviated_commit": "9d22d3d",
  "subject": "Add copy token to clipboard",
  "body": "We add a button so people don't use a clipboard manager can copy a token that they have previsouly pasted. A nice clipboard manager on windows is clipx (https://bluemars.org/clipx/) and a nice one for mac is pastebot (https://tapbots.com/pastebot/).",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Thu, 19 Apr 2018 05:30:24 +0000"
  }
},
{
  "abbreviated_commit": "388b35c",
  "subject": "Add `hreflang` to please search engines",
  "body": "The more people who find jwt.show when looking to decode jwt tokens online, the happier the world will be.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 2 Sep 2017 20:40:39 +0200"
  }
},
{
  "abbreviated_commit": "f1f5d37",
  "subject": "Ignore changelog/index.html",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 1 Sep 2017 22:03:58 +0000"
  }
},
{
  "abbreviated_commit": "ef31ae0",
  "subject": "Bring darkmode to /changelog",
  "body": "Because why not?",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 1 Sep 2017 23:51:47 +0200"
  }
},
{
  "abbreviated_commit": "69ca4aa",
  "subject": "Move around a bunch of files",
  "body": "Trying to establish a bit of order.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 1 Sep 2017 23:36:10 +0200"
  }
},
{
  "abbreviated_commit": "d2b496d",
  "subject": "Add a changelog",
  "body": "This commit adds a script that will generate a changelog based on the commit history on each deploy. The output of the script is run through the markdown parser and the output of that is used to replace a `{CHANGELOG}` placeholder in a `template.html` file. The html is styled with a markdown stylesheet heavily inspired (read copied, then modified) from https://github.com/mrcoles/markdown-css so it looks like markdown again. Lastly, all links are found and made into anchor tags with linkify because I don't want to write markdown-style links in commit messages (https://github.com/SoapBox/linkifyjs/). Crazy stuff.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 28 Aug 2017 08:38:55 +0200"
  }
},
{
  "abbreviated_commit": "5ba8831",
  "subject": "Stop scorching retinas after midnight",
  "body": "An unfortunate oversigt disabled automatic darkmode after midnight because by then, the sun hasn't set yet. Now we check if the time is before sunrise to avoid that.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 1 Sep 2017 20:37:30 +0200"
  }
},
{
  "abbreviated_commit": "d6d9daa",
  "subject": "Use `fetch` polyfill so IE users stop whining",
  "body": "This patch introduces a `fetch` polyfill from github: https://github.com/github/fetch. This will make one user in particular very happy because otherwise IE would break when preferring darkmode and the setting wouldn't be stored. Now go make an issue on SubtitleEdit: https://github.com/SubtitleEdit/subtitleedit",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 1 Sep 2017 20:11:07 +0200"
  }
},
{
  "abbreviated_commit": "98dbe57",
  "subject": "Remove a bunch of unused code",
  "body": "From a time where darkmode (tm) was still in development.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 1 Sep 2017 19:03:16 +0200"
  }
},
{
  "abbreviated_commit": "763ad4a",
  "subject": "Use `DOMContentLoaded` instead of `window.onload`",
  "body": "When overwriting `window.onload` function more than once the last overwrite wins :>",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 1 Sep 2017 18:59:35 +0200"
  }
},
{
  "abbreviated_commit": "16398a9",
  "subject": "Use class based way of changing color scheme",
  "body": "Previously we disabled a stylesheet to enable darkmode. That required stylesheets to be included in a special order in `index.html`. Ugh. This patch gives `<body>` either a `light` or `dark` value for the class attribute instead. Removes the need for special inclusion order and makes the code to switch simpler. Yay \o/",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 1 Sep 2017 18:52:13 +0200"
  }
},
{
  "abbreviated_commit": "b6a8f60",
  "subject": "Add a bit of statistics",
  "body": "My curiosity got the best of me and this patch adds this functionality: deploy.sh favicon.ico index.html node_modules package.json readme.md src styles.scss tags test tools yarn.lock When jwt.show decodes a token it requests `/stats/decode.html`. deploy.sh favicon.ico index.html node_modules package.json readme.md src styles.scss tags test tools yarn.lock When a user indicates darkmode preference a request is made to either `/stats/prefer-darkmode-true.html` or `/stats/prefer-darkmode-false.html`. This enables me - and you - to see how many decodes jwt.show and what people prefer, darkmode-wise. Have a look here: https://jwt.show/hygge.html",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 26 Aug 2017 23:06:06 +0200"
  }
},
{
  "abbreviated_commit": "228d4a3",
  "subject": "Add highlighting and darkmode",
  "body": "Due to popular demand the decoded jwt payload is now syntax highlighted with help from https://highlightjs.org. A new dark mode will kick in by sunset to be easier on the retinas out there. It works by getting the client's location through http://ipinfo.io/json, then the lat- and longitude is fed to `suncalc` (https://github.com/mourner/suncalc) to get the time for when the sunset begins at the client's location. If the sun has begun to set, the darkmode is activated. It's also possible to always use the darkmode by checking the \"Prefer darkmode\" box in the bottom of the screen. The preference is saved in the browser's `localStorage`. Clear your caches ppl.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 26 Aug 2017 14:33:54 +0200"
  }
},
{
  "abbreviated_commit": "2f30166",
  "subject": "Make time-remaining string prettier",
  "body": "Previously, the expiration string could look like this \"1:1\" for one hour and one minute. How ugly is that? This patch makes it look like \"01:01\" instead. Killer.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Sat, 26 Aug 2017 06:09:24 +0000"
  }
},
{
  "abbreviated_commit": "551a8de",
  "subject": "Add meta tags",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 9 Aug 2017 11:12:14 +0000"
  }
},
{
  "abbreviated_commit": "d6b6192",
  "subject": "Make expiration info easier on the eyes",
  "body": "Make the information more glancable by removing text and parenthesis.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Tue, 8 Aug 2017 07:54:08 +0000"
  }
},
{
  "abbreviated_commit": "93becae",
  "subject": "Add more info about the site and jwt in general",
  "body": "Know more: decoding is done entirely client side and a list of registered claim names and their meaning is shown on the page. Read less: green text for not-yet expired tokens and red text for expired tokens. Easier on the eyes: visited links are now blue to add more uniformity to the way the page looks and the text is never wider than 80 characters. Threw a jab at jwt.io in there for good measure.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 7 Aug 2017 22:50:20 +0200"
  }
},
{
  "abbreviated_commit": "2160e14",
  "subject": "Treat the empty string as a special case",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 17:56:28 +0200"
  }
},
{
  "abbreviated_commit": "410c02b",
  "subject": "Add link to the jwt rfc",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 17:56:01 +0200"
  }
},
{
  "abbreviated_commit": "5c786de",
  "subject": "Turn off autocomplete",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 17:52:47 +0200"
  }
},
{
  "abbreviated_commit": "27f6d89",
  "subject": "Listen on keydown",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 17:51:01 +0200"
  }
},
{
  "abbreviated_commit": "2e33095",
  "subject": "Add favicon",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 17:45:23 +0200"
  }
},
{
  "abbreviated_commit": "2bdb014",
  "subject": "Clear countdown from previous jwt",
  "body": "When pasting an invalid jwt or a jwt without \"exp\", we would still display the countdown from the previous jwt. This patch fixes that.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Mon, 10 Jul 2017 06:56:10 +0000"
  }
},
{
  "abbreviated_commit": "5b6563f",
  "subject": "Make deploy script include js and css files",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 7 Jul 2017 21:43:08 +0000"
  }
},
{
  "abbreviated_commit": "ba0ff72",
  "subject": "Add countdown to expiration",
  "body": "This patch introduces a countdown to the time where the token expires (according to \"exp\" in the token, if it exists).",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 7 Jul 2017 23:37:41 +0200"
  }
},
{
  "abbreviated_commit": "81ac44e",
  "subject": "Separate html, css, and js to their own files",
  "body": "",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Fri, 7 Jul 2017 23:13:09 +0200"
  }
},
{
  "abbreviated_commit": "2bcb7f6",
  "subject": "Add deploy script",
  "body": "Add a simple deploy script to make it a bit simpler to update the site.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 5 Jul 2017 20:41:12 +0000"
  }
},
{
  "abbreviated_commit": "99615e1",
  "subject": "Add support for passing jwt in the query string",
  "body": "With this patch we take a look in the url, if there's a query string parameter called `jwt`, we decode its value immediately, eliminating the need for pasting the token.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 5 Jul 2017 22:26:55 +0200"
  }
},
{
  "abbreviated_commit": "023c24f",
  "subject": "Add README.md link",
  "body": "Add a link to the readme file on github so folks can file issues and generally have their curiosity satisfied.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 5 Jul 2017 22:06:54 +0200"
  }
},
{
  "abbreviated_commit": "7624d63",
  "subject": "Merge pull request #6 from tmadsen/feature/utf8",
  "body": "Properly decode utf-8 characters",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 5 Jul 2017 21:56:43 +0200"
  }
},
{
  "abbreviated_commit": "fab424c",
  "subject": "Properly decode utf-8 characters",
  "body": "This patch provides support for utf-8 characters in strings through a combination of `decodeUriComponent` and `escape`. The method is described [here][1] and further detailed [here][2]. [1]: http://ecmanaut.blogspot.dk/2006/07/encoding-decoding-utf8-in-javascript.html [2]: http://monsur.hossa.in/2012/07/20/utf-8-in-javascript.html",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Wed, 5 Jul 2017 21:05:02 +0200"
  }
},
{
  "abbreviated_commit": "09e55ba",
  "subject": "The simplest page for showing a jwt payload",
  "body": "Paste a jwt into the input field and see the payload below it. All decoding is done client side.",
  "author": {
    "name": "Tim M. Madsen",
    "email": "tim@tmadsen.com",
    "date": "Tue, 4 Jul 2017 10:48:02 +0000"
  }
},
]}
