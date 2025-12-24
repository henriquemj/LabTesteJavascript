// Exercício 3 LAB Testes Java Script – Utilização de Herança e Métodos Estáticos

const nomes = ['Jonas Silva', 'Maria Oliveira', 'Carlos Santos', 'Ana Costa',
  'Pedro Almeida', 'Mariana Ribeiro', 'Lucas Ferreira', 'Beatriz Gomes',
  'Rafael Dias', 'Juliana Martins', 'Felipe Souza', 'Camila Dantas'];

// Fiz dessa forma pra garantir que o Array sempre vai vir com o nome correto da cidade e do estado
const localizacoes = [
  { cidade: 'São Paulo', estado: 'SP' }, 
  { cidade: 'Rio de Janeiro', estado: 'RJ' },
  { cidade: 'Belo Horizonte', estado: 'MG' }, 
  { cidade: 'Curitiba', estado: 'PR' },
  { cidade: 'Porto Alegre', estado: 'RS' }, 
  { cidade: 'Salvador', estado: 'BA' },
  { cidade: 'Fortaleza', estado: 'CE' }, 
  { cidade: 'Recife', estado: 'PE' },
  { cidade: 'Brasília', estado: 'DF' }, 
  { cidade: 'Goiânia', estado: 'GO' },
  { cidade: 'Campinas', estado: 'SP' }, 
  { cidade: 'Vitória', estado: 'ES' },
  { cidade: 'Florianópolis', estado: 'SC' }, 
  { cidade: 'Natal', estado: 'RN' },
  { cidade: 'João Pessoa', estado: 'PB' }, 
  { cidade: 'Campo Grande', estado: 'MS' },
  { cidade: 'Belém', estado: 'PA' }, 
  { cidade: 'São Luís', estado: 'MA' },
  { cidade: 'Maceió', estado: 'AL' }, 
  { cidade: 'Aracaju', estado: 'SE' },
  { cidade: 'Teresina', estado: 'PI' }, 
  { cidade: 'Palmas', estado: 'TO' },
  { cidade: 'Porto Velho', estado: 'RO' }, 
  { cidade: 'Rio Branco', estado: 'AC' },
  { cidade: 'Macapá', estado: 'AP' }, 
  { cidade: 'Boa Vista', estado: 'RR' },
  { cidade: 'Manaus', estado: 'AM' }
];

// Utilitários
const randomFromArray = arr => arr[Math.floor(Math.random() * arr.length)];
const randomNumber = len => Array.from({length: len}, () => Math.floor(Math.random() * 10)).join('');

// Geradores simplificados
const GeradorCPF = { gerar: () => randomNumber(11) };
const GeradorCNPJ = { gerar: () => randomNumber(14) };

// Classe base
function Pessoa(tipo) {
  const local = randomFromArray(localizacoes);
  this.id = randomNumber(5);
  this.cidade = local.cidade;
  this.estado = local.estado;

  if (tipo === 'fisica') {
    this.nome = randomFromArray(nomes);
    this.email = this.nome.toLowerCase().replace(/ /g, '.') + '@gmail.com';
    this.cpf = GeradorCPF.gerar();
  } else {
    this.cnpj = GeradorCNPJ.gerar();
    this.nome = 'Empresa Test Money ' + this.cnpj;
    this.email = 'empresatestmoney@empresa.com';
  }
}

// Impressão dos dados no console
function imprimir(pessoa) {
  console.log(`Nome: ${pessoa.nome} - contato: (${pessoa.email}) - ${pessoa.cidade}/${pessoa.estado}`);
  if (pessoa.cpf) console.log(`CPF: ${pessoa.cpf}`);
  if (pessoa.cnpj) console.log(`CNPJ: ${pessoa.cnpj}`);
  console.log('------------------------');
}

// Função de Gerar lista
function gerarLista(qtdFisicas, qtdJuridicas) {
  for (let i = 0; i < qtdFisicas; i++) imprimir(new Pessoa('fisica'));
  for (let j = 0; j < qtdJuridicas; j++) imprimir(new Pessoa('juridica'));
}

// Gera uma lista com 3 dados de pessoas físicas e 3 de pessoa juridica
gerarLista(3, 3);
