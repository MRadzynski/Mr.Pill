import React from 'react';

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
  SignInUpLink
} from '../../components/signInUp/signInUp.styles';

const SignIn = () => (
  <SignInUpContainer>
    <SignInUpTitle>Mr.Pill</SignInUpTitle>
    <LogoContainer>
      <img src="/assets/logo xl.png" alt="Pills" />
    </LogoContainer>
    <SignInUpForm onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <FormInput type='email' placeholder='Email' required/>
        <FormInput type='password' placeholder='Password' required/>
        <ForgotPassword>Forgot password?</ForgotPassword>
        <ErrorMessageContainer>Incorrect email or password!</ErrorMessageContainer>
        <CustomButton>Sign In!</CustomButton>
        <CustomButton>Sign In with Google!</CustomButton>
    </SignInUpForm>
    <SubText>Don't have an account? <SignInUpLink to='/signup'>Sign Up!</SignInUpLink></SubText>
  </SignInUpContainer>
);

export default SignIn;
