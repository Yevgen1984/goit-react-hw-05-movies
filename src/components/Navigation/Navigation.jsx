import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavItem to="/" end>Home</NavItem>
        </li>
        <li>
          <NavItem to="/movies">movies</NavItem>
        </li>
      </ul>
    </nav>
  );
};