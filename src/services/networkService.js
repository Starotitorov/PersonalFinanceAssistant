import FetchMock from 'react-native-fetch-mock';
import { fetch } from 'src/utils';
import * as cacheService from './cacheService';

const CONNECTION_INFO_TYPE_NONE = 'none';

// Mock api
global.fetch = new FetchMock(require('../../mocks')).fetch;

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

const request = (method, url, headers = {}, body) =>
    fetch(url, { method, headers, body })
        .then(response => parseResponse(url, response))
        .catch(async response => {
            const responseObject = await parseResponse(url, response);

            throw responseObject;
        });

export const setConnectionInfo = info => {
    connectionInfo = info
};

export const isConnected = () =>
    !connectionInfo || connectionInfo.type !== CONNECTION_INFO_TYPE_NONE;

export const cache = promise =>
    promise
        .then(obj => {
            const { _response: { url }, ...data } = obj;
            cacheService.save(url, data);

            return obj;
        })
        .catch(async obj => {
            try {
                const data = await cacheService.load(obj._response.url);

                return { ...obj, ...data };
            } catch(e) {
                throw obj;
            }
        });

export const get = (url, headers) => request('GET', url, headers);

export const post = (url, headers, body) => request('POST', url, headers, body);

export const put = (url, headers, body) => request('PUT', url, headers, body);

export const del = (url, headers) => request('DELETE', url, headers);
