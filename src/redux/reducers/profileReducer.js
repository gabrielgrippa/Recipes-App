const user = JSON.parse(localStorage.getItem('user')) || {};
const cocktailsToken = localStorage.getItem('cocktailsToken');
const mealsToken = localStorage.getItem('mealsToken');
const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
const inProgressRecipes = JSON.parse(
  localStorage.getItem('inProgressRecipes') || '{ "meals": {}, "cocktails": {} }',
);
const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes') || '[]');

const initialState = {
  email: user.email || null,
  cocktailsToken,
  mealsToken,
  favoriteRecipes,
  inProgressRecipes,
  doneRecipes,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_USER':
    return { ...state, ...action.payload };
  case 'ADD_FAVORITE': {
    const newList = [...state.favoriteRecipes, action.payload];

    localStorage.setItem('favoriteRecipes', JSON.stringify(newList));
    return { ...state, favoriteRecipes: newList };
  }
  case 'REMOVE_FAVORITE': {
    const temp = [...state.favoriteRecipes];
    const index = temp.findIndex((r) => r.id === action.payload);
    temp.splice(index, 1);

    localStorage.setItem('favoriteRecipes', JSON.stringify(temp));
    return { ...state, favoriteRecipes: temp };
  }
  case 'UPDATE_PROGRESS': {
    const { api, recipeId, progress } = action.payload;

    const newProgress = {
      ...state.inProgressRecipes,
      [api]: {
        ...state.inProgressRecipes[api],
        [recipeId]: progress,
      },
    };

    localStorage.setItem('inProgressRecipes', JSON.stringify(newProgress));
    return { ...state, inProgressRecipes: newProgress };
  }
  case 'UPDATE_DONE_RECIPES': {
    const newList = [...state.doneRecipes, action.payload];

    localStorage.setItem('doneRecipes', JSON.stringify(newList));
    return { ...state, doneRecipes: newList };
  }
  default:
    return state;
  }
};

export default profileReducer;
