const books = require('./books');

/**
 * @type {import('@hapi/hapi').ServerRoute[]} Routes
 */
module.exports = [
  {
    method: 'GET',
    path: '/books',
    handler: (request, reply) => {},
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: (request, reply) => {},
  },
  {
    method: 'POST',
    path: '/books',
    handler: (request, reply) => {},
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: (request, reply) => {},
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: (request, reply) => {},
  },
];
