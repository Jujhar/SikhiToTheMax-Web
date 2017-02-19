import { h } from '../util';

export default function Home (target) {
  target.innerHTML = '';
  target.appendChild(
    h('div', { }, 'Home')
  );
}
