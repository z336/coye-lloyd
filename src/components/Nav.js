import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    list-style: none;
    a {
      text-decoration: none;
      background: linear-gradient(currentColor 0 0) var(--p, 0) 100% /
        var(--d, 0) 2px no-repeat;
      transition: 0.1s, background-position 0s 0.1s;
      :hover {
        --d: 100%;
        --p: 100%;
      }
    }
    .active {
      background: linear-gradient(currentColor 0 0) 100% 100% / 100% 2px
        no-repeat;
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/bio" activeClassName="active">
            Bio
          </Link>
        </li>
        <li>
          <Link to="/works" activeClassName="active">
            Works
          </Link>
        </li>
        <li>
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
}
