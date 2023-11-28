
import styled, { css } from "styled-components";
import { darkTheme } from "../../styles/theme";
import { Roboto } from "next/font/google";


const HomeSidebarButtons = () => {

  return (
    <div>
      <div className="icon">
        <h1>Home</h1>
      </div>

      <div className="icon">
        <h1>Your Cases</h1>
      </div>

      <div className="icon">
        <h1>Saved Cases</h1>
      </div>
    </div>
  );
};

export default HomeSidebarButtons;
