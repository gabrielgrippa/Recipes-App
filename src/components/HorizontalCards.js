import React from 'react';
import { Card, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import RecipeActions from './RecipeDetails/RecipeActions';

function HorizontalCards({ recipesArray }) {
  const renderTags = (tags, index) => (
    tags.map((tag) => (
      <span
        key={ tag }
        className="text-muted"
        data-testid={ `${index}-${tag}-horizontal-tag` }
      >
        {`|${tag}|`}
      </span>
    ))
  );
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
                <Card.Subtitle
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { recipe.type === 'food' ? `${recipe.nationality} - ${recipe
                    .category}` : `${recipe.alcoholicOrNot}`}
                </Card.Subtitle>
                { recipe.type === 'food' && recipe.tags
                    && (
                      renderTags(recipe.tags, index)
                    ) }
                <Card.Title
                  data-testid={ `${index}-horizontal-name` }
                >
                  {recipe.name}
                </Card.Title>
                { recipe.doneDate
                && (
                  <Card.Subtitle
                    className="text-muted"
                    data-testid={ `${index}-horizontal-done-date` }
                  >
                    {recipe.doneDate}
                  </Card.Subtitle>
                )}
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
            />
          </Container>
        </Container>
      ))}
    </Container>
  );
}

HorizontalCards.propTypes = {
  recipesArray: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default HorizontalCards;
