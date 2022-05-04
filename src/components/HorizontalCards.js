import React from 'react';
import { Card, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import RecipeActions from './RecipeDetails/RecipeActions';

function HorizontalCards({ recipesArray }) {
  return (
    <Container
      className="d-flex flex-wrap justify-content-center"
    >
      {recipesArray.map((recipe, index) => (
        <Container
          key={ recipe.id }
          className="d-flex bg-warning text-dark shadow-sm p-2"
          style={ { margin: '2.5%',
            position: 'relative',
            borderRadius: '5px',
            width: '100%',
          } }
        >
          <Link
            to={ `/${recipe.type}s/${recipe.id}` }
          >
            <Card
              className="text-center d-flex flex-row"
              style={ { border: 'none' } }
            >
              <Card.Img
                data-testid={ `${index}-horizontal-image` }
                src={ recipe.image }
                alt={ `${recipe.name}-img` }
                variant="bottom"
                style={ { width: '50%' } }
              />
              <Card.Body
                data-testid={ `${index}-card-name` }
                className="bg-warning text-dark"
                style={ { width: '50%', padding: '5px' } }
              >
                <Card.Text
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { recipe.type === 'food' ? `${recipe.nationality} - ${recipe
                    .category}` : `${recipe.alcoholicOrNot}`}
                </Card.Text>
                <Card.Title
                  data-testid={ `${index}-horizontal-name` }
                >
                  {recipe.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
          <Container
            style={ {
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '50%' } }
          >
            <RecipeActions
              recipe={ recipe }
              testIdModifier={ `${index}-horizontal-` }
              copyPathModifier={ `http://localhost:3000/${recipe.type}s/${recipe.id}` }
            />
          </Container>
        </Container>
      ))}
    </Container>
  );
}

HorizontalCards.propTypes = {
  recipesArray: PropTypes.arrayOf.isRequired,
};

export default HorizontalCards;
