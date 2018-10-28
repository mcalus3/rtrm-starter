import * as React from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import appReducer from '../../stateManagement/appState/appReducer';
import domainReducer from '../../stateManagement/DomainState/domainReducer';
import { State } from '../../stateManagement/StateModel';
import { DomainActions } from '../../stateManagement/DomainState/domainActions';
import { AppActions } from '../../stateManagement/appState/appActions';

const logger = createLogger();

let middleware = applyMiddleware(logger, thunk);

if (process.env.NODE_ENV === 'development') {
  middleware = composeWithDevTools(middleware);
}

const rootReducer = combineReducers<State>({
  appState: appReducer,
  domainState: domainReducer
});

const store = createStore(rootReducer, {}, middleware) as Store<State>;

export type Action = DomainActions | AppActions;

function withStateProvider(Component: React.ComponentType) {
  function WithStateProvider(props: object) {
    // Provider makes the state available down the React tree in the react context
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  }

  return WithStateProvider;
}

export default withStateProvider;
