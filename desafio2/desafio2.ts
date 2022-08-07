enum Trabalho {
    Porteiro,
    Militar
  }
  

  type Humano = {
    nome: string;
    idade: number;
    profissao: Trabalho;
  };
  
  let pessoa1: Humano = {
    nome: "Luiz",
    idade: 58,
    profissao: Trabalho.Porteiro
  };
  
  let pessoa2: Humano = {
    nome: "salomon",
    idade: 40,
    profissao: Trabalho.Militar
  };
  let pessoa3: Humano = {
    nome: "Silvo",
    idade: 59,
    profissao: Trabalho.Porteiro
  };
  
  let pessoa4: Humano = {
    nome: "Mateus",
    idade: 19,
    profissao: Trabalho.Militar
  };
  