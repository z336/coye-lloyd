import * as React from 'react';
import styled from 'styled-components';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

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
      font-size: var(--t4);
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
            href="https://www.instagram.com/koi_phish/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Coye's Instagram account"
          >
            <FaInstagramSquare />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/coye-lloyd-87252a21/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Coye's LinkedIn account"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p>© {new Date().getFullYear()}</p>
    </StyledFooter>
  );
}
