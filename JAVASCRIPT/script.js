// abrir e fechar Menu Hamburguer 

function exibirMenu() {
    botaoMenu.style.display = "none"
    botaoFechar.style.display = "block"
    menu.style.display = "block"
}



function fecharMenu() {
    botaoMenu.style.display = "block"
    botaoFechar.style.display = "none"
    menu.style.display = "none"
}


// Verificar dimensão da tela

function verificarLargura() {
    var larguraTela = window.innerWidth
    if (larguraTela < 1120) {
        botaoMenu.style.display = "block"
        botaoFechar.style.display = "none"
        menu.style.display = "none"
    } else {
        botaoMenu.style.display = "none"
        botaoFechar.style.display = "none"
        menu.style.display = "flex"
    }
}

window.addEventListener("resize", verificarLargura)



