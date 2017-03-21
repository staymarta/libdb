/**
 * Arangodb libdb driver.
 *
 * @author Jared Allard <jared@staymarta.com>
 * @license BSD-3-Clause (This driver only)
 * @version 1
 **/

'use strict';

const Driver   = require('./driver.js');
const arango   = require('arangojs');
const debug    = require('debug')('libdb:driver:arangodb')

class ArangoDB extends Driver {
  constructor() {
    super();
    debug('created')
  }

  get() {

  }

  insert() {

  }

  modify() {

  }

  delete() {
    
  }
}

module.exports = ArangoDB;
