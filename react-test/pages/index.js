import { useContext } from 'react'
import Layout from '../components/Layout';
import CharactersFilter from '../components/CharactersFilter';
import SearchContext from '../context/SearchContext';
const Home = () => {
  const {searchResults, setSearchResults} = useContext(SearchContext);
  return (
    <Layout>
      <CharactersFilter />
      <div>
        <ul>
          {searchResults.map(result => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Home;