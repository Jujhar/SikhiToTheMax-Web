import { h } from '../util';

export default function Hukam (target) {
  target.innerHTML = '';
  target.appendChild(
    h('div', { }, 'Hukam')
  );
}
