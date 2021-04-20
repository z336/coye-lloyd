import styled from 'styled-components';

const ArticleHeader = styled.header`
  padding-top: var(--vertical-space);
  padding-bottom: var(--vertical-space);
  border-bottom: 1px solid;
  div {
    @media (min-width: 800px) {
      margin-left: var(--gutter);
      margin-right: var(--gutter);
    }
    h2 {
      padding-left: var(--gutter);
      padding-right: var(--gutter);
      font-size: var(--t0);
    }
  }
`;

export default ArticleHeader;
