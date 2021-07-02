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
  } from '../signIn/signIn.styles';

const SignUp = () => (
    <SignInContainer>
    <SignInTitle>Mr.Pill</SignInTitle>
    <LogoContainer>
      <img src="/assets/logo xl.png" alt="Pills" />
    </LogoContainer>
    <SignInForm onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <FormInput type='email' placeholder='Display Name (optional)' required/>
        <FormInput type='email' placeholder='Email' required/>
        <FormInput type='password' placeholder='Password' required/>
        <FormInput type='password' placeholder='Confirm Password' required/>
        <CustomButton>Sign Up!</CustomButton>
    </SignInForm>
    <SubText>Already have an account? Sign In!</SubText>
  </SignInContainer>
);

export default SignUp;