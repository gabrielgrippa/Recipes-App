const user = JSON.parse(localStorage.getItem('user')) || {};
const cocktailsToken = localStorage.getItem('cocktailsToken');
const mealsToken = localStorage.getItem('mealsToken');

const initialState = {
  email: user.email || null,
  cocktailsToken,
  mealsToken,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_USER':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default profileReducer;
