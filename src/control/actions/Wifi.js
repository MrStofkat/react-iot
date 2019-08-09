import { doRequest } from "../../helpers/Request";
import AppState from "../AppState";


export default class Wifi {

  static connect(ssid, password) {
    doRequest(`${this.apiAddress}/wifi/connect`, 'POST').then(data => {
      AppState.set('devices', data);
    });
  }
  
  static disconnect() {
    doRequest(`${this.apiAddress}/devices`, 'GET').then(data => {
      AppState.set('devices', data);
    });
  } 

}


