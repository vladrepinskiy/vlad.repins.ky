import { SidebarControls } from "@/components/sidebar/SidebarControls";
import { SidebarLinks } from "@/components/sidebar/SidebarLinks";
import { SidebarNavigation } from "@/components/sidebar/SidebarNavigation";
import { styled } from "goober";
import { Location } from "../location/Location";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <TopSection>
          <SidebarNavigation />
          <SidebarLinks />
        </TopSection>
        <BottomSection>
          <SidebarControls />
        </BottomSection>
      </SidebarContent>
    </SidebarContainer>
  );
};

const SidebarContainer = styled("nav")`
  width: 20%;
  height: 100vh;
  padding: 15vh 0 15vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${(props) => props.theme.palette.bg};
  z-index: 100;
`;

const SidebarContent = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  justify-content: space-between;
`;

const TopSection = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const BottomSection = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
`;
