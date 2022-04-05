// Codigo del cuadrado 
console.group("Cuadrado");     // con este console, nos agrupa los mensajes q aparecen en la consola

//const ladoCuadrado = 5;         // declaramos una funcion de L
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");  // para que nos imprima en la consola

function perimetroCuadrado(lado) {
    return lado * 4;
}

//const perimetroCuadrado = ladoCuadrado * 4; 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
//const areaCuadrado = ladoCuadrado * ladoCuadrado; 
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4; 

//console.log(
//    "Los lados del triangulo miden: "
//   + ladoTriangulo1 
//   + "cm, " 
//   + ladoTriangulo2 
//    + "cm, " 
//   + baseTriangulo 
//   + "cm"
//);

//const alturaTriangulo = 5.5; 
//console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo; 
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
    
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");
console.groupEnd();

// Codigo del Circulo
console.group("Circulo");

// Radio

//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}
//diametroCirculo = radioCirculo * 2; 
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); // llamamos a la funcion diametro para calcular el diametroCirculo con el radio que nos pasan por parametro 
    return diametro * PI;
}
//const perimetroCirculo = diametroCirculo *  PI; 
//console.log("La circunferencia del circulo es: " + perimetroCirculo + "cm");

// Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();

// aqui interctuamos con el HTML

function calcularPeimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}