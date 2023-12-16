import { NavList, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <NavList>
        <StyledLink to="/register">Registration</StyledLink>
        <StyledLink to="/login">Log In</StyledLink>
      </NavList>
    </nav>
  );
};
