import PropTypes from 'prop-types';
import { Wrapper, ImageWrapper, Image, InfoWraper, DetailsWrapper,Creator, Price, Title } from './ComicCard.styles';

const ComicCard = ({ comic }) => {
  const originalImagePath = comic?.thumbnail?.path;
  const imagePath = originalImagePath.replace('http://','https://');
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={`${imagePath}/portrait_incredible.${comic?.thumbnail?.extension}`} alt={comic?.title} loading="lazy"/>
      </ImageWrapper>
      <InfoWraper>
        <Title>{comic?.title}</Title>
        <DetailsWrapper>
          <Creator>{comic?.creators?.items[0]?.name}</Creator>
          <Price>${comic?.prices[0]?.price}</Price>
        </DetailsWrapper>
      </InfoWraper>
    </Wrapper>
  );
}


ComicCard.propTypes = {
  comic: PropTypes.any,
};


export default ComicCard;
