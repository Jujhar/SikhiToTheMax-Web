import { matches } from './routes';
import { documentReady } from './util';

function router() {
  // get path
  const { pathname } = location;

  const App = document.getElementById('app');

  // render
  matches(pathname)
    .then(route => route(App))
    .catch(NotFound => NotFound(App));
}

documentReady()
  .then(() => {
    router();
    //$search.focus();
    //updateSearchLang();
  });
