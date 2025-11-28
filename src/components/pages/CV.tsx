import { WORK_EXPERIENCE } from "@/constants/cv.constant";
import { styled } from "goober";
import { Title } from "../core/Typography";
import { CVEntryList } from "../cv/CVEntryList";

export const CV = () => {
  return (
    <Page>
      <TitleWrapper>
        <Title>Work Experience</Title>
      </TitleWrapper>
      <CVEntryList entries={WORK_EXPERIENCE} />
    </Page>
  );
};

const Page = styled("div")`
  flex: 1;
  padding: 8rem clamp(1.5rem, 4vw, 6rem);
  background: ${(props) => props.theme.palette.bg};
  color: ${(props) => props.theme.palette.text};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
`;

const TitleWrapper = styled("div")`
  width: 100%;
  max-width: 600px;
  text-align: left;
  margin-bottom: 2rem;
  margin-left: 2rem;
`;
