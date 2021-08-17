import React, { useState } from 'react';

import { useAuth } from '../../contexts/AuthContext';

import {
  SignInUpContainer,
  SignInUpTitle,
  LogoContainer,
  SignInUpForm,
  FormInput,
  SuccessMessageContainer,
  ErrorMessageContainer,
  CustomButton,
  SubTitle,
  SubText,
  SignInUpLink,
} from '../../components/signInUp/signInUp.styles';

const PasswordReset = () => {
  const { resetPassword } = useAuth()!;

  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
        e.preventDefault();
        setIsSuccess(false);
        setIsError(false);
        setErrorMessage('');

      if (!email) return;

      await resetPassword(email);
      setIsSuccess(true);
    } catch (error) {
        setIsError(true);
        if(error.code === 'auth/user-not-found'){
            setErrorMessage('There is no account at this email!');
        }
      console.log(error);
    }
  };

  return (
    <SignInUpContainer>
      <SignInUpTitle>Mr.Pill</SignInUpTitle>
      <LogoContainer>
        <img src='/assets/logo xl.png' alt='Pills' />
      </LogoContainer>
      <SignInUpForm onSubmit={handleSubmit}>
        <SubTitle>
          Enter your email for instructions on resetting your password
        </SubTitle>
        <FormInput
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
        />
        {isSuccess ? (
          <SuccessMessageContainer>
            The email with instructions has been sent!
          </SuccessMessageContainer>
        ) : null}
        {isError ? (
          <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
        ) : null}

        <CustomButton type='submit'>Reset Password</CustomButton>
      </SignInUpForm>
      <SubText>
        Don't have an account?
        <SignInUpLink to='/signup'>Sign Up!</SignInUpLink>
      </SubText>
    </SignInUpContainer>
  );
};

export default PasswordReset;
