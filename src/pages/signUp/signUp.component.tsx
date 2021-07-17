import React, { useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';

import {
  SignInUpContainer,
  SignInUpTitle,
  LogoContainer,
  SignInUpForm,
  FormInput,
  ErrorMessageContainer,
  CustomButton,
  SubText,
  SignInUpLink,
} from '../../components/signInUp/signInUp.styles';

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { signUp } = useAuth()!;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {email, password, confirmPassword} = userCredentials;
    
    if(password !== confirmPassword){
      console.error(`Passwords don't match`);
    }

    signUp(email, password, userCredentials.displayName);
  };

  return (
    <SignInUpContainer>
      <SignInUpTitle>Mr.Pill</SignInUpTitle>
      <LogoContainer>
        <img src="/assets/logo xl.png" alt="Pills" />
      </LogoContainer>
      <SignInUpForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          placeholder="Display Name (optional)"
          onChange={handleChange}
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        <ErrorMessageContainer>Passwords don't match!</ErrorMessageContainer>
        <CustomButton>Sign Up!</CustomButton>
      </SignInUpForm>
      <SubText>
        Already have an account?
        <SignInUpLink to="/signin">Sign In!</SignInUpLink>
      </SubText>
    </SignInUpContainer>
  );
};

export default SignUp;
