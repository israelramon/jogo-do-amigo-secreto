// Declara uma variável chamada 'nome' e a inicializa como uma string vazia
let nome = "";

// Cria uma função chamada 'salvarNome'
function salvarNome() {
    // Captura o valor do campo de entrada: 
    nome = document.getElementById("nome").value;

    // Implementação de uma validação para garantir que o campo não esteja vazio.
    if (nome == "") {
        // Exibe um alerta pedindo para inserir o nome
        alert("Por favor, insira um nome");
    } else {
        // Adiciona o nome à lista de amigos
        listaDeAmigos.push(nome);
        // Limpa o campo de entrada, redefinindo o campo de texto com uma string vazia
        document.getElementById("nome").value = "";
        // Atualiza a exibição da lista de amigos
        atualizarLista();
    }
}

