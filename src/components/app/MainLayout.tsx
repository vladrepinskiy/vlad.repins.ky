import { EdgeBlur } from "@/components/core/EdgeBlur";
import { RouteTransition } from "@/components/core/RouteTransition";
import { CV } from "@/components/pages/CV";
import { Home } from "@/components/pages/Home";
import { Lab } from "@/components/pages/Lab";
import { MobilePage } from "@/components/pages/MobilePage";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useIsMobile } from "@/hooks/useIsMobile";
import { styled } from "goober";
import { Route, useLocation } from "wouter";
import { About } from "../pages/About";
import { Now } from "../pages/Now";

const Routes = () => {
  const [location] = useLocation();

  return (
    <RouteTransition key={location}>
      <Route path="/" component={Home} />
      <Route path="/cv" component={CV} />
      <Route path="/now" component={Now} />
      <Route path="/lab" component={Lab} />
      <Route path="/about" component={About} />
    </RouteTransition>
  );
};

export const MainLayout = () => {
  const isMobile = useIsMobile();

  return (
    <Container>
      {isMobile && (
        <>
          <MobilePage />
          <EdgeBlur direction="bottom" height={50} />
        </>
      )}
      {!isMobile && (
        <>
          <EdgeBlur direction="top" />
          <Sidebar />
          <ContentArea>
            <Routes />
          </ContentArea>
          <EdgeBlur direction="bottom" />
        </>
      )}
    </Container>
  );
};

const Container = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background: ${(props) => props.theme.palette.bg};
`;

const ContentArea = styled("div")`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  scrollbar-gutter: stable;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.palette.bg};
`;
