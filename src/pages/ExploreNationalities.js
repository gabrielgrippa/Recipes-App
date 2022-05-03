import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreNationalities() {
  return (
    <Container>
      <Header title="Explore Nationalities" enableSearch={ false } />

      <Footer />
    </Container>
  );
}

export default ExploreNationalities;
