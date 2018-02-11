function getQueryString(params) {
    const pairs = Object
        .keys(params)
        .map(k => {
            if (Array.isArray(params[k])) {
                return params[k]
                    .map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
                    .join('&')
            }

            return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
        })
        .join('&');

    return '?' + pairs;
}

export default (url, options = {}) => {
    if (options.params) {
        url = url.concat(getQueryString(options.params));
    }

    return fetch(url, options)
        .then(response => {
            return (response.status >= 200 && response.status < 300) ?
                Promise.resolve(response) :
                Promise.reject(response);
        });
}
