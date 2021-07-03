import React from 'react';

import {
    SignInUpContainer,
    SignInUpTitle,
    LogoContainer,
    SignInUpForm,
    FormInput,
    ErrorMessageContainer,    
    CustomButton,
    SubText,   
    SignInUpLink
  } from '../../components/signInUp/signInUp.styles';

const SignUp = () => (
    <SignInUpContainer>
    <SignInUpTitle>Mr.Pill</SignInUpTitle>
    <LogoContainer>
      <img src="/assets/logo xl.png" alt="Pills" />
    </LogoContainer>
    <SignInUpForm onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <FormInput type='email' placeholder='Display Name (optional)' required/>
        <FormInput type='email' placeholder='Email' required/>
        <FormInput type='password' placeholder='Password' required/>
        <FormInput type='password' placeholder='Confirm Password' required/>
        <ErrorMessageContainer>Passwords don't match!</ErrorMessageContainer>
        <CustomButton>Sign Up!</CustomButton>
    </SignInUpForm>
    <SubText>Already have an account? <SignInUpLink to='/signin'>Sign In!</SignInUpLink></SubText>
  </SignInUpContainer>
);

export default SignUp;