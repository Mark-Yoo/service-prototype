import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const SignupForm = styled.form`
  width: 100%;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const InputWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  width: 30%;
  height: 20px;
`;

export const Input = styled.input`
  width: 70%;
  height: 20px;
  border: 2px solid black;
  ${(props) => props.emailError && `border: 3px solid red`};
  ${(props) => props.passwordError && `border: 3px solid red`};
`;

export const SubmitButton = styled.button`
  margin: 0 auto;
  width: 200px;
  height: 50px;
`;

export const ErrorAlert = styled.div`
  margin: 0 auto;
  color: red;
  font-size: 20px;
  text-align: center;
`;
