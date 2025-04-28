// function binarySearchRec(arr , target ){
// return search(arr, target,0,arr.length-1)
// }
// function search(array,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middleIndex=Math.floor((leftIndex+rightIndex)/2)
//     if(array[middleIndex]===target){
//         return middleIndex
//     }
//     if(target>array[middleIndex]){
//         return search(array,target,middleIndex+1,rightIndex)
//     }else{
//         return search(array,target,leftIndex,middleIndex-1)
//     }
// }


// console.log(binarySearchRec([1,2,3,5,11,5],7));






function binarySearchRec(arr,target,start=0,end=arr.length-1){
    if(start>end){
        return -1
    }
    let mid=Math.floor((start+end)/2)
    if(target===arr[mid])return mid
    else if(arr[mid]<target){
        return binarySearchRec(arr ,target,mid+1,end)
    }else{
        return binarySearchRec(arr,target,start,mid-1)
    }
}

console.log(binarySearchRec([1,2,43,6,4],41))