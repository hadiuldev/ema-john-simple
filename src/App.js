import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Notfound from './components/notFound/Notfound';
import Inventory from './components/Inventory/Inventory';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
    <Header></Header>
    <Router>
      <Switch>
        <Route path="/shop">
        <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route><Route  path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetails></ProductDetails>
        </Route>
        <Route path="*">
          <Notfound></Notfound>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
