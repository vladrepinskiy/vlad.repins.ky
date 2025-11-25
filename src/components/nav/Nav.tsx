import { NavThemeToggle } from "@/components/nav/NavThemeToggle";
import { styled } from "goober";

export const Nav = () => {
  return (
    <NavBar>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#work">Work</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
      <NavThemeToggle />
    </NavBar>
  );
}

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

const NavLink = styled("a")`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.palette.b80};
  padding-bottom: 0.2rem;
  text-decoration: none;
`;


