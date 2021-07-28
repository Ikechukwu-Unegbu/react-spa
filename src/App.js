import {Route, Switch} from 'react-router-dom';
import Product from './components/Pages/Product';
import Welcome from './components/Pages/Welcome'
import MainHeader from './components/MainHeader';
import ProductDetail from './components/Pages/ProductDetail';

function App() {
  return (
    <div>
        <MainHeader/>
        <main> 
          <Switch>
          <Route path="/welcome">
            <Welcome/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/product/:productId">
            <ProductDetail/>
          </Route>
          </Switch>
        </main>
    
    </div>
  );
}

export default App;
