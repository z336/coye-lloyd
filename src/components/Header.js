import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: end;
  margin-left: var(--gutter);
  margin-right: var(--gutter);
  padding-top: 2.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid;
  .site-name {
    font-family: var(--display-font);
    font-size: var(--t5);
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    a {
      text-decoration: none;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1 className="site-name">
        <Link to="/" className="site-name">
          Coye Lloyd
        </Link>
      </h1>
      <Nav />
    </StyledHeader>
  );
}
