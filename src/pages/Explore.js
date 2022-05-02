import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import { PATH_FOODS } from '../redux/actions';

const exploreButtons = ['Foods', 'Drinks'];

function Explore() {
  const history = useHistory();

  const handlerClick = (path) => {
    history.push(`/explore/${path}`);
  };

  return (
    <Container>
      <Header title="Explorer" />
      <Container className="d-flex flex-column mt-5">
        {exploreButtons.map((button) => {
          const lowerText = button.toLowerCase();
          const dinamicBg = lowerText === PATH_FOODS
            ? 'bg-warning text-dark' : 'bg-info text-white';
          return (
            <Button
              data-testid={ `explore-${lowerText}` }
              key={ button }
              className={ `m-1 ${dinamicBg}` }
              onClick={ () => handlerClick(lowerText) }
            >
              { `Explore ${button}` }
            </Button>
          );
        })}
      </Container>
    </Container>
  );
}

export default Explore;
