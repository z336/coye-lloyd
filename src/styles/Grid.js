import styled from 'styled-components';

const Grid = styled.div`
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: ${(props) =>
      `repeat(${props.columns}, ${props.columnSize})`};
    gap: ${(props) => `${props.gap}`};
  }
`;

export default Grid;
