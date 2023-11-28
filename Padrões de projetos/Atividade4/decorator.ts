interface Sanduiche {
    custo(): number;
    descricao(): string;
  }
  
 
  class FrangoAssado implements Sanduiche {
    custo(): number {
      return 4.5;
    }
  
    descricao(): string {
      return "Sanduíche de Frango Assado";
    }
  }
  

  abstract class IngredienteAdicional implements Sanduiche {
    protected sanduiche: Sanduiche;
  
    constructor(sanduiche: Sanduiche) {
      this.sanduiche = sanduiche;
    }
  
    custo(): number {
      return this.sanduiche.custo();
    }
  
    descricao(): string {
      return this.sanduiche.descricao();
    }
  }
  

  class Pepperoni extends IngredienteAdicional {
    custo(): number {
      return this.sanduiche.custo() + 0.99;
    }
  
    descricao(): string {
      return `${this.sanduiche.descricao()}, Pepperoni`;
    }
  }
  
 
  class QueijoMussarelaRalado extends IngredienteAdicional {
    custo(): number {
      return this.sanduiche.custo() + 2.0;
    }
  
    descricao(): string {
      return `${this.sanduiche.descricao()}, Queijo Mussarela Ralado`;
    }
  }
  
  
  const sanduicheBase: Sanduiche = new FrangoAssado();
  
 
  const sanduicheDecorado: Sanduiche = new QueijoMussarelaRalado(
    new Pepperoni(sanduicheBase)
  );
  
 
  console.log(
    `${sanduicheDecorado.descricao()} custa $${sanduicheDecorado
      .custo()
      .toFixed(2)}`
  );