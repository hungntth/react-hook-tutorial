import React from "react";
import "react-image-lightbox/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import AddNewProduct from "./components/AddNewProduct";
import Home from "./components/Home";
import Nav from "./components/Navigation/Nav";
import OTP from "./components/OTP/OTP";
import Product from "./components/Products/Product";
import Weather from "./components/Weather/Weather";
import logo from "./logo.svg";

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header content-left">
              <div style={{ textAlign: "center" }}>
                <img src={logo} className="App-logo" alt="logo" />
              </div>

              <Home />
            </header>
            <div className="content-right">
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/about">
          <div>about</div>
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="*">
          <div>404 Not Found!</div>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
