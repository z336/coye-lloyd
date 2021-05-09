import * as React from 'react';
import HelmetTemplate from '../components/SEO';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import ArticleHeader from '../styles/ArticleHeader';
import Article from '../styles/ArticleContent';

const StyledArticle = styled(Article)`
  padding-top: var(--vertical-space);
  padding-bottom: var(--vertical-space);
  background-color: var(--light);
  opacity: 1;
  background-image: radial-gradient(var(--black) 1px, var(--light) 1px);
  background-size: 0.75rem 0.75rem;
  a {
    text-decoration: none;
    display: block;
    :hover {
      background-color: var(--red);
      color: var(--light);
    }
  }
  .date {
    font-size: var(--t7);
    margin-top: 0.5rem;
  }
`;

export default function Blog({ data }) {
  const { posts } = data.blog;
  return (
    <>
      <HelmetTemplate title="Blog" />
      <ArticleHeader>
        <div>
          <h2>Blog</h2>
        </div>
      </ArticleHeader>
      <StyledArticle>
        {posts.map((post) => (
          <Link to={post.fields.slug} className="featured" key={post.id}>
            <div>
              <h3>{post.frontmatter.title}</h3>
              <p className="date">{post.frontmatter.date}</p>
              <p>{post.frontmatter.preview}</p>
            </div>
          </Link>
        ))}
      </StyledArticle>
    </>
  );
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    blog: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      posts: nodes {
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
          title
          preview
        }
        excerpt
        id
        fields {
          slug
        }
      }
    }
  }
`;
