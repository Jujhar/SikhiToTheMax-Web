import home from './Home';
import NotFound from './NotFound';
import search from './Search';
import random from './Random';
import hukam from './Hukam';
import about from './About';
import privacy from './Privacy';
import termsofservice from './TermsOfService';
import ang from './Ang';
import shabad from './Shabad';

export const routes = {
  home,
  search,
  random,
  hukam,
  about,
  privacy,
  termsofservice,
  ang,
  shabad,
};

export function matches(pathname) {
  return new Promise ((yes, no) => {
    if (pathname === '/') {
      yes(home);
    } else if (typeof routes[pathname.split('/')[1]] === 'function') {
      yes(routes[pathname.split('/')[1]]);
    } else {
      no(NotFound);
    }
  });
}
