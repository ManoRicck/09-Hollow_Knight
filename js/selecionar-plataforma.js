// Seleciona todos os elementos com a classe "btn-plataforma" e armazena em uma variável
const botoesPlataforma = document.querySelectorAll(".btn-plataforma");

// Itera sobre cada botão e adiciona um evento de click
botoesPlataforma.forEach(botao => {
    botao.addEventListener("click", () => {
        // Seleciona o elemento com a classe "plataformas" dentro do botão
        const elementoPlataformas = botao.querySelector(".plataformas");

        // Verifica se o elemento "plataformas" já tem a classe "ativo"
        const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

        // Se o botão estiver aberto, remove a classe "ativo"
        if (botaoEstaAberto) {
            elementoPlataformas.classList.remove("ativo");
        } 
        // Se o botão estiver fechado, adiciona a classe "ativo"
        else {
            elementoPlataformas.classList.add("ativo");
        }
    });
});