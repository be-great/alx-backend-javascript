import Currency from './3-currency';

/**
 * Pricing
 */
export default class Pricing {
  /**
       * Number amount - the amount.
       * Currency currency - the currency.
       */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
    * get amount attribute.
    */
  get amount() {
    return this._amount;
  }

  /**
    * set amount attribute.
    */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
    * get currency attribute.
    */
  get currency() {
    return this._currency;
  }

  /**
       * set name attribute.
       */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a currency');
    }
    this._currency = value;
  }

  /**
    * displayFullPrice - return the attributes
    * in the following format name (code).
    */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
  * convert the price
  */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return `${amount * conversionRate}`;
  }
}
