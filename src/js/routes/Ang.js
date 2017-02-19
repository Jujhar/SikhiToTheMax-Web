import { h } from '../util';

export default function Ang (target) {
  target.innerHTML = '';
  target.appendChild(
    h('div', { }, 'Ang')
  );
}
