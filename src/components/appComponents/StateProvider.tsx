import * as React from 'react';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import appReducer from '../../stateManagement/appState/appReducer';
import domainReducer from '../../stateManagement/DomainState/domainReducer';
import { State } from '../../stateManagement/StateModel';
import { DomainActions } from '../../stateManagement/DomainState/domainActions';
import { AppActions } from '../../stateManagement/appState/appActions';

const rootReducer = combineReducers<State>({
  appState: appReducer,
  domainState: domainReducer
});

const store = createStore(rootReducer, {}) as Store<State>;

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
