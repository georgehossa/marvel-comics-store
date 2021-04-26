import styled from 'styled-components';

export const Name = styled.span`
  display: block;
  margin-left: .5rem;
  font-weight: ${({theme}) => theme.fonts.weights.bold};
  font-size: 0.875rem;
  white-space: nowrap;
`;

export const Image = styled.img`
  object-fit: fill;
  max-width: 100%;
`;

export const ImageWrapper = styled.picture`
  display: block;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  transition: .3s;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:not(:first-child){
    margin-left: 1rem;
  }
  &:hover ${ImageWrapper} {
    box-shadow: 0 0 16px red;
  }
`;



