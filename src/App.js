import { Component } from './core/Component';
import './components/templates/header';
import { routes } from './constans/routes';
import './components/pages/BlogPage';
import './components/pages/CartPage';
import './components/pages/CatalogPage';
import './components/pages/ContactsPage';
import './components/pages/ErrorPage';
import { appCategories } from './constans/appCategories';
import './components/molecules/Footer';

class App extends Component {
  render() {
    const pathname = window.location.pathname;

    return `
    <div class="main-layout">
      <it-shop-header categories='${JSON.stringify(appCategories)}'></it-shop-header> 
      <main>
        
          ${
            routes.find((route) => route.href === pathname)?.component ??
            '<error-page></error-page>'
          }
         
      </main>
    <it-footer></it-footer>
    </div>
`;
  }
}

customElements.define('it-app', App);
