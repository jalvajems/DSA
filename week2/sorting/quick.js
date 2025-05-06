
// // function partition(a,lb,ub){
// //     let pivot=a[lb]
// //     let start=lb
// //     let end=ub
// //     while(start<end){
// //         while(a[start]<=pivot&&start<end){
// //             start++
// //         }
// //         while (a[end]>pivot) {
// //             end--

// //         }
// //         if(start<end){
// //             let temp=a[start]
// //             a[start]=a[end]
// //             a[end]=temp
            
// //         }
// //     }
// //     let temp=a[lb]
// //     a[lb]=a[end]
// //     a[end]=temp
// //     return end

// // }

// // function quickSort(a,lb,ub){
// //     if(lb<ub){
// //         let loc=partition(a,lb,ub)
// //         quickSort(a,lb,loc-1)
// //         quickSort(a,loc+1,ub)
// //     }
// // }
// // let arr = [12, 4, 65,33,53, 5, 2, 4];

// // quickSort(arr, 0, arr.length - 1);

// // console.log(arr);

// // function quickSort(a){
// //     let pivot=a[a.length-1]
// //     if(a.length<2){
// //         return a
// //     }
// //     let  right=[]
// //     let left=[]

// //     for(let i=0;i<a.length-1;i++){
// //         if(pivot>a[i]){
// //             left.push(a[i])
// //         }else{
// //             right.push(a[i])
// //         }
// //     }
// //     return [...quickSort(left),pivot,...quickSort(right)]
// // }

// // let arr=[23,5,3,65,7,2]
// // console.log(quickSort(arr))

// function quick(a){
//     let pivot=a[a.length-1]
//     if(a.length<2){
//         return a
//     }
//     let left =[]
//     let right=[]
//     for(let i=0;i<a.length-1;i++){
//         if(a[i]<pivot){
//             left.push(a[i])
//         }else{
//             right.push(a[i])
//         }
//     }
//     return [...quick(left),pivot,...quick(right)]
// }

function quick(a){
    if(a.length<2)return a
    let pivot=a[a.length-1]
    let left=[]
    let right=[]

    for(let i=0;i<a.length-1;i++){
        if(a[i]<pivot){
            left.push(a[i])
        }else{
            right.push(a[i])
        }

    }
    return [...quick(left),pivot,...quick(right)]
}

let arr=[23,53,6,24,7,21]
console.log(quick(arr))

