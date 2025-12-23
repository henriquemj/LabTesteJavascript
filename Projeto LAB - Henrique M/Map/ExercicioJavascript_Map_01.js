// Exercício 1 LAB Testes Java Script – Utilização de Array e Map

// Exibindo os dados do arquivo Exercicio1_Map_DadosAcesso.txt
const acessosArray = [
    { id: 1, nome: "Adriana", dataAcesso: "2025-12-01" },
    { id: 1, nome: "Adriana", dataAcesso: "2025-12-01" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-02" },
    { id: 1, nome: "Adriana", dataAcesso: "2025-12-02" },
    { id: 1, nome: "Adriana", dataAcesso: "2025-12-02" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-02" },
    { id: 3, nome: "Roberta", dataAcesso: "2025-12-03" },
    { id: 1, nome: "Adriana", dataAcesso: "2025-12-03" },
    { id: 4, nome: "Fernanda", dataAcesso: "2025-12-05" },
    { id: 4, nome: "Fernanda", dataAcesso: "2025-12-05" },
    { id: 1, nome: "Adriana", dataAcesso: "2025-12-05" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-05" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-05" },
    { id: 4, nome: "Fernanda", dataAcesso: "2025-12-05" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-05" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-05" },
    { id: 4, nome: "Fernanda", dataAcesso: "2025-12-05" },
    { id: 4, nome: "Fernanda", dataAcesso: "2025-12-05" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-05" },
    { id: 4, nome: "Fernanda", dataAcesso: "2025-12-06" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-06" },
    { id: 1, nome: "Adriana", dataAcesso: "2025-12-06" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-06" },
    { id: 3, nome: "Roberta", dataAcesso: "2025-12-06" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-06" },
    { id: 1, nome: "Adriana", dataAcesso: "2025-12-06" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-06" },
    { id: 3, nome: "Roberta", dataAcesso: "2025-12-06" },
    { id: 2, nome: "Marcos", dataAcesso: "2025-12-06" },
    { id: 1, nome: "Adriana", dataAcesso: "2025-12-06" },
  ];
  
  // -----------------------------
  // Exibir Array original
  console.log("Array original de acessos (com duplicados):");
  console.log("Tamanho do Array:", acessosArray.length);
  acessosArray.forEach(a =>
    console.log(`${a.nome} (ID: ${a.id}) - Data de Acesso: ${a.dataAcesso}`)
  );
  
  // -----------------------------
  // Criar Map para contar acessos por usuário/dia
  const acessosMap = new Map();
  
  acessosArray.forEach(a => {
    const chave = `${a.id}-${a.nome}-${a.dataAcesso}`;
    if (acessosMap.has(chave)) {
      acessosMap.set(chave, acessosMap.get(chave) + 1);
    } else {
      acessosMap.set(chave, 1);
    }
  });
  
  // Exibir dados do Map
  console.log("\nAcessos registrados por dia");
  console.log("Quantidade total de entradas únicas no Map:", acessosMap.size);
  
  acessosMap.forEach((qtd, chave) => {
    const [id, nome, data] = chave.split("-");
    console.log(`${nome} (ID: ${id}) - Data de Acesso: ${data} - Total de Acessos: ${qtd}`);
  });
  
  // -----------------------------
  // Ranking de acessos por usuário
  const ranking = new Map();
  
  acessosArray.forEach(a => {
    if (ranking.has(a.id)) {
      ranking.set(a.id, { nome: a.nome, total: ranking.get(a.id).total + 1 });
    } else {
      ranking.set(a.id, { nome: a.nome, total: 1 });
    }
  });
  
  // Ordenar ranking
  const rankingOrdenado = [...ranking.entries()]
    .sort((a, b) => b[1].total - a[1].total);
  
  console.log("\nRanking de acesso dos usuários por total de acessos:");
  rankingOrdenado.forEach(([id, dados], index) => {
    console.log(`${index + 1}º Lugar: ${dados.nome} (ID: ${id}) - Total de Acessos: ${dados.total}`);
  });
  