import { CvEntry } from "@/components/cv/CVEntry";
import type { CVEntry } from "@/types/cv.types";
import { styled } from "goober";

export const CVEntryList = ({ entries }: { entries: CVEntry[] }) => {
  return (
    <ListContainer>
      {entries.map((entry, index) => (
        <EntryWrapper key={entry.company + entry.title}>
          <CvEntry entry={entry} />
          {index < entries.length - 1 && <VerticalLine />}
        </EntryWrapper>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled("div")`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EntryWrapper = styled("div")`
  position: relative;
  width: 100%;
  max-width: 512px;
  margin-bottom: 4rem;
`;

const VerticalLine = styled("div")`
  position: absolute;
  left: 100px;
  top: 100%;
  height: 4rem;
  width: 2px;
  border-left: 1px solid ${(props) => props.theme.palette.text};
  opacity: 0.3;
  z-index: 1;
`;
