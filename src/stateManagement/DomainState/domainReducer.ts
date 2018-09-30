import { DomainActions, DomainActionTypes } from './domainActions';
import { initialState, DomainState } from '../StateModel';

const fractalReducer = (
  state: DomainState = initialState.domainState,
  action: DomainActions
) => {
  switch (action.type) {
    case DomainActionTypes.changeText:
      const newState = { ...state, text: action.payload.text };
      return newState;

    default:
      return state;
  }
};

export default fractalReducer;
