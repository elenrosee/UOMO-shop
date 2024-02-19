import styled from "styled-components";
import { Breakpoints, MQ } from "../../common";

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
