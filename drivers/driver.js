/**
 * Basic Driver Fundamentals.
 *
 * @author Jared Allard <jared@staymarta.com>
 * @license MIT
 * @version 1
 **/

const debug = require('debug')('libdb:driver')

/**
 * Main driver class.
 * @class Driver
 **/
class Driver {
  constructor() {
    this.protocol_version = 1
    debug('created');
  }

  get() {
    throw new Error('Method not supported.')
  }

  modify() {
    throw new Error('Method not supported.')
  }

  insert() {
    throw new Error('Method not supported.')
  }

  delete() {
    throw new Error('Method not supported.')
  }
}

module.exports = Driver;
