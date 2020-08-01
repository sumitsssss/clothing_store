import React, { useState } from "react";
import "./signin.styles.scss";
import FormInput from "../Form-Input/form-input.component";
import CustomButton from "../Custom-Button/custom-button.component";
import { auth, signInWithGoogle } from "../../Firebase/Firebase.utils";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleClick = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setForm((prevValue) => {
      //  Magical Idea for me.
      return { ...form, [name]: value };
    });
  };
  const { email, password } = form;
  return (
    <div className="sign-in">
      <h1 className="title">I have already an account</h1>
      <span>Sign with your email and password</span>
      <form onSubmit={handleClick}>
        <FormInput
          type="email"
          name="email"
          label="Email"
          handleChange={handleChange}
          required
          value={email}
        />
        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          label="Password"
          required
          value={password}
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
