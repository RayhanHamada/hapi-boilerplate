const {
  AddBookHandler,
  GetBookByIdHandler,
  EditBookByIdHandler,
  DeleteBookByIdHandler,
  GetAllBooksHandler,
} = require('./routeHandler');

/**
 * @type {import('@hapi/hapi').ServerRoute[]} Routes
 */
module.exports = [
  {
    method: 'GET',
    path: '/books',
    handler: GetAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: GetBookByIdHandler,
  },
  {
    method: 'POST',
    path: '/books',
    handler: AddBookHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: EditBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: DeleteBookByIdHandler,
  },
];
