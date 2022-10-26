import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;

export const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;

export const Nav = styled.ul`
display: flex;
list-style: none;
gap: ${p => p.theme.space[3]}px;
/* align-items: center; */
margin-top: auto;
margin-bottom: auto;

` 