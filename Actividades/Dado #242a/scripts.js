function dado() {    
    let minVal = document.getElementById('minimo').value;
    let maxVal = document.getElementById('maximo').value;
    let out = document.getElementById('salida');
    let number = Math.floor(Math.random() * (maxVal - minVal + 1)) + parseInt(minVal);
    out.textContent = ("Este es tu numero aleatorio:") + ("   ") + (number);
}