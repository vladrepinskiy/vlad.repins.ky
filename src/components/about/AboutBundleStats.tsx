import { styled } from "goober";
import { Heading } from "../core/Typography";

export const AboutBundleStats = () => {
  return (
    <>
      <Heading>Bundle Statistics</Heading>
      <StatsGrid>
        <StatItem>
          <StatLabel>CSS Bundle Size:</StatLabel>
          <StatValue>76.44 KB</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>JS Bundle Size:</StatLabel>
          <StatValue>430 KB</StatValue>
        </StatItem>
      </StatsGrid>
    </>
  );
};

const StatsGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
`;

const StatItem = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const StatLabel = styled("span")`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.palette.text};
  opacity: 0.6;
`;

const StatValue = styled("span")`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  color: ${(props) => props.theme.palette.text};
`;
