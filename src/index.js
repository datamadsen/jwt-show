import m from 'mithril';
import { JwtState } from './models/JwtState';
import { JwtShow } from './views/JwtShow';
import { ChangelogComponent } from './views/ChangelogComponent';

// It is possible to append a hash and a jwt to jwt.show urls.
var hash = window.location.hash;
if (hash) {
  JwtState.encodedJwt = hash.slice(1); // remove the '#' character.
}

m.route.prefix("")
m.route(document.body, '/', {
  '/': JwtShow,
  '/changelog': ChangelogComponent,
});
