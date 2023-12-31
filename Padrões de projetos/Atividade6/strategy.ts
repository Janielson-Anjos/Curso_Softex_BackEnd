interface OperationStrategy {
    execute(num1: number, num2: number): number;
  }
  

  class AddOperation implements OperationStrategy {
    execute(num1: number, num2: number): number {
      return num1 + num2;
    }
  }
  
  
  class SubtractOperation implements OperationStrategy {
    execute(num1: number, num2: number): number {
      return num1 - num2;
    }
  }
  
  
  class MultiplyOperation implements OperationStrategy {
    execute(num1: number, num2: number): number {
      return num1 * num2;
    }
  }
  
  
  class Calculator {
    private strategy: OperationStrategy;
  
    setStrategy(strategy: OperationStrategy) {
      this.strategy = strategy;
    }
  
    calculate(num1: number, num2: number): number {
      if (!this.strategy) {
        throw new Error("A estratégia não foi definida.");
      }
      return this.strategy.execute(num1, num2);
    }
  }
  
  
  const calculator = new Calculator();
  
  const num1 = parseInt(prompt("Digite o primeiro número:"));
  const num2 = parseInt(prompt("Digite o segundo número:"));
  const operation = prompt("Digite a operação (+, -, *):");
  
  let strategy: OperationStrategy;
  
  switch (operation) {
    case "+":
      strategy = new AddOperation();
      break;
    case "-":
      strategy = new SubtractOperation();
      break;
    case "*":
      strategy = new MultiplyOperation();
      break;
    default:
      throw new Error("Operação inválida.");
  }
  
  calculator.setStrategy(strategy);
  
  const result = calculator.calculate(num1, num2);
  
  console.log(`O resultado da operação é: ${result}`);