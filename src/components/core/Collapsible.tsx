import { styled } from "goober";
import { useState, ReactNode } from "react";

interface CollapsibleProps {
  label: string;
  children: ReactNode;
  defaultExpanded?: boolean;
}

export const Collapsible = ({
  label,
  children,
  defaultExpanded = false,
}: CollapsibleProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Container onClick={() => setIsExpanded(!isExpanded)}>
      <Toggle>
        {label} {isExpanded ? "▼" : "▶"}
      </Toggle>
      {isExpanded && <Content>{children}</Content>}
    </Container>
  );
};

const Container = styled("div")`
  margin-top: 1rem;
  cursor: pointer;
`;

const Toggle = styled("div")`
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.palette.text};
  opacity: 0.8;
  margin-bottom: 0.5rem;
  user-select: none;

  &:hover {
    opacity: 1;
  }
`;

const Content = styled("div")`
  padding-top: 0.5rem;
`;

