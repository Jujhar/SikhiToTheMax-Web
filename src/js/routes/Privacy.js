import { h } from '../util';

export default function Privacy (target) {
  target.innerHTML = '';
  target.appendChild(
    h('div', { }, 'Privacy')
  );
}
