export class Container {
  public storage: { [token: string]: any } = {};

  service(token: string, executor: (storage: { [token: string]: any }) => any) {
    this.storage[token] = executor(this.storage);
  }

  serviceLazyLoad(token: string, executor: (self: this) => any) {
    Object.defineProperty(this, token, {
      get: () => {
        if (!this.storage.hasOwnProperty(token)) {
          this.storage[token] = executor(this);
        }

        return this.storage[token];
      },
      configurable: true,
      enumerable: true,
    });

    return this;
  }
}
