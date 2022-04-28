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

export default loginAction;
