/**
 * Building
 */
export default class Building {
  /**
  * Number sqft :
  */
  constructor(sqft) {
    this.sqft = sqft;
    // Check if this is not the Building class itself
    if (this.constructor !== Building) {
      // Check if evacuationWarningMessage is not a function
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  /**
  * get amount attribute.
  */
  get sqft() {
    return this._sqft;
  }

  /**
    * set sqft attribute.
    */
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }
}
