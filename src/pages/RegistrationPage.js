import { Container } from '@mui/material';
import { RegisterForm } from '../components/RegisterForm';
import { Helmet } from 'react-helmet';

export const RegistrationPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <RegisterForm />
    </Container>
  );
};
