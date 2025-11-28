import { Link } from "wouter";
import { styled } from "goober";

interface SidebarNavLinkProps {
  label: string;
  path: string;
  isActive: boolean;
  onClick: () => void;
}

export const SidebarNavLink = ({
  label,
  path,
  isActive,
  onClick,
}: SidebarNavLinkProps) => {
  return (
    <StyledLink to={path} $active={isActive} onClick={onClick}>
      {label}
    </StyledLink>
  );
};

const StyledLink = styled(Link)<{ $active: boolean }>`
  font-family: var(--font-inconsolata);
  font-size: ${(props) => props.theme.fontSizes.md};
  letter-spacing: 0.08em;
  color: ${(props) =>
    props.$active ? props.theme.palette.text : props.theme.palette.textMuted};
  padding: 0.1rem 0;
  text-decoration: none;
  transform: ${(props) =>
    props.$active ? "translateX(5px)" : "translateX(0)"};
  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: translateX(5px);
    color: ${(props) => props.theme.palette.text};
  }
`;

