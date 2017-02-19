import { h } from '../util';

export default function About (target) {
  target.innerHTML = '';
  target.appendChild(
    h('div', { }, 'About')
  );
}
