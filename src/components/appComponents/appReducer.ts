import { createSlice } from 'redux-starter-kit';

export const appState = {
  drawerVisible: false
};
export type AppState = typeof appState;

const appSlice = createSlice({
  initialState: appState,
  reducers: {
    toggleDrawer: (state: AppState) => {
      state.drawerVisible = !state.drawerVisible;
    }
  }
});

type DrawerVisibleAction = { type: string };
export type AppActions = DrawerVisibleAction;

export default appSlice;
