const botoesPlataforma = document.querySelectorAll(".btn-plataforma");

botoesPlataforma.forEach(botao => {
    botao.addEventListener("click", () => {
        const elementoPlataformas = botao.querySelector(".plataformas");
        const textoPlataforma = botao.querySelector(".texto-plataforma");

        const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

        if (botaoEstaAberto) {
            elementoPlataformas.classList.remove("ativo");
            if (textoPlataforma) textoPlataforma.classList.remove("ativo");
        } else {
            elementoPlataformas.classList.add("ativo");
            if (textoPlataforma) textoPlataforma.classList.add("ativo");
        }
    });
});