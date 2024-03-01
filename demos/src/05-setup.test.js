// describe is a way to group tests in jest
describe('group 1', () => {
  // beforeAll is a function that runs before all tests in the describe block
  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });

  // afterAll is a function that runs after all tests in the describe block
  afterAll(() => {
    console.log('afterAll');
    // down db
  });

  // beforeEach is a function that runs before each test in the describe block
  beforeEach(() => {
    console.log('beforeEach');
  });

  // afterEach is a function that runs after each test in the describe block
  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect(1 + 3).toBe(4);
  });

  describe('group 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
      // up db
    });
    test('case 3', () => {
      console.log('case 3');
      expect(-3 + 7).toBe(4);
    });
    test('case 4', () => {
      console.log('case 4');
      expect(1 + 0).toBe(1);
    });
  });
});
