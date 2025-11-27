import { styled } from "goober";
import { Route, Router } from "wouter";
import { Nav } from "@/components/nav/Nav";
import { Home } from "@/components/pages/Home";
import { CV } from "@/components/pages/CV";
import { Lab } from "@/components/pages/Lab";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";

export const App = () => {
  return (
    <Router>
      <AppContainer>
        <Nav />
        <Route path="/" component={Home} />
        <Route path="/cv" component={CV} />
        <Route path="/lab" component={Lab} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </AppContainer>
    </Router>
  );
};

const AppContainer = styled("div")`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
