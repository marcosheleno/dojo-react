import styled from 'styled-components';


export const Card = styled.article`
  /* height: 7rem; */
  width: 100%;
  background-color: black;
  border: 1px solid purple;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: yellow;
`;

export const ListWrapper = styled.div`

`


export const FamilyGroup = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: green;
`;

export const Number = styled.h3`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

export default Card;
