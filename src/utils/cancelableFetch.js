class RequestCancellationError extends Error {
  constructor() {
    super();
    this.message = 'Request cancellation.';
  }
}

const cancelableFetch = promise => {
  let canceled = false;

  const result = new Promise((resolve, reject) => {
    promise.then(res => {
      if (canceled) {
        if (res.body && res.body.cancel) {
          res.body.cancel();
        }

        reject(new RequestCancellationError());
      } else {
        resolve(res);
      }
    })
  });

  result.cancel = () => { canceled = true };

  return result;
};

export default cancelableFetch;
