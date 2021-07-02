import React from 'react';

import {
  SignInContainer,
  SignInTitle,
  LogoContainer,
  SignInForm,
  FormInput,
  ForgotPassword,
  CustomButton,
  SubText,
} from './signIn.styles';

const SignIn = () => (
  <SignInContainer>
    <SignInTitle>Mr.Pill</SignInTitle>
    <LogoContainer>
      <img src="/assets/logo xl.png" alt="Pills" />
    </LogoContainer>
    <SignInForm onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <FormInput type='email' placeholder='Email' required/>
        <FormInput type='password' placeholder='Password' required/>
        <ForgotPassword>Forgot password?</ForgotPassword>
        <CustomButton>Sign In!</CustomButton>
        <CustomButton>Sign In with Google!</CustomButton>
    </SignInForm>
    <SubText>Don't have an account? Sign Up!</SubText>
  </SignInContainer>
);

export default SignIn;
