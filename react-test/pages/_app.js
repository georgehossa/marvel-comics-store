import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyles';
import { SearchResultsProvider } from '../context/SearchContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <SearchResultsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </SearchResultsProvider>
    </>
  )
}