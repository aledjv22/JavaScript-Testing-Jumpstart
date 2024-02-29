// In other documentation, assertions may also be referred to as matchers.
test('test obj', () => {
  const data = { name: 'Alejandro' };
  data.lastname = 'Díaz';
  expect(data).toEqual({ name: 'Alejandro', lastname: 'Díaz' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  // In JavaScript, null is considered as a defined value, different from undefined.
  expect(data).toBeDefined();
  // toBeUndefined is the opposite of toBeDefined
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();

  expect(1).toBeTruthy();
  expect(' ').toBeTruthy();
  expect(true).toBeTruthy();
});

test('string', () => {
  // .toMatch() is used to check if a string contains a substring or matches a regular expression.
  expect('Alejandro').toMatch(/jand/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  // .toContain() is used to check if an array or iterable contains a particular item.
  expect(numbers).toContain(3);
});
