const campoNum1 = document.getElementById('num1');
const campoNum2 = document.getElementById('num2');
const botonSumar = document.getElementById('btn-sumar');
const elementoResultado = document.getElementById('resultado');

// 2. Definir la función que realiza la suma y actualiza la página
function realizarSuma() {

    // a. Leer los valores de los campos de entrada usando .value
    let valor1 = campoNum1.value;
    let valor2 = campoNum2.value;

    // b. ¡CRUCIAL EN JAVASCRIPT! Convertir los valores a números.
    // Los valores de los <input> siempre se leen como TEXTO (string).
    // Usamos parseFloat() para convertirlos a números decimales (o enteros).  
}