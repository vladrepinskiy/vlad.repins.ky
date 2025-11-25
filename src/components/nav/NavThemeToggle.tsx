import { useTheme } from "@/hooks/useTheme";
import { useToggleTheme } from "@/hooks/useToggleTheme";
import { styled } from "goober";

export const NavThemeToggle = () => {
  const toggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <NavThemeToggleButton onClick={toggleTheme}>
      {theme.icon}
    </NavThemeToggleButton>
  );
};

const NavThemeToggleButton = styled("button")`
  background: none;
  border: none;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.xl};

  &:hover {
    filter: blur(2px);
  }
`;
