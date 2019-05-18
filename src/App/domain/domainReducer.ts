import { createSlice } from 'redux-starter-kit';

export const domainState = {
  text: 'Press the button'
};
export type DomainState = typeof domainState;

const domainSlice = createSlice({
  initialState: domainState,
  reducers: {
    setText: (state: DomainState, action: SetTextAction) => {
      state.text = action.payload.text;
    }
  }
});

export type SetTextAction = {
  type: string;
  payload: { text: string };
};

export default domainSlice;
