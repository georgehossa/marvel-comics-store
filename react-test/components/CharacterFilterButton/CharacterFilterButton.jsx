import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { ListItem, Image, ImageWrapper, Name } from './CharacterFilterButton.styles';

const CharacterFilterButton = ({ character }) => {
  const [characterData, setCharacterData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const API_KEY = '276903768153e6bb93a7711470e97109';
    const HASH = 'b377f9b70336abc5319f057b032fb63e';
    const URL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}`;
    const getCharacter = async () => {
      try {
        setLoading(true);
        const req = await fetch(`${URL}&name=${character}`);
        const res = await req.json();
        setCharacterData(res.data.results[0]);
        setLoading(false);
      } catch (e) {
        console.log('Error', e);
      }
    }
    getCharacter()
    return () => {
      setCharacterData(null)
    };
  }, [])

  return(
    <>
    {
      loading ?
      'Cargando' :
      <ListItem>
        <ImageWrapper>
          <Image src={`${characterData?.thumbnail?.path}.${characterData?.thumbnail?.extension}`} />
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
