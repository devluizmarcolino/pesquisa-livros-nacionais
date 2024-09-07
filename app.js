function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum livro foi encontrado. Você precisa escrever o nome de um livro!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let desc = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        desc = dado.desc.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (nome.includes(campoPesquisa) || desc.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.nome}</a></h2>
                <p class="descricao-meta">${dado.desc}</p>
                <a href="${dado.link}" target="_blank">Compre este livro clicando aqui.</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p> Nada foi encontrado :(</p>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}