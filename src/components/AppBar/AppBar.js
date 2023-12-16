import { ImportContactsOutlined, Navigation } from '@mui/icons-material';
import { useAuth } from 'hooks/useAuth';
import { IconButton, Toolbar, Typography } from '@mui/material';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};
