import styled from "styled-components";

export const Row = styled.div`
  flex-direction: row;
`;

export const Column = styled.div`
  flex-direction: column;
`;

export const Paragraph = styled.p`
  font-size: 0.8em;
`;

export const H1 = styled.h1`
  font-size: 1.4em;
`;

export const H2 = styled.h2`
  font-size: 1.2em;
`;

export const NoDots = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const OverflowedParagraph = styled.p`
  white-space: nowrap;
  width: 100%;
  overflow: hidden;

  text-overflow: ellipsis;
`;
