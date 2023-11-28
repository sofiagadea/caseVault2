import styled from "styled-components";

const Container = styled.div`

  position: relative;
  top: 90px; /* Ajusta esto para la distancia deseada desde el elemento superior */

  @media screen and (max-width: 768px) {
    margin-left: 0;
    top: 0;
  }
`;



export default Container;
