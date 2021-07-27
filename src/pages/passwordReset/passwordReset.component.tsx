import React, { useState } from 'react';

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
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return;

    console.log('RESET');
  };

  return (
    <SignInUpContainer>
      <SignInUpTitle>Mr.Pill</SignInUpTitle>
      <LogoContainer>
        <img src='/assets/logo xl.png' alt='Pills' />
      </LogoContainer>
      <SignInUpForm onSubmit={handleSubmit}>
      <SubTitle>Enter your email for instructions on resetting your password</SubTitle>
        <FormInput
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
        />
        {isSuccess ? <SuccessMessageContainer>The email with instructions has been sent!</SuccessMessageContainer> : null}
        <ErrorMessageContainer></ErrorMessageContainer>
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
