// import FetchMock from 'react-native-fetch-mock';
import { fetch, cancelableFetch } from 'src/utils';

// Mock api
// global.fetch = new FetchMock(require('../../mocks')).fetch;

const parseResponse = async (url, response = {}) => {
  let data = {};
  try {
    data = await response.json();
  } catch (e) {}

  return data;
};

const request = async (method, url, headers = {}, body, params) =>
  fetch(url, { method, headers, body, params })
    .then(response => parseResponse(url, response));

export const get = (url, headers, params) => request('GET', url, headers, undefined, params);

export const createOnceRequest = func => {
  let req = null;

  return (...args) => {
    if (req) {
      req.cancel();
    }

    req = cancelableFetch(func(...args));

    req
      .then(res => {
        req = null;

        return res;
      });

    return req;
  };
};

export const post = (url, headers, body) => request('POST', url, headers, body);

export const put = (url, headers, body) => request('PUT', url, headers, body);

export const del = (url, headers) => request('DELETE', url, headers);
