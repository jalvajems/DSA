// function mergeSort(a){
//     if(a.length<2)return a;
//     let mid =Math.floor(a.length/2)
//     let left=a.slice(0,mid)
//     let right =a.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sorted =[]
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }
  
function mergeSort(a){
    if(a.length<2)return a
    let mid=Math.floor(a.length/2)
    let left=a.slice(0,mid)
    let right=a.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let sort=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    return [...sort,...left,...right]
}
let arr=[1,25,33,5,23,64,2]
console.log(mergeSort(arr))