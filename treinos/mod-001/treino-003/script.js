const btnNav = document.getElementById('btnInicio')

console.log(btnNav)
function textAlert(){
  alert("Botão clicado usando addEventListener!");
}
btnNav.addEventListener('click', textAlert);

function mostrarAlerta() {
      alert('Você clicou no botão!');
    }