// Create TextArea

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

// Clock

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const getTime = () => {
        const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(), 
    }; 
}

setInterval(() => {

    const { seconds, minutes, hours } = getTime();

    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`; 
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`; 
    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`; 

}, 1000);


