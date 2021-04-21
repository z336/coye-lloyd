import * as React from 'react';
import HelmetTemplate from '../components/SEO';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { FaCamera } from 'react-icons/fa';
import Article from '../styles/ArticleContent';
import ArticleHeader from '../styles/ArticleHeader';

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
      <ArticleHeader>
        <div>
          <h2>
            Big bold <br /> huge ass <br /> text
          </h2>
        </div>
      </ArticleHeader>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul>
              <li>things</li>
              <li>stuff</li>
              <li>other things</li>
            </ul>
            <Link to="/bio">Learn more &rarr;</Link>
          </div>
        </IndexGrid>
      </StyledArticle>
    </>
  );
}
