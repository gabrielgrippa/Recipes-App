import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clipboard from 'clipboard-copy';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions/profileActions';
import ShareIcon from '../../images/shareIcon.svg';
import EmptyHeart from '../../images/whiteHeartIcon.svg';
import FilledHeart from '../../images/blackHeartIcon.svg';

function RecipeActions({ recipe }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.profileReducer.favoriteRecipes);

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    clipboard(window.location.href);
    setCopied(true);
  };

  const toggleFavorite = () => {
    const { id } = recipe;
    const foundFavorite = favorites.find((favorite) => favorite.id === id);

    const route = window.location.pathname.split('/')[1];
    const recipeType = route === 'foods' ? 'food' : 'drink';

    if (!foundFavorite) dispatch(addFavorite(recipe, recipeType));
    else dispatch(removeFavorite(id));
  };

  const isFavorite = () => favorites.find((favorite) => favorite.id === recipe.id);

  return (
    <div className="d-flex">
      <Button variant="link" onClick={ copyToClipboard }>
        { copied
          ? 'Link copied!'
          : (
            <img
              src={ ShareIcon }
              data-testid="share-btn"
              alt="Share button"
              height="25px"
            />
          )}
      </Button>
      <Button variant="link" onClick={ toggleFavorite }>
        <img
          src={ isFavorite() ? FilledHeart : EmptyHeart }
          data-testid="favorite-btn"
          alt="Favorite foot"
          height="25px"
        />
      </Button>
    </div>
  );
}

RecipeActions.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
  }),
}.isRequired;

export default RecipeActions;
