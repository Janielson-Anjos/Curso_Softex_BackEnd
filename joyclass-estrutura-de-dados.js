////////////////////////////////// exemplo hipertexto ///////////////////////////////////


///////////////////////////////////////// FILA /////////////////////////////////////////

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    front() {
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // Exemplo de uso da fila
  const minhaFila = new Queue();
  minhaFila.enqueue(10);
  minhaFila.enqueue(20);
  minhaFila.enqueue(30);
  
  console.log(minhaFila.dequeue()); // Saída: 10
  console.log(minhaFila.size()); // Saída: 2
  console.log(minhaFila.front()); // Saída: 20
  

  /////////////////////////////////////////////////////////////////////////////////////////////////



  /////////////////////////////////////// lista ///////////////////////////////////////////////////

  