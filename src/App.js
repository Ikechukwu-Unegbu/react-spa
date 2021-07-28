import {Route} from 'react-router-dom';
import Product from './components/Pages/Product';
import Welcome from './components/Pages/Welcome'
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader/>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/product">
        <Product/>
      </Route>
    </div>
  );
}

export default App;
