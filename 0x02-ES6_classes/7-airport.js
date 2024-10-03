export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
    * get code attribute.
    */
  get code() {
    return this._code;
  }

  /**
    * set code attribute.
    */
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = value;
  }

  /**
    * get name attribute.
    */
  get name() {
    return this._name;
  }

  /**
    * set name attribute.
    */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
