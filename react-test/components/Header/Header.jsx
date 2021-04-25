import Image from 'next/image';
import { FaSearch } from 'react-icons/fa'
import { Container, Label, IconWrapper, SearchInput } from './Header.styles';

const Header = (props) => (
  <Container>
    <Image src="/marvel-logo.svg" alt="" width={100} height={36}/>
    <Label>
      <IconWrapper><FaSearch/></IconWrapper>
      <SearchInput type="search" placeholder="Search" aria-autocomplete="list" />
    </Label>
  </Container>
);

export default Header;
