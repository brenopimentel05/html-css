function botao() {
    const btnMudar = document.getElementById("mudar")
    btnMudar.innerHTML = "DINÂMICO TEXTO";
    btnMudar.addEventListener('click', ()=>{
    btnMudar.classList.toggle("Ativo")
})
}