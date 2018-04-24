// import FetchMock from 'react-native-fetch-mock';
import { fetch } from 'src/utils';

const CONNECTION_INFO_TYPE_NONE = 'none';

// Mock api
// global.fetch = new FetchMock(require('../../mocks')).fetch;

let connectionInfo;

const parseResponse = async (url, response = {}) => {
  let data = {};
  try {
    data = await response.json();
  } catch (e) {}

  return {
    _response: {
      url,
      status: response.status
    },
    ...data
  };
};

const request = (method, url, headers = {}, body, params) =>
  fetch(url, { method, headers, body, params })
    .then(response => parseResponse(url, response))
    .catch(async response => {
      const responseObject = await parseResponse(url, response);

      throw responseObject;
    });

export const setConnectionInfo = info => {
  connectionInfo = info;
};

export const isConnected = () =>
  !connectionInfo || connectionInfo.type !== CONNECTION_INFO_TYPE_NONE;

export const get = (url, headers, params) => request('GET', url, headers, undefined, params);

export const post = (url, headers, body) => request('POST', url, headers, body);

export const put = (url, headers, body) => request('PUT', url, headers, body);

export const del = (url, headers) => request('DELETE', url, headers);
