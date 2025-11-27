import { styled } from "goober";
import { Title, Heading, Subtitle, Body } from "../core/Typography";
import { Chip } from "../core/Chip";
import packageJson from "../../../package.json";
import { Link } from "../core/Link";

export const About = () => {
  const dependencies = Object.keys(packageJson.dependencies);

  return (
    <Page>
      <Content>
        <TitleWrapper>
          <Title>About This Site</Title>
        </TitleWrapper>

        {/* Bundle Stats Section */}
        <Section>
          <Heading>Bundle Statistics</Heading>
          <StatsGrid>
            <StatItem>
              <StatLabel>CSS Bundle Size:</StatLabel>
              <StatValue>76.44 KB</StatValue>
            </StatItem>
            <StatItem>
              <StatLabel>JS Bundle Size:</StatLabel>
              <StatValue>420 KB</StatValue>
            </StatItem>
          </StatsGrid>
        </Section>

        {/* Packages Section */}
        <Section>
          <Heading>Dependencies</Heading>
          <ChipContainer>
            {dependencies.map((pkg, index) => (
              <ChipWrapper key={pkg}>
                <Chip label={pkg} />
              </ChipWrapper>
            ))}
          </ChipContainer>
        </Section>

        {/* Credits Section */}
        <Section>
          <Heading>Credits & Thanks</Heading>
          <Body>
            Karrik by Jean-Baptiste Morizot, Lucas Le Bihan. Distributed by{" "}
            <Link url="https://velvetyne.fr" />
          </Body>
        </Section>

        {/* Signature Section */}
        <Section>
          <Subtitle>
            This website is not using any tracking – enjoy your minute of
            privacy.
          </Subtitle>
          <Subtitle>
            Site design and content © Vlad Repinskiy {new Date().getFullYear()}
          </Subtitle>
          <Subtitle>
            Built and designed with¯\(ツ)/¯ in Amsterdam Slotervaart
          </Subtitle>
        </Section>
      </Content>
    </Page>
  );
};

const Page = styled("div")`
  flex: 1;
  padding: 4rem clamp(1.5rem, 4vw, 6rem);
  background: ${(props) => props.theme.palette.bg};
  color: ${(props) => props.theme.palette.text};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled("div")`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`;

const TitleWrapper = styled("div")`
  margin-bottom: 1rem;
`;

const Section = styled("section")`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

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
