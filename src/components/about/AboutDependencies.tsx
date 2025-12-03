import { styled } from "goober";
import packageJson from "../../../package.json";
import { Chip } from "../core/Chip";
import { Heading } from "../core/Typography";

export const AboutDependencies = () => {
  const dependencies = Object.keys(packageJson.dependencies);

  return (
    <>
      <Heading>Dependencies</Heading>
      <ChipContainer>
        {dependencies.map((pkg, index) => (
          <ChipWrapper key={pkg}>
            <Chip label={pkg} />
          </ChipWrapper>
        ))}
      </ChipContainer>
    </>
  );
};

const ChipContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  margin-top: 0.5rem;
`;

const ChipWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
