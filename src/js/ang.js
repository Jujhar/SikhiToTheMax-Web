import { renderShabad, metaData } from './renderShabad';
import { buildApiUrl } from './khajana';
import h from './h';

const H3 = children => h('h3', { class: 'text-center' }, children);

//const [ang, source] = ['ang', 'source'].map(v => getParameterByName(v))
export default function loadAng({ ang, source }) {
  $shabad.appendChild(H3('Loading...'));

  fetch(buildApiUrl({ ang, source }))
    .then(data => {
      $shabad.innerHTML = '';
      metaData(data);
      renderShabad(data.page);
    })
    .catch(err => showError(err));
}

function showError(error) {
  $shabad.appendChild(h('h2', { }, [
    h('h3', { class: 'text-center' }, 'Facing some issues')
  ]));
}
