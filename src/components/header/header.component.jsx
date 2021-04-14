import React from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import {createStructuredSelector} from 'reselect';

import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import {selectCartHidden} from '../../redux/cart/cart-selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import {HeaderContainer, LogoContainer, OptionsContainer, Option} from './header.styles';


const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <Option to="/shop">
        SHOP
      </Option>
      <Option to="/contact">
        CONTACT
      </Option>
      {currentUser ? (
        <Option as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </Option>
      ) : (
        <Option to="/login">
          SIGN IN
        </Option>
      )}
      <CartIcon/>
    </OptionsContainer>
   {
     hidden? null : <CartDropdown/>}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
