import type { CVEntry } from "@/types/cv.types";
import { styled } from "goober";
import { Link } from "../core/Link";
import { Heading, Subtitle, Body } from "../core/Typography";
import { CVEntryStack } from "./CvEntryStack";

export const CvEntry = ({ entry }: { entry: CVEntry }) => {
  return (
    <Container>
      <Heading>
        {entry.title}, {entry.company}
      </Heading>
      <Subtitle>
        {entry.startDate} - {entry.endDate} • {entry.location}
      </Subtitle>
      {entry.description.map((paragraph, index) => (
        <Body key={index}>{paragraph}</Body>
      ))}
      {entry.link && <Link url={entry.link} />}
      {entry.stack && entry.stack.length > 0 && (
        <CVEntryStack stack={entry.stack} />
      )}
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${(props) => props.theme.palette.bg};
  width: 100%;
  text-align: left;
`;
