function getQueryString(params) {
  return params ?
    `?${Object.keys(params)
      .reduce((acc, k) => {
        if (typeof params[k] === 'undefined') {
          return acc;
        }

        if (Array.isArray(params[k])) {
          return [...acc, params[k]
            .map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
            .join('&')];
        }

        return [...acc, `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`];
      }, [])
      .join('&')}` :
    '';
}

export default (url, options = {}) => {
  const requesttUrl = url.concat(getQueryString(options.params));

  return fetch(requesttUrl, options)
    .then(response => (response.status >= 200 && response.status < 300) ?
      Promise.resolve(response) :
      Promise.reject(response));
};
