import { PaymentsCompanysSvg } from "../../icons/PaymentsCompanysSvg";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  Form,
  Input,
  InputBtn,
  SecureText,
  Text,
  Title,
  Wrapper,
} from "./SubscribeBlock.styled";

export const SubscribeBlock = () => {
  const [email, setEmail] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
