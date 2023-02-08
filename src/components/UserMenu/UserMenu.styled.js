import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Btn = styled.button`
  font-size: medium;
  border-radius: 20px;
  text-decoration: none;
  background-color: gold;
  border: none;
  color: brown;
  padding: 10px;

  &.active {
    color: gold;
    box-shadow: 0px 0px 51px 0px rgba(194, 194, 29, 0.71);
    -webkit-box-shadow: 0px 0px 51px 0px rgba(194, 194, 29, 0.71);
    -moz-box-shadow: 0px 0px 51px 0px rgba(194, 194, 29, 0.71);
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: gold;
    background-color: brown;
  }
`;

export const UserName = styled.p`
  color: gold;
  margin-right: 20px;
`;
