const Calculator = require('./task_3');

const test1 = new Calculator(1,1);
const test2 = new Calculator(4,28);
const test3 = new Calculator(5,2);

describe('add', () => {
  it('test #1', () => {
    expect(test1.add()).toBe(2);
  });

  it('test #2', () => {
    expect(test2.add()).toBe(32);
  });

  it('test #3', () => {
    expect(test3.add()).toBe(7);
  });
})

describe('substract', () => {
  it('test #1', () => {
    expect(test1.substract()).toBe(0);
  });

  it('test #2', () => {
    expect(test2.substract()).toBe(-24);
  });

  it('test #3', () => {
    expect(test3.substract()).toBe(3);
  });
})

describe('divide', () => {
  it('test #1', () => {
    expect(test1.divide()).toBe(1);
  });

  it('test #2', () => {
    expect(test2.divide()).toBe(0);
  });

  it('test #3', () => {
    expect(test3.divide()).toBe(3);
  });
})

describe('multiply', () => {
  it('test #1', () => {
    expect(test1.multiply()).toBe(1);
  });

  it('test #2', () => {
    expect(test2.multiply()).toBe(112);
  });

  it('test #3', () => {
    expect(test3.multiply()).toBe(10);
  });
})