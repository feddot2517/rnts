import React from 'react';

class Store {
  refs: Array<React.RefObject<any>> = [];

  addRef(ref: React.RefObject<any>) {
    this.refs.push(ref);
  }
}

export const refStore = new Store();