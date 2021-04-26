import { useContext } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import CharactersFilter from '../components/CharactersFilter';
import SearchContext from '../context/SearchContext';
import ComicCard from '../components/ComicCard';

const Home = ({ comicsList }) => {
  const {searchResults, setSearchResults} = useContext(SearchContext);

  const list = () => {
    if (searchResults.length > 0) return searchResults
    else return comicsList;
  }

  return (
    <Layout>
      <CharactersFilter />
      <Wrapper>
        {
          list().map((comic, index) => (<ComicCard key={index} comic={comic} />))
        }
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template: auto / 1fr;
  gap: 1.5rem;
  @media(min-width: 1024px) {
    grid-template: auto / repeat(3, 1fr);
  }
`



export async function getStaticProps(ctx) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const HASH = process.env.NEXT_PUBLIC_HASH;
  const URL = `${process.env.NEXT_PUBLIC_URL}/v1/public/comics?ts=${process.env.NEXT_PUBLIC_TS}&apikey=${API_KEY}&hash=${HASH}`;

  const req = await fetch(`${URL}`);
  const res = await req.json();
  const results = await res.data.results;

  return {
    props: {...ctx.props, comicsList: results},
  }
}

export default Home;