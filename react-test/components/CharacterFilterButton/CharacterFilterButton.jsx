import {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import { ListItem, Image, ImageWrapper, Name } from './CharacterFilterButton.styles';
import SearchContext from '../../context/SearchContext';

const CharacterFilterButton = ({ character }) => {
  const {searchResults, setSearchResults} = useContext(SearchContext);
  const [characterData, setCharacterData] = useState(null);
  const [characterComics, setCharacterComics] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const HASH = process.env.NEXT_PUBLIC_HASH;
    const URL = `${process.env.NEXT_PUBLIC_URL}/v1/public/characters?ts=${process.env.NEXT_PUBLIC_TS}&apikey=${API_KEY}&hash=${HASH}`;
    const getCharacter = async () => {
      try {
        setLoading(true);
        const req = await fetch(`${URL}&name=${character}`);
        const res = await req.json();
        const result = await res.data.results[0];
        setCharacterData(result);
        setCharacterComics(result?.comics?.collectionURI)
        setLoading(false);
      } catch (err) {
        console.log('Error', err);
      }
    }
    getCharacter()
    return () => {
      setCharacterData(null)
      setCharacterComics('')
    };
  }, []);

  const handleClick = (e) => {
      const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
      const HASH = process.env.NEXT_PUBLIC_HASH;
      const URL = `${process.env.NEXT_PUBLIC_URL}/v1/public/characters?ts=${process.env.NEXT_PUBLIC_TS}&apikey=${API_KEY}&hash=${HASH}`;
      const getComics = async () => {
        try {
          const req = await fetch(`${characterComics.replace('http://','https://')}?ts=${process.env.NEXT_PUBLIC_TS}&apikey=${API_KEY}&hash=${HASH}`);
          const res = await req.json();
          const result = await res.data.results;

          setSearchResults(result);
        } catch (err) {
          console.log('Error', err);
        }
      };
      getComics();
  };

  return(
    <>
      {
        loading ?
        'Cargando' :
        <ListItem>
        <ImageWrapper>
        <Image onClick={(e) => handleClick(e)} data-name={characterData?.name} src={`${characterData?.thumbnail?.path.replace('http://','https://')}.${characterData?.thumbnail?.extension}`} alt={characterData?.name} />
        </ImageWrapper>
        <Name>{characterData?.name}</Name>
        </ListItem>
      }
    </>

    )
  }

  CharacterFilterButton.propTypes = {
    character: PropTypes.string,
  };

  export default CharacterFilterButton;
