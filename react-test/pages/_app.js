import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}