import { styled } from "goober";
import { Title, Subtitle, Body } from "../core/Typography";
import { Location } from "../location/Location";

export const Home = () => {
  return (
    <Page>
      <Content>
        <TitleWrapper>
          <Title>Welcome Stranger!</Title>
        </TitleWrapper>
        <Subtitle>
          Влад Репинский &nbsp;{" "}
          <span style={{ opacity: 0.6 }}>[vlæd rɛpɪnskɪy]</span>
        </Subtitle>
        <Subtitle>est. 1998 in Saint Petersburg, Russia</Subtitle>
        <Location />
        <Body>
          I'm a product engineer with a track record from across the industry -
          from pure computer science research to self-managed startup projects.
          Strong engineering culture with a Master of Engineering degree from
          one of the leading European universities. Love working on
          relationships, processes and documentation. Since recently, addicted
          to shipping things.
        </Body>
        <Body>
          Outside of work, inspired by art, the people that surround me.
        </Body>
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
  margin-bottom: 2rem;
`;
