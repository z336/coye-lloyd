import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    list-style: none;
    li {
      .active ::before,
      :hover::before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
    a {
      position: relative;
      text-decoration: none;
      ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: -0.1rem;
        left: 0;
        background-color: var(--black);
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.2s ease-in-out 0s;
      }
      :hover::before {
        visibility: visible;
        transform: scaleX(1);
      }
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
