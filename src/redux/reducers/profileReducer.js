const user = JSON.parse(localStorage.getItem('user')) || {};
const cocktailsToken = localStorage.getItem('cocktailsToken');
const mealsToken = localStorage.getItem('mealsToken');
const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');

const initialState = {
  email: user.email || null,
  cocktailsToken,
  mealsToken,
  favoriteRecipes,
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
  default:
    return state;
  }
};

export default profileReducer;
