import { useState, useRef, useContext } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa'
import { Container, Label, IconWrapper, SearchInput } from './Header.styles';
import SearchContext from '../../context/SearchContext';

const Header = () => {
  const searchInputRef = useRef(null);
  const [searchInput, setSearchInput] = useState('');
  const {searchResults, setSearchResults} = useContext(SearchContext);

  const handleLogoClick = () => setSearchResults([]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    const inputValue = searchInputRef.current.value;
    if(inputValue.length >= 3) {
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
      const HASH = process.env.NEXT_PUBLIC_HASH;
      const URL = `${process.env.NEXT_PUBLIC_URL}/v1/public/comics?ts=${process.env.NEXT_PUBLIC_TS}&apikey=${API_KEY}&hash=${HASH}`;
      const fetchData = async (endpoint, value = '') => {
        const request = await fetch(`${endpoint}&titleStartsWith=${value}`);
        const response = await request.json();
        setSearchResults(response.data.results);
      }

      fetchData(URL, inputValue);
    }
  }

  return (
    <Container>
      <Image onClick={handleLogoClick} src="/marvel-logo.svg" alt="" width={100} height={36}/>
      <Label>
        <IconWrapper>
          <FaSearch/>
        </IconWrapper>
        <SearchInput
          type="search"
          placeholder="Search"
          ariaAutocomplete="list"
          value={searchInput}
          onChange={(e) => handleInputChange(e)}
          ref={searchInputRef} />
      </Label>
    </Container>
  );
}


export default Header;
