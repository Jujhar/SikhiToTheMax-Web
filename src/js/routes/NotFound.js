import { h } from '../util';

export default function NotFound (target) {
  target.innerHTML = '';
  target.appendChild(
    h('div', { }, 'These are not the singhs you are looking for')
  );
}
