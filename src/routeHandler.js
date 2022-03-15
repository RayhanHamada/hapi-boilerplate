const books = require('./books');

/**
 * @typedef {import('@hapi/hapi').Lifecycle.Method} Handler
 */

module.exports = {
  /**
   * @type {Handler}
   */
  AddBookHandler: (request, reply) => {},

  /**
   * @type {Handler}
   */
  GetAllBooksHandler: (request, reply) => {},

  /**
   * @type {Handler}
   */
  GetBookByIdHandler: (request, reply) => {},

  /**
   * @type {Handler}
   */
  EditBookByIdHandler: (request, reply) => {},

  /**
   * @type {Handler}
   */
  DeleteBookByIdHandler: (request, reply) => {},
};
