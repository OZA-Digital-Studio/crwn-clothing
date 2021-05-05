import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
// import { auth } from "../../firebase/firebase.utils";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
// import { signInWithGoogle } from "../../redux/user/user.sagas";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

// CLASS COMPONENT _ BEFORE REFACTORING WITH HOOKS

// class SignIn extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   handleChange = (event) => {
//     const { value, name } = event.target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const { emailSignInStart } = this.props;
//     const { email, password } = this.state;

//     emailSignInStart(email, password);

//     // try {
//     //   await auth.signInWithEmailAndPassword(email, password);
//     //   this.setState({ email: "", password: "" });
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };

//   render() {
//     const { googleSignInStart } = this.props;

//     return (
//       <div className="sign-in">
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>
//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             label="email"
//             name="email"
//             type="email"
//             value={this.state.email}
//             onChange={this.handleChange}
//             required
//           />
//           <FormInput
//             label="password"
//             name="password"
//             type="password"
//             value={this.state.password}
//             onChange={this.handleChange}
//             required
//           />
//           <div className="buttons">
//             <CustomButton type="submit">Sign in</CustomButton>
//             <CustomButton
//               type="button"
//               onClick={googleSignInStart}
//               isGoogleSignIn
//             >
//               Sign in with Google
//             </CustomButton>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
