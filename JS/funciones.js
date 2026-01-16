function saludar(){
    alert("Bienvenido a la Academia de TI");
}
function suma(){
    var valor1 = 24;
    var valor2 = 13;
    var resultado = valor1 + valor2;
    alert("Resultado de la suma de " +valor1+" y "+valor2+" es: " +resultado);
}

function resta(){
    var valor1 = 24;
    var valor2 = 13;
    var resultado = valor1 - valor2;
    alert("Resultado de la resta de " +valor1+" y "+valor2+" es: " +resultado);
}

function mult(){
    var valor1 = 24;
    var valor2 = 13;
    var resultado = valor1 * valor2;
    alert("Resultado de la multiplicacion de " +valor1+" y "+valor2+" es: " +resultado);
}

function div(){
    var valor1 = 24;
    var valor2 = 13;
    var resultado = valor1 / valor2;
    alert("Resultado de la division de " +valor1+" y "+valor2+" es: " +resultado);
}

function ejercicio2(){
    let a, b;
    a = 10; b = 5;
    resultado = a + b;
    alert ("El valor de a es: "+a+" y el valor de b es: "+b );
}

function ejercicio3(){
    let num1=0;
    let num2=0;

    num1 = num1 + 1;
    num2 = num2 + 5;

    alert ("El primer numero ahora es " +num1);
    alert ("El segundo numero ahora es " + num2);
}

function ejercicio4(){
    const a = "Hola";
    let b = " mundo!";

    document.write("Constante a contiene " + a );
    document.write("</br>");
    document.write("Variable b contiene " + b );
    document.write(a + b );
}
function ejercicio5(){
    let a, b;
    a = 2; b = 8;
    resultado = a * b;

    document.write("Variable a contiene " + a );
    document.write(" Variable b contiene " + b );
    document.write(" El producto de a por b es " + resultado );
}

function ejercicio6(){
    let dato, resultado;

    dato = window.prompt("Introduce tu nombre ", "0");
    resultado = "Hola, como estas " + dato;
    
    document.write(resultado);
}
function ejercicio7(){
    let dato, num;

    dato = window.prompt("Introduce número ? ", "0");
    num = parseInt(dato);

    num = num *2;

    document.write("El doble es ", num);
}
function ejercicio8(){
    let dato1, dato2, num1, num2;

    dato1 = window.prompt("introduce primer numero ? ", "0");
    num1 = parseInt(dato1);
    dato2 = window.prompt("introduce el segundo numero ? ", "0");
    num2 = parseInt(dato2);

    let resultado = num1 + num2;

    document.write("La suma es ", resultado);
}
