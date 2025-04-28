// function rFibonacci(n){
//     if(n<2){
//         return n
//     }
//     return rFibonacci(n-1)+rFibonacci(n-2)
// }

// console.log(rFibonacci(6));


// function rFibonacci(n){
//     if(n<2){
//         return n
//     }
//     return rFibonacci(n-1)+rFibonacci(n-2)
// }
// console.log(rFibonacci(3));


function f(n){
    if(n<2)return n
    return f(n-1)+f(n-2)
}