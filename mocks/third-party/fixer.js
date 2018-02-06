import fixerLatestSuccessResponse from './fixerLatestSuccessResponse'

const FIXER_API_URL = 'https://api.fixer.io';

export default {
    [`GET ${FIXER_API_URL}/latest`]: ({ method, url, params, urlparams, headers }) =>
        fixerLatestSuccessResponse
}

