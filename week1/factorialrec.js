// function rFactorial(n){
//         return 1
//     }
//       return n*rFactorial(n-1)
// }

// console.log(rFactorial(4))
// //space complx=O(n)
// //time "=O()

function factorial(n){
    if(n===0)return 1;
    return n*factorial(n-1);
}
console.log(factorial(4))