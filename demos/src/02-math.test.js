const {
  sum, multiply, divide, myModule,
} = require('./02-math');

test('adds 1 + 3 should equal 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('adds -1 + 3 should equal 2', () => {
  const rta = sum(-1, 3);
  expect(rta).toBe(2);
});

test('multiply 2 * 3 should equal 6', () => {
  const rta = multiply(2, 3);
  expect(rta).toBe(6);
});

test('multiply -2 * 3 should equal -6', () => {
  const rta = multiply(-2, 3);
  expect(rta).toBe(-6);
});

test('divide 6 / 3 should equal 2', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
});

test('divide -6 / 3 should equal -2', () => {
  const rta = divide(-6, 3);
  expect(rta).toBe(-2);
});

test('divide 6 / -3 should equal -2', () => {
  const rta = divide(6, -3);
  expect(rta).toBe(-2);
});

test('divide -6 / -3 should equal 2', () => {
  const rta = divide(-6, -3);
  expect(rta).toBe(2);
});

test('divide any number by 0 should return null', () => {
  let rta = divide(6, 0);
  expect(rta).toBeNull();

  rta = divide(-6, 0);
  expect(rta).toBeNull();
});

test('module 6 % 3 should equal 0', () => {
  const rta = myModule(6, 3);
  expect(rta).toBe(0);
});

test('module 6 % 4 should equal 2', () => {
  const rta = myModule(6, 4);
  expect(rta).toBe(2);
});

test('module -6 % 10 should equal 6', () => {
  const rta = myModule(-6, 10);
  expect(rta).toBe(-6);
});

test('module 6 % -10 should equal 6', () => {
  const rta = myModule(6, -10);
  expect(rta).toBe(6);
});

test('module -6 % -10 should equal -6', () => {
  const rta = myModule(-6, -10);
  expect(rta).toBe(-6);
});

test('module 6 % 0 should return null', () => {
  const rta = myModule(6, 0);
  expect(rta).toBeNull();
});
