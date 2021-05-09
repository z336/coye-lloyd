import * as React from 'react';
import HelmetTemplate from '../components/SEO';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { FaCamera, FaRegSmile } from 'react-icons/fa';
import ArticleHeader from '../styles/ArticleHeader';
import Article from '../styles/ArticleContent';
import Grid from '../styles/Grid';

const StyledArticle = styled(Article)`
  padding-top: var(--vertical-space);
  padding-bottom: var(--vertical-space);
  opacity: 1;
  background-image: radial-gradient(var(--black) 1px, var(--light) 1px);
  background-size: 0.75rem 0.75rem;
  a:hover {
    background-color: var(--red);
    color: var(--light);
  }
`;

export default function Bio() {
  return (
    <>
      <HelmetTemplate title="Bio" />
      <ArticleHeader>
        <div>
          <h2>Bio</h2>
        </div>
      </ArticleHeader>
      <StyledArticle>
        <Grid columns="2" columnSize="1fr" gap="0">
          <div className="borders">
            <StaticImage
              src="../images/coye-bio.jpg"
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
            <p>
              I began this career young and naive in the classrooms of Indiana
              University. I found my obsessions of pop culture were actually
              applicable observations of the world we actually live in. After
              many years on the fence, I took the advice of my IU professors to
              pursue a graduate degree in film studies.
            </p>
            <p>
              At Ohio University I learned that my life without scholarship and
              learning had been empty. At OU, I focused on genre film like
              horror, action, science fiction, and its relationship{' '}
              <s>(in my mind)</s> to larger discussions of race, class, and
              gender. I believe cinema reflects culture and history, and it’s my
              greatest curiosity to explore how they inspire one another.
            </p>
            <p>
              Beyond film, I love to wax poetically about all things pop
              culture: music, television, news media, studio arts, home arts,
              fashion, and The Internet (not Syd Tha Kyd, but the thing you’re
              looking at right now).
            </p>
            <p>
              <Link to="/contact">Reach out</Link>, let’s link, let’s get some
              culture.
            </p>
            <p>
              <FaRegSmile />
            </p>
          </div>
        </Grid>
      </StyledArticle>
    </>
  );
}
