export class CacheError extends Error {
  constructor() {
    super();
    this.message = 'Not Cached';
  }
}
