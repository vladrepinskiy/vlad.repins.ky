import { Link, useLocation } from "wouter";
import { styled } from "goober";

export const SidebarNavigation = () => {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <NavSection>
      <SidebarLinks>
        <SidebarLink to="/" $active={isActive("/")}>
          Home
        </SidebarLink>
        <SidebarLink to="/cv" $active={isActive("/cv")}>
          CV
        </SidebarLink>
        <SidebarLink to="/lab" $active={isActive("/lab")}>
          Lab
        </SidebarLink>
        <SidebarLink to="/about" $active={isActive("/about")}>
          About
        </SidebarLink>
      </SidebarLinks>
    </NavSection>
  );
};

const NavSection = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const SidebarLinks = styled("div")`
  display: flex;
  flex-direction: column;
`;

const SidebarLink = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.md};
  letter-spacing: 0.08em;
  color: ${(props) =>
    props.$active ? props.theme.palette.text : props.theme.palette.textMuted};
  padding: 0.1rem 0;
  text-decoration: none;
  transform: ${(props) =>
    props.$active ? "translateX(10px)" : "translateX(0)"};
  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateX(10px);
    color: ${(props) => props.theme.palette.text};
  }
`;
