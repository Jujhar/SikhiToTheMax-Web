import { h } from '../util';

export default function Search (target) {
  target.innerHTML = '';
  target.appendChild(
    h('div', { }, 'Search')
  );
}
