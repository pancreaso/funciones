function encontrarMayor(num1, num2, num3, num4) {
    let mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
    if (num4 > mayor) {
        mayor = num4;
    }
    return mayor; 
}
const mayorNumero = encontrarMayor(10, 25, 5, 15);
console.log("El numero mayor es:", mayorNumero); 
function encontrarMenor(num1,num2,num3) {
    let menor = num1;
    if (num2<menor){
        num2 = menor
    }
    if (num3<menor){
        num3=menor
    }
    return menor
}
const menorNumero = encontrarMenor(10,45,81)
console.log("El numero menor es: ", menorNumero)
function par_impar(numero){
    if(numero%2==0){
        return "par"
    }
    else{
        return "impar"
    }
}
const resultado = par_impar(4)
console.log("El numero es: ", resultado)
