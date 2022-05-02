import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ExploreButtons from '../components/ExploreButtons';
import Header from '../components/Header';

const exploreButtons = ['Foods', 'Drinks'];

function Explore() {
  const history = useHistory();

  const handlerClick = (path) => {
    history.push(`/explore/${path}`);
  };

  return (
    <Container>
      <Header title="Explorer" enableSearch={ false } />
      <ExploreButtons exploreButtons={ exploreButtons } handlerClick={ handlerClick } />
    </Container>
  );
}

export default Explore;
