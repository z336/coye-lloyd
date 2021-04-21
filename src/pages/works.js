import * as React from 'react';
import HelmetTemplate from '../components/SEO';
import styled from 'styled-components';
import ArticleHeader from '../styles/ArticleHeader';
import Article from '../styles/ArticleContent';
import Grid from '../styles/Grid';

const StyledArticle = styled(Article)`
  padding-top: var(--vertical-space);
  padding-bottom: var(--vertical-space);
  background-color: var(--light);
  opacity: 1;
  background-image: radial-gradient(var(--black) 1px, var(--light) 1px);
  background-size: 0.75rem 0.75rem;
`;

export default function Works() {
  return (
    <>
      <HelmetTemplate title="Works" />
      <ArticleHeader>
        <div>
          <h2>Works</h2>
        </div>
      </ArticleHeader>
      <StyledArticle>
        <Grid className="featured" columns="1" gap="0">
          <div>
            <h3>Featured</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              quos facere commodi incidunt ea laudantium sit temporibus eveniet.
            </p>
          </div>
        </Grid>
        <Grid columns="3" columnSize="1fr" gap="0">
          <div className="borders">
            <h4>Work</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
          <div className="borders">
            <h4>Work</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="borders">
            <h4>Work</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </Grid>
      </StyledArticle>
    </>
  );
}
