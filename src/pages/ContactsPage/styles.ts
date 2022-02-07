import styled from 'styled-components';


export const Card = styled.article`
  /* height: 7rem; */
  width: 100%;
  background-color: #f0f0f0;
  border: 1px solid purple;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
`;

export const ContentWraper = styled.div`
  display:flex;
  justify-content: space-between;
  border: 1px solid black;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction:column;
  border: 2px solid purple;
`

export const Number = styled.li`
  font-size: .9em;
`;

export default Card;
