import { useToggleTheme } from "@/hooks/useToggleTheme";
import { styled } from "goober";

export const Nav = () => {
  const toggleTheme = useToggleTheme();

  return (
    <NavBar>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#work">Work</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </NavBar>
  );
}

const NavBar = styled("nav")`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
  background: ${(props) => props.theme.palette.bg};
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavLink = styled("a")`
  font-family: var(--font-inconsolata);
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: #f5f5f5;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: #f5f5f5;
    color: #ffffff;
  }
`;


