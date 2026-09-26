function alterarStatus(id) {
    let jogo = document.getElementById("game-" + id);
    let capa = jogo.querySelector(".dashboard__item__img");
    let botao = jogo.querySelector(".dashboard__item__button");
    let jaalugado = capa.classList.contains("dashboard__item__img--rented");
    if (jaalugado) {
        capa.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--rented");
        botao.textContent = "Alugiar";
    }
}