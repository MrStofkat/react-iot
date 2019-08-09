import axios from 'axios';


export function doRequest(url, method, token, data) {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method: method,
      data: data ? JSON.stringify({ ...data }) : null,
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });

}
