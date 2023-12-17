import { Button } from '@mui/material';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operation';
import { AccountCircle } from '@mui/icons-material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>Welcome,{user.name} </p>
      <AccountCircle />
      <Button variant="contained" onClick={() => dispatch(logOut)}>
        Logout
      </Button>
    </div>
  );
};
