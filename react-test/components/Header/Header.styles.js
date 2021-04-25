import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: red;
`;

export const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 2rem;
  padding: 0 .5rem;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.colors.white};
`
export const IconWrapper = styled.span`
  width: 1rem;
  height: 1rem;
  margin-right: .3rem;
  color: ${({theme}) => theme.colors.gray};
`
export const SearchInput = styled.input`
  border: none;
  outline: 0;
  padding-right: 1rem;
  &::placeholder {
    font-family: ${({theme}) => theme.fonts.primary};
    font-size: .8rem;

  }
`

