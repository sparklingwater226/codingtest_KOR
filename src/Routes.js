import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList";
import ShoppingCart from "./Pages/ShoppingCart";
// import ReactGA from "react-ga";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
            exact path='/'
            render={() => <Redirect to='/home' />}
        />
        <Route path="/home" component={Home} />
        <Route path="/beerlist" component={BeerList} />
        <Route path="/shoppingcart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
};

export default Routes;
