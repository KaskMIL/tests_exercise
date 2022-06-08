const { default: TestRunner } = require('jest-runner');
const stringLength = require('./task_1.js');

it('length ex1', () => {
  expect(stringLength('hello')).toBe(5);
})

it('length ex2', () => {
  expect(stringLength('guitar')).toBe(6);
})

it('length ex3', () => {
  expect(stringLength('')).toBe(-1);
})

it('length ex4', () => {
  expect(stringLength('supernatural')).toBe(-1);
})