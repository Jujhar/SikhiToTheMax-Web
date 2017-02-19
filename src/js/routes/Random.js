import { h } from '../util';

export default function Random (target) {
  target.innerHTML = '';
  target.appendChild(
    h('div', { }, 'Random')
  );
}
