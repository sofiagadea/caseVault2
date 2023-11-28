
import styled, { css } from "styled-components";
import { darkTheme } from "../../styles/theme";



const ProfileSidebarButtons = () => {

  return (
    <div>
      <div className="icon">
        <h1>Mi Canal</h1>
      </div>

      <div className="icon">
        <h1>Guardados</h1>
      </div>

      <div className="icon">
        <h1>Profile</h1>
      </div>
    </div>
  );
};

export default ProfileSidebarButtons;
