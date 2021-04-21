import * as React from 'react';
import HelmetTemplate from '../components/SEO';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Article from '../styles/ArticleContent';
import ArticleHeader from '../styles/ArticleHeader';

const StyledArticle = styled(Article)`
  margin-right: var(--gutter);
  margin-left: var(--gutter);
  padding-top: var(--vertical-space);
  padding-bottom: var(--vertical-space);
  .post {
    max-width: var(--measure);
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <>
      <HelmetTemplate title={post.frontmatter.title} />
      <ArticleHeader>
        <div>
          <h2>{post.frontmatter.title}</h2>
        </div>
      </ArticleHeader>
      <StyledArticle>
        <div className="post" dangerouslySetInnerHTML={{ __html: post.html }} />
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
