class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaSecreta: string;
  
    private constructor() {
        this.senhaSecreta = 'mortadela123';
    }
  
    public static getInstancia(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }
  
    public acessarBaseSecreta(senha: string): string {
        if (this.senhaSecreta === senha) {
            return 'Acesso concedido à Base Secreta.';
        } else {
            return 'Acesso negado à Base Secreta.';
        }
    }
  }
  

  const sistema = SistemaSeguranca.getInstancia();
  console.log(sistema.acessarBaseSecreta('senhaerrada')); 
  console.log(sistema.acessarBaseSecreta('mortadela123')); 