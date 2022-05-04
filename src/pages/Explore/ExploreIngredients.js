import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function ExploreIngredients() {
  return (
    <Container>
      <Header title="Explore Ingredients" enableSearch={ false } />

      <Footer />
    </Container>
  );
}

export default ExploreIngredients;
