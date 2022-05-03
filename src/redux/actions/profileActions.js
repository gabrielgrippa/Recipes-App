import { ADD_FAVORITE, REMOVE_FAVORITE } from '.';

const loginAction = (email) => (dispatch) => {
  localStorage.setItem('user', JSON.stringify({ email }));
  localStorage.setItem('cocktailsToken', '1');
  localStorage.setItem('mealsToken', '1');

  dispatch({
    type: 'UPDATE_USER',
    payload: {
      email,
      cocktailsToken: '1',
      mealsToken: '1',
    },
  });
};

const addFavorite = (recipe, type) => (dispatch) => {
  const payload = {
    id: recipe.id,
    type: type || '',
    nationality: recipe.nationality || '',
    category: recipe.category || '',
    alcoholicOrNot: recipe.alcoholic || '',
    name: recipe.title || '',
    image: recipe.image || '',
  };

  dispatch({ type: ADD_FAVORITE, payload });
};

const removeFavorite = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FAVORITE, payload: id });
};

export { addFavorite, loginAction, removeFavorite };
