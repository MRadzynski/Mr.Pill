import React, { useState } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
  SignInUpContainer,
  SignInUpTitle,
  LogoContainer,
  SignInUpForm,
  FormInput,
  ForgotPassword,
  ErrorMessageContainer,
  CustomButton,
  SubText,
  SignInUpLink,
} from '../../components/signInUp/signInUp.styles';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = userCredentials;

    auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <SignInUpContainer>
      <SignInUpTitle>Mr.Pill</SignInUpTitle>
      <LogoContainer>
        <img src="/assets/logo xl.png" alt="Pills" />
      </LogoContainer>
      <SignInUpForm onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <ForgotPassword>Forgot password?</ForgotPassword>
        <ErrorMessageContainer>
          Incorrect email or password!
        </ErrorMessageContainer>
        <CustomButton type="submit">Sign In!</CustomButton>
        <CustomButton type="button" onClick={signInWithGoogle} isGoogle>
          Sign In with Google!
        </CustomButton>
      </SignInUpForm>
      <SubText>
        Don't have an account? <SignInUpLink to="/signup">Sign Up!</SignInUpLink>
      </SubText>
    </SignInUpContainer>
  );
};

export default SignIn;
