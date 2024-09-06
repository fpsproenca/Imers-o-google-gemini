// Adiciona um evento de 'keydown' ao documento apenas uma vez, quando o documento é carregado
document.addEventListener("DOMContentLoaded", function() {
    let pesquisar = document.getElementById("pesquisar");

    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            pesquisar.click();
        }
    });
});

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    if (campoPesquisa === "") {
        alert("Digite algo na caixa para pesquisar <3");
        return;
    }

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
<div class="item-resultado">
    <h2>
        <a href="${dado.imdb}" target="_blank">${dado.titulo}</a>
    </h2>
    <div class="descricao-meta">
        ${dado.descricao}
        <a href="${dado.wikipedia}" target="_blank">Informações</a>
        <img src="${dado.imagem}" alt="${dado.titulo}">
    </div>
</div>`;
        }
    }
    
    if (resultados === "") {
        alert("NADA ENCONTRADO");
        return;
    }

    // Atribui o HTML completo dos resultados à seção
    section.innerHTML = resultados;
}
