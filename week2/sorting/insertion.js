// function insertion(a,n){
//     for(let i =1;i<n;i++){
//         let temp=a[i]
//         let j=i-1
//         while(j>=0&&a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=temp
//     }
//     return a
// }

// let arr=[23,2,4,34,12,5]
// console.log(insertion(arr,arr.length))

// function insertion(a,n){
//     for(let i=1;i<n;i++){
//         // let temp=a[i]
//         let j=i-1
//         while(j>=0&&a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=temp
//     }
//     return a
// }

// let arr=[1,35,2,53,23,5]
// console.log(insertion(arr,arr.length))
// function insertion(a){
//     for(let i=0;i<a.length ;i++){

//         let temp=a[i]
//         let j=i-1
//         while(j>=0&&a[j]>temp){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=temp
//     }
//     return a
// }

function insertion(a){
    let  n=a.length
    for(let i=1;i<n;i++){
        let temp=a[i]
        let j=i-1
        while(j>=0&&a[j]>temp){
            a[j+1]=a[j]
            j--
        }
        a[j+1]=temp
    }
    return a
}
console.log(insertion([1,3,5,2]))

