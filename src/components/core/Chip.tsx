import { styled } from "goober";

export const Chip = ({ label }: { label: string }) => {
  return <ChipContainer>{label}</ChipContainer>;
};

const ChipContainer = styled("div")`
  padding: 0.3rem 1rem;
  border-radius: 9999px;
  background: ${(props) => props.theme.palette.bg};
  color: ${(props) => props.theme.palette.text};
  border: 1px solid ${(props) => props.theme.palette.text};
  opacity: 0.6;
  font-size: ${(props) => props.theme.fontSizes.sm};
`;
