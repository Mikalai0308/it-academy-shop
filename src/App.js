import { Component } from './core/Component';
import './components/organisms/header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return `
      <it-shop-header></it-shop-header>
`;
  }
}

customElements.define('it-app', App);
