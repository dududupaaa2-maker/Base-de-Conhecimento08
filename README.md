📖 Base de Conhecimento Tech
Este projeto é uma enciclopédia interativa de tecnologias, desenvolvida com HTML, CSS e JavaScript puros. A aplicação exibe uma coleção de linguagens de programação, frameworks e ferramentas em um formato de cards dinâmicos, permitindo ao usuário pesquisar e filtrar os resultados em tempo real.

O objetivo foi criar uma interface limpa, moderna e funcional para centralizar informações essenciais sobre diversas tecnologias do mercado, servindo como uma base de consulta rápida.

✨ Dica: Adicione um GIF ou uma imagem do seu projeto aqui para que os visitantes possam ver como ele funciona! !Gif da Aplicação

🚀 Funcionalidades Principais
Interface Moderna: Design com tema escuro, tipografia elegante (Poppins) e layout organizado com Flexbox.
Cards Interativos: Cada tecnologia é exibida em um card com seu logo, nome, ano de criação, descrição e um link para saber mais. Os cards possuem efeitos de hover que melhoram a experiência do usuário.
Carregamento Assíncrono de Dados: As informações são carregadas dinamicamente a partir de um arquivo data.json, o que torna a adição de novas tecnologias simples e escalável.
Funcionalidade de Busca Dinâmica: O usuário pode digitar um termo na barra de pesquisa para filtrar os cards por nome ou descrição, obtendo resultados instantâneos.
Design Responsivo: A interface se adapta bem a diferentes tamanhos de tela.
🛠️ Tecnologias Utilizadas
HTML5: Para a estrutura semântica da página.
CSS3: Para a estilização, incluindo Flexbox, gradientes, sombras e transições suaves.
JavaScript (ES6+): Para a manipulação do DOM, interatividade, lógica de busca e consumo de dados (fetch API).
Devicon: Biblioteca de ícones utilizada para exibir os logos das tecnologias.
Google Fonts: Para a importação da fonte 'Poppins'.
⚙️ Como Funciona
O projeto é dividido em três arquivos principais que trabalham em conjunto:

index.html:

Define a estrutura básica da página, incluindo o cabeçalho com o título e a barra de busca, a área principal onde os cards são inseridos (<main>) e o rodapé.
Importa a folha de estilos style.css, o script script.js e a biblioteca de ícones Devicon.
style.css:

Responsável por todo o apelo visual do projeto.
Define o tema escuro, a tipografia, as cores e o layout baseado em Flexbox.
Contém as animações e transições para os efeitos de hover nos cards, botões e links, proporcionando uma experiência de usuário mais fluida e interativa.
script.js:

Contém toda a lógica da aplicação.
Utiliza o evento DOMContentLoaded para garantir que o script só execute após o carregamento completo do HTML.
A função iniciarBusca() é a principal: ela usa a fetch API para buscar os dados do arquivo data.json de forma assíncrona.
A função renderizarCards() cria dinamicamente os elementos HTML para cada tecnologia e os insere no contêiner principal.
A função filtrarDados() é acionada pelo botão de busca ou pela tecla "Enter" e filtra o array de dados com base no texto inserido pelo usuário, atualizando a tela com os resultados correspondentes.
data.json:

Funciona como um "banco de dados" para o projeto.
Armazena um array de objetos, onde cada objeto representa uma tecnologia com suas propriedades: nome, descrição, ano, link e logo_class.
