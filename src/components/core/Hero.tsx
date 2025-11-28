import { useIsMobile } from "@/hooks/useIsMobile";
import { styled } from "goober";
import { Location } from "../location/Location";
import { MobileCallout } from "./MobileCallout";
import { Body, Subtitle, Title } from "./Typography";

export const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <TitleWrapper>
        <Title>Welcome Stranger!</Title>
      </TitleWrapper>
      {isMobile && <MobileCallout />}
      {!isMobile && (
        <>
          <Subtitle>
            Влад Репинский &nbsp;{" "}
            <span style={{ opacity: 0.6 }}>[vlæd rɛpɪnskɪy]</span>
          </Subtitle>
          <Subtitle>est. 1998 in Saint Petersburg, Russia</Subtitle>
          <Location />
        </>
      )}
      <Body>
        I'm a product engineer with a track record from across the industry -
        from pure computer science research to self-managed startup projects.
        Strong engineering culture with a Master of Engineering degree from one
        of the leading European universities. Love working on relationships,
        processes and documentation. Since recently, addicted to shipping
        things.
      </Body>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleWrapper = styled("div")`
  margin-bottom: 2rem;
`;
