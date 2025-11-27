import { Link, useLocation } from "wouter";
import { NavThemeToggle } from "@/components/nav/NavThemeToggle";
import { styled } from "goober";

export const Nav = () => {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <NavBar>
      <NavLinks>
        <NavLink to="/" data-active={isActive("/")}>
          Home
        </NavLink>
        <NavLink to="/cv" data-active={isActive("/cv")}>
          CV
        </NavLink>
        <NavLink to="/lab" data-active={isActive("/lab")}>
          Lab
        </NavLink>
        <NavLink to="/contact" data-active={isActive("/contact")}>
          Contact
        </NavLink>
        <NavLink to="/about" data-active={isActive("/about")}>
          About
        </NavLink>
      </NavLinks>
      <NavThemeToggle />
    </NavBar>
  );
};

const NavBar = styled("nav")`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: ${(props) => props.theme.palette.bg};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLinks = styled("div")`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.palette.text};
  padding-bottom: 0.2rem;
  text-decoration: none;
  border-bottom: none;

  &[data-active="true"] {
    border-bottom: 2px solid ${(props) => props.theme.palette.text};
  }
`;
