/**
 * Libdb - Database Abstraction for StayMarta, supports document stores.
 *
 * @author Jared Allard <jared@staymarta.com>
 * @license MIT
 * @version 1
 **/

const debug = require('debug')('libdb:class');
const drivers = {
  arangodb: require('./drivers/arangodb.js')
}

/**
 * Hack to make a param required via defaults.
 * @returns {undefined} throws an error.
 **/
const required = () => {
  throw 'Missing Param, please check your syntax.';
}

class DB {
  /**
   * @constructor
   * @param {String} [driver='arangodb'] - Database driver to use.
   **/
  constructor(driver = 'arangodb') {
    const Driver = drivers[driver]
    if(!Driver) throw Error('Driver not found');

    debug('using driver', driver);

    this.driver = new Driver()
  }

  /**
   * Get a object from {document}
   *
   * @param {String} key - key to get
   * @returns {Promise} Then/catch, the usual.
   **/
  async get(key = required()) {
    await this.driver.get(key)
  }

  /**
   * Modify data at {key}
   *
   * @param {String} key - key to Modify
   * @param {*} data - data to store
   * @returns {Promise} Why does this need a description.
   **/
  async modify(key = required(), data) {
    await this.driver.modify(key, data)
  }

  /**
   * Insert data into {key}
   *
   * @param {String} [key='random'] - key to insert into, or random.
   * @param {*} data - to store
   * @note Random isn't supported on all drivers.
   * @returns {Promise} You know what to do.
   **/
  async insert(key = 'random', data) {
    await this.driver.insert(key, data)
  }

  /**
   * Delete {key}
   *
   * @param {String} key - to delete.
   * @returns {Promise} when deleted.
   **/
  async delete(key) {
    await this.driver.delete(key);
  }
}


let db = new DB();
db.delete();
