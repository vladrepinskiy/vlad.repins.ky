import { Link, useLocation } from "wouter";
import { NavThemeToggle } from "@/components/nav/NavThemeToggle";
import { styled } from "goober";

export const Nav = () => {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <Sidebar>
      <NavLinks>
        <NavLink to="/" $active={isActive("/")}>
          Home
        </NavLink>
        <NavLink to="/cv" $active={isActive("/cv")}>
          CV
        </NavLink>
        <NavLink to="/lab" $active={isActive("/lab")}>
          Lab
        </NavLink>
        <NavLink to="/contact" $active={isActive("/contact")}>
          Contact
        </NavLink>
        <NavLink to="/about" $active={isActive("/about")}>
          About
        </NavLink>
      </NavLinks>
      <ThemeToggleWrapper>
        <NavThemeToggle />
      </ThemeToggleWrapper>
    </Sidebar>
  );
};

const Sidebar = styled("nav")`
  width: 260px;
  height: 100vh;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.palette.bg};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.palette.text};
  padding: 0.5rem 0;
  padding-left: 0.5rem;
  text-decoration: none;
  border-left: ${(props) =>
    props.$active
      ? `3px solid ${props.theme.palette.text}`
      : "3px solid transparent"};
  transition: border-left 0.2s ease;

  &:hover {
    border-left: 3px solid ${(props) => props.theme.palette.text};
  }
`;

const ThemeToggleWrapper = styled("div")`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;
