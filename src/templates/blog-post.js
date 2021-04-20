import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Article from '../styles/ArticleContent';
import ArticleHeader from '../styles/ArticleHeader';

const StyledArticle = styled(Article)`
  padding-top: var(--vertical-space);
  padding-bottom: var(--vertical-space);
  p,
  ol,
  ul,
  img,
  blockquote {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <>
      <ArticleHeader>
        <div>
          <h2>{post.frontmatter.title}</h2>
        </div>
      </ArticleHeader>
      <StyledArticle>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </StyledArticle>
    </>
  );
}

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
