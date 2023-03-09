import { Component } from '../../../core/Component';
import '../../molecules/Sidebar';
import '../../organisms/CardList';
import { PRODUCTS } from '../../../constans/products';

class CatalogPage extends Component {
  render() {
    return `
    <div class="container mt-5 pt-5 border-top">
      <div class="row">
          <div class="col-sm-3 border-end">
            <it-sidebar></it-sidebar>
          </div>
        <div class="col-sm-9">  
          <it-card-list products='${JSON.stringify(PRODUCTS)}'></it-card-list>
        </div>
      </div>
    </div>
        `;
  }
}

customElements.define('catalog-page', CatalogPage);
