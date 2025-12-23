// Exercício 2 LAB Testes Java Script – Utilização de Array e Set

// Simulação dos dados do arquivo Exercicio2_Set_DadosTentativaLogin.txt
const tentativas = [
    { id: 1, nome: "Ana Clara Souza", email: "anaclara@example.com", acao: "login" },
    { id: 2, nome: "Bruno Silva", email: "bruno@example.com", acao: "login" },
    { id: 1, nome: "Ana Clara Souza", email: "anaclara@example.com", acao: "login" },
    { id: 3, nome: "Carla Andrade", email: "carla@example.com", acao: "logout" },
    { id: 2, nome: "Bruno Silva", email: "bruno@example.com", acao: "logout" },
    { id: 2, nome: "Bruno Silva", email: "bruno@example.com", acao: "logout" },
    { id: 4, nome: "Diego Rezende", email: "diegorezende@example.com", acao: "login" },
    { id: 3, nome: "Carla Andrade", email: "carla@example.com", acao: "login" },
    { id: 5, nome: "Ana Beatriz Nogueira", email: "anabeatriz@example.com", acao: "login" },
    { id: 4, nome: "Diego Rezende", email: "diegorezende@example.com", acao: "login" },
    { id: 5, nome: "Ana Beatriz Nogueira", email: "anabeatriz@example.com", acao: "login" },
    { id: 6, nome: "Bianca Ferreira", email: "biancaferreira@example.com", acao: "login" },
    { id: 7, nome: "Paulo Lima", email: "paulolima@example.com", acao: "login" },
    { id: 1, nome: "Ana Clara Souza", email: "anaclara@example.com", acao: "login" },
    { id: 6, nome: "Bianca Ferreira", email: "biancaferreira@example.com", acao: "logout" },
  ];
  
  // -----------------------------
  // Criar Set para usuários logados
  const usuariosLogados = new Set();
  
  // Função auxiliar para criar chave única
  function chaveUsuario(usuario) {
    return `${usuario.id}-${usuario.nome}-${usuario.email}`;
  }
  
  // Processar tentativas
  tentativas.forEach(u => {
    const chave = chaveUsuario(u);
  
    if (u.acao === "login") {
      if (usuariosLogados.has(chave)) {
        console.log(`LOGIN IGNORADO: Usuário ID ${u.id} já está logado.`);
      } else {
        usuariosLogados.add(chave);
        console.log(`LOGIN: Usuário logado -> ID: ${u.id}, Nome: ${u.nome}, Email: ${u.email}`);
      }
    } else if (u.acao === "logout") {
      if (usuariosLogados.has(chave)) {
        usuariosLogados.delete(chave);
        console.log(`LOGOUT: Usuário deslogado -> ID: ${u.id}, Nome: ${u.nome}`);
      } else {
        console.log(`LOGOUT IGNORADO: Usuário ID ${u.id} não está logado.`);
      }
    }
  });
  
  // -----------------------------
  // Exibir usuários logados ordenados por nome
  console.log("\n=== Usuários logados ordenados por nome ===");
  
  const listaOrdenada = [...usuariosLogados]
    .map(chave => {
      const [id, nome, email] = chave.split("-");
      return { id, nome, email };
    })
    .sort((a, b) => a.nome.localeCompare(b.nome));
  
  listaOrdenada.forEach(u => {
    console.log(`- ID: ${u.id}, Nome: ${u.nome}, Email: ${u.email}`);
  });
  
  // -----------------------------
  // Exibir total de usuários logados
  console.log(`\nTotal de usuários logados no momento: ${usuariosLogados.size}`);
  