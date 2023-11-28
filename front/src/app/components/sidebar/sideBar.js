
"use client";
import styled, { css } from "styled-components";
import { darkTheme } from "../../styles/theme";
import HomeSidebarButtons from "./HomeSidebarButtons";
import ProfileSidebarButtons from "./ProfileSidebarButtons";
import { Mohave } from "next/font/google";

const roboto = Mohave({
  weight: ["300","400"],
  syles: ["italic", "normal"],
  subsets:["latin"],
}
);


const SidebarWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  height: 100vh;
  width: 240px;;
  padding-top: 1rem;
  overflow: auto;
  padding-bottom: 1.5rem;
  transition: all 0.3s;
  z-index: 2;
  background: ${darkTheme.grey};
  &::-webkit-scrollbar {
    width: 0;
  }

  .icon {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    margin-top:1rem;
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    font-size: 0.4rem;
    font-family: ${darkTheme.font}, sans-serif;
    color: ${darkTheme.primaryColor};
    
  }

  .icon:not(.hover-disable):hover {
    background: ${darkTheme.darkGrey};
    cursor: pointer;
  }

  .active div {
    background: ${darkTheme.darkGrey};
    cursor: pointer;
  }

  h1 {
    color: #fff;
    font-size: 1.5rem;
    font-family: ${darkTheme.font};
  }

  .icon span {
    padding-left: 1rem;
    position: relative;
    top: 1px;
  }

  @media screen and (max-width: 1093px) {
    transform: translateX(-100%);

    ${(props) =>
      props.open &&
      css`
        transform: translateX(0);
      `}
  }
`;

const Sidebar = ({ currentPage }) => {

  return (
    <SidebarWrapper>
      
      {currentPage === "home" && (
      <HomeSidebarButtons />
      )}

      {currentPage === "profile" && (
        <ProfileSidebarButtons />
      )}
    </SidebarWrapper>
  );
};

export default Sidebar;
