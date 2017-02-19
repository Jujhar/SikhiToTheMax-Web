import { h } from '../util';

export default function Shabad (target) {
  target.innerHTML = '';
  target.appendChild(
    h('div', { }, 'Shabad')
  );
}
