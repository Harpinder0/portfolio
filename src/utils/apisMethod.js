import axios from 'axios';
// import version from '../../package.json';

// const authorization = localStorage.getItem('token');
// const userId = localStorage.getItem('userId');

// export function getHeaders() {
//   const headers = {
//     'Authorization' : authorization,
//     'userId': userId,
//     'Content-Type': 'application/json',
//   };
//   return headers;
// }

export function apiReq(endPoint, data, method, headers, requestOptions = {}) {
  return new Promise((resolve, reject) => {
    headers = {
    //   ...getHeaders(),
    //   ...headers,
    //   'x-apy-ui-version': version.version,
      // 'x-apy-org': sessionOrg(),
    };

    if (method === 'get' || method === 'delete') {
      data = {
        ...requestOptions,
        params: data,
        headers,
        data: {},
      };
      data.paramsSerializer = (params) => JSON.stringify(params, { arrayFormat: 'repeat' });
    }
    axios[method](endPoint, data, { headers })
      .then((result) => {
        const { data: resp } = result;
        if (resp.status === false) {
          return reject(resp);
        }
        return resolve(resp);
      })
      .catch((error) => {
        if (error.response && (error.response.status === 401 && error.response.data.error.message === 'Unauthenticated')) {
          localStorage.removeItem('token');
          window.location.assign('/');
        }
        // if (error && error.response === undefined) {
        //   message.error('Network Error');
        // }
        reject(error);
        return error;
      });
  });
}

export function apiGet(endPoint, data, headers, requestOptions) {
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}
export function apiPost(endPoint, data, headers, requestOptions) {
  return apiReq(endPoint, data, 'post', headers, requestOptions);
}
export function apiPatch(endPoint, data, headers, requestOptions) {
  return apiReq(endPoint, data, 'patch', headers, requestOptions);
}
export function apiPut(endPoint, data, headers, requestOptions) {
  return apiReq(endPoint, data, 'put', headers, requestOptions);
}
export function apiDelete(endPoint, data, headers, requestOptions) {
  return apiReq(endPoint, data, 'delete', headers, requestOptions);
}