import * as React from 'react';
import styled from 'styled-components';
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const StyledFooter = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-left: var(--gutter);
  padding-right: var(--gutter);
  padding-bottom: 2rem;
  padding-top: 2rem;
  border-top: 1px solid;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      font-size: var(--t5);
      padding-right: 0.75rem;
      :last-child {
        padding-right: 0;
      }
    }
  }
  p {
    justify-self: end;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a
            href="https://www.instagram.com/fleshy_fresh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Coye's Instagram"
          >
            <FaInstagramSquare />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Coye's Twitter"
          >
            <FaTwitterSquare />
          </a>
        </li>
      </ul>
      <p>© {new Date().getFullYear()}</p>
    </StyledFooter>
  );
}
