const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

function criarInputTexto() {
    
    var novoInput = document.createElement("textarea");
    novoInput.type = "text";

    var container = document.getElementById("inputsContainer");
    container.appendChild(novoInput);

}
