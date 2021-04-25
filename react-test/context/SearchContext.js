import {createContext, useState} from 'react'

  const SearchContext = createContext({});
  export function SearchResultsProvider ({ children }) {
    const [searchResults, setSearchResults] = useState([]);
    return (
      <SearchContext.Provider value={{searchResults, setSearchResults}}>
        {children}
      </SearchContext.Provider>
    )
  }

export default SearchContext;