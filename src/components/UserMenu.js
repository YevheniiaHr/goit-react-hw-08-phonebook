import { Button } from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operation';
import { AccountCircle } from '@mui/icons-material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <>
      <AccountCircle />
      <p>Welcome,{user.name} </p>

      <Button variant="contained" onClick={() => dispatch(logOut)}>
        Logout
      </Button>
    </>
  );
};
