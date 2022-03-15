const { nanoid } = require('nanoid');
const books = require('./books');

/**
 * @typedef {import('@hapi/hapi').Lifecycle.Method} Handler
 */

module.exports = {
  /**
   * @type {Handler}
   */
  AddBookHandler: (request, reply) => {
    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = request.payload;

    if (!name || name === '') {
      return reply
        .response({
          status: 'fail',
          message: 'Gagal menambahkan buku. Mohon isi nama buku',
        })

        .code(400);
    }

    if (readPage > pageCount) {
      return reply
        .response({
          status: 'fail',
          message:
            'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        })
        .code(400);
    }

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;

    const newBook = {
      id,
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      finished: readPage === pageCount,
      insertedAt,
      updatedAt,
    };

    books.push(newBook);

    const success = books.filter((book) => book.id === id).length > 0;

    if (!success) {
      return reply
        .response({
          status: 'error',
          message: 'Buku gagal ditambahkan',
        })
        .code(500);
    }

    return reply
      .response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: id,
        },
      })
      .code(201);
  },

  /**
   * @type {Handler}
   */
  GetAllBooksHandler: (request, reply) =>
    reply
      .response({
        status: 'success',
        data: {
          books: books.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          })),
        },
      })
      .code(200),

  /**
   * @type {Handler}
   */
  GetBookByIdHandler: (request, reply) => {
    const { bookId } = request.params;

    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
      return reply
        .response({
          status: 'fail',
          message: 'Buku tidak ditemukan',
        })
        .code(404);
    }

    const book = books[bookIndex];

    return reply
      .response({
        status: 'success',
        data: {
          book,
        },
      })
      .code(200);
  },

  /**
   * @type {Handler}
   */
  EditBookByIdHandler: (request, reply) => {
    const { bookId } = request.params;

    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = request.payload;

    if (!name || name === '') {
      return reply
        .response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Mohon isi nama buku',
        })
        .code(400);
    }

    if (readPage > pageCount) {
      return reply
        .response({
          status: 'fail',
          message:
            'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        })
        .code(400);
    }

    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
      return reply
        .response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Id tidak ditemukan',
        })
        .code(404);
    }

    books[bookIndex] = {
      ...books[bookIndex],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    };

    return reply
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200);
  },

  /**
   * @type {Handler}
   */
  DeleteBookByIdHandler: (request, reply) => {
    const { bookId } = request.params;

    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
      return reply
        .response({
          status: 'fail',
          message: 'Buku gagal dihapus. Id tidak ditemukan',
        })
        .code(404);
    }

    books.splice(bookIndex);

    return reply
      .response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      })
      .code(200);
  },
};
