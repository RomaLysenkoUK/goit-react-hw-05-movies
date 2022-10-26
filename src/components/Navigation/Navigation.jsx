import { Nav, NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    // <nav>
      <Nav>
        <li>
          <NavItem to="/" end>Home</NavItem>
        </li>
        <li>
          <NavItem to="/movies">Movies</NavItem>
        </li>
      </Nav>
    // </nav>
  );
};
