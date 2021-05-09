import * as React from 'react';
import HelmetTemplate from '../components/SEO';
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

export default function Works() {
  return (
    <>
      <HelmetTemplate title="Works" />
      <ArticleHeader>
        <div>
          <h2>Works</h2>
        </div>
      </ArticleHeader>
      <StyledArticle>
        <Grid className="featured" columns="1" gap="0">
          <a
            href="https://discovernewfields.org/calendar/mlk-day-speaking-love"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <h3>Film Dialogues</h3>
              <p>
                A feature for the art museum Newfields to celebrate Martin
                Luther King Jr. Day
              </p>
            </div>
          </a>
        </Grid>
        <Grid columns="3" columnSize="1fr" gap="0">
          <div className="borders">
            <a
              href="https://www.mixcloud.com/anne-c-laker/nomadland-guest-coye-lloyd-air-date-22521-flick-fix-wqrt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <h4>Flick Fix Podcast &ndash; Nomadland</h4>
                <p>
                  Guest appearance on Flick Flix speaking about Oscar winning
                  film <em>Nomadland.</em>
                </p>
              </div>
            </a>
          </div>
          <div className="borders">
            <a
              href="http://fafcollective.com/wap-is-the-new-bde/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <h4>WAP Is The New BDE</h4>
                <p>A piece musing the cultural phenomenon of WAP.</p>
              </div>
            </a>
          </div>
          <div className="borders">
            <a
              href="https://www.listennotes.com/podcasts/yourtop3-neferkaari-mitchell-pvjZxOHN-Va/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <h4>YourTop3</h4>
                <p>
                  Co&ndash;host of short&ndash;lived podcast ranking various
                  directors’ top 3 films.
                </p>
              </div>
            </a>
          </div>
        </Grid>
      </StyledArticle>
    </>
  );
}
