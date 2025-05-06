// let t=-1
// let max=1000
// let arr=Array(max).fill(0)

// function isEmpty(){
//   return t<0
// }

// function push(elem){
//     if(t>max-1){
//         console.log("overflow !!")
//         return false
//     }
//     t++
//     arr[t]=elem
//     return true
// }

// function pop(){
//     if(t<0){
//         console.log("underFlow!!!")
//         return false
//     }
//     let x=arr[t]
//     t--
//     return x
// }

// function peek(){
//     if(t<0){
//         console.log("the stack is empty")
//         return false
//     }
//     return arr[t]
// }

// function print(){
//     if(t<0){
//         console.log("the stack is empty")
//         return
//     }
//     for(let i=0;i<=t;i++){
//         console.log(arr[i])
//     }
// }

let t=-1
let max=1000
let arr=Array(max).fill(0)
function isEmpty(){
    return t<0
}
function push(val){
    t++
    arr[t]=val
    return true

}

function pop(){
    let x=arr[t]
    t--
    return x

}
function peek(){
    
}
push(12)
push(13)
push(14)
push(15)
push(11)

pop()
print()
console.log(peek())

// //time complexity of all push ,pop, peek , isEmpty=O(1)
// //space complexity = O(n) where n is number of elements