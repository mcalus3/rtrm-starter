import * as React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import appSlice from './appNavigation/navigationReducer';
import domainSlice from './domain/domainReducer';
import { State, initialState } from './StateModel';
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';

const reducer = {
  appState: appSlice.reducer,
  domainState: domainSlice.reducer
};

const middleware = getDefaultMiddleware();
const preloadedState: State = initialState;

const store = configureStore<State, any>({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState
}) as Store<State>;

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
