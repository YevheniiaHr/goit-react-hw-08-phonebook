import { NavList, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <NavList>
        <StyledLink to="/register">Sign Up</StyledLink>
        <StyledLink to="/login">Log In</StyledLink>
      </NavList>
    </nav>
  );
};
