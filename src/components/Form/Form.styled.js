import styled from 'styled-components';

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  border-radius: inherit;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  margin: auto;
  padding: 5px;
  border-radius: inherit;
  border: none;
  cursor: pointer;
  background-color: paleturquoise;
  box-shadow: 0px 0px 11px 8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 11px 8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 8px rgba(0, 0, 0, 0.75);
  &:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;
