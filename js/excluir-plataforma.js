document.querySelectorAll('ul.plataformas a[href="#"]').forEach(function(a) {
    a.remove();
});

document.querySelectorAll('ul.plataformas').forEach(function(ul) {
    if (ul.querySelectorAll('a').length === 0) {
        // Troca o texto do botão para "Em breve" e desabilita
        const btn = ul.closest('.btn-plataforma');
        if (btn) {
            const texto = btn.querySelector('.texto-plataforma');
            if (texto) {
                texto.textContent = 'Em breve';
            }
            btn.disabled = true;
            btn.style.cursor = "not-allowed";
            btn.style.opacity = "0.7";
        }
    }
});

document.querySelectorAll('.cartao').forEach(function(cartao) {
    const ulPlataforma = cartao.querySelector('ul.plataforma');
    const ulLinks = cartao.querySelector('ul.plataformas');
    if (!ulPlataforma || !ulLinks) return;

    // Cria um Set com os nomes das plataformas que têm link
    const plataformasComLink = new Set();
    ulLinks.querySelectorAll('a[href]:not([href="#"]) img').forEach(function(img) {
        plataformasComLink.add(img.alt);
    });

    // Remove as logos que não têm link correspondente
    ulPlataforma.querySelectorAll('li img').forEach(function(img) {
        if (!plataformasComLink.has(img.alt)) {
            img.parentElement.remove();
        }
    });
});