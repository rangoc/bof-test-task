import styled from 'styled-components';

// assets
import search from 'assets/search.svg';
const Search = () => {
  return (
    <SearchIcon>
      <img src={search} alt="Search" />
    </SearchIcon>
  );
};

const SearchIcon = styled.div`
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
export default Search;
