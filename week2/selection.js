// function selectionSort(a,n){
//     for(let i=0;i<n-1;i++){
//         let min=i
//         for(let j=i+1;j<n;j++){
//             if(a[min]>a[j]){
//                 min=j
//             }
//         }
//         if(min!=i){
//             let temp=a[i]
//             a[i]=a[min]
//             a[min]=temp
//         }

//     }
//     return a
// }

function selectionSort(a,n){
    for(let i=0;i<n-1;i++){
        let min =i
        for(let j=i+1;j<n-1;j++){
            if(a[j]<a[min]){
                min=j
            }
        }
        if(min!=i){
            let temp=a[i]
            a[i]=a[min]
            a[min]=temp

        }
    }
    return a
}

let arr=[1,3,5,2,6,12]
console.log(selectionSort(arr,arr.length))