import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from '../Header';
import { Wrapper, ContentWrapper } from './Layout.styles';

const Layout = ({children}) => (
  <Wrapper>
    <Head>
      <title>Comics Store</title>
    </Head>
    <Header/>
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
