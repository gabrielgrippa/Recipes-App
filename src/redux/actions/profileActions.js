import { ADD_FAVORITE, REMOVE_FAVORITE, UPDATE_DONE_RECIPES, UPDATE_PROGRESS } from '.';

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

const updateProgress = (api, recipeId, progress) => ({
  type: UPDATE_PROGRESS,
  payload: {
    api,
    progress,
    recipeId,
  },
});

const addDoneRecipe = (recipe) => (dispatch) => {
  const {
    id,
    type,
    nationality,
    category,
    title,
    image,
    tags,
  } = recipe;

  const date = new Date();
  const dd = date.getDate().toString().padStart(2, '0');
  const mm = date.getMonth().toString().padStart(2, '0');
  const yyyy = date.getFullYear().toString();
  const today = `${dd}/${mm}/${yyyy}`;

  dispatch({
    type: UPDATE_DONE_RECIPES,
    payload: {
      id,
      type,
      nationality,
      category,
      alcoholicOrNot: recipe.alcoholic || '',
      name: title,
      image,
      tags,
      doneDate: today,
    } });
};

export { addDoneRecipe, addFavorite, loginAction, removeFavorite, updateProgress };
