const menuButton = document.querySelector("nav i")
const divLinks = document.querySelector("div.nav-links")
const pagina = document.querySelector("main.cont-js")
const nav = document.querySelector("nav.nav")
function isViewTablet() {
    return window.innerWidth >= 720
}
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("botao-js")
    divLinks.classList.toggle("nav-menu")
    nav.classList.toggle("nav-js")
    let verificarClasse = divLinks.classList.contains("nav-menu")
    if (verificarClasse === true) {
        pagina.addEventListener("click", () => {
            menuButton.classList.remove("botao-js")
            divLinks.classList.remove("nav-menu")
            nav.classList.remove("nav-js")
        })
    }
})
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('resize', () => {
        let tamanhoDaTela = isViewTablet();
        if (tamanhoDaTela === true) {
            menuButton.classList.remove("botao-js")
            divLinks.classList.remove("nav-menu")
            nav.classList.remove("nav-js")
        }
    })
})