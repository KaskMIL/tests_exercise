class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add(){ return this.num1 + this.num2};

  substract() { return this.num1 - this.num2};

  divide() {
    if( this.num2 !== 0) {
      return Math.round(this.num1 / this.num2);
    } else {return 'Error'};
  };

  multiply() {return this.num1 * this.num2};
}


module.exports = Calculator;