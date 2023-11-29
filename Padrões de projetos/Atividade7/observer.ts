
class EventDispatcher {
    private listeners: { [event: string]: Function[] } = {};
  
    addEventListener(event: string, callback: Function) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(callback);
    }
  
    dispatchEvent(event: string, data?: any) {
      if (this.listeners[event]) {
        this.listeners[event].forEach((callback) => callback(data));
      }
    }
  }
  
  class TextEditor extends EventDispatcher {
    protected lines: string[] = [];
  
    insertLine(lineNumber: number, text: string) {
      this.lines.splice(lineNumber - 1, 0, text);
    }
  
    removeLine(lineNumber: number) {
      this.lines.splice(lineNumber - 1, 1);
    }
  
    open() {
      this.dispatchEvent("open");
    }
  
    save() {
      this.dispatchEvent("save", this.lines.join("\n"));
    }
  }
  
  class MyTextEditor extends TextEditor {
    startEditing() {
      console.log("Digite suas linhas de texto. Digite 'EOF' para encerrar.");
  
      let lineNumber = 1;
      let userInput: string;
  
      while ((userInput = prompt(`Digite a linha ${lineNumber} ou 'EOF' para encerrar:`)) !== 'EOF') {
        this.insertLine(lineNumber, userInput);
        lineNumber++;
      }
  
      this.save();
    }
  }
  
  
  const textEditor = new MyTextEditor();
  
  textEditor.addEventListener("save", (content) => {
    console.log("Salvando conteúdo no arquivo:");
    console.log(content);
  });
  
  textEditor.open();
  textEditor.startEditing();