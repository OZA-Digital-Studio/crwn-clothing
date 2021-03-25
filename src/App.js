import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import { auth } from "./firebase/firebase.utils";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFomAuth = null;

  componentDidMount() {
    this.unsubscribeFomAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/login" component={SignInAndSignUpPage} />
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
