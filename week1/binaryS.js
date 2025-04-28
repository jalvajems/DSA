// function binarySearch(array,t){
//     let leftIndex=0
//     let rightIndex=array.length-1
//     while(leftIndex<=rightIndex){
//         let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//         if(array[middleIndex]===t){
//             return middleIndex 
//         }
//         if(middleIndex<t){
//             leftIndex=middleIndex+1
//         }else{
//             rightIndex=middleIndex-1
//         }
//     }
    
//     return -1
// }

// console.log(binarySearch([1,2,3,5,7,8],7));



function binarySearch(arr,target){
    let start=0
    let end=arr.length-1
    while(start<=end){
    let mid=Math.floor((start+end)/2)
    if(arr[mid]===target){
        return mid
    }else if(arr[mid]>target){
        end=mid-1
    }else{
        start=mid+1
    }
}
}
console.log(binarySearch([1,3,4,6,8,9],6));
