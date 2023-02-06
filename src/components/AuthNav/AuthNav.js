import { NavLink } from 'react-router-dom';

const handlerAuthItem = [
  { to: '/login', title: 'Login' },
  { to: '/register', title: 'Register' },
];

export const AuthNav = () => {
  return (
    <>
      <ul>
        {handlerAuthItem.map(({ title, to }) => (
          <li key={title}>
            <NavLink to={to}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
