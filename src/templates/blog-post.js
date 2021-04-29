import * as React from 'react';
import HelmetTemplate from '../components/SEO';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Article from '../styles/ArticleContent';
import ArticleHeader from '../styles/ArticleHeader';
import { FaArrowLeft } from 'react-icons/fa';

const StyledArticle = styled(Article)`
  margin-right: var(--gutter);
  margin-left: var(--gutter);
  padding-top: var(--vertical-space);
  padding-bottom: var(--vertical-space);
  ul,
  ol {
    margin-left: 1rem;
  }
  .post,
  .back {
    max-width: var(--measure);
    margin-left: auto;
    margin-right: auto;
  }
  .back {
    margin-top: var(--vertical-space);
    button {
      background: transparent;
      border: 0;
      cursor: pointer;
      :hover {
        opacity: 0.7;
      }
    }
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
        <div className="back">
          <button
            onClick={() => window.history.back()}
            aria-label="Go back to the blog list"
          >
            <FaArrowLeft /> Back
          </button>
        </div>
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
