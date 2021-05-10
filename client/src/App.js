import React, { useEffect } from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { auth, createUserProfileDocument, addCollectionAndDocuments } from "./firebase/firebase.utils";
// import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.sagas";

import Checkout from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage from "./pages/shop/shop.component";
// import {selectCollectionsForPreview} from './redux/shop/shop.selectors';

import "./App.css";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/login"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
};

// CLASS COMPONETN BEFORE REFACTORING WITH HOOKS
// class App extends React.Component {
//   unsubscribeFromAuth = null;

//   componentDidMount() {
//     const { checkUserSession } = this.props;
//     checkUserSession();

//     // const { setCurrentUser, collectionsArray } = this.props;
//     // const { setCurrentUser } = this.props;

//     // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
//     //   if (userAuth) {
//     //     const userRef = await createUserProfileDocument(userAuth);

//     //     userRef.onSnapshot((snapShot) => {
//     //       setCurrentUser({
//     //         id: snapShot.id,
//     //         ...snapShot.data(),
//     //       });
//     //     });
//     //   }

//     //   setCurrentUser(userAuth);
//     // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
//     // });
//   }

//   componentWillUnmount() {
//     // this.unsubscribeFromAuth();
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Homepage} />
//           <Route
//             exact
//             path="/login"
//             render={() =>
//               this.props.currentUser ? (
//                 <Redirect to="/" />
//               ) : (
//                 <SignInAndSignUpPage />
//               )
//             }
//           />
//           <Route path="/shop" component={ShopPage} />
//           <Route exact path="/checkout" component={Checkout} />
//         </Switch>
//       </div>
//     );
//   }
// }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
  // setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
