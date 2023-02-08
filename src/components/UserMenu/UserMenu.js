import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperation';
import { selectUser } from 'redux/auth/authSelector';
import { useNavigate } from 'react-router-dom';
import { Box, Btn, UserName } from './UserMenu.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const navigate = useNavigate();

  const handlerLogOutUser = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        navigate('/login', { replace: true });
      });
  };

  return (
    <Box>
      <UserName>Welcome, {user.name}</UserName>
      <Btn onClick={handlerLogOutUser}>Log out</Btn>
    </Box>
  );
};
