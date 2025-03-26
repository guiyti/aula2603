const botoesComprar = document.querySelectorAll('.comprar');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});