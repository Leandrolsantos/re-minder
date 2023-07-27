const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

function criarInputTexto() {
    
    var novoInput = document.createElement("input");
    novoInput.type = "text";
    
    var container = document.getElementById("inputsContainer");
    container.appendChild(novoInput);
}
