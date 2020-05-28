function add(x, y) {
    return x + y
}
console.log(add(7, 4))
function multiply(x, y) {
    let z = 0
    for (let i = 0; i<y; i += 1) {
        z = add(x, z)
     } 
     return z
    }
console.log(multiply(9, 3))
function power(x, n) {
    let total = 1
    for (let i = 0; i< n; i += 1) {
        total = multiply(x, total)
    }
    return total
    }
    console.log(power(8, 2))
    function factorial(x){
        let n = 1
    for (let i = x; i > 1; i -= 1) {
        n= multiply(n, i)
    }
    return n
    }
    console.log(factorial(6))