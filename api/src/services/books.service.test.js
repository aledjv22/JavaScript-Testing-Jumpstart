const BooksService = require('./books.service');

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks', () => {
    test('should return a list of books', async () => {
      // Arrage
      // Act
      const books = await service.getBooks({});
      console.log('books: ', books);

      // Assert
      expect(books.length).toEqual(13);
    });
  });
});
