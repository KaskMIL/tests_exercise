const capitalize = require('./task_4.js');

it('capitalize #1', () => {
  expect(capitalize('hello')).toBe('Hello');
})

it('capitalize #2', () => {
  expect(capitalize('tomas')).toBe('Tomas');
})

it('capitalize #3', () => {
  expect(capitalize('guitarra')).toBe('Guitarra');
})