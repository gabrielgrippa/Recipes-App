import React from 'react';
import { createMemoryHistory } from 'history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import rootReducer from '../redux/reducers';

// TODO: Testar esta função com o Redux. Funcionando apenas com o Router até o momento.
const renderWithReduxAndRouter = (
  component,
  { initialState,
    initialRoute = '/',
    store = createStore(rootReducer, initialState || undefined),
  } = {},
) => {
  const history = createMemoryHistory({
    initialEntries: [initialRoute],
  });

  return {
    ...render(
      <Provider store={ store }>
        <Router
          history={ history }
        >
          {component}
        </Router>
      </Provider>,
    ),
    history,
    store,
  };
};

export default renderWithReduxAndRouter;
