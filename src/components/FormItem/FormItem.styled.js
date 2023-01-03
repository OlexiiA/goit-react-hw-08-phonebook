import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 1);
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 1);
  }
`;

export const Item = styled.p`
  margin-right: 10px;
`;

export const Btn = styled.button`
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: indianred;
  box-shadow: 0px 0px 11px 8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 11px 8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 8px rgba(0, 0, 0, 0.75);
  &:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;
