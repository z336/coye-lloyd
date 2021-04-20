import * as React from 'react';
import 'normalize.css';
import '../styles/GlobalStyles.scss';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const SiteLayout = styled.div`
  min-height: 100vh;
  /* max-width: 70rem; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;

const Main = styled.main`
  grid-area: main;
`;

export default function Layout({ children }) {
  return (
    <SiteLayout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </SiteLayout>
  );
}
