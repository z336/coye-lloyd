import * as React from 'react';
import HelmetTemplate from '../components/SEO';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { FaCamera } from 'react-icons/fa';
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
  ul {
    list-style: none;
    border-left: 1px solid;
    a:hover {
      background-color: var(--red);
      color: var(--light);
    }
  }
`;

export default function Contact() {
  return (
    <>
      <HelmetTemplate title="Contact" />
      <ArticleHeader>
        <div>
          <h2>Contact</h2>
        </div>
      </ArticleHeader>
      <StyledArticle>
        <Grid columns="2" columnSize="1fr" gap="0">
          <div className="borders">
            <StaticImage
              src="../images/coye-contact.jpg"
              alt="A picture of Coye Lloyd"
              placeholder="blurred"
              formats={['AUTO', 'WEBP', 'AVIF']}
              layout="fullWidth"
            />
            <small>
              <FaCamera /> Jes Nijjer
            </small>
          </div>
          <div className="borders">
            <h3>Let's build</h3>
            <ul>
              <li>
                <a
                  href="mailto:coyelloyd@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  coyelloyd@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/koi_phish/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/coye-lloyd-87252a21/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </Grid>
      </StyledArticle>
    </>
  );
}
