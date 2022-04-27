import { searchApi } from '../../services/API';

const searchAction = (options) => async (dispatch) => {
  // TODO: Pegar token do usuário do redux com o getState.
  const request = await searchApi({ ...options, token: '1' });
  dispatch({ type: 'SET_SHOWCASE_ITEMS', payload: request });
};

export default searchAction;
