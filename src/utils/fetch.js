function getQueryString(params) {
  return params ?
    `?${Object.keys(params)
      .map(k => {
        if (Array.isArray(params[k])) {
          return params[k]
            .map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
            .join('&');
        }

        return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
      })
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
