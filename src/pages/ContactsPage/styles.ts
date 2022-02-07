import styled from 'styled-components';


export const Card = styled.article`
  /* height: 7rem; */
  width: 100%;
  background-color: #f0f0f0;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
`;

export const ContentWraper = styled.div`
  display:flex;
  flex:3;
  justify-content: space-between;
  border: 1px solid black;
`;

export const LeftWraper = styled.div`
  flex:3;
  flex-direction: column;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  flex:1;
  flex-direction:column;
`

export const Number = styled.li`
  font-size: .9em;
`;

export default Card;
