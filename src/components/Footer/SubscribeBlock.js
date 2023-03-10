import styled from "styled-components";

export const Wrapper = styled.div`
  width: 330px;
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
`;

export const Input = styled.input`
  position: relative;
  width: 330px;
  height: 55px;

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

export const SubscribeBlock = () => {
  return (
    <Wrapper>
      <Title>Subscribe</Title>
      <Text>
        Be the first to get the latest news about trends, promotions, and much
        more!
      </Text>
      <Form>
        <Input
          type="email"
          name="email"
          // value={email}
          // onChange={handleChange}
          placeholder="Your email address"
        />
        <InputBtn
          type="submit"
          value="JOIN"
          // onSubmit={ }
        />
      </Form>
    </Wrapper>
  );
};
