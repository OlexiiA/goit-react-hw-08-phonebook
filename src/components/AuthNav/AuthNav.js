import { List, NavItem } from './AuthNav.styled';

const handlerAuthItem = [
  { to: '/login', title: 'Login' },
  { to: '/register', title: 'Register' },
];

export const AuthNav = () => {
  return (
      <List>
        {handlerAuthItem.map(({ title, to }) => (
          <li key={title}>
            <NavItem to={to}>{title}</NavItem>
          </li>
        ))}
      </List>
  );
};
