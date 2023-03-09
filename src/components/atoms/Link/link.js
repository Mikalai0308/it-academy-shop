import { Component } from '../../../core/Component';

class Link extends Component {
  static get observedAttributes() {
    return ['class', 'href', 'content'];
  }

  onClick = (evt) => {
    if (!this.props.href) {
      evt.preventDefault();
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onClick);
  }

  render() {
    const className = this.props.class ? this.props.class : '';
    const content = this.props.content;
    const href = this.props.href ? this.props.href : '';

    return `
    <a class="nav-link ${className}" href="${href}">${content}</a>
    `;
  }
}

customElements.define('it-link', Link);
