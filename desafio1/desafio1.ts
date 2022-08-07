const funcionario = {
  codigo: 20,
  nome: 'Jota'
};


const funcionario2: {codigo: number, nome: string} = {
  codigo: 20,
  nome: 'jota'
};


interface Funcionario { 
  codigo: number,
  nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 20;
funcionarioObj.nome = 'Jota';

const funcionarioObj2: Funcionario = {
  codigo: 20,
  nome: 'Jota'
};