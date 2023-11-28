
import styled from 'styled-components';
import { darkTheme } from "../styles/theme";

const Wrapper = styled.div`
  input.search {
    background: ${darkTheme.black};
    padding: 0.4rem 1rem;
    border: 1px solid ${darkTheme.darkGrey};
    height: 31px;
    color: ${darkTheme.primaryColor};
  }

  @media screen and (max-width: 700px) {
    input.search {
      display: none;
    }
  }
`;

const Search = () => {
  return (
    <Wrapper>
      <input
        className="search"
        type="text"
        placeholder="Buscar caso"
      />
    </Wrapper>
  );
};

export default Search;
