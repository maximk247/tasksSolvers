function Calculator() {
    this.read = function() {
      let a = +prompt('Введите первое значение', 0);
      let b = +prompt('Введите второе значение', 0);
      this.firstNumber = a;
      this.secondNumber = b;
    }

    this.sum() {
      return this.firstNumber + this.secondNumber
    },

    this.mul() {
      return this.firstNumber * this.secondNumber
    }
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );