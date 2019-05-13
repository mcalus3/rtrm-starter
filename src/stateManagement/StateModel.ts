export const initialState = {
  appState: {
    drawerVisible: false
  },
  domainState: {
    text: 'Press the button'
  }
};

export type AppState = typeof initialState.appState;
export type DomainState = typeof initialState.domainState;
export type State = {
  appState: AppState;
  domainState: DomainState;
};
