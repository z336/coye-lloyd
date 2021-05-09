import * as React from 'react';
import HelmetTemplate from '../components/SEO';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { FaCamera } from 'react-icons/fa';
import Article from '../styles/ArticleContent';
import ArticleHeader from '../styles/ArticleHeader';

const StyledArticleHeader = styled(ArticleHeader)`
  font-size: var(--t5);
  .space {
    padding-left: 4ch;
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
            Para Academic <br /> <span className="space"> Film</span>
            <br /> <span className="space"> Media</span> <br />
            &amp; Culture
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
