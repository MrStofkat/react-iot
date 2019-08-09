import AppStateComponent from "./AppStateComponent";

/**
 * Describes the full app state, so everything that can be globally used
 */
export default class AppState {
  // Initial state
   static state = {
    loading: false,
    devices: [],
    apiAddress: 'http://192.168.178.94',
  };

  static set(newState) {
    AppState.state = {
      ...AppState.state,
      ...newState
    };
    AppStateComponent.set(AppState.state);
  }
}