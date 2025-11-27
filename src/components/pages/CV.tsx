import { WORK_EXPERIENCE } from "@/constants/cv.constant";
import { styled } from "goober";
import { CVEntryList } from "../cv/CVEntryList";

export const CV = () => {
  return (
    <Page>
      <CVEntryList entries={WORK_EXPERIENCE} />
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
  justify-content: flex-start;
  text-align: left;
`;
