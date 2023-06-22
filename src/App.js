import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import ProductDetail from './ProductDetail';
import './App.css';

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/products" className="nav-link">
          Recipes
        </Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;