import * as React from 'react';
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

const BlogGrid = styled(Grid)`
  background-color: var(--light);
  padding: var(--gutter);
  border-bottom: 1px solid;
  :first-child {
    border-top: 1px solid;
  }
  :last-child {
    margin-bottom: 0;
  }
`;

export default function Blog() {
  return (
    <>
      <ArticleHeader>
        <div>
          <h2>Blog</h2>
        </div>
      </ArticleHeader>
      <StyledArticle>
        <BlogGrid className="featured" columns="2" columnSize="1fr" gap="0">
          <div>
            <h3>Lorem Ipsum Longish Title</h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vero
              commodi assumenda. Quos possimus, nobis, dolorem, saepe maxime
              quasi magni error quas labore quod eaque in ipsa ipsam excepturi
              ex.
            </p>
          </div>
        </BlogGrid>
        <BlogGrid className="featured" columns="2" columnSize="1fr" gap="0">
          <div>
            <h3>Lorem</h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vero
              commodi assumenda. Quos possimus, nobis, dolorem, saepe maxime
              quasi magni error quas labore quod eaque in ipsa ipsam excepturi
              ex.
            </p>
          </div>
        </BlogGrid>
        <BlogGrid className="featured" columns="2" columnSize="1fr" gap="0">
          <div>
            <h3>Lorem</h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vero
              commodi assumenda. Quos possimus, nobis, dolorem, saepe maxime
              quasi magni error quas labore quod eaque in ipsa ipsam excepturi
              ex.
            </p>
          </div>
        </BlogGrid>
        <BlogGrid className="featured" columns="2" columnSize="1fr" gap="0">
          <div>
            <h3>Lorem</h3>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vero
              commodi assumenda. Quos possimus, nobis, dolorem, saepe maxime
              quasi magni error quas labore quod eaque in ipsa ipsam excepturi
              ex.
            </p>
          </div>
        </BlogGrid>
      </StyledArticle>
    </>
  );
}
