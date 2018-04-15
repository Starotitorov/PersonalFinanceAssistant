export class NetworkConnectionError extends Error {
  constructor() {
    super();
    this.message = 'Not Connected';
  }
}

export class CacheError extends Error {
  constructor() {
    super();
    this.message = 'Not Cached';
  }
}
