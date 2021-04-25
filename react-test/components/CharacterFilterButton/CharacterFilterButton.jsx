import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { ListItem, Image, ImageWrapper, Name } from './CharacterFilterButton.styles';

const CharacterFilterButton = ({ character }) => {
  const [characterData, setCharacterData] = useState(null);
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
          <Image src={`${characterData?.thumbnail?.path}.${characterData?.thumbnail?.extension}`} alt={characterData?.name} />
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
