import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import favoriteIcon from '../images/blackHeartIcon.svg';

function HorizontalCards({ recipesArray }) {
  const [copiedRecipe, setCopiedRecipe] = useState();

  const copyPath = ({ target }) => {
    copy(`http://localhost:3000/${target.id}`);
    setCopiedRecipe(target.id);
  };

  function renderAlert() {
    return (<>Link copied!</>);
  }

  return (
    <Container className="d-flex flex-wrap ">
      {recipesArray.map((recipe, index) => (
        <Link
          key={ recipe.id }
          to={ `/${recipe.type}s/${recipe.id}` }
          style={ { width: '148.5px', margin: '2.5%' } }
        >
          <Card
            className="text-center d-flex flex-row"
          >
            <Card.Img
              data-testid={ `${index}-horizontal-image` }
              src={ recipe.image }
              alt={ `${recipe.name}-img` }
              variant="bottom"
            />
            <Card.Body
              data-testid={ `${index}-card-name` }
              className="bg-warning text-dark"
            >
              <p
                style={ { fontSize: 12 } }
                data-testid={ `${index}-horizontal-top-text` }
              >
                { recipe.type === 'food' ? `${recipe.nationality} - ${recipe
                  .category}` : `${recipe.alcoholicOrNot}`}
              </p>
              <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
              <button
                type="button"
                onClick={ copyPath }
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
              >
                <img
                  id={ `${recipe.type}s/${recipe.id}` }
                  src={ shareIcon }
                  alt="share button"
                />
              </button>
              { copiedRecipe === `${recipe.type}s/${recipe.id}` ? renderAlert() : null }
              <button
                type="button"
                data-testid={ `${index}-horizontal-favorite-btn` }
                src={ favoriteIcon }
              >
                <img src={ favoriteIcon } alt="favorite button" />
              </button>
            </Card.Body>
          </Card>
        </Link>
      ))}
    </Container>
  );
}

HorizontalCards.propTypes = {
  recipesArray: PropTypes.arrayOf.isRequired,
};

export default HorizontalCards;
