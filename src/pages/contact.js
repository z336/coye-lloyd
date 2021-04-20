import * as React from 'react';
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
`;

export default function Contact() {
  return (
    <>
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
            <h3>Please reach out</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              voluptatibus deserunt doloremque magni consequuntur ipsam atque
              sint, eum repellendus temporibus facere commodi quaerat fuga
              architecto et suscipit reprehenderit impedit iste!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              optio sit porro, odit veritatis praesentium nisi. Eveniet quasi
              hic nemo voluptas autem omnis, modi debitis dolores at architecto
              placeat a.
            </p>
          </div>
        </Grid>
      </StyledArticle>
    </>
  );
}
