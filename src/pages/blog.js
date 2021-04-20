import * as React from 'react';
import { Link, graphql } from 'gatsby';
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
  a {
    text-decoration: none;
  }
`;

export default function Blog({ data }) {
  const { posts } = data.blog;
  return (
    <>
      <ArticleHeader>
        <div>
          <h2>Blog</h2>
        </div>
      </ArticleHeader>
      <StyledArticle>
        {posts.map((post) => (
          <Grid
            className="featured"
            key={post.id}
            columns="1"
            columnSize="1fr"
            gap="2rem"
          >
            <div>
              <Link to={post.fields.slug} tabIndex="-1">
                <h3>{post.frontmatter.title}</h3>
              </Link>
            </div>
            <div>
              <Link to={post.fields.slug}>
                <p>{post.excerpt}</p>
              </Link>
            </div>
          </Grid>
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
          date(fromNow: true)
          title
          author
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
