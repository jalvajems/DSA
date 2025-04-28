// function find(array,t){
//     for(elem of array){
//         if(elem===t){
//             return array.indexOf(elem)
//         }
//     }
//     return -1
// }
// console.log(find([-8,7,2,5,6,9],5));


function linearSearch(arr,target){
    for(let val of arr){
        if(val===target){
            return arr.indexOf(val)
        }
    }
    return -1
}

console.log(linearSearch([1,3,5,6,7],3))
