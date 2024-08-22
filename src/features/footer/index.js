import styled from "styled-components";

export const Box = styled.div`
  background: black;
  padding: 80px 60px;
  color: white;
  text-align: left;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterLink = styled.span`
  color: lightgray;
  margin-bottom: 10px;
  font-size: 15px;
  text-decoration: none;
  vertical-align: top;

  &:hover {
    color: white;
    transition: 200ms ease-in;
  }
`;

export const Social = styled.span`
  border: 1px solid #e6e6e68c;
  padding: 7px;
`;
