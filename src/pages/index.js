import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import Article from '../styles/ArticleContent';
import Grid from '../styles/Grid';

const IndexGrid = styled(Grid)`
  padding: var(--gutter);
`;

export default function IndexPage() {
  return (
    <>
      <Article>
        <IndexGrid columns="2" columnSize="1fr" gap="0">
          <div>
            <h2>Coye Lloyd</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              voluptatibus deserunt.
            </p>
            <p>Learn more &rarr;</p>
          </div>
          <div>
            <StaticImage
              src="../images/coye-index.png"
              alt="A picture of Coye Lloyd"
              placeholder="blurred"
              layout="fullWidth"
            />
            <small>Jed</small>
          </div>
        </IndexGrid>
      </Article>
    </>
  );
}
