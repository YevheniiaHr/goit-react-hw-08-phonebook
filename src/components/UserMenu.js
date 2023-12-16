import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div>
      <p>Welcome,{user.name} </p>
      <Button variant="contained" onClick={() => dispatch(logOut)}>
        Logout
      </Button>
    </div>
  );
};
