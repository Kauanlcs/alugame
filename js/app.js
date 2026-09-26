function alterarStatus(id) {
    let jogo = document.getElementById("game-" + id);
    let capa = jogo.querySelector(".dashboard__item__img");
    let botao = jogo.querySelector(".dashboard__item__button");
    let jalugado = capa.classList.contains("dashboard__item__img--rented");
}