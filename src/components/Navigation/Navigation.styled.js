import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
display: flex;
justify-content: space-between;
margin: 25px;
`;

export const NavItem = styled(NavLink)`
display: flex;
align-items: center;
font-size: larger;
border-radius: 4px;
text-decoration: none;
color: gold;
padding: 15px;
&.active {
  color: gold;
  border-radius: 20px;
  background-color: brown;
  color: wite;
  box-shadow: 0px 0px 51px 0px rgba(194,194,29,0.71);
-webkit-box-shadow: 0px 0px 51px 0px rgba(194,194,29,0.71);
-moz-box-shadow: 0px 0px 51px 0px rgba(194,194,29,0.71);
}
:hover:not(.active),
:focus-visible:not(.active) {
  color: brown;
}
`;