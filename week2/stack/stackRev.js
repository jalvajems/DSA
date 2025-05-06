// function reverseStr(str){
//     let stack=[]
//     for(let elem of str){
//         stack.push(elem)
//     }
//     let rev=""
//     while(stack.length!=0){
//         rev+=stack.pop()
//     }
//     return rev

// }
 

function reverseStr(s){
    let stack=[]
    for(let char of s){
        stack.push(char)
    }
    let rev=''
    while(stack.length!=0){
        rev+=stack.pop()
    }
    return rev
}
console.log(reverseStr("jalva"))
