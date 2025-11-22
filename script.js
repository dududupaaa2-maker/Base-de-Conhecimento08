// Garante que o script só vai rodar depois que o HTML inteiro for carregado
document.addEventListener("DOMContentLoaded", () => {

    let cardContainer = document.querySelector (".card-container");
    let searchInput = document.querySelector(".search-container input");
    let searchButton = document.querySelector(".search-container button");
    let dados = [];

    async function iniciarBusca() {
        let resposta = await fetch ("data.json");
        dados = await resposta.json();
        renderizarCards(dados);

        searchButton.addEventListener("click", () => {
            console.log("Botão de busca clicado!"); // Mensagem de diagnóstico
            filtrarDados();
        });
        searchInput.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                filtrarDados();
            }
        });
    }

    function filtrarDados() {
        const termoBusca = searchInput.value.toLowerCase();
        const dadosFiltrados = dados.filter(dado => 
            dado.nome.toLowerCase().includes(termoBusca) || 
            dado.descrição.toLowerCase().includes(termoBusca)
        );
        renderizarCards(dadosFiltrados);
    }

    function renderizarCards (dados) {
        cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
        for (let dado of dados) {
            let article = document.createElement("article");
            article.classList.add("card");
            article.innerHTML = `
                <div class="card-title">
                    <i class="${dado.logo_class}"></i>
                    <h2>${dado.nome}</h2>
                </div>
                <p>${dado.ano}</p>
                <p>${dado.descrição}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            `;
            cardContainer.appendChild(article);
        }
    }

    iniciarBusca(); // Inicia o processo de busca e configuração dos eventos

});