const reverseString = require('./task_2.js');

it('reverse #1', () => {
  expect(reverseString('hello')).toBe('olleh');
});

it('reverse #2', () => {
  expect(reverseString('social')).toBe('laicos');
});