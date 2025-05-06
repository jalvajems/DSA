//iterative

// function bubble(a){
//     let n=a.length
//     for(let i=0;i<n-1;i++){
//         let isSorted=false
//         for(let j=0;j<n-1-i;j++){
//             if(a[j]>a[j+1]){
//                 isSorted=true
//                 let temp=a[j]
//                 a[j]=a[j+1]
//                 a[j+1]=temp

//             }
//         }
//         if(!isSorted){
//             break;

//         }
//     }
//     return a
// }


//recursive

// function recBubble(a,n){
    //     if(n==1){
        //         return a
        //     }
        //     for(let i=0;i<n-1;i++){
            //         if(a[i]>a[i+1]){
                //             let temp=a[i]
                //             a[i]=a[i+1]
                //             a[i+1]=temp
                //         }
                //     }
                //     return recBubble(a,n-1)
                // }
                // let arr=[2,43,12,4,6]
                // console.log(recBubble(arr,arr.length));
                
                
                //===========================================================
                // function bubble(a){
                //     let n=a.length
                //     for(let i=0;i<n-1;i++){
                //         let isSwapped=false
                //         for(let j=0;j<n-i-1;j++){
                //             if(a[j]>a[j+1]){
                //                 let temp=a[j]
                //                 a[j]=a[j+1]
                //                 a[j+1]=temp
                //                 isSwapped=true
                //             }
                //             if(isSwapped===false){
                //                 break;
                                
                //             }
                //         }
                //     }
                //     return a
                // }
                // console.log(bubble([12,3,4,5,23,65]))

                // function recBubble(a,n){
                //     if(n<2)return a
                //     for(let i=0;i<n;i++){
                //         if(a[i]>a[i+1]){
                            
                //             let temp=a[i]
                //             a[i]=a[i+1]
                //             a[i+1]=temp
                //         }
                //     }
                //     return recBubble(a,n-1)
                // }
                // let arr=[1,32,56,3,12,6]
                // console.log(recBubble(arr,arr.length))


                // function bubbleSort(a){
                //     let n=a.length
                //     for(let i=0;i<n-1;i++){
                //         let isSwap=false
                //         for(let j=0;j<n-1-i;j++){
                //             if(a[j]>a[j+1]){
                //                 let temp=a[j]
                //                 a[j]=a[j+1]
                //                 a[j+1]=temp
                //                 isSwap=true
                //             }
                //         }
                //         if(isSwap===false){
                //             break;
                //         }
                //     }
                //     return a
                // }

                // console.log(bubbleSort([1,3,5,23,5,2]));
                
                function recBubble(a ,n){
                    if(n<2){
                        return a
                    }
                    for(let i=0;i<n;i++){
                        if(a[i]>a[i+1]){
                            let temp=a[i]
                            a[i]=a[i+1]
                            a[i+1]=temp
                        }
                    }
                    return recBubble(a,n-1)
                }

                let a=[1,24,5,5,7,2]
                console.log(recBubble(a,a.length-1))