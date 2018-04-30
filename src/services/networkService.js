// import FetchMock from 'react-native-fetch-mock';
import { fetch } from 'src/utils';

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
    .then(response => parseResponse(url, response))
    .catch(async response => {
      throw await parseResponse(url, response);
    });

export const get = (url, headers, params) => request('GET', url, headers, undefined, params);

export const post = (url, headers, body) => request('POST', url, headers, body);

export const put = (url, headers, body) => request('PUT', url, headers, body);

export const del = (url, headers) => request('DELETE', url, headers);
