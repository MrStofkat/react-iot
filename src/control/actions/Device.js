import { doRequest } from "../../helpers/Request";
import AppState from "../AppState";


export default class Device {

  static list() {
    doRequest(`${AppState.state.apiAddress}/device/list`, 'GET')
      .then(response => {
        AppState.set({ devices: response.data });
      });
  }

  static add(name) {
    AppState.set({ loading: true });
    const postData = {
      name: name,
    };
    doRequest(`${AppState.state.apiAddress}/device/add`, 'POST', undefined, postData)
      .then(response => {
        AppState.set({ loading: false });
      });
  }

  static set(deviceID, state) {
    AppState.set({ loading: true });
    const postData = {
      id: deviceID,
      state: state,
    };
    doRequest(`${AppState.state.apiAddress}/device/set`, 'POST', undefined, postData)
      .then(response => {
        AppState.set({ loading: false });
      });
  }

}
