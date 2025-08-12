// Declara uma variável chamada 'nome' e a inicializa como uma string vazia
let nome = "";

// Cria uma função chamada 'salvarNome'
function salvarNome() {
    // Captura o valor do campo de entrada: 
    nome = document.getElementById("nome").value;

    // Implementação de uma validação para garantir que o campo não esteja vazio.
    if (nome == "") {
        // Exibe um alerta pedindo para inserir o nome
        alert("Por favor, insira o seu nome");
    } else {
        // Adiciona o nome à lista de amigos
        listaDeAmigos.push(nome);
        // Limpa o campo de entrada, redefinindo o campo de texto com uma string vazia
        document.getElementById("nome").value = "";
        // Atualiza a exibição da lista de amigos
        atualizarLista();
    }
}

// Declara uma lista vazia chamada 'listaDeAmigos'
let listaDeAmigos = [];

// Cria uma função chamada 'adicionarAmigo'
function adicionarAmigo() {
    // Obtém o valor do input com id 'amigo' e armazena em 'nomeAmigo'
    let nomeAmigo = document.getElementById("amigo").value;

    // Verifica se o campo 'amigo' está vazio
    if (nomeAmigo == "") {
        // Exibe um alerta pedindo para inserir um nome
        alert("Por favor, insira o nome de um amigo");
    } else {
        // Adiciona o nome à lista de amigos
        listaDeAmigos.push(nomeAmigo);
        // Limpa o campo de input
        document.getElementById("amigo").value = "";
        // Atualiza a exibição da lista de amigos
        atualizarLista();
    }
}

// Cria uma função chamada 'atualizarLista'
function atualizarLista() {
    // Obtém o elemento HTML com id 'listaAmigos'
    let listaAtualizada = document.getElementById("listaAmigos");
    // Limpa o conteúdo atual da lista
    listaAtualizada.innerHTML = "";

    // Percorre todos os nomes na lista de amigos
    for (let i = 0; i < listaDeAmigos.length; i++) {
        // Cria um novo elemento <li> para cada amigo
        let itemLista = document.createElement("li");
        // Define o conteúdo do <li> como o nome do amigo
        itemLista.innerHTML = listaDeAmigos[i];
        // Adiciona o <li> à lista exibida na página
        listaAtualizada.appendChild(itemLista);
    }
}

// Cria uma função chamada 'sortearAmigo'
function sortearAmigo() {
    // Verifica se a lista de amigos está vazia
    if (listaDeAmigos.length == 0) {
        // Exibe um alerta pedindo para inserir nomes
        alert("Por favor, insira um nome.");
        return;
    }

    // Gera um índice aleatório dentro do tamanho da lista
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    // Seleciona o nome sorteado com base no índice aleatório
    let nomeSorteado = listaDeAmigos[indiceAleatorio];

    // Verifica se o nome sorteado é o próprio nome do usuário
    if (nomeSorteado == nome) {
        // Exibe um alerta informando que não pode sortear a si mesmo
        alert("Você não pode ser seu próprio amigo secreto! Por favor, tente novamente.");
        return;
    }

    // Exibe o resultado do sorteio na página
    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;
}