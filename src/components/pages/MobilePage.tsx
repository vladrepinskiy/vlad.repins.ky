import { styled } from "goober";
import { Title } from "../core/Typography";
import { Hero } from "../core/Hero";
import { WORK_EXPERIENCE, EDUCATION } from "@/constants/cv.constant";
import { CVEntryList } from "../cv/CVEntryList";

export const MobilePage = () => {
  return (
    <Page>
      <Content>
        <Section>
          <Hero />
        </Section>

        <Section>
          <TitleWrapper>
            <Title>Work</Title>
          </TitleWrapper>
          <CVEntryList entries={WORK_EXPERIENCE} />
        </Section>

        <Section>
          <TitleWrapper>
            <Title>Education</Title>
          </TitleWrapper>
          <CVEntryList entries={EDUCATION} />
        </Section>
      </Content>
    </Page>
  );
};

const Page = styled("div")`
  min-height: 100vh;
  padding: 6rem 3rem;
  background: ${(props) => props.theme.palette.bg};
  color: ${(props) => props.theme.palette.text};
  overflow-y: auto;
  display: flex;
  justify-content: center;

  /* Adjust height to account for safe areas */
  @supports (padding: env(safe-area-inset-top)) {
    min-height: calc(
      100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom)
    );
  }
`;

const Content = styled("div")`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Section = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleWrapper = styled("div")`
  margin-bottom: 1rem;
`;
