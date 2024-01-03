import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 20px;
  color: white;

  &.active {
    color: red;
  }
`;
export const NavList = styled.ul`
  display: flex;
  gap: 50px;
`;
