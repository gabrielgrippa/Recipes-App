import { searchApi } from '../../services/API';

const searchAction = (options) => async (dispatch, getState) => {
  const { profileReducer: { cocktailsToken, mealsToken } } = getState();

  const request = await searchApi({
    ...options,
    token: options.api === 'drinks' ? cocktailsToken : mealsToken });
  dispatch({ type: 'SET_SHOWCASE_ITEMS', payload: request });
};

export default searchAction;
