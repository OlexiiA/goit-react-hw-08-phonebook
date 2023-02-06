import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperation';
import { selectUser } from 'redux/auth/authSelector';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handlerLogOutUser}>
        Logout
      </button>
    </div>
  );
};
