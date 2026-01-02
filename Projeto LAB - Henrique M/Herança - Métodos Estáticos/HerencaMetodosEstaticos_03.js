// Utilitários
const nomes = ['Jonas Silva', 'Maria Oliveira', 'Carlos Santos', 'Ana Costa',
  'Pedro Almeida', 'Mariana Ribeiro', 'Lucas Ferreira', 'Beatriz Gomes',
  'Rafael Dias', 'Juliana Martins', 'Felipe Souza', 'Camila Dantas'];

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

const randomFromArray = arr => arr[Math.floor(Math.random() * arr.length)];
const randomNumber = len => Array.from({ length: len }, () => Math.floor(Math.random() * 10)).join('');

// Gerador CPF válido
function GeradorCPF() {}
GeradorCPF.gerar = function () {
  const base = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
  const dig1 = calcularDV(base, [10,9,8,7,6,5,4,3,2]);
  const dig2 = calcularDV([...base, dig1], [11,10,9,8,7,6,5,4,3,2]);
  return [...base, dig1, dig2].join('');
};

function calcularDV(digitos, pesos) {
  const soma = digitos.reduce((acc, d, i) => acc + d * pesos[i], 0);
  const resto = soma % 11;
  return resto < 2 ? 0 : 11 - resto;
}

// Gerador CNPJ válido
function GeradorCNPJ() {}
GeradorCNPJ.gerar = function () {
  const base = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10));
  const dig1 = calcularDV(base, [5,4,3,2,9,8,7,6,5,4,3,2]);
  const dig2 = calcularDV([...base, dig1], [6,5,4,3,2,9,8,7,6,5,4,3,2]);
  return [...base, dig1, dig2].join('');
};

// Função construtora base
function Pessoa(nome, email, cidade, estado) {
  // this.id = id;
  this.nome = nome;
  this.email = email;
  this.cidade = cidade;
  this.estado = estado;
}

Pessoa.prototype.getResumo = function () {
  // return `Id: ${this.id}\nNome: ${this.nome}\nContato: (${this.email}) - ${this.cidade}/${this.estado}`;
  return `Nome: ${this.nome} \nContato: (${this.email}) - ${this.cidade}/${this.estado}`;
};

// Pessoa Física
function PessoaFisica() {
  const local = randomFromArray(localizacoes);
  const nome = randomFromArray(nomes);
  const email = nome.toLowerCase().replace(/ /g, '.') + '@gmail.com';
  const id = randomNumber(5);
  Pessoa.call(this, nome, email, local.cidade, local.estado);
  this.cpf = GeradorCPF.gerar();
}

PessoaFisica.prototype = Object.create(Pessoa.prototype);
PessoaFisica.prototype.constructor = PessoaFisica;

PessoaFisica.prototype.imprimir = function () {
  console.log(this.getResumo());
  console.log(`CPF: ${this.cpf}`);
  console.log('------------------------');
};

// Pessoa Jurídica
function PessoaJuridica() {
  const local = randomFromArray(localizacoes);
  const cnpj = GeradorCNPJ.gerar();
  const nome = 'Empresa Test Money ' + cnpj;
  const email = 'empresatestmoney@empresa.com';
  const id = randomNumber(5);
  Pessoa.call(this, nome, email, local.cidade, local.estado);
  this.cnpj = cnpj;
}

PessoaJuridica.prototype = Object.create(Pessoa.prototype);
PessoaJuridica.prototype.constructor = PessoaJuridica;

PessoaJuridica.prototype.imprimir = function () {
  console.log(this.getResumo());
  console.log(`CNPJ: ${this.cnpj}`);
  console.log('------------------------');
};

// Gerar lista
function gerarLista(qtdFisicas, qtdJuridicas) {
  for (let i = 0; i < qtdFisicas; i++) new PessoaFisica().imprimir();
  for (let j = 0; j < qtdJuridicas; j++) new PessoaJuridica().imprimir();
}

// Teste
gerarLista(3, 3);
