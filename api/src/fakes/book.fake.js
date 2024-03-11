const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBook = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];
  for (let i = 0; i < limit; i += 1) {
    fakeBooks.push(generateOneBook());
  }
  return [...fakeBooks];
};

module.exports = { generateOneBook, generateManyBook };
