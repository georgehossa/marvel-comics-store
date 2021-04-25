import PropTypes from 'prop-types';
import Header from '../Header';
import { Wrapper, ContentWrapper } from './Layout.styles';

const Layout = ({children}) => (
  <Wrapper>
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
