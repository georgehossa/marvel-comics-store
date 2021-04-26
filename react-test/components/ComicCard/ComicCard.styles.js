import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  object-fit: fill;
  max-width: 100%;
`

export const ImageWrapper = styled.picture`
  display: block;
  overflow: hidden;
`

export const Title = styled.h3`
  font-size: ${({theme}) => theme.fonts.sizes.base}px;
  @media(min-width: 1024px){
    font-size: ${({theme}) => theme.fonts.sizes.h3}px;
  }
`
export const Creator = styled.span`
  font-size: ${({theme}) => theme.fonts.sizes.xs}px;
`

export const Price = styled.span`
  display: block;
  font-size: ${({theme}) => theme.fonts.sizes.s}px;
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.white};
  padding: 0.4rem 0.4rem;
  @media(min-width: 1024px){
    padding: .5rem 2rem;
  }
`

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InfoWraper = styled.div`
  display: grid;
  grid-template: auto 2rem / 1fr;
  padding: 1rem;
`

export const Wrapper = styled.article`
  display: grid;
  grid-template: auto / minmax(80px, 216px) 50%;
  background-color: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.primary};
  gap: 1rem;
`;
