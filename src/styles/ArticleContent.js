import styled from 'styled-components';

const Article = styled.article`
  p,
  ol,
  ul,
  blockquote {
    margin-top: 1.75rem;
    margin-bottom: 1.75rem;
    :first-child {
      margin-top: 0;
    }
    :last-child {
      margin-bottom: 0;
    }
  }

  .featured {
    background-color: var(--light);
    margin-left: var(--gutter);
    margin-right: var(--gutter);
    margin-bottom: var(--vertical-space);
    padding: var(--gutter);
    max-width: 70ch;
    border: 1px solid;
    :nth-child(even) {
      margin-left: 6rem;
    }
    @media (max-width: 800px) {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: var(--vertical-space);
      border-left: 0;
      border-right: 0;
      :nth-child(even) {
        margin-left: 0;
      }
    }
  }

  .borders {
    background-color: var(--light);
    padding: var(--gutter);
    border-top: 1px solid;
    border-right: 1px solid;
    border-bottom: 1px solid;
    :last-child {
      border-right: 0;
    }
    @media (max-width: 800px) {
      margin-left: 0;
      margin-right: 0;
      border-left: 0;
      border-right: 0;
      :not(:first-child) {
        border-top: 0;
      }
    }
  }
`;

export default Article;
