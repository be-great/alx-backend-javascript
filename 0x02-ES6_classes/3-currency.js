/**
 * Methods, static methods, computed.
 */
export default class Currency {
  /**
     * Creates a new @see {@link HolbertonCourse}.
     *
     * String name - course name.
     * Number length - length of the course (in months).
     * String students - students name.
     */
  constructor(code, name) {
    this.code = code;
    this.name = name;
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

  /**
     * displayfullcurrency -  return the attributes
     * in the following format name (code).
     */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
