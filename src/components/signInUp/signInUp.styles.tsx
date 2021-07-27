import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface SignInInterface {
  isGoogle?: boolean;
}

export const SignInUpContainer = styled.div`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 2fr 3fr 4fr 1fr;
  grid-template-areas:
    '.     title     .'
    '.     logo      .'
    '.     form      .'
    '.     footer    .';
`;

export const SignInUpTitle = styled.h1`
  grid-area: title;
  place-self: center;
  color: white;
  font-size: 4.4rem;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const LogoContainer = styled.div`
  width: 50vw;
  grid-area: logo;
  place-self: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SignInUpForm = styled.form`
  width: 70vw;
  margin: 0 auto;
  grid-area: form;
  display: flex;
  flex-direction: column;
  place-self: center;
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  border: 0;
  border-bottom: 1px solid white;
  outline: 0;
  font-size: 1.6rem;
  line-height: 2.2rem;
  background-color: var(--primary-color);
  color: white;
  caret-color: white;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    background-clip: content-box !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    color: white;
    font-size: 1.3rem;
    letter-spacing: 0.15rem;
  }

  &[type='password'] {
    letter-spacing: 0.5rem;
  }
`;

export const ForgotPassword = styled.p`
  position: relative;
  top: -1rem;
  text-align: right;
  text-decoration: underline;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fabd42;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export const ErrorMessageContainer = styled.span`
  margin: -0.5rem auto;
  color: #ff3333;
  font-weight: bold;
  text-align:center;
  display: flex;
`;

export const SuccessMessageContainer = styled.span`
  margin: -0.5rem auto 1rem auto;
  color: #18938d;
  font-weight: bold;
  text-align:center;
  display: flex;
`;

export const CustomButton = styled.button<SignInInterface>`
  width: 50vw;
  height: 3rem;
  margin-bottom: 1rem;
  border: 0;
  border-radius: 25px;
  place-self: center;
  background-color: white;
  color: #5db071;
  font-size: 1.2rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  :first-of-type {
    margin-top: 1rem;
  }

  :hover {
    background-color: #66d178;
    color: white;
  }
`;

export const SubText = styled.footer`
  grid-area: footer;
  place-self: center;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SubTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: white;
  text-align:center;
  text-shadow: 0 4px 4px rgba(0,0,0,0.25);
`;

export const SignInUpLink = styled(Link)`
  color: #fabd42;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
`;
