import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { exploreIngredients, searchAction } from '../redux/actions/showcaseActions';
import { INGREDIENT_SEARCH } from '../redux/actions';

function DisplayCard({ recipe, typeCard, index, pathname }) {
  const dinamicBg = pathname === 'foods' ? 'bg-warning text-dark' : 'bg-info text-white';
  const { recipeType } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const redirectPath = typeCard === 'recipe'
    ? `/${pathname}/${recipe.id}` : `/${pathname}`;

  // estou pensando ainda em como refatorar, coloquei muita lógica dentro do display card
  const handlerClick = (path, ingredient) => {
    if (typeCard === 'ingredient') {
      dispatch(exploreIngredients(true));
      dispatch(searchAction({
        api: recipeType,
        searchType: INGREDIENT_SEARCH,
        token: 1,
        query: ingredient,
      }));
    }
    history.push(path);
  };

  return (
    <button
      type="button"
      data-testid={ `${index}-${typeCard}-card` }
      onClick={ () => handlerClick(redirectPath, recipe.title) }
      style={
        { width: '148.5px', margin: '2.5%', border: 'none', backgroundColor: 'white' }
      }
    >
      <Card className="text-center">
        <Card.Img
          data-testid={ `${index}-card-img` }
          src={ recipe.image }
          alt={ `${recipe.title}-img` }
          variant="top"
        />
        <Card.Footer
          data-testid={ `${index}-card-name` }
          className={ dinamicBg }
        >
          { recipe.title }
        </Card.Footer>
      </Card>
    </button>
  );
}

DisplayCard.propTypes = {
  recipe: PropTypes.object,
  pathname: PropTypes.string,
}.isRequired;

export default DisplayCard;
