import { Wrapper, List } from './CharactersFilter.styles';
import CharacterFilterButton from '../CharacterFilterButton';

const featureCharacters = ['captain america', 'iron man', 'thor', 'wolverine']

const CharactersFilter = () => (
  <Wrapper>
    <List>
      {featureCharacters.map((character, index) => <CharacterFilterButton key={index} character={character} />)}
    </List>
  </Wrapper>
);

export default CharactersFilter;
