import * as React from 'react';
import HelmetTemplate from '../components/SEO';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { FaCamera } from 'react-icons/fa';
import Article from '../styles/ArticleContent';
import ArticleHeader from '../styles/ArticleHeader';

const StyledArticleHeader = styled(ArticleHeader)`
  .ampersand {
    font-family: var(--display-font);
    color: black;
    -webkit-text-fill-color: var(--light);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--black);
  }

  @media (max-width: 900px) {
    .film {
      padding-left: 1ch;
    }
    .media {
      padding-left: 1ch;
    }
  }

  @media (min-width: 900px) {
    .film {
      padding-left: 4ch;
    }
    .media {
      padding-left: 4ch;
    }
  }
`;

const StyledArticle = styled(Article)`
  padding-bottom: var(--vertical-space);
`;

const IndexGrid = styled.div`
  margin-left: var(--gutter);
  margin-right: var(--gutter);
  background-color: var(--light);
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--gutter);
  }
  .image {
    padding-top: var(--vertical-space);
  }
  .cta {
    padding-top: var(--vertical-space);
    a:hover {
      background-color: var(--red);
      color: var(--light);
    }
    ul {
      list-style: none;
      border-left: 1px solid;
    }
  }
`;

export default function IndexPage() {
  return (
    <>
      <HelmetTemplate title="Home" />
      <StyledArticleHeader>
        <div>
          <h2>
            Para Academic <br />
            <span className="film"> Film</span>
            <br />
            <span className="media">Media</span> <br />
            <span className="culture">
              <span className="ampersand">&amp;</span> Culture
            </span>
          </h2>
        </div>
      </StyledArticleHeader>
      <StyledArticle>
        <IndexGrid>
          <div className="image">
            <StaticImage
              src="../images/coye-index.jpg"
              alt="A picture of Coye Lloyd"
              placeholder="blurred"
              formats={['AUTO', 'WEBP', 'AVIF']}
              layout="fullWidth"
            />
            <div className="credit">
              <small>
                <FaCamera /> Jedediah Johnson
              </small>
            </div>
          </div>
          <div className="cta">
            <p>
              I’m a film nerd turned scholar, turned sorta drop-out, turned
              nerd, turned back to scholarship.
            </p>
            <ul>
              <li>Curation</li>
              <li>Writing</li>
              <li>Criticism</li>
            </ul>
            <Link to="/bio">Learn more &rarr;</Link>
          </div>
        </IndexGrid>
      </StyledArticle>
    </>
  );
}
