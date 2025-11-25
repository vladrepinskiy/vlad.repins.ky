import { styled } from "goober";

export const Home = () => {
  return (
    <Page>
      <Title>Hello Stranger 👋</Title>
      <Lead>
        I'm a Fast-learning Full Stack Developer with a demonstrated history of
        experience from across the industry - from pure CS research to
        self-managed startup projects. Strong engineering culture with a Master
        of Engineering degree from one of the leading European universities.
        Love working on relationships, processes and documentation.
      </Lead>
    </Page>
  );
};

const Page = styled("div")`
  flex: 1;
  padding: 4rem clamp(1.5rem, 4vw, 6rem);
  background: ${(props) => props.theme.palette.bg};
  color: ${(props) => props.theme.palette.text};
  overflow-y: auto;
`;

const Title = styled("h1")`
  font-size: clamp(2.5rem, 4vw, 4rem);
  margin-bottom: 1rem;
`;

const Lead = styled("p")`
  font-size: 1.2rem;
  max-width: 42ch;
  line-height: 1.6;
  color: ${(props) => props.theme.palette.text};
  opacity: 0.85;
`;
