import type { CVEntry } from "@/types/cv.types";
import { styled } from "goober";
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
      <Body>{entry.description}</Body>
      <CVEntryStack stack={entry.technologies} />
    </Container>
  );
};

const Container = styled("div")`
  padding: 1rem;
  background: ${(props) => props.theme.palette.bg};
  border-radius: 8px;
  width: 100%;
  text-align: left;
`;

const Heading = styled("h3")`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  color: ${(props) => props.theme.palette.text};
`;

const Subtitle = styled("p")`
  font-size: ${(props) => props.theme.fontSizes.md};
  margin: 0 0 1rem 0;
  color: ${(props) => props.theme.palette.text};
  opacity: 0.7;
`;

const Body = styled("p")`
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 1.6;
  margin: 0;
  color: ${(props) => props.theme.palette.text};
`;
