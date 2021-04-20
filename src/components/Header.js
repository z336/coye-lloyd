import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Nav from './Nav';
import Grid from '../styles/Grid';

const StyledHeader = styled.header`
  grid-area: header;
  align-items: end;
  margin-left: var(--gutter);
  margin-right: var(--gutter);
  padding-top: 2.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid;
  @media (max-width: 800px) {
    padding-top: 1rem;
  }
  .site-name {
    font-family: var(--display-font);
    font-size: var(--t5);
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    a {
      text-decoration: none;
    }
    @media (max-width: 800px) {
      padding-bottom: 1rem;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Grid columns="2" columnSize="1fr">
        <h1 className="site-name">
          <Link to="/" className="site-name">
            Coye Lloyd
          </Link>
        </h1>
        <Nav />
      </Grid>
    </StyledHeader>
  );
}
