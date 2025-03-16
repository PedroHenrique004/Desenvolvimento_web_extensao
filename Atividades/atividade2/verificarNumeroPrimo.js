
function verificarNumeroPrimo(A) {
    if (A < 2) return false;
    for (let i = 2; i <= Math.sqrt(A); i++) {
        if (A % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(verificarNumeroPrimo(7));  
console.log(verificarNumeroPrimo(10)); 


