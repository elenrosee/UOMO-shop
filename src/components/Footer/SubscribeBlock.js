import { Breakpoints, MQ } from "common";
import { PaymentsCompanysSvg } from "icons/PaymentsCompanysSvg";
import { useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 345px;

  padding-bottom: 40px;

  margin-right: auto;
  margin-left: auto;

  ${MQ(Breakpoints.md)} {
    margin: 0;
  }
`;

export const Title = styled.h4`
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;

  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  position: relative;
  width: 100%;

  margin-bottom: 40px;
`;

export const Input = styled.input`
  position: relative;
  width: 345px;
  height: 55px;

  border: none;

  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 70px;
`;

export const InputBtn = styled.input`
  position: absolute;
  height: 100%;

  right: 20px;
  top: 0;

  border: none;
  background-color: transparent;
`;

export const SecureText = styled.p`
  font-weight: 500;
  font-size: 15px;

  margin-bottom: 10px;
`;

export const SubscribeBlock = () => {
  const [email, setEmail] = useState("");

  const handleChange = ({ target: { value } }) => setEmail(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form submited");

    // if (email.length === 0) {
    //   setEmailError(true)
    // } else {
    //   setEmailError(false)
    // }

    if (email.length > 0) {
      // e.currentTarget.name === 'login'
      //   ? dispatch(logIn({ email, password }))
      //   : dispatch(register({ email, password }))

      setEmail("");
    }
  };

  return (
    <Wrapper>
      <Title>Subscribe</Title>
      <Text>
        Be the first to get the latest news about trends, promotions, and much
        more!
      </Text>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Your email address"
        />
        <InputBtn type="submit" value="JOIN" />
      </Form>
      <SecureText>Secure payments</SecureText>
      <PaymentsCompanysSvg />
    </Wrapper>
  );
};
