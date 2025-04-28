// function sum(arr,index=0){
//     if(index>=arr.length){
//         return 0
//     }
//     return arr[index]+sum(arr,index+1)
// }

// console.log(sum([1,2,3]));
// _____________________________________________________

// function findMax(arr,index=0){
//     if(arr.length-1===index){
//         return arr[index]
//     }
//     return Math.max(arr[index],findMax(arr,index+1))
// }
// console.log(findMax([1,4,2,6,3,33,8]));


// _____________________________________________________

// function isPalindrome(arr){
//     if(arr.length<=1){
//         return true
//     }
//     if(arr[0]!==arr[arr.length-1]){
//         return false
//     }
//     return isPalindrome(arr.slice(1,arr.length))
// }

// console.log(isPalindrome(["m","a","w","d"]));


// _____________________________________________________

// function reverseArr(arr,result=[]){
//     if(arr.length===0){
//         return result
//     }
//     result.unshift(arr[0])
//     return reverseArr(arr.slice(1),result)
// }

// console.log(reverseArr([1,2,3,4]));

// _____________________________________________________

//min from rotated sorted array

// function min(arr,start =0,end=arr.length-1){
// //     if(arr[start]===arr[end]){
// //         return arr[start]
// //     }
// //     let mid=Math.floor((start+end)/2)
// /[/     if(arr[start]<arr[mid]){
// //         return min(arr,mid+1,end)
// //     }else{
// //         return min(arr,start,mid)
// //     }
// // }

// // console.log(min([2,3,4,5,2,4,3,6]));


// _____________________________________________________

function min(arr,start=0,end=arr.length-1){
    if(arr[start]===arr[end])return arr[start]
    let mid=(start+end)/2
    if(arr[start]<arr[mid]){
        return min(arr,mid+1,end)
    }else{
        return min(arr,start,mid)
    }
}
console.log(min([2,3,1,3,7]));


// _____________________________________________________